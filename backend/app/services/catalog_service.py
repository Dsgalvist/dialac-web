import re
from dataclasses import dataclass
from pathlib import Path

from fastapi import HTTPException, status

from app.core.config import get_settings


@dataclass(frozen=True)
class CatalogProduct:
    id: str
    code: str | None
    name: str
    price: int


def _resolve_catalog_directory() -> Path:
    configured_path = Path(get_settings().product_catalog_dir)

    if configured_path.is_absolute():
        return configured_path

    backend_root = Path(__file__).resolve().parents[2]
    return (backend_root / configured_path).resolve()


def _read_catalog_file(file_name: str) -> str:
    path = _resolve_catalog_directory() / file_name

    try:
        return path.read_text(encoding="utf-8-sig")
    except OSError as error:
        raise RuntimeError(
            f"No se pudo leer el catálogo oficial: {path}",
        ) from error


def _parse_alpina_products(source: str) -> list[CatalogProduct]:
    seed_pattern = re.compile(
        r'\[\s*"(?P<code>[^"]+)"\s*,\s*'
        r'"(?P<name>[^"]+)"\s*,\s*'
        r'"[^"]+"\s*,\s*'
        r'(?P<price>\d+)\s*,',
        re.DOTALL,
    )

    return [
        CatalogProduct(
            id=f"alpina-{match.group('code')}",
            code=match.group("code"),
            name=match.group("name"),
            price=int(match.group("price")),
        )
        for match in seed_pattern.finditer(source)
    ]


def _parse_object_products(source: str) -> list[CatalogProduct]:
    product_pattern = re.compile(
        r"\{(?P<body>.*?)\n\s*\},",
        re.DOTALL,
    )
    field_patterns = {
        "id": re.compile(r'\bid:\s*"([^"]+)"'),
        "code": re.compile(r'\bcode:\s*"([^"]+)"'),
        "name": re.compile(r'\bname:\s*"([^"]+)"'),
        "price": re.compile(r"\bprice:\s*(\d+)"),
    }
    products: list[CatalogProduct] = []

    for object_match in product_pattern.finditer(source):
        body = object_match.group("body")
        values = {
            key: pattern.search(body)
            for key, pattern in field_patterns.items()
        }

        if not all(values.values()):
            continue

        products.append(
            CatalogProduct(
                id=values["id"].group(1),
                code=values["code"].group(1),
                name=values["name"].group(1),
                price=int(values["price"].group(1)),
            ),
        )

    return products


def load_product_catalog() -> dict[str, CatalogProduct]:
    products = [
        *_parse_alpina_products(_read_catalog_file("alpina.ts")),
        *_parse_object_products(_read_catalog_file("colanta.ts")),
        *_parse_object_products(_read_catalog_file("donaLeche.ts")),
    ]

    if not products:
        raise RuntimeError("El catálogo oficial no contiene productos.")

    catalog = {product.id: product for product in products}

    if len(catalog) != len(products):
        raise RuntimeError("El catálogo oficial contiene IDs duplicados.")

    return catalog


def get_catalog_product(
    catalog: dict[str, CatalogProduct],
    product_id: str,
) -> CatalogProduct:
    product = catalog.get(product_id)

    if product is None:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=f"El producto {product_id} no existe en el catálogo actual.",
        )

    return product

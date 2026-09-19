from datetime import datetime
from uuid import uuid4
from zoneinfo import ZoneInfo

from app.schemas.request import (
    CreateRequestInput,
    ValidatedRequest,
    ValidatedRequestItem,
)
from app.services.catalog_service import (
    get_catalog_product,
    load_product_catalog,
)


def create_request_number() -> str:
    current_date = datetime.now(ZoneInfo("America/Bogota")).strftime("%Y%m%d")
    unique_suffix = uuid4().hex[:8].upper()
    return f"DIA-{current_date}-{unique_suffix}"


def validate_and_calculate_request(
    payload: CreateRequestInput,
) -> ValidatedRequest:
    catalog = load_product_catalog()
    validated_items: list[ValidatedRequestItem] = []

    for submitted_item in payload.items:
        official_product = get_catalog_product(catalog, submitted_item.id)
        subtotal = official_product.price * submitted_item.quantity

        validated_items.append(
            ValidatedRequestItem(
                id=official_product.id,
                code=official_product.code,
                name=official_product.name,
                unit_price=official_product.price,
                quantity=submitted_item.quantity,
                subtotal=subtotal,
            ),
        )

    return ValidatedRequest(
        request_number=create_request_number(),
        customer=payload.customer,
        items=validated_items,
        total_items=sum(item.quantity for item in validated_items),
        total_price=sum(item.subtotal for item in validated_items),
    )

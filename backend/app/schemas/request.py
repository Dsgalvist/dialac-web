import re
from datetime import date, timedelta
from typing import Literal
from zoneinfo import ZoneInfo

from pydantic import BaseModel, EmailStr, Field, field_validator, model_validator


ALLOWED_CITIES = {"Bogotá", "Chía", "Cajicá"}
BOGOTA_TIMEZONE = ZoneInfo("America/Bogota")


def get_minimum_request_date(today: date | None = None) -> date:
    current_date = today or __import__("datetime").datetime.now(
        BOGOTA_TIMEZONE,
    ).date()
    business_days = 0

    while business_days < 3:
        current_date += timedelta(days=1)

        if current_date.weekday() != 6:
            business_days += 1

    return current_date


class CustomerData(BaseModel):
    full_name: str = Field(min_length=3, max_length=100)
    company: str | None = Field(default=None, max_length=100)
    phone: str = Field(min_length=7, max_length=25)
    email: EmailStr
    address: str | None = Field(default=None, max_length=180)
    city: Literal["Bogotá", "Chía", "Cajicá"]
    required_date: date
    delivery_method: Literal["domicilio", "recogida"]
    notes: str | None = Field(default=None, max_length=1000)

    @field_validator("full_name")
    @classmethod
    def validate_full_name(cls, value: str) -> str:
        normalized = " ".join(value.strip().split())

        if not re.fullmatch(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]+", normalized):
            raise ValueError("El nombre contiene caracteres no permitidos.")

        return normalized

    @field_validator("company", "address", "notes", mode="before")
    @classmethod
    def normalize_optional_text(cls, value: object) -> object:
        if value is None or not isinstance(value, str):
            return value

        normalized = " ".join(value.strip().split())
        return normalized or None

    @field_validator("phone")
    @classmethod
    def validate_phone(cls, value: str) -> str:
        normalized = value.strip()

        if not re.fullmatch(r"[0-9+() -]+", normalized):
            raise ValueError("El teléfono contiene caracteres no permitidos.")

        digits = re.sub(r"\D", "", normalized)

        if not 7 <= len(digits) <= 15:
            raise ValueError("El teléfono debe contener entre 7 y 15 números.")

        return normalized

    @field_validator("required_date")
    @classmethod
    def validate_required_date(cls, value: date) -> date:
        if value.weekday() == 6:
            raise ValueError("Los domingos no están disponibles.")

        minimum_date = get_minimum_request_date()

        if value < minimum_date:
            raise ValueError(
                f"La fecha requerida debe ser igual o posterior a {minimum_date.isoformat()}.",
            )

        return value

    @model_validator(mode="after")
    def validate_delivery_address(self):
        if self.delivery_method == "domicilio" and not self.address:
            raise ValueError("La dirección es obligatoria para entrega a domicilio.")

        return self


class RequestItemInput(BaseModel):
    id: str = Field(min_length=1, max_length=100)
    code: str | None = Field(default=None, max_length=50)
    name: str = Field(min_length=1, max_length=180)
    price: int = Field(ge=0)
    quantity: int = Field(ge=1, le=99)
    subtotal: int = Field(ge=0)


class CreateRequestInput(BaseModel):
    customer: CustomerData
    items: list[RequestItemInput] = Field(min_length=1, max_length=100)
    total_items: int = Field(ge=1)
    total_price: int = Field(ge=0)

    @model_validator(mode="after")
    def validate_unique_items(self):
        product_ids = [item.id for item in self.items]

        if len(product_ids) != len(set(product_ids)):
            raise ValueError("La solicitud contiene productos duplicados.")

        return self


class ValidatedRequestItem(BaseModel):
    id: str
    code: str | None
    name: str
    unit_price: int
    quantity: int
    subtotal: int


class ValidatedRequest(BaseModel):
    request_number: str
    customer: CustomerData
    items: list[ValidatedRequestItem]
    total_items: int
    total_price: int

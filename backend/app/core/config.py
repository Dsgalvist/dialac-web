from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "DIALAC API"
    frontend_url: str = "http://localhost:5173"
    product_catalog_dir: str = "../frontend/src/data/products"

    email_enabled: bool = False
    resend_api_key: str | None = None
    dialac_request_email: str | None = None
    email_from: str = "DIALAC <onboarding@resend.dev>"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()

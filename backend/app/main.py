from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import get_settings
from app.routers.requests import router as requests_router


settings = get_settings()

allowed_origins = [
    "http://localhost:5173",
]

frontend_url = settings.frontend_url.strip().rstrip("/")

if frontend_url and frontend_url not in allowed_origins:
    allowed_origins.append(frontend_url)


app = FastAPI(
    title=settings.app_name,
    description="API para generar y enviar solicitudes de productos en PDF.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=[
        "Content-Disposition",
        "X-DIALAC-Request-Number",
        "X-DIALAC-Email-Status",
    ],
)

app.include_router(requests_router)


@app.get("/")
def root():
    return {
        "message": "DIALAC API funcionando correctamente"
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "service": "dialac-api",
    }
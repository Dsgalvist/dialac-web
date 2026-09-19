from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.requests import router as requests_router


app = FastAPI(
    title="DIALAC API",
    description="API para generar y enviar solicitudes de productos en PDF.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
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
        "service": "dialac-api"
    }
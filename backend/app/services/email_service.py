import base64
from html import escape

import resend

from app.core.config import get_settings
from app.schemas.request import ValidatedRequest


def send_request_email(
    request: ValidatedRequest,
    pdf_bytes: bytes,
    file_name: str,
) -> bool:
    settings = get_settings()

    if not settings.email_enabled:
        return False

    if not settings.resend_api_key or not settings.dialac_request_email:
        raise RuntimeError(
            "El envío de correo está habilitado, pero faltan RESEND_API_KEY o DIALAC_REQUEST_EMAIL.",
        )

    resend.api_key = settings.resend_api_key
    customer = request.customer

    safe_name = escape(customer.full_name)
    safe_phone = escape(customer.phone)
    safe_email = escape(str(customer.email))
    safe_city = escape(customer.city)
    safe_address = escape(customer.address or "No aplica")

    resend.Emails.send(
        {
            "from": settings.email_from,
            "to": [settings.dialac_request_email],
            "reply_to": str(customer.email),
            "subject": f"Nueva solicitud DIALAC {request.request_number}",
            "html": (
                f"<h2>Nueva solicitud {request.request_number}</h2>"
                f"<p><strong>Solicitante:</strong> {safe_name}</p>"
                f"<p><strong>Celular:</strong> {safe_phone}</p>"
                f"<p><strong>Correo:</strong> {safe_email}</p>"
                f"<p><strong>Ciudad:</strong> {safe_city}</p>"
                f"<p><strong>Dirección:</strong> {safe_address}</p>"
                f"<p><strong>Fecha requerida:</strong> {customer.required_date.isoformat()}</p>"
                f"<p><strong>Total estimado:</strong> ${request.total_price:,.0f}</p>"
                "<p>El PDF completo se encuentra adjunto.</p>"
            ),
            "attachments": [
                {
                    "filename": file_name,
                    "content": base64.b64encode(pdf_bytes).decode("ascii"),
                },
            ],
        },
    )

    return True
import base64
import logging
from dataclasses import dataclass
from html import escape

import resend

from app.core.config import get_settings
from app.schemas.request import ValidatedRequest


logger = logging.getLogger(__name__)


@dataclass(frozen=True)
class EmailDeliveryResult:
    dialac_sent: bool
    customer_sent: bool


def send_request_email(
    request: ValidatedRequest,
    pdf_bytes: bytes,
    file_name: str,
) -> EmailDeliveryResult:
    settings = get_settings()

    if not settings.email_enabled:
        return EmailDeliveryResult(
            dialac_sent=False,
            customer_sent=False,
        )

    if not settings.resend_api_key or not settings.dialac_request_email:
        raise RuntimeError(
            "El envío de correo está habilitado, pero faltan RESEND_API_KEY o DIALAC_REQUEST_EMAIL.",
        )

    resend.api_key = settings.resend_api_key
    customer = request.customer

    safe_name = escape(customer.full_name)
    safe_phone = escape(customer.phone)
    safe_email = escape(str(customer.email))
    safe_city = escape(customer.city or "No aplica")
    safe_address = escape(customer.address or "No aplica")
    encoded_pdf = base64.b64encode(pdf_bytes).decode("ascii")

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
                f"<p><strong>Fecha deseable de entrega:</strong> {customer.required_date.isoformat()}</p>"
                f"<p><strong>Total estimado:</strong> ${request.total_price:,.0f}</p>"
                "<p>El PDF completo se encuentra adjunto.</p>"
            ),
            "attachments": [
                {
                    "filename": file_name,
                    "content": encoded_pdf,
                },
            ],
        },
    )

    customer_email_sent = False

    try:
        resend.Emails.send(
            {
                "from": settings.email_from,
                "to": [str(customer.email)],
                "reply_to": settings.dialac_request_email,
                "subject": f"Solicitud de pedido DIALAC {request.request_number}",
                "html": (
                    f"<h2>Hola, {safe_name}</h2>"
                    "<p>Hemos recibido correctamente tu solicitud de pedido.</p>"
                    f"<p>El número de tu solicitud es "
                    f"<strong>{escape(request.request_number)}</strong>.</p>"
                    "<p>Adjuntamos una copia en PDF con el resumen de los productos "
                    "seleccionados y la información proporcionada.</p>"
                    "<p>Ten presente que el envío de esta solicitud no confirma "
                    "automáticamente el pedido. El equipo de DIALAC verificará la "
                    "disponibilidad, los precios, la fecha deseable de entrega y el "
                    "posible costo de envío antes de comunicarse contigo para confirmar "
                    "los detalles.</p>"
                    "<p>Gracias por elegir DIALAC.</p>"
                ),
                "attachments": [
                    {
                        "filename": file_name,
                        "content": encoded_pdf,
                    },
                ],
            },
        )
        customer_email_sent = True
    except Exception:
        logger.exception(
            "No fue posible enviar la confirmación al cliente para la solicitud %s.",
            request.request_number,
        )

    return EmailDeliveryResult(
        dialac_sent=True,
        customer_sent=customer_email_sent,
    )

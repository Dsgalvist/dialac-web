from urllib.parse import quote

from fastapi import APIRouter, HTTPException, Response, status

from app.schemas.request import CreateRequestInput
from app.services.email_service import send_request_email
from app.services.pdf_service import generate_request_pdf
from app.services.request_service import validate_and_calculate_request


router = APIRouter(prefix="/api/requests", tags=["Solicitudes"])


@router.post("/pdf", response_class=Response)
def create_request_pdf(payload: CreateRequestInput) -> Response:
    try:
        validated_request = validate_and_calculate_request(payload)
        pdf_bytes = generate_request_pdf(validated_request)
        file_name = f"solicitud-dialac-{validated_request.request_number}.pdf"
        email_sent = send_request_email(
            validated_request,
            pdf_bytes,
            file_name,
        )
    except HTTPException:
        raise
    except RuntimeError as error:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=str(error),
        ) from error
    except Exception as error:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="No fue posible generar y enviar la solicitud.",
        ) from error

    encoded_file_name = quote(file_name)

    return Response(
        content=pdf_bytes,
        media_type="application/pdf",
        headers={
            "Content-Disposition": f"inline; filename*=UTF-8''{encoded_file_name}",
            "X-Dialac-Request-Number": validated_request.request_number,
            "X-Dialac-Email-Status": "sent" if email_sent else "development-disabled",
        },
    )

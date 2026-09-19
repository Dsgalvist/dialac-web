from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

from fpdf import FPDF

from app.schemas.request import ValidatedRequest


CHARCOAL = (38, 40, 42)
DARK_GRAY = (72, 69, 65)
GRAY = (105, 101, 96)

CREAM = (244, 240, 233)
LIGHT_CREAM = (250, 248, 244)
MEDIUM_CREAM = (232, 222, 210)
DARK_CREAM = (214, 198, 180)

BORDER = (205, 185, 168)
WHITE = (255, 255, 255)

PROJECT_ROOT = Path(__file__).resolve().parents[3]

LOGO_PATH = (
    PROJECT_ROOT
    / "frontend"
    / "public"
    / "images"
    / "LOGO"
    / "logotransparente.png"
)


def format_currency(value: int) -> str:
    return f"$ {value:,.0f}".replace(",", ".")


def format_date(value) -> str:
    months = (
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
    )

    return f"{value.day} de {months[value.month - 1]} de {value.year}"


class DialacPDF(FPDF):
    def __init__(
        self,
        request_number: str,
        generated_at: datetime,
        *args,
        **kwargs,
    ):
        super().__init__(*args, **kwargs)

        self.request_number = request_number
        self.generated_at = generated_at

    def header(self):
        # Fondo crema principal
        self.set_fill_color(*CREAM)
        self.rect(
            0,
            0,
            self.w,
            42,
            style="F",
        )

        # Franja superior neutra
        self.set_fill_color(*CHARCOAL)
        self.rect(
            0,
            0,
            self.w,
            5,
            style="F",
        )

        # Logo
        if LOGO_PATH.is_file():
            self.image(
                str(LOGO_PATH),
                x=15,
                y=20,
                w=39,
            )
        else:
            self.set_xy(15, 19)
            self.set_text_color(*CHARCOAL)
            self.set_font("Helvetica", "B", 20)
            self.cell(
                42,
                9,
                "DIALAC",
            )

        # Información principal del documento
        self.set_xy(94, 15)
        self.set_text_color(*DARK_GRAY)
        self.set_font("Helvetica", "B", 8)
        self.cell(
            101,
            5,
            "SOLICITUD DE PRODUCTOS",
            align="R",
            new_x="LMARGIN",
            new_y="NEXT",
        )

        self.set_x(94)
        self.set_text_color(*CHARCOAL)
        self.set_font("Helvetica", "B", 11)
        self.cell(
            101,
            6,
            self.request_number,
            align="R",
            new_x="LMARGIN",
            new_y="NEXT",
        )

        self.set_x(94)
        self.set_text_color(*DARK_GRAY)
        self.set_font("Helvetica", "B", 8)
        self.cell(
            101,
            5,
            "PENDIENTE DE REVISIÓN",
            align="R",
            new_x="LMARGIN",
            new_y="NEXT",
        )

        self.set_x(94)
        self.set_text_color(*GRAY)
        self.set_font("Helvetica", "", 8)
        self.cell(
            101,
            5,
            (
                "Generada: "
                f"{self.generated_at.strftime('%d/%m/%Y %H:%M')}"
            ),
            align="R",
        )

        # Línea inferior del encabezado
        self.set_draw_color(*BORDER)
        self.set_line_width(0.4)
        self.line(
            15,
            42,
            195,
            42,
        )

        self.set_y(49)

    def footer(self):
        footer_y = self.h - 17

        self.set_fill_color(*CREAM)
        self.rect(
            0,
            footer_y,
            self.w,
            17,
            style="F",
        )

        self.set_draw_color(*BORDER)
        self.set_line_width(0.4)
        self.line(
            15,
            footer_y,
            195,
            footer_y,
        )

        self.set_y(footer_y + 5)
        self.set_x(15)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(*DARK_GRAY)

        self.cell(
            125,
            5,
            "DIALAC - Solicitud sujeta a revisión y confirmación",
        )

        self.cell(
            55,
            5,
            f"Página {self.page_no()}",
            align="R",
        )

    def section_title(self, title: str):
        x = self.l_margin
        y = self.get_y()
        available_width = self.w - self.l_margin - self.r_margin

        self.set_fill_color(*MEDIUM_CREAM)
        self.rect(
            x,
            y,
            available_width,
            10,
            style="F",
        )

        self.set_fill_color(*DARK_CREAM)
        self.rect(
            x,
            y,
            3,
            10,
            style="F",
        )

        self.set_xy(
            x + 8,
            y + 1,
        )
        self.set_text_color(*CHARCOAL)
        self.set_font("Helvetica", "B", 10)
        self.cell(
            available_width - 8,
            8,
            title.upper(),
        )

        self.set_y(y + 13)

    def information_row(
        self,
        label: str,
        value: str,
    ):
        self.set_x(self.l_margin)
        self.set_fill_color(*LIGHT_CREAM)
        self.set_draw_color(*BORDER)
        self.set_line_width(0.15)

        self.set_font("Helvetica", "B", 9)
        self.set_text_color(*CHARCOAL)
        self.cell(
            46,
            8,
            f"  {label}",
            border="B",
            fill=True,
        )

        self.set_font("Helvetica", "", 9)
        self.set_text_color(*DARK_GRAY)
        self.multi_cell(
            0,
            8,
            value,
            border="B",
            fill=True,
            new_x="LMARGIN",
            new_y="NEXT",
        )

    def product_table_header(
        self,
        headers: tuple[str, ...],
        widths: tuple[int, ...],
    ):
        self.set_fill_color(*DARK_CREAM)
        self.set_text_color(*CHARCOAL)
        self.set_font("Helvetica", "B", 8)

        for header, width in zip(headers, widths):
            self.cell(
                width,
                9,
                header,
                border=0,
                fill=True,
                align="C",
            )

        self.ln()

        current_y = self.get_y()

        self.set_fill_color(*BORDER)
        self.rect(
            self.l_margin,
            current_y,
            sum(widths),
            0.8,
            style="F",
        )

        self.set_y(current_y + 0.8)


def generate_request_pdf(
    request: ValidatedRequest,
) -> bytes:
    generated_at = datetime.now(
        ZoneInfo("America/Bogota"),
    )

    pdf = DialacPDF(
        request_number=request.request_number,
        generated_at=generated_at,
        format="A4",
    )

    pdf.set_auto_page_break(
        auto=True,
        margin=24,
    )
    pdf.set_margins(
        15,
        15,
        15,
    )
    pdf.set_title(
        f"Solicitud {request.request_number}",
    )
    pdf.set_author("DIALAC")
    pdf.add_page()

    customer = request.customer

    # Información del solicitante
    pdf.section_title(
        "Información del solicitante",
    )

    pdf.information_row(
        "Nombre",
        customer.full_name,
    )
    pdf.information_row(
        "Empresa",
        customer.company or "No aplica",
    )
    pdf.information_row(
        "Celular",
        customer.phone,
    )
    pdf.information_row(
        "Correo",
        str(customer.email),
    )

    pdf.ln(6)

    # Información de entrega
    pdf.section_title(
        "Información de entrega",
    )

    delivery_label = (
        "Domicilio"
        if customer.delivery_method == "domicilio"
        else "Recogida"
    )

    pdf.information_row(
        "Modalidad",
        delivery_label,
    )
    pdf.information_row(
        "Ciudad",
        customer.city,
    )
    pdf.information_row(
        "Dirección",
        customer.address or "No aplica",
    )
    pdf.information_row(
        "Fecha requerida",
        format_date(customer.required_date),
    )
    pdf.information_row(
        "Notas",
        customer.notes or "Sin observaciones",
    )

    pdf.ln(6)

    # Productos seleccionados
    pdf.section_title(
        "Productos seleccionados",
    )

    widths = (
        25,
        82,
        24,
        18,
        31,
    )

    headers = (
        "Código",
        "Producto",
        "Precio",
        "Cant.",
        "Subtotal",
    )

    pdf.product_table_header(
        headers,
        widths,
    )

    pdf.set_text_color(*CHARCOAL)
    pdf.set_font(
        "Helvetica",
        "",
        8,
    )

    for index, item in enumerate(request.items):
        if pdf.get_y() > 252:
            pdf.add_page()

            pdf.section_title(
                "Productos seleccionados - continuación",
            )

            pdf.product_table_header(
                headers,
                widths,
            )

            pdf.set_text_color(*CHARCOAL)
            pdf.set_font(
                "Helvetica",
                "",
                8,
            )

        fill = index % 2 == 0

        if fill:
            pdf.set_fill_color(*LIGHT_CREAM)
        else:
            pdf.set_fill_color(*WHITE)

        name = (
            item.name
            if len(item.name) <= 48
            else f"{item.name[:45]}..."
        )

        values = (
            item.code or "-",
            name,
            format_currency(item.unit_price),
            str(item.quantity),
            format_currency(item.subtotal),
        )

        aligns = (
            "C",
            "L",
            "R",
            "C",
            "R",
        )

        pdf.set_draw_color(*BORDER)
        pdf.set_line_width(0.15)

        for value, width, align in zip(
            values,
            widths,
            aligns,
        ):
            pdf.cell(
                width,
                9,
                value,
                border="B",
                fill=True,
                align=align,
            )

        pdf.ln()

    pdf.ln(6)

    # Resumen de la solicitud
    summary_x = 105
    summary_width = 90
    summary_y = pdf.get_y()

    pdf.set_fill_color(*CREAM)
    pdf.rect(
        summary_x,
        summary_y,
        summary_width,
        27,
        style="F",
    )

    pdf.set_fill_color(*DARK_CREAM)
    pdf.rect(
        summary_x,
        summary_y,
        3,
        27,
        style="F",
    )

    pdf.set_xy(
        summary_x + 7,
        summary_y + 3,
    )
    pdf.set_font(
        "Helvetica",
        "B",
        9,
    )
    pdf.set_text_color(*CHARCOAL)
    pdf.cell(
        48,
        7,
        "Productos seleccionados",
    )

    pdf.set_font(
        "Helvetica",
        "B",
        11,
    )
    pdf.cell(
        28,
        7,
        str(request.total_items),
        align="R",
        new_x="LMARGIN",
        new_y="NEXT",
    )

    pdf.set_xy(
        summary_x + 7,
        summary_y + 13,
    )
    pdf.set_font(
        "Helvetica",
        "B",
        10,
    )
    pdf.set_text_color(*DARK_GRAY)
    pdf.cell(
        39,
        9,
        "TOTAL ESTIMADO",
    )

    pdf.set_font(
        "Helvetica",
        "B",
        15,
    )
    pdf.set_text_color(*CHARCOAL)
    pdf.cell(
        37,
        9,
        format_currency(request.total_price),
        align="R",
    )

    pdf.set_y(summary_y + 34)

    # Información importante
    if pdf.get_y() > 238:
        pdf.add_page()

    important_y = pdf.get_y()
    important_height = 40

    pdf.set_fill_color(*CREAM)
    pdf.rect(
        pdf.l_margin,
        important_y,
        180,
        important_height,
        style="F",
    )

    pdf.set_fill_color(*DARK_CREAM)
    pdf.rect(
        pdf.l_margin,
        important_y,
        4,
        important_height,
        style="F",
    )

    pdf.set_xy(
        pdf.l_margin + 9,
        important_y + 5,
    )
    pdf.set_text_color(*CHARCOAL)
    pdf.set_font(
        "Helvetica",
        "B",
        10,
    )
    pdf.cell(
        0,
        6,
        "INFORMACIÓN IMPORTANTE",
        new_x="LMARGIN",
        new_y="NEXT",
    )

    pdf.set_x(pdf.l_margin + 9)
    pdf.set_text_color(*DARK_GRAY)
    pdf.set_font(
        "Helvetica",
        "",
        8.5,
    )
    pdf.multi_cell(
        164,
        5.5,
        (
            "Esta solicitud no confirma automáticamente el pedido. "
            "DIALAC verificará disponibilidad, cantidades, fecha, dirección "
            "y condiciones de entrega. El equipo se comunicará con el "
            "solicitante dentro de los horarios de atención: lunes a viernes "
            "de 8:00 a 18:00 y sábados de 8:00 a 13:00."
        ),
    )

    output = pdf.output()

    return bytes(output)
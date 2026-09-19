from datetime import datetime
from zoneinfo import ZoneInfo

from fpdf import FPDF

from app.schemas.request import ValidatedRequest


BROWN = (151, 79, 43)
DARK_BROWN = (113, 55, 31)
CHARCOAL = (38, 40, 42)
GREEN = (97, 115, 61)
CREAM = (244, 240, 233)
LIGHT_CREAM = (250, 248, 244)
BORDER = (205, 185, 168)
WHITE = (255, 255, 255)


def format_currency(value: int) -> str:
    return f"$ {value:,.0f}".replace(",", ".")


def format_date(value) -> str:
    months = (
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
    )
    return f"{value.day} de {months[value.month - 1]} de {value.year}"


class DialacPDF(FPDF):
    def header(self):
        self.set_fill_color(*WHITE)
        self.rect(0, 0, 210, 25, style="F")
        self.set_text_color(*CHARCOAL)
        self.set_font("Helvetica", "B", 19)
        self.set_xy(15, 8)
        self.cell(0, 8, "DIALAC")
        self.set_draw_color(*BROWN)
        self.set_line_width(0.7)
        self.line(15, 23, 195, 23)
        self.ln(20)

    def footer(self):
        self.set_y(-16)
        self.set_draw_color(*BORDER)
        self.set_line_width(0.25)
        self.line(15, self.get_y(), 195, self.get_y())
        self.set_y(-12)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(95, 95, 95)
        self.cell(90, 5, "DIALAC - Solicitud sujeta a confirmación")
        self.cell(90, 5, f"Página {self.page_no()}", align="R")

    def section_title(self, title: str):
        self.set_fill_color(*CREAM)
        self.set_text_color(*DARK_BROWN)
        self.set_font("Helvetica", "B", 11)
        self.cell(0, 9, title.upper(), fill=True)
        self.ln(12)

    def information_row(self, label: str, value: str):
        self.set_x(self.l_margin)
        self.set_font("Helvetica", "B", 9)
        self.set_text_color(*CHARCOAL)
        self.cell(46, 7, label)
        self.set_font("Helvetica", "", 9)
        self.multi_cell(0, 7, value, new_x="LMARGIN", new_y="NEXT")


def generate_request_pdf(request: ValidatedRequest) -> bytes:
    pdf = DialacPDF(format="A4")
    pdf.set_auto_page_break(auto=True, margin=20)
    pdf.set_margins(15, 15, 15)
    pdf.set_title(f"Solicitud {request.request_number}")
    pdf.set_author("DIALAC")
    pdf.add_page()

    generated_at = datetime.now(ZoneInfo("America/Bogota"))

    pdf.set_text_color(*CHARCOAL)
    pdf.set_font("Helvetica", "B", 20)
    pdf.cell(0, 10, "Solicitud de productos", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(85, 85, 85)
    pdf.cell(
        0,
        6,
        f"Número: {request.request_number}  |  Generada: {generated_at.strftime('%d/%m/%Y %H:%M')}",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.set_text_color(*GREEN)
    pdf.set_font("Helvetica", "B", 9)
    pdf.cell(0, 6, "Estado: PENDIENTE DE REVISIÓN", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(5)

    pdf.section_title("Información del solicitante")
    customer = request.customer
    pdf.information_row("Nombre", customer.full_name)
    pdf.information_row("Empresa", customer.company or "No aplica")
    pdf.information_row("Celular", customer.phone)
    pdf.information_row("Correo", str(customer.email))
    pdf.ln(3)

    pdf.section_title("Información de entrega")
    delivery_label = "Domicilio" if customer.delivery_method == "domicilio" else "Recogida"
    pdf.information_row("Modalidad", delivery_label)
    pdf.information_row("Ciudad", customer.city)
    pdf.information_row("Dirección", customer.address or "No aplica")
    pdf.information_row("Fecha requerida", format_date(customer.required_date))
    pdf.information_row("Notas", customer.notes or "Sin observaciones")
    pdf.ln(3)

    pdf.section_title("Productos seleccionados")
    widths = (25, 82, 24, 18, 31)
    headers = ("Código", "Producto", "Precio", "Cant.", "Subtotal")
    pdf.set_fill_color(*BROWN)
    pdf.set_text_color(*WHITE)
    pdf.set_font("Helvetica", "B", 8)

    for header, width in zip(headers, widths):
        pdf.cell(width, 8, header, border=0, fill=True, align="C")

    pdf.ln()
    pdf.set_text_color(*CHARCOAL)
    pdf.set_font("Helvetica", "", 8)

    for index, item in enumerate(request.items):
        if pdf.get_y() > 260:
            pdf.add_page()
            pdf.set_fill_color(*BROWN)
            pdf.set_text_color(*WHITE)
            pdf.set_font("Helvetica", "B", 8)
            for header, width in zip(headers, widths):
                pdf.cell(width, 8, header, border=0, fill=True, align="C")
            pdf.ln()
            pdf.set_text_color(*CHARCOAL)
            pdf.set_font("Helvetica", "", 8)

        fill = index % 2 == 0
        if fill:
            pdf.set_fill_color(*LIGHT_CREAM)

        name = item.name if len(item.name) <= 48 else f"{item.name[:45]}..."
        values = (
            item.code or "-",
            name,
            format_currency(item.unit_price),
            str(item.quantity),
            format_currency(item.subtotal),
        )
        aligns = ("C", "L", "R", "C", "R")

        for value, width, align in zip(values, widths, aligns):
            pdf.cell(width, 8, value, border="B", fill=fill, align=align)

        pdf.ln()

    pdf.ln(5)
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(*CHARCOAL)
    pdf.cell(140, 7, "Productos seleccionados", align="R")
    pdf.cell(40, 7, str(request.total_items), align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "B", 14)
    pdf.set_text_color(*DARK_BROWN)
    pdf.cell(140, 9, "TOTAL ESTIMADO", align="R")
    pdf.cell(
        40,
        9,
        format_currency(request.total_price),
        align="R",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.ln(6)

    pdf.set_fill_color(*CREAM)
    pdf.set_text_color(*CHARCOAL)
    pdf.set_font("Helvetica", "B", 9)
    pdf.cell(0, 7, "Información importante", fill=True, new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 8.5)
    pdf.multi_cell(
        0,
        5.5,
        "Esta solicitud no confirma automáticamente el pedido. DIALAC verificará disponibilidad, "
        "cantidades, fecha, dirección y condiciones de entrega. El equipo se comunicará con el "
        "solicitante dentro de los horarios de atención: lunes a viernes de 8:00 a 18:00 y "
        "sábados de 8:00 a 13:00.",
        fill=True,
    )

    output = pdf.output()
    return bytes(output)

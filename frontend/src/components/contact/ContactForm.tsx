import { useForm } from "react-hook-form";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const inputStyles =
  "w-full rounded-lg border border-dialac-border bg-white px-4 py-3 text-dialac-charcoal outline-none transition placeholder:text-[#64748b] focus:border-dialac-brown";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    const subject = encodeURIComponent(
      `Solicitud de información - ${data.interest || "DIALAC"}`,
    );

    const body = encodeURIComponent(
      `Nombre: ${data.name}
Correo: ${data.email}
Teléfono: ${data.phone || "No proporcionado"}
Interés: ${data.interest || "No especificado"}

Mensaje:
${data.message}`,
    );

    window.location.href = `mailto:Acosdie@gmail.com?subject=${subject}&body=${body}`;
  };

  const errorStyles =
    "mt-2 text-sm font-semibold text-dialac-error";

  return (
    <section className="h-full rounded-xl border border-dialac-border bg-white p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dialac-green-dark">
        Escríbenos
      </p>

      <h2 className="mt-2 font-display text-2xl font-bold text-dialac-charcoal">
        Cuéntanos qué necesitas
      </h2>

      <p className="mt-3 leading-7 text-dialac-charcoal">
        Completa el formulario y se preparará un correo con tu información.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-semibold text-dialac-charcoal"
          >
            Nombre *
          </label>

          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            aria-invalid={Boolean(errors.name)}
            className={inputStyles}
            {...register("name", {
              required: "Ingresa tu nombre.",
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres.",
              },
            })}
          />

          {errors.name && (
            <p className={errorStyles}>{errors.name.message}</p>
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-semibold text-dialac-charcoal"
            >
              Correo *
            </label>

            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              placeholder="nombre@gmail.com"
              aria-invalid={Boolean(errors.email)}
              className={inputStyles}
              {...register("email", {
                required: "Ingresa tu correo.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Ingresa un correo válido.",
                },
              })}
            />

            {errors.email && (
              <p className={errorStyles}>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="mb-2 block text-sm font-semibold text-dialac-charcoal"
            >
              Teléfono
            </label>

            <input
              id="contact-phone"
              type="tel"
              autoComplete="tel"
              placeholder="Número de contacto"
              className={inputStyles}
              {...register("phone")}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-interest"
            className="mb-2 block text-sm font-semibold text-dialac-charcoal"
          >
            Producto o servicio de interés
          </label>

          <input
            id="contact-interest"
            type="text"
            placeholder="Ej. Refrigerios para un evento"
            className={inputStyles}
            {...register("interest")}
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-semibold text-dialac-charcoal"
          >
            Mensaje *
          </label>

          <textarea
            id="contact-message"
            rows={5}
            placeholder="Cuéntanos brevemente qué necesitas"
            aria-invalid={Boolean(errors.message)}
            className={`${inputStyles} resize-none`}
            {...register("message", {
              required: "Escribe un mensaje.",
              minLength: {
                value: 10,
                message: "El mensaje debe tener al menos 10 caracteres.",
              },
            })}
          />

          {errors.message && (
            <p className={errorStyles}>{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-dialac-brown px-6 py-3 font-semibold text-white transition hover:bg-dialac-brown-dark"
        >
          Preparar correo
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
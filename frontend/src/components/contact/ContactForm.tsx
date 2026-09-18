import {
  useState,
  type ClipboardEvent,
  type FormEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useForm } from "react-hook-form";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type FilteredField = "name" | "phone" | "interest" | "message";

const inputStyles =
  "w-full rounded-xl border border-dialac-border bg-[#fcfaf7] px-4 py-3.5 text-dialac-charcoal outline-none transition placeholder:text-[#64748b] hover:border-dialac-brown/60 focus:border-dialac-brown focus:bg-white focus:ring-4 focus:ring-dialac-brown/10 aria-[invalid=true]:border-dialac-error aria-[invalid=true]:focus:ring-dialac-error/10";

const errorStyles = "mt-2 text-sm font-semibold text-dialac-error";

const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]+$/;

const phonePattern = /^\+?[0-9\s()-]+$/;

const phoneCharacterPattern = /^[0-9+\s()-]+$/;

const interestPattern =
  /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü0-9\s.,()/-]+$/;

const messageCharacterPattern = /^[^<>]+$/;

function ContactForm() {
  const reduceMotion = useReducedMotion();

  const [pendingEmail, setPendingEmail] =
    useState<ContactFormValues | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<ContactFormValues>({
    mode: "onTouched",
  });

  const blockInvalidCharacter = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: FilteredField,
    allowedPattern: RegExp,
    message: string,
  ) => {
    const inputEvent = event.nativeEvent as InputEvent;
    const insertedCharacters = inputEvent.data;

    if (!insertedCharacters) {
      return;
    }

    if (!allowedPattern.test(insertedCharacters)) {
      event.preventDefault();

      setError(field, {
        type: "manual",
        message,
      });

      return;
    }

    if (errors[field]?.type === "manual") {
      clearErrors(field);
    }
  };

  const blockInvalidPaste = (
    event: ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: FilteredField,
    allowedPattern: RegExp,
    message: string,
  ) => {
    const pastedText = event.clipboardData.getData("text");

    if (!pastedText) {
      return;
    }

    if (!allowedPattern.test(pastedText)) {
      event.preventDefault();

      setError(field, {
        type: "manual",
        message,
      });

      return;
    }

    if (errors[field]?.type === "manual") {
      clearErrors(field);
    }
  };

  const onSubmit = (data: ContactFormValues) => {
    setPendingEmail({
      name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      interest: data.interest.trim(),
      message: data.message.trim(),
    });
  };

  const handleConfirmEmail = () => {
    if (!pendingEmail) {
      return;
    }

    const subject = encodeURIComponent(
      `Solicitud de información - ${pendingEmail.interest}`,
    );

    const body = encodeURIComponent(
      `Hola, equipo de DIALAC:

Me comunico desde su sitio web y quisiera recibir información sobre sus productos o servicios.

INFORMACIÓN DEL SOLICITANTE

Nombre: ${pendingEmail.name}
Correo: ${pendingEmail.email}
Número de contacto: ${pendingEmail.phone}
Producto o servicio de interés: ${pendingEmail.interest}

MENSAJE

${pendingEmail.message}

Gracias.`,
    );

    setPendingEmail(null);

    window.location.href = `mailto:Acosdie@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <motion.section
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                x: 35,
              }
        }
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.65,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative h-full overflow-hidden rounded-[2rem] border border-dialac-border bg-white p-7 shadow-[0_18px_50px_rgba(38,40,42,0.07)] sm:p-9 lg:p-10"
      >
        {/* ELEMENTOS DECORATIVOS */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-1.5 w-full bg-dialac-brown"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-dialac-brown/5"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[15%] left-[-4rem] h-40 w-40 rounded-full border-[28px] border-dialac-green/5"
        />

        <div className="relative">
          {/* ENCABEZADO */}
          <div className="flex items-center gap-3">
            <motion.span
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4e8de] text-dialac-brown-dark"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -4, 0],
                    }
              }
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </motion.span>

            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-dialac-brown-dark">
              Escríbenos
            </p>
          </div>

          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-dialac-charcoal sm:text-4xl">
            Cuéntanos qué necesitas
          </h2>

          <p className="mt-4 leading-7 text-dialac-charcoal">
            Completa todos los campos y prepararemos un correo con tu
            información.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-dialac-border bg-[#fcfaf7] px-4 py-2 text-sm text-dialac-charcoal">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-dialac-brown"
            />

            Los campos marcados con * son obligatorios.
          </div>

          <form
            className="mt-9 space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {/* NOMBRE */}
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-semibold text-dialac-charcoal"
              >
                Nombre completo *
              </label>

              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                placeholder="Tu nombre completo"
                maxLength={80}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={
                  errors.name ? "contact-name-error" : undefined
                }
                className={inputStyles}
                onBeforeInput={(event) =>
                  blockInvalidCharacter(
                    event,
                    "name",
                    namePattern,
                    "Ese carácter no está permitido en el nombre.",
                  )
                }
                onPaste={(event) =>
                  blockInvalidPaste(
                    event,
                    "name",
                    namePattern,
                    "El texto pegado contiene caracteres no permitidos.",
                  )
                }
                {...register("name", {
                  required: "Ingresa tu nombre completo.",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres.",
                  },
                  maxLength: {
                    value: 80,
                    message:
                      "El nombre no puede superar los 80 caracteres.",
                  },
                  pattern: {
                    value: namePattern,
                    message:
                      "El nombre solamente puede contener letras, espacios, guiones y apóstrofes.",
                  },
                  validate: (value) =>
                    value.trim().length >= 3 ||
                    "Ingresa un nombre válido.",
                })}
              />

              <AnimatePresence initial={false}>
                {errors.name && (
                  <motion.p
                    id="contact-name-error"
                    role="alert"
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: -5,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -5,
                    }}
                    className={errorStyles}
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* CORREO */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-dialac-charcoal"
                >
                  Correo electrónico *
                </label>

                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="nombre@gmail.com"
                  maxLength={120}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "contact-email-error" : undefined
                  }
                  className={inputStyles}
                  {...register("email", {
                    required: "Ingresa tu correo electrónico.",
                    maxLength: {
                      value: 120,
                      message:
                        "El correo no puede superar los 120 caracteres.",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Ingresa un correo electrónico válido.",
                    },
                  })}
                />

                <AnimatePresence initial={false}>
                  {errors.email && (
                    <motion.p
                      id="contact-email-error"
                      role="alert"
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: -5,
                            }
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -5,
                      }}
                      className={errorStyles}
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* CONTACTO */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold text-dialac-charcoal"
                >
                  Número de contacto o WhatsApp *
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+57 316 355 2643"
                  maxLength={20}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? "contact-phone-error" : undefined
                  }
                  className={inputStyles}
                  onBeforeInput={(event) =>
                    blockInvalidCharacter(
                      event,
                      "phone",
                      phoneCharacterPattern,
                      "Ese carácter no está permitido en el número de contacto.",
                    )
                  }
                  onPaste={(event) =>
                    blockInvalidPaste(
                      event,
                      "phone",
                      phoneCharacterPattern,
                      "El número pegado contiene caracteres no permitidos.",
                    )
                  }
                  {...register("phone", {
                    required: "Ingresa un número de contacto.",
                    pattern: {
                      value: phonePattern,
                      message:
                        "Utiliza solamente números, espacios, paréntesis, guiones o el símbolo +.",
                    },
                    validate: (value) => {
                      const numberOfDigits = value.replace(/\D/g, "").length;

                      if (numberOfDigits < 7) {
                        return "El número debe tener al menos 7 dígitos.";
                      }

                      if (numberOfDigits > 15) {
                        return "El número no puede superar los 15 dígitos.";
                      }

                      return true;
                    },
                  })}
                />

                <AnimatePresence initial={false}>
                  {errors.phone && (
                    <motion.p
                      id="contact-phone-error"
                      role="alert"
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: -5,
                            }
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -5,
                      }}
                      className={errorStyles}
                    >
                      {errors.phone.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* PRODUCTO O SERVICIO */}
            <div>
              <label
                htmlFor="contact-interest"
                className="mb-2 block text-sm font-semibold text-dialac-charcoal"
              >
                Producto o servicio de interés *
              </label>

              <input
                id="contact-interest"
                type="text"
                placeholder="Ej. Refrigerios para un evento"
                maxLength={100}
                aria-invalid={Boolean(errors.interest)}
                aria-describedby={
                  errors.interest ? "contact-interest-error" : undefined
                }
                className={inputStyles}
                onBeforeInput={(event) =>
                  blockInvalidCharacter(
                    event,
                    "interest",
                    interestPattern,
                    "Ese carácter no está permitido en este campo.",
                  )
                }
                onPaste={(event) =>
                  blockInvalidPaste(
                    event,
                    "interest",
                    interestPattern,
                    "El texto pegado contiene caracteres no permitidos.",
                  )
                }
                {...register("interest", {
                  required:
                    "Indica el producto o servicio que te interesa.",
                  minLength: {
                    value: 3,
                    message: "Escribe al menos 3 caracteres.",
                  },
                  maxLength: {
                    value: 100,
                    message:
                      "Este campo no puede superar los 100 caracteres.",
                  },
                  pattern: {
                    value: interestPattern,
                    message:
                      "Este campo contiene caracteres no permitidos.",
                  },
                  validate: (value) =>
                    value.trim().length >= 3 ||
                    "Indica un producto o servicio válido.",
                })}
              />

              <AnimatePresence initial={false}>
                {errors.interest && (
                  <motion.p
                    id="contact-interest-error"
                    role="alert"
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: -5,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -5,
                    }}
                    className={errorStyles}
                  >
                    {errors.interest.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* MENSAJE */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold text-dialac-charcoal"
              >
                Mensaje *
              </label>

              <textarea
                id="contact-message"
                rows={6}
                placeholder="Cuéntanos brevemente qué necesitas"
                maxLength={1000}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                className={`${inputStyles} resize-none`}
                onBeforeInput={(event) =>
                  blockInvalidCharacter(
                    event,
                    "message",
                    messageCharacterPattern,
                    "Los caracteres < y > no están permitidos.",
                  )
                }
                onPaste={(event) =>
                  blockInvalidPaste(
                    event,
                    "message",
                    messageCharacterPattern,
                    "El texto pegado contiene los caracteres < o >.",
                  )
                }
                {...register("message", {
                  required: "Escribe un mensaje.",
                  minLength: {
                    value: 10,
                    message:
                      "El mensaje debe tener al menos 10 caracteres.",
                  },
                  maxLength: {
                    value: 1000,
                    message:
                      "El mensaje no puede superar los 1000 caracteres.",
                  },
                  validate: {
                    validContent: (value) =>
                      !/[<>]/.test(value) ||
                      "Los caracteres < y > no están permitidos.",
                    notOnlySpaces: (value) =>
                      value.trim().length >= 10 ||
                      "Escribe un mensaje válido de al menos 10 caracteres.",
                  },
                })}
              />

              <AnimatePresence initial={false}>
                {errors.message && (
                  <motion.p
                    id="contact-message-error"
                    role="alert"
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: -5,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -5,
                    }}
                    className={errorStyles}
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -3,
                      scale: 1.01,
                    }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-dialac-brown px-6 py-4 font-semibold text-white shadow-[0_12px_30px_rgba(139,78,47,0.22)] transition hover:bg-dialac-brown-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/30 sm:w-auto"
            >
              Revisar y preparar correo

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </motion.button>
          </form>
        </div>
      </motion.section>

      {/* CONFIRMACIÓN */}
      <AnimatePresence>
        {pendingEmail && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 px-5 py-8 backdrop-blur-sm"
            role="presentation"
            onMouseDown={() => setPendingEmail(null)}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                  }
            }
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="email-confirmation-title"
              className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-dialac-border bg-white p-6 shadow-2xl sm:p-8"
              onMouseDown={(event) => event.stopPropagation()}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
                      scale: 0.96,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-1.5 w-full bg-dialac-brown"
              />

              <div className="flex items-start justify-between gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9eddf] text-dialac-green-dark">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>

                <button
                  type="button"
                  onClick={() => setPendingEmail(null)}
                  aria-label="Cerrar confirmación"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-dialac-border text-dialac-charcoal transition hover:border-dialac-brown hover:bg-[#f4e8de] hover:text-dialac-brown-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/25"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M6 6l12 12" />
                    <path d="M18 6 6 18" />
                  </svg>
                </button>
              </div>

              <h2
                id="email-confirmation-title"
                className="mt-6 font-display text-2xl font-bold text-dialac-charcoal sm:text-3xl"
              >
                ¿Deseas preparar este correo?
              </h2>

              <p className="mt-3 leading-7 text-dialac-charcoal">
                Se abrirá tu aplicación de correo con la información dirigida
                a:
              </p>

              <p className="mt-2 font-semibold text-dialac-brown-dark">
                Acosdie@gmail.com
              </p>

              <dl className="mt-6 space-y-4 rounded-2xl border border-dialac-border bg-[#fcfaf7] p-5 text-sm">
                <div>
                  <dt className="font-semibold text-dialac-charcoal">
                    Nombre
                  </dt>

                  <dd className="mt-1 break-words text-dialac-charcoal">
                    {pendingEmail.name}
                  </dd>
                </div>

                <div className="h-px bg-dialac-border" />

                <div>
                  <dt className="font-semibold text-dialac-charcoal">
                    Correo
                  </dt>

                  <dd className="mt-1 break-all text-dialac-charcoal">
                    {pendingEmail.email}
                  </dd>
                </div>

                <div className="h-px bg-dialac-border" />

                <div>
                  <dt className="font-semibold text-dialac-charcoal">
                    Número de contacto
                  </dt>

                  <dd className="mt-1 text-dialac-charcoal">
                    {pendingEmail.phone}
                  </dd>
                </div>

                <div className="h-px bg-dialac-border" />

                <div>
                  <dt className="font-semibold text-dialac-charcoal">
                    Producto o servicio
                  </dt>

                  <dd className="mt-1 break-words text-dialac-charcoal">
                    {pendingEmail.interest}
                  </dd>
                </div>

                <div className="h-px bg-dialac-border" />

                <div>
                  <dt className="font-semibold text-dialac-charcoal">
                    Mensaje
                  </dt>

                  <dd className="mt-1 max-h-32 overflow-y-auto whitespace-pre-wrap break-words text-dialac-charcoal">
                    {pendingEmail.message}
                  </dd>
                </div>
              </dl>

              <p className="mt-4 text-sm leading-6 text-dialac-charcoal">
                Podrás revisar nuevamente el contenido antes de enviarlo desde
                tu aplicación de correo.
              </p>

              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setPendingEmail(null)}
                  className="rounded-xl border-2 border-dialac-charcoal px-5 py-3 font-semibold text-dialac-charcoal transition hover:bg-dialac-charcoal hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-charcoal/20"
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  onClick={handleConfirmEmail}
                  className="rounded-xl bg-dialac-brown px-5 py-3 font-semibold text-white transition hover:bg-dialac-brown-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/30"
                >
                  Sí, abrir correo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ContactForm;
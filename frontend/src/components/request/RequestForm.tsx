import {
  useEffect,
  useState,
  type ClipboardEvent,
  type FormEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  Controller,
  useForm,
  type FieldPath,
  type SubmitHandler,
} from "react-hook-form";
import RequestDatePicker from "./RequestDatePicker";
import {
  emptyRequestForm,
  getMinimumRequestDate,
  isRequestCity,
  requestCities,
  saveRequestDraft,
  validateRequestDate,
  type RequestFormData,
} from "../../data/request";

type RequestFormProps = {
  defaultValues: RequestFormData;
  onSubmit: (
    formData: RequestFormData,
  ) => void | Promise<void>;
  isSubmitting?: boolean;
};

const inputStyles =
  "mt-2 h-12 w-full rounded-xl border border-dialac-border bg-white px-4 text-dialac-charcoal outline-none transition placeholder:text-slate-500 focus:border-dialac-brown focus:ring-4 focus:ring-dialac-brown/10";

const errorInputStyles =
  "border-dialac-error focus:border-dialac-error focus:ring-[#efcaca]";

const namePattern =
  /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]+$/;

const companyPattern =
  /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü0-9\s.,&()/-]+$/;

const phonePattern =
  /^\+?[0-9\s()-]+$/;

const phoneCharacterPattern =
  /^[0-9+\s()-]+$/;

const emailPattern =
  /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

const emailCharacterPattern =
  /^[^\s<>]+$/;

const addressPattern =
  /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü0-9\s#.,()/-]+$/;

const notesCharacterPattern =
  /^[^<>]+$/;

function RequestForm({
  defaultValues,
  onSubmit,
  isSubmitting = false,
}: RequestFormProps) {
  const reduceMotion = useReducedMotion();
  const minimumRequestDate = getMinimumRequestDate();

  const [pendingFormData, setPendingFormData] =
    useState<RequestFormData | null>(null);

  const [isConfirming, setIsConfirming] =
    useState(false);

  const {
    register,
    control,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<RequestFormData>({
    defaultValues,
    mode: "onBlur",
  });

  const deliveryMethod = watch("deliveryMethod");

  useEffect(() => {
    const subscription = watch((values) => {
      const formDraft: RequestFormData = {
        fullName:
          values.fullName ?? emptyRequestForm.fullName,
        company:
          values.company ?? emptyRequestForm.company,
        phone: values.phone ?? emptyRequestForm.phone,
        email: values.email ?? emptyRequestForm.email,
        address:
          values.address ?? emptyRequestForm.address,
        city: values.city ?? emptyRequestForm.city,
        requiredDate:
          values.requiredDate ??
          emptyRequestForm.requiredDate,
        deliveryMethod:
          values.deliveryMethod === "recogida"
            ? "recogida"
            : "domicilio",
        notes: values.notes ?? emptyRequestForm.notes,
      };

      saveRequestDraft(formDraft);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (!pendingFormData) return;

    const closeWithEscape = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        !isSubmitting &&
        !isConfirming
      ) {
        setPendingFormData(null);
      }
    };

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      window.removeEventListener(
        "keydown",
        closeWithEscape,
      );
    };
  }, [
    pendingFormData,
    isSubmitting,
    isConfirming,
  ]);

  const showCharacterError = (
    field: FieldPath<RequestFormData>,
    message: string,
  ) => {
    setError(field, {
      type: "manual",
      message,
    });
  };

  const blockInvalidCharacter = (
    event: FormEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
    pattern: RegExp,
    field: FieldPath<RequestFormData>,
    message: string,
  ) => {
    const inputEvent =
      event.nativeEvent as InputEvent;

    const insertedText = inputEvent.data;

    if (
      insertedText &&
      !pattern.test(insertedText)
    ) {
      event.preventDefault();
      showCharacterError(field, message);
      return;
    }

    clearErrors(field);
  };

  const blockInvalidPaste = (
    event: ClipboardEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
    pattern: RegExp,
    field: FieldPath<RequestFormData>,
    message: string,
  ) => {
    const pastedText =
      event.clipboardData.getData("text");

    if (!pattern.test(pastedText)) {
      event.preventDefault();
      showCharacterError(field, message);
      return;
    }

    clearErrors(field);
  };

  const submitForm: SubmitHandler<RequestFormData> = (
    formData,
  ) => {
    const normalizedFormData: RequestFormData = {
      fullName: formData.fullName.trim(),
      company: formData.company.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim().toLowerCase(),
      address: formData.address.trim(),
      city: formData.city.trim(),
      requiredDate: formData.requiredDate,
      deliveryMethod: formData.deliveryMethod,
      notes: formData.notes.trim(),
    };

    setPendingFormData(normalizedFormData);
  };

  const cancelConfirmation = () => {
    if (isSubmitting || isConfirming) return;

    setPendingFormData(null);
  };

  const confirmSubmission = async () => {
    if (
      !pendingFormData ||
      isSubmitting ||
      isConfirming
    ) {
      return;
    }

    const confirmedFormData = pendingFormData;

    setIsConfirming(true);
    setPendingFormData(null);

    try {
      await onSubmit(confirmedFormData);
    } finally {
      setIsConfirming(false);
    }
  };

  const formattedRequiredDate =
    pendingFormData?.requiredDate
      ? new Intl.DateTimeFormat("es-CO", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        }).format(
          new Date(
            `${pendingFormData.requiredDate}T00:00:00Z`,
          ),
        )
      : "";

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit(submitForm)}
        className="overflow-hidden rounded-[1.75rem] border border-dialac-border bg-white shadow-[0_14px_40px_rgba(38,40,42,0.06)]"
      >
        <div className="h-1.5 w-full bg-dialac-green" />

        <div className="p-5 sm:p-7">
          {/* ENCABEZADO */}
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e9eddf] text-dialac-green-dark"
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
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>

            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-dialac-green-dark">
                Datos de contacto
              </p>

              <h2 className="mt-2 font-display text-2xl font-bold text-dialac-charcoal">
                Completa tu información
              </h2>

              <p className="mt-2 text-sm leading-6 text-dialac-charcoal">
                Utilizaremos estos datos para revisar y
                confirmar tu solicitud.
              </p>
            </div>
          </div>

          {/* DATOS PERSONALES */}
          <fieldset data-tour="request-contact" className="mt-8">
            <legend className="font-display text-base font-bold text-dialac-charcoal">
              Información personal
            </legend>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {/* NOMBRE */}
              <div>
                <label
                  htmlFor="request-full-name"
                  className="text-sm font-semibold text-dialac-charcoal"
                >
                  Nombre completo
                  <span
                    aria-hidden="true"
                    className="ml-1 text-dialac-error"
                  >
                    *
                  </span>
                </label>

                <input
                  id="request-full-name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  placeholder="Ej. Sara Acosta"
                  aria-invalid={Boolean(
                    errors.fullName,
                  )}
                  aria-describedby={
                    errors.fullName
                      ? "request-full-name-error"
                      : undefined
                  }
                  {...register("fullName", {
                    required:
                      "Ingresa tu nombre completo.",
                    minLength: {
                      value: 3,
                      message:
                        "El nombre debe tener mínimo 3 caracteres.",
                    },
                    maxLength: {
                      value: 100,
                      message:
                        "El nombre no puede superar 100 caracteres.",
                    },
                    pattern: {
                      value: namePattern,
                      message:
                        "El nombre solo puede contener letras, espacios, guiones y apóstrofes.",
                    },
                    validate: (value) =>
                      value.trim().length >= 3 ||
                      "Ingresa un nombre completo válido.",
                  })}
                  onBeforeInput={(event) =>
                    blockInvalidCharacter(
                      event,
                      namePattern,
                      "fullName",
                      "El nombre solo puede contener letras, espacios, guiones y apóstrofes.",
                    )
                  }
                  onPaste={(event) =>
                    blockInvalidPaste(
                      event,
                      namePattern,
                      "fullName",
                      "El texto pegado contiene caracteres no permitidos.",
                    )
                  }
                  className={`${inputStyles} ${
                    errors.fullName
                      ? errorInputStyles
                      : ""
                  }`}
                />

                {errors.fullName && (
                  <p
                    id="request-full-name-error"
                    role="alert"
                    className="mt-2 text-xs font-semibold text-dialac-error"
                  >
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* EMPRESA */}
              <div>
                <label
                  htmlFor="request-company"
                  className="text-sm font-semibold text-dialac-charcoal"
                >
                  Empresa
                  <span className="ml-2 text-xs font-normal">
                    (opcional)
                  </span>
                </label>

                <input
                  id="request-company"
                  type="text"
                  autoComplete="organization"
                  maxLength={120}
                  placeholder="Nombre de la empresa"
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={
                    errors.company
                      ? "request-company-error"
                      : undefined
                  }
                  {...register("company", {
                    maxLength: {
                      value: 120,
                      message:
                        "El nombre no puede superar 120 caracteres.",
                    },
                    validate: (value) =>
                      value.trim().length === 0 ||
                      companyPattern.test(value) ||
                      "La empresa contiene caracteres no permitidos.",
                  })}
                  onBeforeInput={(event) =>
                    blockInvalidCharacter(
                      event,
                      companyPattern,
                      "company",
                      "La empresa contiene caracteres no permitidos.",
                    )
                  }
                  onPaste={(event) =>
                    blockInvalidPaste(
                      event,
                      companyPattern,
                      "company",
                      "El texto pegado contiene caracteres no permitidos.",
                    )
                  }
                  className={`${inputStyles} ${
                    errors.company
                      ? errorInputStyles
                      : ""
                  }`}
                />

                {errors.company && (
                  <p
                    id="request-company-error"
                    role="alert"
                    className="mt-2 text-xs font-semibold text-dialac-error"
                  >
                    {errors.company.message}
                  </p>
                )}
              </div>

              {/* CELULAR */}
              <div>
                <label
                  htmlFor="request-phone"
                  className="text-sm font-semibold text-dialac-charcoal"
                >
                  Celular
                  <span
                    aria-hidden="true"
                    className="ml-1 text-dialac-error"
                  >
                    *
                  </span>
                </label>

                <input
                  id="request-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  maxLength={20}
                  placeholder="Ej. 300 123 4567"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone
                      ? "request-phone-error"
                      : undefined
                  }
                  {...register("phone", {
                    required:
                      "Ingresa tu número de celular.",
                    maxLength: {
                      value: 20,
                      message:
                        "El número no puede superar 20 caracteres.",
                    },
                    pattern: {
                      value: phonePattern,
                      message:
                        "El celular contiene caracteres no permitidos.",
                    },
                    validate: (value) => {
                      const digitCount =
                        value.replace(/\D/g, "").length;

                      if (
                        digitCount < 7 ||
                        digitCount > 15
                      ) {
                        return "El celular debe contener entre 7 y 15 dígitos.";
                      }

                      const plusSigns =
                        value.match(/\+/g)?.length ?? 0;

                      if (
                        plusSigns > 1 ||
                        (plusSigns === 1 &&
                          !value.trim().startsWith("+"))
                      ) {
                        return "El signo + solamente puede aparecer al inicio.";
                      }

                      return true;
                    },
                  })}
                  onBeforeInput={(event) =>
                    blockInvalidCharacter(
                      event,
                      phoneCharacterPattern,
                      "phone",
                      "El celular solo puede contener números, espacios, paréntesis, guiones y el signo +.",
                    )
                  }
                  onPaste={(event) =>
                    blockInvalidPaste(
                      event,
                      phoneCharacterPattern,
                      "phone",
                      "El número pegado contiene caracteres no permitidos.",
                    )
                  }
                  className={`${inputStyles} ${
                    errors.phone
                      ? errorInputStyles
                      : ""
                  }`}
                />

                {errors.phone && (
                  <p
                    id="request-phone-error"
                    role="alert"
                    className="mt-2 text-xs font-semibold text-dialac-error"
                  >
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* CORREO */}
              <div>
                <label
                  htmlFor="request-email"
                  className="text-sm font-semibold text-dialac-charcoal"
                >
                  Correo electrónico
                  <span
                    aria-hidden="true"
                    className="ml-1 text-dialac-error"
                  >
                    *
                  </span>
                </label>

                <input
                  id="request-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  maxLength={120}
                  placeholder="correo@ejemplo.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email
                      ? "request-email-error"
                      : undefined
                  }
                  {...register("email", {
                    required:
                      "Ingresa tu correo electrónico.",
                    maxLength: {
                      value: 120,
                      message:
                        "El correo no puede superar 120 caracteres.",
                    },
                    pattern: {
                      value: emailPattern,
                      message:
                        "Ingresa un correo electrónico válido.",
                    },
                  })}
                  onBeforeInput={(event) =>
                    blockInvalidCharacter(
                      event,
                      emailCharacterPattern,
                      "email",
                      "El correo no puede contener espacios ni los caracteres < o >.",
                    )
                  }
                  onPaste={(event) =>
                    blockInvalidPaste(
                      event,
                      emailCharacterPattern,
                      "email",
                      "El correo pegado contiene espacios o caracteres no permitidos.",
                    )
                  }
                  className={`${inputStyles} ${
                    errors.email
                      ? errorInputStyles
                      : ""
                  }`}
                />

                {errors.email && (
                  <p
                    id="request-email-error"
                    role="alert"
                    className="mt-2 text-xs font-semibold text-dialac-error"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
          </fieldset>

          <div className="my-8 h-px bg-dialac-border" />

          {/* ENTREGA */}
          <fieldset data-tour="request-delivery">
            <legend className="font-display text-base font-bold text-dialac-charcoal">
              Entrega y fecha
            </legend>

            {/* MÉTODO */}
            <div className="mt-5">
              <p className="text-sm font-semibold text-dialac-charcoal">
                ¿Cómo deseas recibir tu solicitud?
              </p>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    value="domicilio"
                    {...register("deliveryMethod", {
                      required:
                        "Selecciona un método de entrega.",
                      validate: (value) =>
                        value === "domicilio" ||
                        value === "recogida" ||
                        "Selecciona un método de entrega válido.",
                    })}
                    className="peer sr-only"
                  />

                  <span className="flex min-h-20 items-center gap-3 rounded-xl border border-dialac-border bg-white p-4 text-dialac-charcoal transition peer-checked:border-dialac-brown peer-checked:bg-[#f4e8de] peer-focus-visible:ring-4 peer-focus-visible:ring-dialac-brown/20">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f4e8de] text-dialac-brown-dark"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M3 10h11v8H3z" />
                        <path d="M14 13h4l3 3v2h-7z" />
                        <circle cx="7" cy="19" r="2" />
                        <circle cx="18" cy="19" r="2" />
                      </svg>
                    </span>

                    <span className="font-display text-sm font-bold">
                      Domicilio
                    </span>
                  </span>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    value="recogida"
                    {...register("deliveryMethod")}
                    className="peer sr-only"
                  />

                  <span className="flex min-h-20 items-center gap-3 rounded-xl border border-dialac-border bg-white p-4 text-dialac-charcoal transition peer-checked:border-dialac-green peer-checked:bg-[#e9eddf] peer-focus-visible:ring-4 peer-focus-visible:ring-dialac-green/20">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e9eddf] text-dialac-green-dark"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M4 10h16" />
                        <path d="M5 10V6h14v4" />
                        <path d="M6 10v10h12V10" />
                        <path d="M9 14h6" />
                      </svg>
                    </span>

                    <span className="font-display text-sm font-bold">
                      Recogida
                    </span>
                  </span>
                </label>
              </div>

              {errors.deliveryMethod && (
                <p
                  role="alert"
                  className="mt-2 text-xs font-semibold text-dialac-error"
                >
                  {errors.deliveryMethod.message}
                </p>
              )}

              {/* INFORMACIÓN DEL MÉTODO DE ENTREGA */}
              <AnimatePresence mode="wait" initial={false}>
                {deliveryMethod === "domicilio" && (
                  <motion.div
                    key="domicilio-information"
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            height: 0,
                            y: -8,
                          }
                    }
                    animate={{
                      opacity: 1,
                      height: "auto",
                      y: 0,
                    }}
                    exit={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            height: 0,
                            y: -8,
                          }
                    }
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 overflow-hidden rounded-2xl border border-dialac-border bg-[#f7f2eb]">
                      <div className="flex flex-col sm:flex-row sm:items-stretch">
                        <div className="relative flex items-center gap-3 overflow-hidden bg-dialac-brown px-5 py-4 text-white sm:min-w-[190px]">
                          <div
                            aria-hidden="true"
                            className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full border-[20px] border-white/10"
                          />

                          <span
                            aria-hidden="true"
                            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M3 7h11v10H3Z" />
                              <path d="M14 10h4l3 3v4h-7Z" />
                              <circle cx="7" cy="18" r="2" />
                              <circle cx="18" cy="18" r="2" />
                            </svg>
                          </span>

                          <p className="relative font-display text-sm font-bold uppercase tracking-[0.16em]">
                            Domicilio
                          </p>
                        </div>

                        <div className="relative flex-1 overflow-hidden px-5 py-4">
                          <div
                            aria-hidden="true"
                            className="absolute -right-12 -top-12 h-32 w-32 rounded-full border-[22px] border-white/60"
                          />

                          <div className="relative">
                            <p className="font-display font-bold text-dialac-charcoal">
                              Entregas en Bogotá, Chía y Cajicá
                            </p>

                            <p className="mt-1 text-sm leading-6 text-dialac-charcoal">
                              El domicilio está sujeto a cobertura,
                              disponibilidad y posible costo adicional.
                            </p>

                            <p className="mt-1 text-xs font-semibold leading-5 text-dialac-brown-dark">
                              DIALAC confirmará las condiciones antes de
                              confirmar el pedido.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {deliveryMethod === "recogida" && (
  <motion.div
    key="recogida-information"
    initial={
      reduceMotion
        ? false
        : {
            opacity: 0,
            height: 0,
            y: -8,
          }
    }
    animate={{
      opacity: 1,
      height: "auto",
      y: 0,
    }}
    exit={
      reduceMotion
        ? undefined
        : {
            opacity: 0,
            height: 0,
            y: -8,
          }
    }
    transition={{
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="overflow-hidden"
  >
    <div className="mt-4 overflow-hidden rounded-2xl border border-dialac-green/40 bg-[#eef2e5]">
      <div className="flex flex-col sm:flex-row sm:items-stretch">
        <div className="relative flex items-center gap-3 overflow-hidden bg-dialac-green-dark px-5 py-4 text-white sm:min-w-[190px]">
          <div
            aria-hidden="true"
            className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full border-[20px] border-white/10"
          />

          <span
            aria-hidden="true"
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M4 10h16" />
              <path d="M5 10V6h14v4" />
              <path d="M6 10v10h12V10" />
              <path d="M9 14h6" />
            </svg>
          </span>

          <p className="relative font-display text-sm font-bold uppercase tracking-[0.16em]">
            Recogida
          </p>
        </div>

        <div className="relative flex-1 overflow-hidden px-5 py-4">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-12 h-32 w-32 rounded-full border-[22px] border-white/60"
          />

          <div className="relative">
            <p className="font-display font-bold text-dialac-charcoal">
              Recoge tu pedido en nuestra sede
            </p>

            <p className="mt-1 text-sm leading-6 text-dialac-charcoal">
              Calle 6 #2B-45, Chía, Cundinamarca.
            </p>

            <p className="mt-1 text-xs font-semibold leading-5 text-dialac-green-dark">
              DIALAC confirmará la disponibilidad y el horario de
              recogida antes de confirmar el pedido.
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)}
              </AnimatePresence>
            </div>

            <div
              data-tour="request-date-address"
              className="mt-5 grid gap-5 sm:grid-cols-2"
            >
              {/* CIUDAD */}
              <div>
                <label
                  htmlFor="request-city"
                  className="text-sm font-semibold text-dialac-charcoal"
                >
                  Ciudad o municipio
                  <span
                    aria-hidden="true"
                    className="ml-1 text-dialac-error"
                  >
                    *
                  </span>
                </label>

                <select
                  id="request-city"
                  autoComplete="address-level2"
                  aria-invalid={Boolean(errors.city)}
                  aria-describedby={
                    errors.city
                      ? "request-city-error"
                      : undefined
                  }
                  {...register("city", {
                    required:
                      "Selecciona la ciudad o municipio.",
                    validate: (value) =>
                      isRequestCity(value) ||
                      "Selecciona una ciudad disponible.",
                  })}
                  className={`${inputStyles} cursor-pointer appearance-none pr-12 ${
                    errors.city
                      ? errorInputStyles
                      : ""
                  }`}
                >
                  <option value="">
                    Selecciona una ciudad
                  </option>

                  {requestCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                {errors.city && (
                  <p
                    id="request-city-error"
                    role="alert"
                    className="mt-2 text-xs font-semibold text-dialac-error"
                  >
                    {errors.city.message}
                  </p>
                )}
              </div>

              {/* FECHA */}
              <div>
                <label
                  htmlFor="request-date"
                  className="text-sm font-semibold text-dialac-charcoal"
                >
                  Fecha requerida
                  <span
                    aria-hidden="true"
                    className="ml-1 text-dialac-error"
                  >
                    *
                  </span>
                </label>

                <Controller
                  name="requiredDate"
                  control={control}
                  rules={{
                    required:
                      "Selecciona la fecha requerida.",
                    validate: validateRequestDate,
                  }}
                  render={({ field }) => (
                    <RequestDatePicker
                      value={field.value}
                      minimumDate={minimumRequestDate}
                      hasError={Boolean(
                        errors.requiredDate,
                      )}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                    />
                  )}
                />

                {errors.requiredDate ? (
                  <p
                    id="request-date-error"
                    role="alert"
                    className="mt-2 text-xs font-semibold text-dialac-error"
                  >
                    {errors.requiredDate.message}
                  </p>
                ) : (
                  <p
                    id="request-date-help"
                    className="mt-2 text-xs text-dialac-charcoal"
                  >
                    Disponible desde el tercer día hábil.
                    DIALAC trabaja de lunes a sábado y no
                    recibe solicitudes para domingos.
                  </p>
                )}
              </div>
            </div>

            {/* DIRECCIÓN */}
            <div className="mt-5">
              <label
                htmlFor="request-address"
                className="text-sm font-semibold text-dialac-charcoal"
              >
                Dirección
                {deliveryMethod === "domicilio" ? (
                  <span
                    aria-hidden="true"
                    className="ml-1 text-dialac-error"
                  >
                    *
                  </span>
                ) : (
                  <span className="ml-2 text-xs font-normal">
                    (opcional para recogida)
                  </span>
                )}
              </label>

              <input
                id="request-address"
                type="text"
                autoComplete="street-address"
                maxLength={180}
                placeholder="Dirección y detalles de ubicación"
                aria-invalid={Boolean(errors.address)}
                aria-describedby={
                  errors.address
                    ? "request-address-error"
                    : undefined
                }
                {...register("address", {
                  validate: (value) => {
                    const normalizedValue = value.trim();

                    if (
                      deliveryMethod === "domicilio" &&
                      normalizedValue.length === 0
                    ) {
                      return "Ingresa la dirección de entrega.";
                    }

                    if (value.length > 180) {
                      return "La dirección no puede superar 180 caracteres.";
                    }

                    if (
                      normalizedValue.length > 0 &&
                      !addressPattern.test(value)
                    ) {
                      return "La dirección contiene caracteres no permitidos.";
                    }

                    return true;
                  },
                })}
                onBeforeInput={(event) =>
                  blockInvalidCharacter(
                    event,
                    addressPattern,
                    "address",
                    "La dirección contiene caracteres no permitidos.",
                  )
                }
                onPaste={(event) =>
                  blockInvalidPaste(
                    event,
                    addressPattern,
                    "address",
                    "La dirección pegada contiene caracteres no permitidos.",
                  )
                }
                className={`${inputStyles} ${
                  errors.address
                    ? errorInputStyles
                    : ""
                }`}
              />

              {errors.address && (
                <p
                  id="request-address-error"
                  role="alert"
                  className="mt-2 text-xs font-semibold text-dialac-error"
                >
                  {errors.address.message}
                </p>
              )}
            </div>
          </fieldset>

          <div className="my-8 h-px bg-dialac-border" />

          {/* OBSERVACIONES */}
          <div>
            <label
              htmlFor="request-notes"
              className="font-display text-base font-bold text-dialac-charcoal"
            >
              Observaciones
              <span className="ml-2 text-xs font-normal">
                (opcional)
              </span>
            </label>

            <p className="mt-1 text-sm leading-6 text-dialac-charcoal">
              Cuéntanos sobre sabores, cantidades, horarios o
              requerimientos especiales.
            </p>

            <textarea
              id="request-notes"
              rows={5}
              maxLength={600}
              placeholder="Escribe aquí cualquier información adicional..."
              aria-invalid={Boolean(errors.notes)}
              aria-describedby={
                errors.notes
                  ? "request-notes-error"
                  : "request-notes-help"
              }
              {...register("notes", {
                maxLength: {
                  value: 600,
                  message:
                    "Las observaciones no pueden superar 600 caracteres.",
                },
                validate: (value) =>
                  value.length === 0 ||
                  notesCharacterPattern.test(value) ||
                  "Las observaciones no pueden contener los caracteres < o >.",
              })}
              onBeforeInput={(event) =>
                blockInvalidCharacter(
                  event,
                  notesCharacterPattern,
                  "notes",
                  "Las observaciones no pueden contener los caracteres < o >.",
                )
              }
              onPaste={(event) =>
                blockInvalidPaste(
                  event,
                  notesCharacterPattern,
                  "notes",
                  "El texto pegado contiene los caracteres < o >.",
                )
              }
              className={`mt-3 w-full resize-y rounded-xl border border-dialac-border bg-white px-4 py-3 leading-7 text-dialac-charcoal outline-none transition placeholder:text-slate-500 focus:border-dialac-brown focus:ring-4 focus:ring-dialac-brown/10 ${
                errors.notes
                  ? errorInputStyles
                  : ""
              }`}
            />

            {errors.notes ? (
              <p
                id="request-notes-error"
                role="alert"
                className="mt-2 text-xs font-semibold text-dialac-error"
              >
                {errors.notes.message}
              </p>
            ) : (
              <p
                id="request-notes-help"
                className="mt-2 text-right text-xs text-dialac-charcoal"
              >
                Máximo 600 caracteres.
              </p>
            )}
          </div>

          {/* ENVÍO */}
          <button
            data-tour="request-submit"
            type="submit"
            disabled={isSubmitting || isConfirming}
            className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-dialac-brown px-5 py-3.5 font-semibold text-white outline-none transition hover:bg-dialac-brown-dark focus-visible:ring-4 focus-visible:ring-dialac-brown/30 disabled:cursor-not-allowed disabled:bg-[#6f6f6f]"
          >
            {isSubmitting || isConfirming
              ? "Generando solicitud..."
              : "Revisar y generar solicitud"}

            {!isSubmitting && !isConfirming && (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            )}
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-dialac-charcoal">
            Enviar el formulario todavía no confirma el pedido.
            DIALAC revisará la disponibilidad y se comunicará
            contigo.
          </p>
        </div>
      </form>

      {/* CONFIRMACIÓN FINAL */}
      <AnimatePresence>
        {pendingFormData && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="request-confirmation-title"
            aria-describedby="request-confirmation-description"
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
            exit={
              reduceMotion
                ? undefined
                : {
                    opacity: 0,
                  }
            }
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dialac-charcoal/60 px-4 py-8 backdrop-blur-sm"
            onClick={cancelConfirmation}
          >
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                      scale: 0.96,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: 16,
                      scale: 0.97,
                    }
              }
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="max-h-full w-full max-w-lg overflow-y-auto rounded-[1.75rem] border border-dialac-border bg-white p-6 shadow-2xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f4e8de] text-dialac-brown-dark"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                  >
                    <path d="M12 22a10 10 0 1 0-10-10" />
                    <path d="M8 12l3 3 6-7" />
                  </svg>
                </span>

                <button
                  type="button"
                  onClick={cancelConfirmation}
                  disabled={
                    isSubmitting || isConfirming
                  }
                  aria-label="Cerrar confirmación"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-dialac-charcoal transition hover:bg-[#f4f0e9] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/20 disabled:cursor-not-allowed disabled:opacity-50"
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

              <p className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-dialac-brown-dark">
                Confirmación final
              </p>

              <h2
                id="request-confirmation-title"
                className="mt-2 font-display text-2xl font-bold text-dialac-charcoal sm:text-3xl"
              >
                ¿Generar y enviar esta solicitud?
              </h2>

              <p
                id="request-confirmation-description"
                className="mt-3 leading-7 text-dialac-charcoal"
              >
                Al continuar, se generará el documento y será
                enviado al equipo DIALAC para su revisión.
              </p>

              {/* RESUMEN */}
              <dl className="mt-6 overflow-hidden rounded-2xl border border-dialac-border bg-[#faf8f4]">
                <div className="flex items-start justify-between gap-4 border-b border-dialac-border px-4 py-3">
                  <dt className="text-sm text-dialac-charcoal">
                    Solicitante
                  </dt>
                  <dd className="max-w-[65%] text-right text-sm font-semibold text-dialac-charcoal">
                    {pendingFormData.fullName}
                  </dd>
                </div>

                <div className="flex items-start justify-between gap-4 border-b border-dialac-border px-4 py-3">
                  <dt className="text-sm text-dialac-charcoal">
                    Celular
                  </dt>
                  <dd className="max-w-[65%] break-words text-right text-sm font-semibold text-dialac-charcoal">
                    {pendingFormData.phone}
                  </dd>
                </div>

                <div className="flex items-start justify-between gap-4 border-b border-dialac-border px-4 py-3">
                  <dt className="text-sm text-dialac-charcoal">
                    Correo
                  </dt>
                  <dd className="max-w-[65%] break-all text-right text-sm font-semibold text-dialac-charcoal">
                    {pendingFormData.email}
                  </dd>
                </div>

                <div className="flex items-start justify-between gap-4 border-b border-dialac-border px-4 py-3">
                  <dt className="text-sm text-dialac-charcoal">
                    Fecha requerida
                  </dt>
                  <dd className="max-w-[65%] text-right text-sm font-semibold capitalize text-dialac-charcoal">
                    {formattedRequiredDate}
                  </dd>
                </div>

                <div className="flex items-start justify-between gap-4 border-b border-dialac-border px-4 py-3">
                  <dt className="text-sm text-dialac-charcoal">
                    Entrega
                  </dt>
                  <dd className="max-w-[65%] text-right text-sm font-semibold text-dialac-charcoal">
                    {pendingFormData.deliveryMethod ===
                    "domicilio"
                      ? "Domicilio"
                      : "Recogida"}
                  </dd>
                </div>

                <div className="flex items-start justify-between gap-4 border-b border-dialac-border px-4 py-3">
                  <dt className="text-sm text-dialac-charcoal">
                    Ciudad
                  </dt>
                  <dd className="max-w-[65%] text-right text-sm font-semibold text-dialac-charcoal">
                    {pendingFormData.city}
                  </dd>
                </div>

                <div className="flex items-start justify-between gap-4 px-4 py-3">
                  <dt className="text-sm text-dialac-charcoal">
                    Dirección
                  </dt>
                  <dd className="max-w-[65%] break-words text-right text-sm font-semibold text-dialac-charcoal">
                    {pendingFormData.deliveryMethod ===
                    "domicilio"
                      ? pendingFormData.address
                      : "No aplica para recogida"}
                  </dd>
                </div>
              </dl>

              {/* ADVERTENCIA */}
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-dialac-border bg-[#f4e8de] p-4">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-dialac-brown-dark"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v5" />
                    <path d="M12 17h.01" />
                  </svg>
                </span>

                <div>
                  <p className="font-display text-sm font-bold text-dialac-charcoal">
                    Revisa los datos antes de continuar
                  </p>

                  <p className="mt-1 text-xs leading-5 text-dialac-charcoal">
                    Después del envío no podrás modificar esta
                    solicitud. El envío todavía no confirma el
                    pedido; DIALAC revisará disponibilidad,
                    cantidades y fecha.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={cancelConfirmation}
                  disabled={
                    isSubmitting || isConfirming
                  }
                  className="inline-flex items-center justify-center rounded-xl border border-dialac-border px-5 py-3 font-semibold text-dialac-charcoal transition hover:bg-[#f7f5f1] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  onClick={confirmSubmission}
                  disabled={
                    isSubmitting || isConfirming
                  }
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-dialac-brown px-5 py-3 font-semibold text-white transition hover:bg-dialac-brown-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/30 disabled:cursor-not-allowed disabled:bg-[#6f6f6f]"
                >
                  {isSubmitting || isConfirming
                    ? "Generando solicitud..."
                    : "Sí, generar y enviar"}

                  {!isSubmitting && !isConfirming && (
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
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default RequestForm;

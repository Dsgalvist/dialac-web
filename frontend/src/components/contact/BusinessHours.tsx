const businessHours = [
  { day: "Lunes", hours: "8:00 a. m. – 6:00 p. m." },
  { day: "Martes", hours: "8:00 a. m. – 6:00 p. m." },
  { day: "Miércoles", hours: "8:00 a. m. – 6:00 p. m." },
  { day: "Jueves", hours: "8:00 a. m. – 6:00 p. m." },
  { day: "Viernes", hours: "8:00 a. m. – 6:00 p. m." },
  { day: "Sábado", hours: "8:00 a. m. – 1:00 p. m." },
];

function BusinessHours() {
  return (
    <section className="mt-14 overflow-hidden rounded-xl border border-dialac-border bg-white">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dialac-green-dark">
            Horarios de atención
          </p>

          <h2 className="mt-2 font-display text-3xl font-bold text-dialac-charcoal">
            Estamos disponibles para ayudarte
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-dialac-charcoal">
            Puedes realizar tu solicitud en cualquier momento desde nuestra
            página web. Nuestro equipo la revisará y se comunicará contigo
            dentro de los siguientes horarios de atención.
          </p>

          <dl className="mt-8 divide-y divide-dialac-border">
            {businessHours.map((schedule) => (
              <div
                key={schedule.day}
                className="flex items-center justify-between gap-4 py-4"
              >
                <dt className="font-semibold text-dialac-charcoal">
                  {schedule.day}
                </dt>

                <dd className="text-right text-dialac-charcoal">
                  {schedule.hours}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="flex items-center bg-dialac-green p-6 text-white sm:p-8 lg:p-10">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-dialac-green-dark">
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
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Información importante
            </p>

            <h3 className="mt-2 font-display text-2xl font-bold text-white">
              Solicita tu pedido con anticipación
            </h3>

            <p className="mt-4 leading-7 text-white">
              Puedes enviar tu solicitud a cualquier hora, todos los días.
              Nuestro equipo se comunicará contigo dentro del horario de
              atención para confirmar los detalles.
            </p>

            <div className="mt-6 rounded-xl border border-white/40 bg-white p-5 text-dialac-charcoal">
              <p className="font-display font-bold text-dialac-charcoal">
                Mínimo 3 días de anticipación
              </p>

              <p className="mt-2 text-sm leading-6 text-dialac-charcoal">
                El pedido debe solicitarse al menos 3 días antes de la fecha en
                la que se requiere.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default BusinessHours;
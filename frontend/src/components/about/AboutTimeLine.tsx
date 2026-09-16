import { useState } from "react";

const timelineEvents = [
  {
    year: "2009",
    title: "Nacimiento de DIALAC",
    description:
      "DIALAC nace como una empresa familiar, con el propósito de ofrecer productos de calidad, buen sabor y una atención cercana y personalizada.",
  },
  {
    year: "2019",
    title: "Crecimiento y consolidación",
    description:
      "Después de una década de trabajo, DIALAC alcanza una importante etapa de crecimiento, fortaleciendo sus ventas, ampliando su variedad de productos y llegando a nuevos clientes.",
  },
  {
    year: "2020",
    title: "Pausa por la pandemia",
    description:
      "Con la llegada de la pandemia, DIALAC se ve obligada a cerrar temporalmente sus puertas, poniendo en pausa sus operaciones después de años de crecimiento.",
  },
  {
    year: "2026",
    title: "Un nuevo comienzo",
    description:
      "DIALAC abre nuevamente sus puertas, iniciando una nueva etapa como empresa familiar con una imagen renovada, una oferta más amplia y nuevas experiencias, manteniendo la esencia que la ha caracterizado desde 2009: calidad, cercanía y buen sabor.",
  },
];

function AboutTimeline() {
  const [selectedEvent, setSelectedEvent] = useState(0);
  const activeEvent = timelineEvents[selectedEvent];

  const progress =
    (selectedEvent / (timelineEvents.length - 1)) * 100;

  const showPreviousEvent = () => {
    setSelectedEvent((current) => Math.max(current - 1, 0));
  };

  const showNextEvent = () => {
    setSelectedEvent((current) =>
      Math.min(current + 1, timelineEvents.length - 1),
    );
  };

  return (
    <section className="bg-dialac-cream px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold tracking-[0.15em] text-dialac-brown">
            NUESTRA TRAYECTORIA
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold text-dialac-charcoal">
            Una historia que continúa creciendo
          </h2>

          <p className="mt-5 text-lg leading-8 text-dialac-charcoal">
            Cada etapa ha contribuido a construir la esencia y el propósito
            que hoy representan a DIALAC.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-dialac-border bg-white shadow-xl">
          <div className="hidden px-10 pb-10 pt-12 md:block">
            <div className="relative">
              <div className="absolute left-[12.5%] right-[12.5%] top-5 h-1 rounded-full bg-dialac-border">
                <div
                  className="h-full rounded-full bg-dialac-brown transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="relative grid grid-cols-4">
                {timelineEvents.map((event, index) => {
                  const isSelected = selectedEvent === index;
                  const isCompleted = index <= selectedEvent;

                  return (
                    <button
                      key={event.year}
                      type="button"
                      aria-pressed={isSelected}
                      aria-controls="timeline-details"
                      onClick={() => setSelectedEvent(index)}
                      className="group flex flex-col items-center px-3 text-center"
                    >
                      <span
                        aria-hidden="true"
                        className={`z-10 flex h-11 w-11 items-center justify-center rounded-full border-4 transition ${
                          isCompleted
                            ? "border-dialac-brown bg-dialac-brown text-white"
                            : "border-dialac-border bg-white text-dialac-charcoal"
                        }`}
                      >
                        {index + 1}
                      </span>

                      <span
                        className={`mt-5 font-display text-2xl font-bold ${
                          isSelected
                            ? "text-dialac-brown"
                            : "text-dialac-charcoal"
                        }`}
                      >
                        {event.year}
                      </span>

                      <span className="mt-2 font-semibold text-dialac-charcoal">
                        {event.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-3 border-b border-dialac-border p-5 md:hidden">
            {timelineEvents.map((event, index) => {
              const isSelected = selectedEvent === index;

              return (
                <button
                  key={event.year}
                  type="button"
                  aria-pressed={isSelected}
                  aria-controls="timeline-details"
                  onClick={() => setSelectedEvent(index)}
                  className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                    isSelected
                      ? "border-dialac-brown bg-dialac-brown text-white"
                      : "border-dialac-border bg-white text-dialac-charcoal"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display font-bold ${
                      isSelected
                        ? "bg-white text-dialac-brown"
                        : "bg-dialac-cream text-dialac-charcoal"
                    }`}
                  >
                    {event.year.slice(-2)}
                  </span>

                  <span>
                    <span className="block font-display text-lg font-bold">
                      {event.year}
                    </span>

                    <span className="mt-1 block">{event.title}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <article
            id="timeline-details"
            aria-live="polite"
            className="grid border-t border-dialac-border lg:grid-cols-[0.7fr_1.3fr]"
          >
            <div className="flex min-h-64 flex-col justify-between bg-dialac-charcoal p-8 text-white sm:p-10">
              <p className="font-display text-sm font-semibold tracking-[0.15em]">
                HITO {selectedEvent + 1} DE {timelineEvents.length}
              </p>

              <p className="font-display text-6xl font-bold">
                {activeEvent.year}
              </p>
            </div>

            <div className="flex flex-col justify-between p-8 sm:p-10">
              <div>
                <h3 className="font-display text-2xl font-bold text-dialac-charcoal">
                  {activeEvent.title}
                </h3>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-dialac-charcoal">
                  {activeEvent.description}
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={showPreviousEvent}
                  disabled={selectedEvent === 0}
                  className="rounded-lg border-2 border-dialac-charcoal px-5 py-3 font-semibold text-dialac-charcoal transition hover:bg-dialac-charcoal hover:text-white disabled:cursor-not-allowed disabled:border-dialac-border disabled:bg-dialac-cream"
                >
                  ← Anterior
                </button>

                <button
                  type="button"
                  onClick={showNextEvent}
                  disabled={selectedEvent === timelineEvents.length - 1}
                  className="rounded-lg bg-dialac-brown px-5 py-3 font-semibold text-white transition hover:bg-dialac-brown-dark disabled:cursor-not-allowed disabled:bg-dialac-charcoal"
                >
                  Siguiente →
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutTimeline;
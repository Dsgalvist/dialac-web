function LocationMap() {
  return (
    <section className="mt-14">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dialac-green-dark">
          Visítanos
        </p>

        <h2 className="mt-2 font-display text-3xl font-bold text-dialac-charcoal">
          Nuestra ubicación en Chía
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-dialac-charcoal">
          Encuéntranos en la Calle 6 #2B-45, Chía, Cundinamarca.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-dialac-border bg-white">
        <div className="min-h-[420px]">
          <iframe
            title="Ubicación de DIALAC en Chía"
            src="https://www.google.com/maps?q=Calle%206%20%232B-45%20Chia%20Cundinamarca&output=embed"
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-dialac-border p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-dialac-charcoal">
              DIALAC
            </h3>

            <p className="mt-1 text-dialac-charcoal">
              Calle 6 #2B-45 · Chía, Cundinamarca
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Calle+6+%232B-45+Chia+Cundinamarca"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-dialac-brown px-5 py-3 font-semibold text-dialac-brown-dark transition hover:bg-dialac-brown hover:text-white"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;
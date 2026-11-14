import { useEffect, useId, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { getLatestGoogleReviews, googleReviews } from "../../data/googleReviews";

const reviews = getLatestGoogleReviews(googleReviews);
const mapsUrl = import.meta.env.VITE_GOOGLE_MAPS_URL ||
  "https://maps.app.goo.gl/yVdxLVknbsyQfKbc7";
const writeUrl = import.meta.env.VITE_GOOGLE_WRITE_REVIEW_URL ||
  "https://g.page/r/CSpeBWRvPuJ9EBM/review";
const googleRating = 4.4;
const googleRatingCount = 16;

function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="size-5 shrink-0">
      <path fill="#4285F4" d="M43.61 24.46c0-1.36-.12-2.67-.34-3.93H24v7.44h11a9.4 9.4 0 0 1-4.08 6.17v5.13h6.62c3.87-3.57 6.07-8.83 6.07-14.81Z" />
      <path fill="#34A853" d="M24 44c5.51 0 10.13-1.83 13.54-4.73l-6.62-5.13c-1.83 1.23-4.17 1.96-6.92 1.96-5.32 0-9.84-3.59-11.46-8.42H5.71v5.29A20 20 0 0 0 24 44Z" />
      <path fill="#FBBC05" d="M12.54 27.68a12 12 0 0 1 0-7.36v-5.29H5.71a20 20 0 0 0 0 17.94l6.83-5.29Z" />
      <path fill="#EA4335" d="M24 11.9c3 0 5.69 1.03 7.82 3.06l5.86-5.86A19.3 19.3 0 0 0 24 4 20 20 0 0 0 5.71 15.03l6.83 5.29C14.16 15.49 18.68 11.9 24 11.9Z" />
    </svg>
  );
}

const controlClass = "grid size-11 place-items-center rounded-full border border-[#f1bd8d] bg-[#fff4e7] text-[#542b20] transition-colors hover:bg-[#f8ceaa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function ReviewsSection({ prioritizeWriting = false }: { prioritizeWriting?: boolean }) {
  const headingId = useId();
  const patternId = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [tabVisible, setTabVisible] = useState(() => !document.hidden);
  const [width, setWidth] = useState(() => window.innerWidth);
  const [index, setIndex] = useState(0);
  const mobile = width < 640;
  const visibleCount = mobile ? 1 : width < 1024 ? 2 : 3;
  const delay = width < 640 ? 3000 : 4000;
  const lastIndex = Math.max(0, reviews.length - visibleCount);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.25),
      { threshold: 0.25 },
    );
    const onResize = () => setWidth(window.innerWidth);
    const onVisibilityChange = () => setTabVisible(!document.hidden);
    observer.observe(section);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!visible || !tabVisible || paused || interacting || reducedMotion || !lastIndex) return;
    const timer = window.setTimeout(() => {
      setIndex((current) => current >= lastIndex ? 0 : current + 1);
    }, delay);
    return () => window.clearTimeout(timer);
  }, [visible, tabVisible, paused, interacting, reducedMotion, lastIndex, delay, index]);

  useEffect(() => {
    const track = trackRef.current;
    const target = track?.children[Math.min(index, lastIndex)];
    const first = track?.firstElementChild;
    if (!track || !target || !first) return;
    track.scrollTo({
      left: target.getBoundingClientRect().left - first.getBoundingClientRect().left,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }, [index, lastIndex, visibleCount, reducedMotion]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !mobile) return;

    const cards = Array.from(track.children) as HTMLElement[];
    const fitVisibleCard = () => {
      const edge = track.getBoundingClientRect().left;
      let closest: HTMLElement | undefined;
      let distance = Infinity;
      for (const card of cards) {
        const offset = Math.abs(card.getBoundingClientRect().left - edge);
        if (offset < distance) {
          distance = offset;
          closest = card;
        }
      }
      if (closest) track.style.height = `${Math.ceil(closest.getBoundingClientRect().height)}px`;
    };
    const observer = new ResizeObserver(fitVisibleCard);
    cards.forEach((card) => observer.observe(card));
    fitVisibleCard();
    track.addEventListener("scroll", fitVisibleCard, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", fitVisibleCard);
      track.style.removeProperty("height");
    };
  }, [mobile]);

  const primaryUrl = prioritizeWriting ? writeUrl : mapsUrl;
  const secondaryUrl = prioritizeWriting ? mapsUrl : writeUrl;
  const primaryLabel = prioritizeWriting ? "Dejar una reseña" : "Ver todas en Google";
  const secondaryLabel = prioritizeWriting ? "Ver todas en Google" : "Dejar una reseña";

  return (
    <section ref={sectionRef} aria-labelledby={headingId} className="relative isolate overflow-hidden bg-[#542b20] px-4 py-12 text-[#fff8ef] sm:px-6 lg:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,#ad593b_0%,transparent_57%),linear-gradient(120deg,#422219_8%,#693723_70%,#843e2c_100%)]" />
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 size-full opacity-[0.15]">
        <defs>
          <pattern id={patternId} width="128" height="112" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="#ffce9e" strokeWidth="1.5" transform="translate(24 22) rotate(-34)">
              <ellipse rx="8" ry="13" />
              <path d="M0-12C-7-4 7 4 0 12" />
            </g>
            <g fill="none" stroke="#ffce9e" strokeWidth="1.5" transform="translate(92 79) rotate(36)">
              <ellipse rx="6" ry="10" />
              <path d="M0-9C-5-3 5 3 0 9" />
            </g>
            <circle cx="99" cy="28" r="1.5" fill="#ffce9e" />
            <circle cx="43" cy="86" r="1.5" fill="#ffce9e" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-b border-[#f6c9a2]/40 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ffe0bf]"><span aria-hidden="true" className="h-px w-6 bg-[#f7bf88]" /> DIALAC · Opiniones de clientes</p>
            <h2 id={headingId} className="mt-3 font-display text-3xl font-bold text-[#fff8ef] sm:text-4xl">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <a href={mapsUrl} className="inline-flex w-fit items-center gap-3 rounded-2xl border border-[#f1bd8d] bg-[#fff4e7] px-4 py-3 text-dialac-charcoal transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <GoogleMark />
            <div>
              <p className="text-sm font-semibold">Opiniones en Google</p>
              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                <strong>{googleRating.toFixed(1)}<span className="sr-only"> de 5 estrellas</span></strong>
                <span aria-hidden="true" className="inline-flex gap-0.5">
                  {Array.from({ length: 5 }, (_, index) => {
                    const fill = Math.round(100 * Math.min(1, Math.max(0, googleRating - index)));
                    return (
                      <span key={index} className="relative inline-block leading-none text-[#c9bdb0]">
                        ★
                        <span className="absolute inset-y-0 left-0 overflow-hidden text-[#8a4d06]" style={{ width: `${fill}%` }}>★</span>
                      </span>
                    );
                  })}
                </span>
                <span className="text-xs">({googleRatingCount} reseñas)</span>
              </div>
              <p className="mt-1 text-xs">{reviews.length} reseñas recientes en esta página</p>
            </div>
          </a>
        </div>
        {reviews.length > 0 ? (
          <>
            <ul
              ref={trackRef}
              onPointerEnter={(event) => { if (event.pointerType === "mouse") setInteracting(true); }}
              onPointerLeave={() => setInteracting(false)}
              onPointerDown={(event) => { if (event.pointerType === "touch") setPaused(true); }}
              className="mt-6 grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col items-start gap-2 overflow-x-auto overflow-y-hidden overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:auto-cols-[calc((100%_-_1rem)/2)] sm:items-stretch sm:gap-4 lg:auto-cols-[calc((100%_-_2rem)/3)]"
            >
              {reviews.map((review) => (
                <li key={review.id} className="flex min-w-0 snap-start flex-col rounded-2xl border border-[#eac5a5] border-t-4 border-t-[#e4a36e] bg-[#fffaf3] p-3 text-dialac-charcoal sm:p-5">
                  <div className="flex items-start justify-between gap-1 sm:gap-3">
                    <p aria-label={`${review.rating} de 5 estrellas`} className="tracking-wider text-[#8a4d06]">
                      <span aria-hidden="true">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span>
                    </p>
                    <span aria-hidden="true" className="hidden font-serif text-3xl leading-none text-dialac-brown-dark sm:inline">“</span>
                  </div>
                  {review.text ? (
                    <blockquote className="mb-4 mt-3 whitespace-pre-line break-words text-sm leading-6">{review.text}</blockquote>
                  ) : (
                    <p className="mb-4 mt-3 text-sm text-[#64554b]">Valoración sin comentario</p>
                  )}
                  <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-dialac-border pt-3 sm:gap-3">
                    {review.avatar ? (
                      <img
                        src={`${import.meta.env.BASE_URL}review-avatars/${review.avatar}`}
                        alt=""
                        width={40}
                        height={40}
                        loading="lazy"
                        className="size-10 shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full bg-dialac-brown-dark text-sm font-bold text-white">
                        {review.author.trim().charAt(0).toLocaleUpperCase("es-CO")}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p className="break-words text-sm font-bold">{review.author}</p>
                      {review.publishedAt && <time dateTime={review.publishedAt} className="block text-xs">
                        {new Date(review.publishedAt).toLocaleDateString("es-CO", { timeZone: "UTC" })}
                      </time>}
                    </div>
                  </div>
                  {review.reply && (
                    <div className="mt-4 min-w-0 border-l-2 border-[#eac5a5] pl-2 sm:ml-2 sm:pl-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <img
                          src={`${import.meta.env.BASE_URL}review-avatars/dialac.png`}
                          alt=""
                          width={32}
                          height={32}
                          loading="lazy"
                          className="size-8 shrink-0 rounded-full border border-[#eac5a5] bg-white object-cover"
                        />
                        <p className="text-xs font-bold text-dialac-brown-dark">
                          DIALAC
                          <span className="block text-[11px] font-medium text-[#64554b]">Respuesta del negocio</span>
                        </p>
                      </div>
                      <p className="mt-2 break-words rounded-xl rounded-tl-none bg-[#f7eadc] p-2.5 text-xs leading-5 sm:p-3 sm:text-sm">{review.reply}</p>
                      {review.replyIsExcerpt && (
                        <a href={mapsUrl} className="mt-1 inline-block text-xs font-semibold text-dialac-brown-dark underline">
                          Ver en Google
                        </a>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {lastIndex > 0 && (
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <button type="button" aria-label="Reseña anterior" onClick={() => { setPaused(true); setIndex((i) => i <= 0 ? lastIndex : Math.min(i, lastIndex) - 1); }} className={controlClass}><span aria-hidden="true">←</span></button>
                <button type="button" aria-label="Siguiente reseña" onClick={() => { setPaused(true); setIndex((i) => i >= lastIndex ? 0 : i + 1); }} className={controlClass}><span aria-hidden="true">→</span></button>
              </div>
            )}
          </>
        ) : (
          <p className="mt-4 text-sm text-[#fff8ef]">
            {mapsUrl ? "Consulta las opiniones de nuestros clientes en Google." : "Las reseñas de Google estarán disponibles aquí cuando se conecte la fuente."}
          </p>
        )}
        {(primaryUrl || secondaryUrl) && (
          <div className="mt-6 flex flex-wrap gap-3 border-t border-[#f6c9a2]/40 pt-5 sm:justify-center">
            {primaryUrl && <a href={primaryUrl} className="rounded-xl bg-[#ffd1a6] px-5 py-3 font-semibold text-[#422219] transition-colors hover:bg-[#ffe1c6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{primaryLabel}</a>}
            {secondaryUrl && <a href={secondaryUrl} className="rounded-xl border border-[#f1bd8d] bg-[#542b20] px-5 py-3 font-semibold text-[#fff8ef] transition-colors hover:bg-[#703b2b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{secondaryLabel}</a>}
          </div>
        )}
      </div>
    </section>
  );
}

export default ReviewsSection;

import { useEffect, useId, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { christmasCatalog, christmasSlides, originalChristmasPhotos } from "./christmasCatalog";
import "./christmas.css";

let dismissedOnThisLoad = false;
export const christmasPath = "/servicios/navidad";
// Medianoche del 1 de enero en Colombia: incluye todo el 31 de diciembre.
const endsAt = Date.parse("2027-01-01T00:00:00-05:00");

export function useChristmasActive() {
  const [active, setActive] = useState(() => Date.now() < endsAt);
  useEffect(() => {
    let timer: number;
    function update() {
      window.clearTimeout(timer);
      const remaining = endsAt - Date.now();
      setActive(remaining > 0);
      if (remaining > 0) timer = window.setTimeout(update, Math.min(remaining, 2_147_483_647));
    }
    update();
    document.addEventListener("visibilitychange", update);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return active;
}
const message = "¡Hola, DIALAC! 🎄 Vi la campaña navideña en su página. Quisiera conocer las opciones, los precios y la disponibilidad para mi fecha.";
const whatsapp = `https://wa.me/573163552643?text=${encodeURIComponent(message)}`;
const photo = (id: string) =>
  `${import.meta.env.BASE_URL}navidad/${encodeURIComponent(originalChristmasPhotos[id] ?? `${id}.webp`)}`;
const productWhatsApp = (name: string) =>
  `https://wa.me/573163552643?text=${encodeURIComponent(`¡Hola, DIALAC! 🎄 Vi «${name}» en el catálogo navideño. ¿Me comparten el precio y la disponibilidad para mi fecha?`)}`;

function Snow() {
  return <div className="dialac-noel-snow" aria-hidden="true">
    {Array.from({ length: 12 }, (_, i) => (
      <span key={i} style={{ left: `${4 + i * 8}%`, animationDelay: `${i % 5 * 0.18}s` }}>✦</span>
    ))}
  </div>;
}

function Garland() {
  return (
    <div className="dialac-noel-garland" aria-hidden="true">
      <svg viewBox="0 0 1200 112" preserveAspectRatio="xMidYMin slice">
        {Array.from({ length: 24 }, (_, i) => (
          <g key={i} transform={`translate(${i * 53 - 13} ${i % 2 ? -3 : 7}) rotate(${i % 2 ? -14 : 12})`}>
            <path d="M0 0q13 22 50 48Q22 44 4 30Q1 51-29 67Q-10 39 0 0Z" fill={i % 2 ? "#21492c" : "#143823"} />
            <path d="M0 2 12 28 35 45M4 17-5 42-22 58M8 21 27 26M12 28 31 34M-3 34-16 39M-8 44-21 48" fill="none" stroke="#608451" strokeWidth="2" />
          </g>
        ))}
        <path d="M0 11Q150 80 300 11Q450 80 600 11Q750 80 900 11Q1050 80 1200 11" fill="none" stroke="#e6ba65" />
        {[74, 140, 211, 379, 450, 520, 679, 750, 820, 980, 1050, 1120].map((x, i) => (
          <circle key={x} cx={x} cy={i % 3 === 1 ? 46 : 37} r="3" fill="#ffe9ac" />
        ))}
      </svg>
      <span className="dialac-noel-bauble dialac-noel-bauble--left" />
      <span className="dialac-noel-bauble dialac-noel-bauble--right" />
      {[18, 35, 65, 82].map((left, i) => (
        <svg
          key={left}
          className="dialac-noel-hanging-tree"
          viewBox="0 0 40 72"
          style={{ left: `${left}%`, animationDelay: `${i * .18}s` }}
        >
          <path d="M20 0v20" stroke="#ffe0a0" />
          <path d="m20 20 9 13h-5l10 12h-7l11 14H2l11-14H6l10-12h-5z" fill="#275b37" stroke="#f2ce79" strokeWidth="1.5" />
          <path d="M18 59h4v6h-4z" fill="#f2ce79" />
          <circle cx="20" cy="34" r="2" fill="#ffe0a0" />
          <circle cx="15" cy="47" r="2" fill="#ff8a82" />
          <circle cx="26" cy="52" r="2" fill="#ffe0a0" />
        </svg>
      ))}
    </div>
  );
}

export default function ChristmasCampaign() {
  const active = useChristmasActive();
  const dialog = useRef<HTMLDialogElement>(null);
  const modalTitle = useId();
  const [open, setOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = christmasSlides[slideIndex] ?? christmasSlides[0];

  useEffect(() => {
    if (!active || dismissedOnThisLoad) return;
    const timer = window.setTimeout(() => {
      const element = dialog.current;
      if (!element || element.open || dismissedOnThisLoad || Date.now() >= endsAt) return;
      element.showModal();
      setOpen(true);
    }, 550);
    return () => window.clearTimeout(timer);
  }, [active]);

  useEffect(() => {
    if (!active || !open) return;
    const root = document.documentElement;
    root.classList.add("dialac-noel-scroll-lock");
    return () => root.classList.remove("dialac-noel-scroll-lock");
  }, [active, open]);

  useEffect(() => {
    if (!active || !open) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (!motion.matches && !document.hidden) {
        setSlideIndex((current) => (current + 1) % christmasSlides.length);
      }
    }, 3000);
    return () => window.clearInterval(timer);
  }, [active, open, slideIndex]);

  function rememberDismissal() {
    dismissedOnThisLoad = true;
    setOpen(false);
  }

  if (!active) return null;
  return (
      <dialog
        ref={dialog}
        onClose={rememberDismissal}
        aria-labelledby={modalTitle}
        className="dialac-noel-dialog dialac-noel-poster"
        data-christmas-announcement={open ? "open" : undefined}
      >
        <Garland />
        <Snow />
        <form method="dialog"><button className="dialac-noel-close" aria-label="Cerrar anuncio">×</button></form>
        <div className="dialac-noel-poster-layout">
        <header className="dialac-noel-poster-copy">
        <p className="dialac-noel-label">DIALAC · Edición de temporada</p>
        <h2 id={modalTitle}>La Navidad sabe mejor compartida</h2>
        <p>Regalos, anchetas y sabores para celebrar juntos.</p>
        </header>
        <div className="dialac-noel-poster-gallery">
        <div className="dialac-noel-slide" key={slide.id}>
          <img src={photo(slide.id)} alt={slide.title} />
          <h3>{slide.title}</h3>
          <p>{slide.text}</p>
        </div>
        <div className="dialac-noel-picker" aria-label="Anuncios navideños">
          {christmasSlides.map(({ id, title }, i) => (
            <button type="button" key={id} aria-label={title} aria-pressed={i === slideIndex}
              onClick={() => setSlideIndex(i)}>
              <span aria-hidden="true" />
            </button>
          ))}
        </div>
        </div>
        <div className="dialac-noel-actions">
          <Link className="dialac-noel-primary dialac-noel-festive-cta" to={christmasPath} onClick={rememberDismissal}><span aria-hidden="true">✦</span> Ver más <span aria-hidden="true">→</span></Link>
        </div>
        </div>
        <div className="dialac-noel-sleigh" aria-hidden="true">
          {["origin", "destination"].map((stop) => (
          <svg key={stop} className={`dialac-noel-house dialac-noel-house--${stop}`} viewBox="0 0 100 72">
            <path d="M69 12V4h11v19" fill="#b64332" stroke="#ffdc93" strokeWidth="2" />
            <path d="M20 31h61v35H20z" fill="#295a38" stroke="#ffdc93" strokeWidth="2" />
            <path d="M9 34 50 5l41 29Z" fill="#ac302d" stroke="#ffdc93" strokeWidth="2" />
            <path d="m9 33 41-28 41 28" fill="none" stroke="#fff3dc" strokeWidth="4" strokeLinecap="round" />
            <path d="M43 66V45h15v21" fill="#793727" stroke="#ffdc93" strokeWidth="2" />
            <path d="M27 43h10v10H27zm38 0h10v10H65z" fill="#ffdc93" />
            {stop === "origin" && <text x="50" y="27" textAnchor="middle" fill="#fff3dc" fontSize="11" fontWeight="800">DIALAC</text>}
            <g className={`dialac-noel-parcels dialac-noel-parcels--${stop}`} stroke="#fff0bd" strokeWidth="1.4">
              <path d="M6 56h15v11H6z" fill="#c6383c" />
              <path d="M13 56v11M6 60h15" fill="none" />
              <path d="M79 54h16v13H79z" fill="#297452" />
              <path d="M87 54v13m-8-9h16" fill="none" />
            </g>
          </svg>
          ))}
          <svg className="dialac-noel-traveler" viewBox="0 0 340 66">
            <path d="M18 54q4 8 19 8h56q13 0 20-11M37 49l-2 12m52-12 3 12M92 40l80-14 93 1" fill="none" stroke="#ffdc93" strokeWidth="2" />
            <path d="M18 34h76l15-10-9 25H30Z" fill="#d22d35" stroke="#ffdc93" strokeWidth="2" />
            <g className="dialac-noel-cargo" stroke="#fff0bd" strokeWidth="1.4">
              <path d="M19 22h16v12H19z" fill="#297452" />
              <path d="M27 22v12m-8-8h16" fill="none" />
              <path d="M29 14h12v13H29z" fill="#c6383c" />
              <path d="M35 14v13m-6-8h12" fill="none" />
            </g>
            <path d="M43 34q0-14 14-14t14 14" fill="#e83b40" />
            <circle cx="58" cy="18" r="9" fill="#ffd7a8" />
            <path d="M49 18q0 15 9 15t10-15q-10 5-19 0Z" fill="#fff3dc" />
            <path d="M48 16q1-13 13-12l9 8-9-1-1 5Z" fill="#e83b40" />
            <path d="M48 16h16" stroke="#fff3dc" strokeWidth="3" />
            <circle cx="71" cy="12" r="3" fill="#fff3dc" />
            {[147, 236].map((x) => (
              <g key={x} transform={`translate(${x} 0)`} stroke="#ffdc93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 33q-10-10-12-4m16 12-7 13m16-12 2 13m20-14 6 13m1-15 13 9M51 18l-4-9 1-6m1 10-9-4m18 9 1-11 6-5m-6 9 8-2" fill="none" />
                <path d="M8 31q9-6 34-3l8-11 9 2 9 6-5 6-10-2-5 12q-25 9-40-1Z" fill="#a05c38" />
                <circle cx="67" cy="26" r="3" fill="#ed5350" stroke="none" />
              </g>
            ))}
            <path d="m125 9 2 5 5 2-5 2-2 5-2-5-5-2 5-2zm195 22 2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#ffe4a6" />
          </svg>
        </div>
      </dialog>
  );
}

export function ChristmasServices() {
  const active = useChristmasActive();
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!active) return;
    heading.current?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }, [active]);

  if (!active) return <Navigate to="/servicios" replace />;
  return (
      <section data-entered="true" id="navidad" className="dialac-noel" aria-labelledby="dialac-navidad-titulo">
        <Snow />
        <div className="dialac-noel-inner">
          <Link to="/servicios" className="dialac-noel-secondary">← Todos los servicios</Link>
          <p className="dialac-noel-label" style={{ marginTop: "1.25rem" }}>✦ &nbsp; Servicios · Navidad con DIALAC &nbsp; ✦</p>
          <h2 id="dialac-navidad-titulo" ref={heading} tabIndex={-1}>Regala algo rico esta Navidad</h2>
          <p>Para tus novenas, reuniones de empresa y encuentros en familia.</p>
          {christmasCatalog.map(({ title, items }) => (
            <section key={title} className="dialac-noel-group" aria-label={title}>
              <h3>{title}</h3>
              <ul className="dialac-noel-grid">
                {items.map((item) => (
                  <li key={item.id}>
                    <img src={photo(item.id)} alt={item.title} loading="lazy" decoding="async" />
                    <div>
                      <h4>{item.title}</h4>
                      <a className="dialac-noel-primary" href={productWhatsApp(item.title)}
                        target="_blank" rel="noopener noreferrer" aria-label={`Consultar por WhatsApp: ${item.title}`}>
                        Consultar por WhatsApp
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <p>Consulta disponibilidad para tu fecha. Haz tu pedido con mínimo 3 días de anticipación.</p>
          <a className="dialac-noel-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a>
        </div>
      </section>
  );
}
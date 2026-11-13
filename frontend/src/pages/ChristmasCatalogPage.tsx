import { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useChristmasActive } from "../components/navidad/ChristmasCampaign";
import { christmasCatalog, originalChristmasPhotos } from "../components/navidad/christmasCatalog";
import "./christmas-catalog.css";

const categoryOrder = [
  "Cenas y brindis",
  "Tablas de quesos",
  "Regalos navideños",
  "Velas y detalles",
  "Anchetas y desayunos",
];
const orderedCatalog = [...christmasCatalog].sort(
  (a, b) => categoryOrder.indexOf(a.title) - categoryOrder.indexOf(b.title),
);
const filters = ["Todas", ...categoryOrder];

const asset = (filename: string) =>
  `${import.meta.env.BASE_URL}navidad/${encodeURIComponent(filename)}`;

function contact(product: string) {
  const message = `¡Hola, DIALAC! Me interesa «${product}» del catálogo navideño. ¿Me pueden confirmar el precio y la disponibilidad para mi fecha?`;
  return `https://wa.me/573163552643?text=${encodeURIComponent(message)}`;
}

function Reindeer({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 90" aria-hidden="true">
      <ellipse cx="80" cy="79" rx="72" ry="5" fill="#10231d" />
      {[0, 67].map((offset) => (
        <g key={offset} transform={`translate(${offset} 0)`}>
          <g className="dialac-xmas-reindeer-hop">
            <path d="m26 64-8 12m18-11 5 11m10-13 8 11" stroke="#f0be83" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="35" cy="56" rx="23" ry="12" fill="#bd8054" />
            <path d="m47 56 10-22 13 7-11 23Z" fill="#bd8054" />
            <ellipse cx="67" cy="38" rx="13" ry="9" fill="#d69e70" />
            <path d="m60 32-7-12m7 12 2-16m-9 4-5-2m14-2 4-5" fill="none" stroke="#f0be83" strokeWidth="3" strokeLinecap="round" />
            <path d="m54 48 10 5" stroke="#b83e43" strokeWidth="4" />
            <circle cx="68" cy="35" r="2" fill="#3c2724" />
            <circle cx="79" cy="38" r="4" fill="#e85656" />
          </g>
        </g>
      ))}
    </svg>
  );
}

function ChristmasDecor() {
  return (
    <div className="dialac-xmas-decor-layer" aria-hidden="true">
      <div className="dialac-xmas-decor">
        <svg className="dialac-xmas-santa" viewBox="0 0 120 120">
          <ellipse cx="52" cy="106" rx="37" ry="7" fill="#10231d" />
          <g className="dialac-xmas-wave">
            <path d="M73 82Q89 77 97 50" fill="none" stroke="#bc3a3b" strokeWidth="15" strokeLinecap="round" />
            <circle cx="98" cy="45" r="9" fill="#fff0d9" />
            <circle cx="90" cy="48" r="4" fill="#fff0d9" />
          </g>
          <path d="M22 103V91a30 30 0 0 1 60 0v12Z" fill="#bc3a3b" />
          <path d="M23 96h58" stroke="#612429" strokeWidth="8" />
          <rect x="46" y="91" width="12" height="10" rx="2" fill="#f4cd8b" />
          <circle cx="52" cy="56" r="22" fill="#f6ba95" />
          <path d="M30 56q6 12 22 6 16 6 22-6 1 26-22 27-23-1-22-27Z" fill="#fff0d9" />
          <path d="M31 46Q29 16 61 19q16 2 20 17L65 32l8 14Z" fill="#d34548" />
          <rect x="28" y="42" width="47" height="10" rx="5" fill="#fff0d9" />
          <circle cx="81" cy="36" r="6" fill="#fff0d9" />
          <circle cx="44" cy="56" r="2" fill="#462825" /><circle cx="60" cy="56" r="2" fill="#462825" />
        </svg>
        <svg className="dialac-xmas-tree" viewBox="0 0 120 120">
          <ellipse cx="60" cy="106" rx="48" ry="7" fill="#10231d" />
          <path d="M53 83h14v22H53z" fill="#ad7251" />
          <path d="m60 20 22 33H71l24 25H80l24 21H16l24-21H25l24-25H38Z" fill="#297450" stroke="#74aa76" strokeWidth="2" />
          <g className="dialac-xmas-lights" fill="#ffe4a4">
            <path d="m60 5 3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" />
            <circle cx="52" cy="49" r="3" /><circle cx="72" cy="64" r="3" />
            <circle cx="45" cy="74" r="3" /><circle cx="60" cy="85" r="3" /><circle cx="83" cy="89" r="3" />
          </g>
          <rect x="10" y="91" width="24" height="15" rx="2" fill="#bc3a3b" />
          <path d="M22 91v15" stroke="#f4cd8b" strokeWidth="4" />
        </svg>
        <Reindeer className="dialac-xmas-reindeer" />
      </div>
    </div>
  );
}

export default function ChristmasCatalogPage() {
  const active = useChristmasActive();
  const [category, setCategory] = useState("Todas");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filterToggle = useRef<HTMLButtonElement>(null);
  const page = useRef<HTMLDivElement>(null);
  const results = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const groups = orderedCatalog.filter((group) => category === "Todas" || group.title === category);
  const count = groups.reduce((total, group) => total + group.items.length, 0);

  useEffect(() => {
    if (!active) return;
    title.current?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
    const root = page.current;
    const navbar = document.querySelector('nav[aria-label="Navegación principal"]')?.closest("header");
    if (!root || !navbar) return;
    const sync = () => root.style.setProperty("--xmas-nav-height", `${navbar.offsetHeight}px`);
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(navbar);
    return () => observer.disconnect();
  }, [active]);

  if (!active) return <Navigate to="/servicios" replace />;

  return (
    <div className="dialac-xmas-page" ref={page}>
      <div className="dialac-xmas-mobile-filters">
        <button ref={filterToggle} type="button" className="dialac-xmas-filter-toggle"
          aria-expanded={filtersOpen} aria-controls="dialac-xmas-mobile-options"
          onClick={() => setFiltersOpen(!filtersOpen)}>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6h16M7 12h10m-7 6h4" />
          </svg>
          <span>Navidad: {category}</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <div id="dialac-xmas-mobile-options" className="dialac-xmas-mobile-options" hidden={!filtersOpen}>
          {filters.map((name) => (
            <button key={name} type="button" aria-pressed={category === name} onClick={() => {
              setCategory(name);
              setFiltersOpen(false);
              filterToggle.current?.focus({ preventScroll: true });
              const bar = filterToggle.current;
              const list = results.current;
              if (bar && list && list.getBoundingClientRect().top < bar.getBoundingClientRect().bottom) {
                requestAnimationFrame(() => list.scrollIntoView({ block: "start" }));
              }
            }}>{name}</button>
          ))}
        </div>
      </div>
      <ChristmasDecor />
      <header className="dialac-xmas-hero">
        <div className="dialac-xmas-wrap dialac-xmas-intro">
          <Link to="/servicios" className="dialac-xmas-back">← Todos los servicios</Link>
          <p className="dialac-xmas-kicker">DIALAC · Edición de temporada</p>
          <h1 ref={title} tabIndex={-1}>Navidad para compartir</h1>
          <p>Encuentra regalos, anchetas y sabores para tus novenas, cenas y encuentros de fin de año.</p>
        </div>
        <div className="dialac-xmas-wrap dialac-xmas-info">
          <article>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" />
            </svg>
            <div><h2>Solicita con anticipación</h2><p>Haz tu pedido con mínimo 3 días de anticipación y consulta disponibilidad para tu fecha.</p></div>
          </article>
          <article>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 10c0 4-6 10-6 10S6 14 6 10a6 6 0 1 1 12 0Z" /><circle cx="12" cy="10" r="2" />
            </svg>
            <div><h2>Cobertura actual</h2><p>Entregamos en Bogotá, Cajicá, Chía, Cogua, Cota, Gachancipá, Nemocón, Sopó, Tabio, Tenjo, Tocancipá y Zipaquirá.</p></div>
          </article>
        </div>
      </header>

      <section className="dialac-xmas-wrap dialac-xmas-content" id="catalogo-navideno" aria-labelledby="dialac-xmas-catalog-title">
        <h2 id="dialac-xmas-catalog-title">Catálogo navideño</h2>
        <div className="dialac-xmas-layout">
        <aside className="dialac-xmas-filters" aria-label="Categorías navideñas">
          {filters.map((name) => (
            <button key={name} type="button" aria-pressed={category === name} onClick={() => setCategory(name)}>
              {name}
            </button>
          ))}
        </aside>
        <div className="dialac-xmas-results" ref={results}>
        <p className="dialac-xmas-count" role="status">{count} {count === 1 ? "opción" : "opciones"}</p>
        {groups.map(({ title: groupTitle, items }, index) => (
          <section key={groupTitle} className="dialac-xmas-group" aria-label={groupTitle}>
            <div className="dialac-xmas-group-heading">
              <h3>{groupTitle}</h3>
              {index % 2 === 0 && <Reindeer className="dialac-xmas-reindeer-inline" />}
            </div>
            <ul className="dialac-xmas-grid">
              {items.map((item) => (
                <li key={item.id}>
                  <img src={asset(originalChristmasPhotos[item.id])} alt={item.title} loading="lazy" decoding="async" />
                  <div>
                    <h4>{item.title}</h4>
                    <a className="dialac-xmas-cta" href={contact(item.title)} target="_blank" rel="noopener noreferrer"
                      aria-label={`Consultar por WhatsApp: ${item.title}`}>
                      <span>Consultar por WhatsApp</span>
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1" />
                      </svg>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
        </div>
        </div>
      </section>
    </div>
  );
}

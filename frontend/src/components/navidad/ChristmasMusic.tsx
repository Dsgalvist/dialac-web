import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { christmasPath, useChristmasActive } from "./ChristmasCampaign";

const announcementSelector =
  'dialog[data-christmas-announcement="open"][open]';
const song = `${import.meta.env.BASE_URL}navidad/musica-navidad.mp3`;

function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, "").toLowerCase();
}

function startMusic(audio: HTMLAudioElement) {
  audio.volume = 0.2;

  void audio.play().catch((error: unknown) => {
    if (
      error instanceof DOMException &&
      (error.name === "NotAllowedError" || error.name === "AbortError")
    ) {
      return;
    }

    console.warn("No se pudo reproducir la música navideña:", error);
  });
}

export default function ChristmasMusic() {
  const { pathname } = useLocation();
  const campaignActive = useChristmasActive();
  const audioRef = useRef<HTMLAudioElement>(null);

  const [announcement, setAnnouncement] =
    useState<HTMLDialogElement | null>(null);
  const [silenced, setSilenced] = useState(false);
  const [playing, setPlaying] = useState(false);

  const inCatalog = normalizePath(pathname) === christmasPath;
  const active = campaignActive && (inCatalog || announcement !== null);

  useEffect(() => {
    function syncAnnouncement() {
      setAnnouncement(
        document.querySelector<HTMLDialogElement>(announcementSelector),
      );
    }

    syncAnnouncement();

    const observer = new MutationObserver(syncAnnouncement);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-christmas-announcement", "open"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!active || silenced) {
      // Pausar sin cambiar la posición de la canción.
      audio.pause();
      return;
    }

    if (audio.paused) startMusic(audio);
  }, [active, silenced]);

  useEffect(() => {
    if (!campaignActive || silenced) return;

    function retryOnInteraction(event: MouseEvent | TouchEvent) {
      const audio = audioRef.current;
      const target = event.target;

      if (!event.isTrusted || !audio?.paused || !(target instanceof Element)) {
        return;
      }

      if (
        target.closest("[data-christmas-music-control], .dialac-noel-close")
      ) {
        return;
      }

      const link = target.closest<HTMLAnchorElement>("a[href]");

      if (link) {
        if (
          event.type !== "click" ||
          (event instanceof MouseEvent &&
            (event.button !== 0 ||
              event.ctrlKey ||
              event.metaKey ||
              event.shiftKey ||
              event.altKey)) ||
          (link.target && link.target.toLowerCase() !== "_self") ||
          link.hasAttribute("download")
        ) {
          return;
        }

        const destination = new URL(link.href);

        if (
          destination.origin !== window.location.origin ||
          normalizePath(destination.pathname) !== christmasPath
        ) {
          return;
        }

        startMusic(audio);
        return;
      }

      const openAnnouncement = document.querySelector(announcementSelector);

      if (openAnnouncement ? openAnnouncement.contains(target) : inCatalog) {
        startMusic(audio);
      }
    }

    document.addEventListener("click", retryOnInteraction, true);
    document.addEventListener("touchend", retryOnInteraction, {
      capture: true,
      passive: true,
    });

    return () => {
      document.removeEventListener("click", retryOnInteraction, true);
      document.removeEventListener("touchend", retryOnInteraction, true);
    };
  }, [campaignActive, inCatalog, silenced]);

  function toggleMusic() {
    const audio = audioRef.current;
    if (!audio || !active) return;

    if (!audio.paused) {
      setSilenced(true);
      audio.pause();
      return;
    }

    setSilenced(false);
    startMusic(audio);
  }

  const announcementActions =
    announcement?.querySelector<HTMLElement>(".dialac-noel-actions") ?? null;

  const label = playing ? "Silenciar música" : "Activar música";

  const button = (
    <button
      type="button"
      data-christmas-music-control
      onClick={toggleMusic}
      aria-label={label}
      title={label}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f4cd8b] bg-[#173529] text-[#fff6e7] shadow-lg transition-colors hover:bg-[#28513e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4cd8b]"
    >
      <svg
        aria-hidden="true"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 5 6 9H3v6h3l5 4V5Z" />
        {playing ? (
          <>
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </>
        ) : (
          <path d="m16 9 6 6m0-6-6 6" />
        )}
      </svg>
    </button>
  );

  return (
    <>
      <audio
        ref={audioRef}
        src={song}
        loop
        preload="none"
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setPlaying(false)}
      />

      {active && announcementActions
        ? createPortal(
            <span className="ms-2 inline-flex align-middle">{button}</span>,
            announcementActions,
          )
        : active && inCatalog && !announcement && (
            <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-4 z-40 min-[1360px]:[@media(min-height:440px)]:bottom-28">
              {button}
            </div>
          )}
    </>
  );
}
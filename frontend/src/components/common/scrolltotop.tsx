import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  const getScrollPosition = () => {
    return (
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    );
  };

  useEffect(() => {
    const scrollingElement =
      document.scrollingElement || document.documentElement;

    scrollingElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    setVisible(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(getScrollPosition() > 350);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    document.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll, {
        capture: true,
      });
    };
  }, []);

  const scrollToTop = () => {
    const scrollingElement =
      document.scrollingElement || document.documentElement;

    scrollingElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      title="Volver al inicio"
      className="
        group fixed bottom-[84px] right-4 z-[60]
        flex h-14 w-14 touch-manipulation items-center justify-center
        rounded-full
        border border-dialac-border
        bg-[#fffdf9]
        text-dialac-brown-dark
        shadow-[0_10px_26px_rgba(38,40,42,0.14)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-dialac-brown
        hover:bg-[#f4e8de]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-dialac-brown/40
        focus-visible:ring-offset-2
        md:bottom-[104px]
        md:right-6
        md:h-16
        md:w-16
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5 md:h-7 md:w-7"
        aria-hidden="true"
      >
        <path d="m6 15 6-6 6 6" />
      </svg>
    </button>
  );
}
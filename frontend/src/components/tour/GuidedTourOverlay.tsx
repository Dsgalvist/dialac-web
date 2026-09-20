import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { GuidedTourStep } from "./GuidedTourProvider";

type TargetRect = {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
};

type GuidedTourOverlayProps = {
  isActive: boolean;
  step: GuidedTourStep;
  stepNumber: number;
  totalSteps: number;
  canGoPrevious: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSkip: () => void;
  onDisable: () => void;
};

const SPOTLIGHT_PADDING = 10;

function GuidedTourOverlay({
  isActive,
  step,
  stepNumber,
  totalSteps,
  canGoPrevious,
  onPrevious,
  onNext,
  onSkip,
  onDisable,
}: GuidedTourOverlayProps) {
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [targetRect, setTargetRect] = useState<TargetRect | null>(null);

  useLayoutEffect(() => {
    if (!isActive) return;

    let attempts = 0;
    let timeoutId = 0;

    const locateTarget = () => {
      const target = document.querySelector<HTMLElement>(step.selector);

      if (!target) {
        attempts += 1;

        if (attempts < 25) {
          timeoutId = window.setTimeout(locateTarget, 100);
        }

        return;
      }

      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "center",
        inline: "nearest",
      });

      timeoutId = window.setTimeout(() => {
        const rect = target.getBoundingClientRect();
        const top = Math.max(6, rect.top - SPOTLIGHT_PADDING);
        const left = Math.max(6, rect.left - SPOTLIGHT_PADDING);
        const right = Math.min(
          window.innerWidth - 6,
          rect.right + SPOTLIGHT_PADDING,
        );
        const bottom = Math.min(
          window.innerHeight - 6,
          rect.bottom + SPOTLIGHT_PADDING,
        );

        setTargetRect({
          top,
          left,
          right,
          bottom,
          width: Math.max(0, right - left),
          height: Math.max(0, bottom - top),
        });
      }, reduceMotion ? 0 : 380);
    };

    setTargetRect(null);
    locateTarget();

    return () => window.clearTimeout(timeoutId);
  }, [isActive, reduceMotion, step.selector]);

  useEffect(() => {
    if (!isActive) return;

    const updatePosition = () => {
      const target = document.querySelector<HTMLElement>(step.selector);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const top = Math.max(6, rect.top - SPOTLIGHT_PADDING);
      const left = Math.max(6, rect.left - SPOTLIGHT_PADDING);
      const right = Math.min(
        window.innerWidth - 6,
        rect.right + SPOTLIGHT_PADDING,
      );
      const bottom = Math.min(
        window.innerHeight - 6,
        rect.bottom + SPOTLIGHT_PADDING,
      );

      setTargetRect({
        top,
        left,
        right,
        bottom,
        width: Math.max(0, right - left),
        height: Math.max(0, bottom - top),
      });
    };

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isActive, step.selector]);

  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onSkip();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft" && canGoPrevious) onPrevious();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [canGoPrevious, isActive, onNext, onPrevious, onSkip]);

  const dialogStyle = targetRect
    ? {
        left: Math.min(
          Math.max(16, targetRect.left),
          Math.max(16, window.innerWidth - 376),
        ),
        top:
          targetRect.bottom + 16 + 300 <= window.innerHeight
            ? targetRect.bottom + 16
            : Math.max(16, targetRect.top - 316),
      }
    : undefined;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-[200]"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {targetRect ? (
            <>
              <div className="fixed inset-x-0 top-0 bg-black/55 backdrop-blur-[1px]" style={{ height: targetRect.top }} />
              <div className="fixed left-0 bg-black/55 backdrop-blur-[1px]" style={{ top: targetRect.top, width: targetRect.left, height: targetRect.height }} />
              <div className="fixed right-0 bg-black/55 backdrop-blur-[1px]" style={{ top: targetRect.top, width: window.innerWidth - targetRect.right, height: targetRect.height }} />
              <div className="fixed inset-x-0 bottom-0 bg-black/55 backdrop-blur-[1px]" style={{ top: targetRect.bottom }} />

              <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed rounded-[1.25rem] border-2 border-white shadow-[0_0_0_4px_rgba(151,82,45,0.95),0_16px_50px_rgba(0,0,0,0.28)]"
                animate={{
                  top: targetRect.top,
                  left: targetRect.left,
                  width: targetRect.width,
                  height: targetRect.height,
                }}
                transition={{ duration: reduceMotion ? 0 : 0.25 }}
              />
            </>
          ) : (
            <div className="fixed inset-0 bg-black/55 backdrop-blur-[1px]" />
          )}

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="guided-tour-title"
            tabIndex={-1}
            className={`fixed w-[calc(100%-2rem)] max-w-[360px] rounded-[1.5rem] border border-[#d9c2ae] bg-[#fffdf9]/95 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.30)] outline-none backdrop-blur-xl sm:p-6 ${
              targetRect ? "" : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            }`}
            style={dialogStyle}
            initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-dialac-brown-dark">
                {step.eyebrow}
              </p>

              <span className="rounded-full bg-[#f1e3d6] px-3 py-1 text-xs font-bold text-dialac-brown-dark">
                {stepNumber}/{totalSteps}
              </span>
            </div>

            <h2 id="guided-tour-title" className="mt-4 font-display text-xl font-bold leading-tight text-dialac-charcoal sm:text-2xl">
              {step.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-dialac-charcoal">
              {step.description}
            </p>

            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[#eadfd4]">
              <motion.div
                className="h-full rounded-full bg-dialac-brown"
                animate={{ width: `${(stepNumber / totalSteps) * 100}%` }}
              />
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={onSkip}
                className="rounded-lg px-2 py-2 text-sm font-semibold text-dialac-charcoal underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/20"
              >
                Omitir
              </button>

              <div className="flex gap-2">
                {canGoPrevious && (
                  <button
                    type="button"
                    onClick={onPrevious}
                    className="rounded-xl border border-dialac-border bg-white px-4 py-2.5 text-sm font-semibold text-dialac-charcoal transition hover:bg-[#f7f2eb] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/20"
                  >
                    Atrás
                  </button>
                )}

                <button
                  type="button"
                  onClick={onNext}
                  className="rounded-xl bg-dialac-brown px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-dialac-brown-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/30"
                >
                  {stepNumber === totalSteps
                    ? "Finalizar"
                    : stepNumber === 3
                      ? "Entendido"
                      : "Siguiente"}
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={onDisable}
              className="mt-4 w-full rounded-lg py-1 text-center text-xs font-semibold text-dialac-brown-dark underline decoration-dialac-brown/40 underline-offset-4 hover:decoration-dialac-brown focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-dialac-brown/20"
            >
              No volver a mostrar en este dispositivo
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default GuidedTourOverlay;

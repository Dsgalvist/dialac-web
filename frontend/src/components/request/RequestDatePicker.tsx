import { useEffect, useMemo, useRef, useState } from "react";
import { parseRequestDate } from "../../data/request";

type RequestDatePickerProps = {
  value: string;
  minimumDate: string;
  hasError: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
};

const weekDays = ["L", "M", "M", "J", "V", "S", "D"];

function formatDateValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function RequestDatePicker({
  value,
  minimumDate,
  hasError,
  onChange,
  onBlur,
}: RequestDatePickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const parsedMinimumDate = useMemo(
    () => parseRequestDate(minimumDate) ?? new Date(),
    [minimumDate],
  );

  const selectedDate = useMemo(
    () => parseRequestDate(value),
    [value],
  );

  const [visibleMonth, setVisibleMonth] = useState(
    () =>
      new Date(
        (selectedDate ?? parsedMinimumDate).getFullYear(),
        (selectedDate ?? parsedMinimumDate).getMonth(),
        1,
      ),
  );

  useEffect(() => {
    if (!isOpen) return;

    const closeCalendar = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onBlur();
      }
    };

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        onBlur();
      }
    };

    document.addEventListener("mousedown", closeCalendar);
    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.removeEventListener("mousedown", closeCalendar);
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [isOpen, onBlur]);

  const calendarDays = useMemo(() => {
    const year = visibleMonth.getFullYear();
    const month = visibleMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const mondayBasedOffset = (firstDay.getDay() + 6) % 7;
    const firstVisibleDay = new Date(year, month, 1 - mondayBasedOffset);

    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(firstVisibleDay);
      date.setDate(firstVisibleDay.getDate() + index);
      date.setHours(0, 0, 0, 0);
      return date;
    });
  }, [visibleMonth]);

  const formattedValue = selectedDate
    ? new Intl.DateTimeFormat("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(selectedDate)
    : "Selecciona una fecha";

  const monthTitle = new Intl.DateTimeFormat("es-CO", {
    month: "long",
    year: "numeric",
  }).format(visibleMonth);

  const previousMonth = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth() - 1,
    1,
  );

  const canShowPreviousMonth =
    previousMonth.getFullYear() > parsedMinimumDate.getFullYear() ||
    (previousMonth.getFullYear() === parsedMinimumDate.getFullYear() &&
      previousMonth.getMonth() >= parsedMinimumDate.getMonth());

  return (
    <div ref={containerRef} className="relative mt-2">
      <button
        id="request-date"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-invalid={hasError}
        aria-describedby={
          hasError ? "request-date-error" : "request-date-help"
        }
        onClick={() => setIsOpen((current) => !current)}
        className={`flex h-12 w-full items-center justify-between rounded-xl border bg-white px-4 text-left outline-none transition focus:border-dialac-brown focus:ring-4 focus:ring-dialac-brown/10 ${
          hasError
            ? "border-dialac-error focus:border-dialac-error focus:ring-[#efcaca]"
            : "border-dialac-border"
        } ${selectedDate ? "text-dialac-charcoal" : "text-slate-500"}`}
      >
        <span className="capitalize">{formattedValue}</span>

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 shrink-0 text-dialac-green-dark"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4" />
          <path d="M8 3v4" />
          <path d="M3 10h18" />
        </svg>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-label="Seleccionar fecha requerida"
          className="absolute left-0 top-[calc(100%+0.5rem)] z-40 w-full min-w-[280px] rounded-2xl border border-dialac-border bg-white p-4 shadow-[0_18px_50px_rgba(38,40,42,0.16)] sm:w-[340px]"
        >
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              disabled={!canShowPreviousMonth}
              aria-label="Mes anterior"
              onClick={() =>
                setVisibleMonth(
                  new Date(
                    visibleMonth.getFullYear(),
                    visibleMonth.getMonth() - 1,
                    1,
                  ),
                )
              }
              className="flex h-9 w-9 items-center justify-center rounded-lg text-dialac-charcoal transition hover:bg-[#f4f0e9] disabled:cursor-not-allowed disabled:opacity-30"
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
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <p className="font-display text-sm font-bold capitalize text-dialac-charcoal">
              {monthTitle}
            </p>

            <button
              type="button"
              aria-label="Mes siguiente"
              onClick={() =>
                setVisibleMonth(
                  new Date(
                    visibleMonth.getFullYear(),
                    visibleMonth.getMonth() + 1,
                    1,
                  ),
                )
              }
              className="flex h-9 w-9 items-center justify-center rounded-lg text-dialac-charcoal transition hover:bg-[#f4f0e9]"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="mt-3 grid grid-cols-7 gap-1">
            {weekDays.map((day, index) => (
              <span
                key={`${day}-${index}`}
                className="flex h-8 items-center justify-center text-[11px] font-bold uppercase text-dialac-green-dark"
              >
                {day}
              </span>
            ))}

            {calendarDays.map((date) => {
              const dateValue = formatDateValue(date);
              const belongsToVisibleMonth =
                date.getMonth() === visibleMonth.getMonth();
              const isSunday = date.getDay() === 0;
              const isBeforeMinimum = date < parsedMinimumDate;
              const isDisabled =
                !belongsToVisibleMonth || isSunday || isBeforeMinimum;
              const isSelected = value === dateValue;

              return (
                <button
                  key={dateValue}
                  type="button"
                  disabled={isDisabled}
                  aria-label={new Intl.DateTimeFormat("es-CO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(date)}
                  aria-pressed={isSelected}
                  onClick={() => {
                    onChange(dateValue);
                    onBlur();
                    setIsOpen(false);
                  }}
                  className={`flex h-9 items-center justify-center rounded-lg text-sm font-semibold transition ${
                    isSelected
                      ? "bg-dialac-brown text-white"
                      : "text-dialac-charcoal hover:bg-[#f4f0e9]"
                  } disabled:cursor-not-allowed disabled:text-[#a7a7a7] disabled:hover:bg-transparent`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          <p className="mt-3 border-t border-dialac-border pt-3 text-xs leading-5 text-dialac-charcoal">
            Los domingos no están disponibles. La primera fecha habilitada
            corresponde al tercer día hábil.
          </p>
        </div>
      )}
    </div>
  );
}

export default RequestDatePicker;

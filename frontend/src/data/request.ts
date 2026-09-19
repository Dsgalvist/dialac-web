export type DeliveryMethod = "domicilio" | "recogida";

export type RequestFormData = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  requiredDate: string;
  deliveryMethod: DeliveryMethod;
  notes: string;
};

export const requestCities = ["Bogotá", "Chía", "Cajicá"] as const;

export const REQUEST_DRAFT_STORAGE_KEY = "dialac-request-draft-v1";

export const emptyRequestForm: RequestFormData = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  requiredDate: "",
  deliveryMethod: "domicilio",
  notes: "",
};

function isDeliveryMethod(value: unknown): value is DeliveryMethod {
  return value === "domicilio" || value === "recogida";
}

function isRequestFormData(value: unknown): value is RequestFormData {
  if (!value || typeof value !== "object") {
    return false;
  }

  const form = value as Partial<RequestFormData>;

  return (
    typeof form.fullName === "string" &&
    typeof form.company === "string" &&
    typeof form.phone === "string" &&
    typeof form.email === "string" &&
    typeof form.address === "string" &&
    typeof form.city === "string" &&
    typeof form.requiredDate === "string" &&
    isDeliveryMethod(form.deliveryMethod) &&
    typeof form.notes === "string"
  );
}

export function isRequestCity(
  value: string,
): value is (typeof requestCities)[number] {
  return requestCities.some((city) => city === value);
}

export function readStoredRequestDraft(): RequestFormData {
  if (typeof window === "undefined") {
    return emptyRequestForm;
  }

  try {
    const storedDraft = window.localStorage.getItem(REQUEST_DRAFT_STORAGE_KEY);

    if (!storedDraft) {
      return emptyRequestForm;
    }

    const parsedDraft: unknown = JSON.parse(storedDraft);

    return isRequestFormData(parsedDraft) ? parsedDraft : emptyRequestForm;
  } catch {
    return emptyRequestForm;
  }
}

export function saveRequestDraft(formData: RequestFormData) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    REQUEST_DRAFT_STORAGE_KEY,
    JSON.stringify(formData),
  );
}

export function clearRequestDraft() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(REQUEST_DRAFT_STORAGE_KEY);
}

function formatRequestDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function parseRequestDate(value: string): Date | null {
  const dateParts = value.split("-").map(Number);

  if (dateParts.length !== 3) {
    return null;
  }

  const [year, month, day] = dateParts;

  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day)
  ) {
    return null;
  }

  const date = new Date(year, month - 1, day);
  date.setHours(0, 0, 0, 0);

  const isValidDate =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;

  return isValidDate ? date : null;
}

export function isRequestBusinessDay(date: Date) {
  return date.getDay() !== 0;
}

export function getMinimumRequestDate(currentDate = new Date()) {
  const minimumDate = new Date(currentDate);
  minimumDate.setHours(0, 0, 0, 0);

  let completedBusinessDays = 0;

  while (completedBusinessDays < 3) {
    minimumDate.setDate(minimumDate.getDate() + 1);

    if (isRequestBusinessDay(minimumDate)) {
      completedBusinessDays += 1;
    }
  }

  return formatRequestDate(minimumDate);
}

export function validateRequestDate(value: string) {
  const selectedDate = parseRequestDate(value);

  if (!selectedDate) {
    return "Selecciona una fecha válida.";
  }

  if (!isRequestBusinessDay(selectedDate)) {
    return "DIALAC no recibe solicitudes para los domingos.";
  }

  const minimumDate = parseRequestDate(getMinimumRequestDate());

  if (!minimumDate || selectedDate < minimumDate) {
    return "La fecha debe tener mínimo 3 días hábiles de anticipación.";
  }

  return true;
}

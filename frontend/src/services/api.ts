export interface HealthResponse {
  status: string;
  service: string;
}

const API_URL = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000";

export async function getApiHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_URL}/api/health`);

  if (!response.ok) {
    throw new Error("No fue posible conectar con la API de DIALAC.");
  }

  return response.json();
}

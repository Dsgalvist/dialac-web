import { useEffect, useState } from "react";
import { getApiHealth } from "./services/api";

function App() {
  const [connectionStatus, setConnectionStatus] =
    useState("Conectando con Python...");

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    getApiHealth()
      .then((data) => {
        if (data.status === "ok") {
          setConnectionStatus("Backend conectado");
          setIsConnected(true);
        }
      })
      .catch(() => {
        setConnectionStatus("No fue posible conectar con el backend");
        setIsConnected(false);
      });
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight text-white">
          DIALAC
        </h1>

        <p className="mt-4 text-xl text-slate-300">
          Catálogo y solicitud de productos
        </p>

        <div
          className={`mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
            isConnected
              ? "bg-green-500/15 text-green-400"
              : "bg-yellow-500/15 text-yellow-400"
          }`}
        >
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              isConnected ? "bg-green-400" : "bg-yellow-400"
            }`}
          />

          {connectionStatus}
        </div>
      </div>
    </main>
  );
}

export default App;
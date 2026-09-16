import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PlaceholderPage from "./pages/PlaceholderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/nosotros" element={<AboutPage />} />

          <Route
            path="/productos"
            element={
              <PlaceholderPage
                title="Productos"
                description="Explora el catálogo y agrega productos a tu solicitud."
              />
            }
          />

          <Route
            path="/servicios"
            element={
              <PlaceholderPage
                title="Servicios"
                description="Conoce los servicios y soluciones personalizadas que ofrece DIALAC."
              />
            }
          />

          <Route
            path="/contacto"
            element={
              <PlaceholderPage
                title="Contacto"
                description="Comunícate con DIALAC y resuelve tus inquietudes."
              />
            }
          />

          <Route
            path="/solicitud"
            element={
              <PlaceholderPage
                title="Mi solicitud"
                description="Revisa tus productos y genera el pedido en PDF."
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import RequestPage from "./pages/RequestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/nosotros"
            element={<AboutPage />}
          />

          <Route
            path="/productos"
            element={<ProductsPage />}
          />

          <Route
            path="/servicios"
            element={<ServicesPage />}
          />

          <Route
            path="/contacto"
            element={<ContactPage />}
          />

          <Route
            path="/solicitud"
            element={<CartPage />}
          />

          <Route
            path="/solicitud/datos"
            element={<RequestPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
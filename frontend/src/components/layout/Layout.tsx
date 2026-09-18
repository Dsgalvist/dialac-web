import { AnimatePresence } from "motion/react";
import { useLocation, useOutlet } from "react-router-dom";
import PageTransition from "../animations/PageTransition";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-dialac-charcoal px-4 py-3 font-semibold text-white transition focus:translate-y-0"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main
        id="main-content"
        className="flex-1"
        tabIndex={-1}
      >
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={location.pathname}>
            {outlet}
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
import { AnimatePresence } from "motion/react";
import { useLocation, useOutlet } from "react-router-dom";
import PageTransition from "../animations/PageTransition";
import PageLoaderOption2 from "../animations/PageLoaderOption2";
import GuidedTourProvider from "../tour/GuidedTourProvider";
import ScrollToTop from "../common/scrolltotop";
import WhatsAppFloating from "../common/whatsappfloating";
import ChristmasCampaign, { christmasPath } from "../navidad/ChristmasCampaign";
import RouteMetadata from "./RouteMetadata";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ChristmasMusic from "../navidad/ChristmasMusic";

function Layout() {
  const { pathname } = useLocation();
  const outlet = useOutlet();
  const isChristmasPage =
    pathname.replace(/\/+$/, "").toLowerCase() === christmasPath;

  return (
    <GuidedTourProvider>
      <div className="flex min-h-screen flex-col">
        <RouteMetadata />

        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-dialac-charcoal px-4 py-3 font-semibold text-white transition focus:translate-y-0"
        >
          Saltar al contenido
        </a>

        <Navbar />
        <ChristmasMusic />
        {!isChristmasPage && <ChristmasCampaign />}

        <main id="main-content" className="flex-1" tabIndex={-1}>
          <AnimatePresence mode="wait" initial={false}>
            <PageTransition key={pathname}>{outlet}</PageTransition>
          </AnimatePresence>
        </main>

        <PageLoaderOption2 key={`loader-${pathname}`} />
        <ScrollToTop />
        <WhatsAppFloating />
        <Footer />
      </div>
    </GuidedTourProvider>
  );
}

export default Layout;
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GuidedTourContext } from "./GuidedTourContext";
import GuidedTourOverlay from "./GuidedTourOverlay";

export type GuidedTourStep = {
  path: string;
  selector: string;
  eyebrow: string;
  title: string;
  description: string;
};

const TOUR_DISABLED_KEY = "dialac-guided-tour-disabled";
const CART_TOUR_CLOSED_SESSION_KEY =
  "dialac-cart-tour-closed-session";
const FORM_TOUR_CLOSED_SESSION_KEY =
  "dialac-form-tour-closed-session";

const tourSteps: GuidedTourStep[] = [
  {
    path: "/solicitud",
    selector: '[data-tour="cart-header"]',
    eyebrow: "Tu solicitud",
    title: "Revisa tu pedido antes de continuar",
    description:
      "En esta pantalla puedes comprobar los productos, las cantidades y el valor total de tu solicitud.",
  },
  {
    path: "/solicitud",
    selector: '[data-tour="cart-items"]',
    eyebrow: "Paso 1 de 2",
    title: "Confirma productos y cantidades",
    description:
      "Aquí puedes aumentar o disminuir cantidades y eliminar cualquier producto que ya no necesites.",
  },
  {
    path: "/solicitud",
    selector: '[data-tour="cart-summary"]',
    eyebrow: "Resumen",
    title: "Comprueba el total y continúa",
    description:
      "Cuando todo esté correcto, continúa para completar los datos necesarios. La solicitud todavía no confirma el pedido.",
  },
  {
    path: "/solicitud/datos",
    selector: '[data-tour="request-summary"]',
    eyebrow: "Paso 2 de 2",
    title: "Tu selección permanece visible",
    description:
      "Este resumen te permite verificar nuevamente los productos y el total mientras completas tus datos.",
  },
  {
    path: "/solicitud/datos",
    selector: '[data-tour="request-contact"]',
    eyebrow: "Datos de contacto",
    title: "Cuéntanos cómo contactarte",
    description:
      "Completa la información solicitada para que DIALAC pueda revisar y confirmar contigo los detalles del pedido.",
  },
  {
    path: "/solicitud/datos",
    selector: '[data-tour="request-delivery"]',
    eyebrow: "Entrega",
    title: "Elige domicilio o recogida",
    description:
      "Selecciona domicilio dentro de la cobertura disponible o recogida en la sede de DIALAC. Verás la información correspondiente a tu elección.",
  },
  {
    path: "/solicitud/datos",
    selector: '[data-tour="request-date-address"]',
    eyebrow: "Fecha y ubicación",
    title: "Indica cuándo y dónde",
    description:
      "Selecciona la ciudad y una fecha disponible. Si elegiste domicilio, también debes escribir la dirección de entrega.",
  },
  {
    path: "/solicitud/datos",
    selector: '[data-tour="request-submit"]',
    eyebrow: "Último paso",
    title: "Revisa y genera tu solicitud",
    description:
      "El sistema mostrará una confirmación final antes de generar el PDF y enviar la solicitud. DIALAC revisará la disponibilidad antes de confirmar el pedido.",
  },
];

type GuidedTourProviderProps = {
  children: ReactNode;
};

function GuidedTourProvider({
  children,
}: GuidedTourProviderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const startTour = useCallback(() => {
    sessionStorage.removeItem(CART_TOUR_CLOSED_SESSION_KEY);
    sessionStorage.removeItem(FORM_TOUR_CLOSED_SESSION_KEY);
    setCurrentStep(0);
    setIsActive(true);

    if (location.pathname !== "/solicitud") {
      navigate("/solicitud");
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    const disabled =
      localStorage.getItem(TOUR_DISABLED_KEY) === "true";
    if (disabled || isActive) return;

    const isCartPage = location.pathname === "/solicitud";
    const isFormPage =
      location.pathname === "/solicitud/datos";

    if (!isCartPage && !isFormPage) return;

    const closedThisSession = sessionStorage.getItem(
      isCartPage
        ? CART_TOUR_CLOSED_SESSION_KEY
        : FORM_TOUR_CLOSED_SESSION_KEY,
    ) === "true";

    if (closedThisSession) return;

    const timer = window.setTimeout(() => {
      const startingSelector = isCartPage
        ? '[data-tour="cart-items"]'
        : '[data-tour="request-summary"]';

      if (document.querySelector(startingSelector)) {
        setCurrentStep(isCartPage ? 0 : 3);
        setIsActive(true);
      }
    }, 450);

    return () => window.clearTimeout(timer);
  }, [isActive, location.pathname]);

  const closeForSession = useCallback(() => {
    sessionStorage.setItem(
      CART_TOUR_CLOSED_SESSION_KEY,
      "true",
    );
    sessionStorage.setItem(
      FORM_TOUR_CLOSED_SESSION_KEY,
      "true",
    );
    setIsActive(false);
  }, []);

  const finishCartPhase = useCallback(() => {
    sessionStorage.setItem(
      CART_TOUR_CLOSED_SESSION_KEY,
      "true",
    );
    setIsActive(false);
  }, []);

  const disableTour = useCallback(() => {
    localStorage.setItem(TOUR_DISABLED_KEY, "true");
    sessionStorage.setItem(
      CART_TOUR_CLOSED_SESSION_KEY,
      "true",
    );
    sessionStorage.setItem(
      FORM_TOUR_CLOSED_SESSION_KEY,
      "true",
    );
    setIsActive(false);
  }, []);

  const finishTour = useCallback(() => {
    sessionStorage.setItem(
      FORM_TOUR_CLOSED_SESSION_KEY,
      "true",
    );
    setIsActive(false);
  }, []);

  const goToStep = useCallback(
    (stepIndex: number) => {
      const boundedStep = Math.max(
        0,
        Math.min(stepIndex, tourSteps.length - 1),
      );
      const step = tourSteps[boundedStep];

      setCurrentStep(boundedStep);

      if (location.pathname !== step.path) {
        navigate(step.path);
      }
    },
    [location.pathname, navigate],
  );

  const contextValue = useMemo(
    () => ({ startTour }),
    [startTour],
  );

  return (
    <GuidedTourContext.Provider value={contextValue}>
      {children}

      <GuidedTourOverlay
        isActive={isActive}
        step={tourSteps[currentStep]}
        stepNumber={currentStep + 1}
        totalSteps={tourSteps.length}
        canGoPrevious={currentStep > 0 && currentStep !== 3}
        onPrevious={() => goToStep(currentStep - 1)}
        onNext={() => {
          if (currentStep === 2) {
            finishCartPhase();
            return;
          }

          if (currentStep === tourSteps.length - 1) {
            finishTour();
            return;
          }

          goToStep(currentStep + 1);
        }}
        onSkip={closeForSession}
        onDisable={disableTour}
      />
    </GuidedTourContext.Provider>
  );
}

export default GuidedTourProvider;

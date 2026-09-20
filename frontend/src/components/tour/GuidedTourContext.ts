import { createContext, useContext } from "react";

type GuidedTourContextValue = {
  startTour: () => void;
};

export const GuidedTourContext = createContext<GuidedTourContextValue | null>(
  null,
);

export function useGuidedTour() {
  const context = useContext(GuidedTourContext);

  if (!context) {
    throw new Error(
      "useGuidedTour debe utilizarse dentro de GuidedTourProvider.",
    );
  }

  return context;
}

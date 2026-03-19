"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error capturado por el boundary:", error);
  }, [error]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-background p-5">
      <div className="flex max-w-md flex-col items-center gap-4 rounded-card border border-border-dark bg-card p-8 text-center shadow-lg">
        <AlertTriangle className="h-16 w-16 text-red-500" />
        <h2 className="text-2xl font-bold font-montserrat">¡Algo salió mal!</h2>
        <p className="text-text-muted font-inter">
          Tuvimos un problema al cargar esta sección. Por favor, intenta de
          nuevo.
        </p>
        <button
          onClick={() => reset()}
          className="mt-4 w-full rounded-md bg-btn-primary py-3 text-white font-inter hover:bg-btn-primary-hover transition"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}

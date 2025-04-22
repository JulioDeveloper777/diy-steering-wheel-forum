"use client";

import { Button } from "@heroui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

interface ErrorPageProps {
  error?: Error;
  resetErrorBoundary?: () => void;
}

export default function ErrorPage({
  error,
  resetErrorBoundary,
}: ErrorPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Travou tudo!</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Parece que nosso motor deu um problema. Vamos tentar consertar isso
          rapidinho!
        </p>

        {error && (
          <div className="p-4 bg-card rounded-lg mb-6 text-left overflow-auto max-h-48">
            <p className="font-mono text-sm break-all">{error.message}</p>
          </div>
        )}

          <Link href="/">
            <Button variant="shadow" color="secondary" size="lg" className="w-full sm:w-auto">
              Voltar para a página inicial
            </Button>
          </Link>

          <p className="text-sm text-muted-foreground mt-4">
            Se o problema persistir, tente atualizar a página ou entre em
            contato com nosso suporte.
          </p>
        </div>
      </div>
  );
}

"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { HeroUIProvider } from "@heroui/react";
import { type ReactNode } from "react";
import { ptBR } from "@clerk/localizations";

interface AppProviderProps {
  children: ReactNode;
  className?: string;
}

export function AppProvider({ children, className }: AppProviderProps) {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        variables: {
          colorPrimary: "hsl(102 59% 44%)",
        },
      }}
    >
      <HeroUIProvider locale="pt-BR" className={className}>
        {children}
      </HeroUIProvider>
    </ClerkProvider>
  );
}
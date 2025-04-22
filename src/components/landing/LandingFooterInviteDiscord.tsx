"use client";

import { Button } from "@heroui/button";
import { ArrowRight, MessageSquare, Users, Wrench, Zap } from "lucide-react";
import Link from "next/link";

export const LandingFooterInviteDiscord = () => {
  return (
    <section className="w-full py-16">
      <div className="absolute inset-0 opacity-10"></div>
      <div className="absolute inset-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mx-auto lg:ml-0 lg:order-2 rounded-xl border border-red-600/10 shadow-[0_0_25px_0px_rgba(220,38,38,0.2)] overflow-hidden p-2 lg:p-4 w-full max-w-[450px] lg:max-w-none">
            <img
              alt="Comunidade DSW"
              className="aspect-video w-full rounded-lg object-cover"
              src="https://placehold.co/600x400/222222/DDDDDD?text=DSW+Community"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-xl bg-red-900/20 px-3 py-1 text-sm border border-red-600/20">
                <Users className="h-4 w-4 mr-3 text-red-500" />
                <span className="text-red-400">Comunidade DSW Wheel</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                Entre para nossa comunidade hoje
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Junte-se a milhares de entusiastas, compartilhe projetos,
                obtenha ajuda e leve seu simulador para outro nível.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" variant="bordered" className="group">
                  <Zap className="mr-2 h-4 w-4" />
                  Criar uma conta
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
              </Link>
              <Link href="/forum">
                <Button variant="solid" color="secondary" size="lg">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Ver Fórum
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center px-4 py-3 rounded-lg border border-zinc-700/50">
              <Wrench className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
              <p className="text-sm text-zinc-300">
                "Um bom volante DIY não é apenas um controle, é uma extensão do
                piloto. Construa o seu."
                <span className="block mt-1 text-zinc-500 text-xs">
                  — Equipe DIY Steering Wheel
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

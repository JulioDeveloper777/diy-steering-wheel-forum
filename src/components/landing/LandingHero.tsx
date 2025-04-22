"use client";

import { Button } from "@heroui/button";
import { ArrowRight, Image, Settings, Star } from "lucide-react";
import Link from "next/link";

export const LandingHero = () => {
  return (
    <section className="py-20 overflow-hidden relative">
      <div className="absolute inset-0 opacity-30"></div>
      <div className="absolute inset-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-xl bg-red-900/20 px-3 py-1 text-sm mb-4 border border-red-600/20">
              <span className="text-red-400">
                A sua comunidade de volantes DIY
              </span>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                Construa o Volante dos Seus Sonhos
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Projetado para entusiastas do mundo DIY. Construa, programe e
                configure seu volante DIY com nossa comunidade vibrante e
                recursos incríveis.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/documentacao">
                <Button size="lg" variant="bordered" className="group">
                  <Settings className="mr-2 h-4 w-4" />
                  Comece seu projeto
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
              </Link>
              <Link href="/galeria">
                <Button variant="solid" color="secondary" size="lg">
                  <Image className="mr-2 h-4 w-4" />
                  Ver projetos
                </Button>
              </Link>
            </div>
            <div className="mt-4 py-2 px-3 rounded-xl bg-zinc-800/80 border border-zinc-700/50 text-sm text-zinc-400 flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
              <span>
                Mais de 5.000 entusiastas já construíram seus volantes com nossa
                ajuda
              </span>
            </div>
          </div>
          <div className="mx-auto lg:mr-0 rounded-xl border border-red-600/10 shadow-[0_0_25px_0px_rgba(220,38,38,0.2)] overflow-hidden p-2 lg:p-4 w-full max-w-[450px] lg:max-w-none">
            <img
              alt="Volante DIY de SimRacing"
              className="aspect-video w-full rounded-lg object-cover"
              src="https://placehold.co/600x400/222222/DDDDDD?text=DIY+Steering+Wheel"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

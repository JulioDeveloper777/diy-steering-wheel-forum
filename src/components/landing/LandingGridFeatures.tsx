"use client";

import { features } from "@/config/home";
import { Button } from "@heroui/button";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CardDescription, CardTitle } from "../ui/card";

export const LandingGridFeatures = () => {
  return (
    <section className="w-full py-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-xl bg-red-900/20 px-3 py-1 text-sm border border-red-600/20">
              <span className="text-red-400">Recursos da Plataforma</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-transparent bg-clip-text bg-gradient-to-b from-white to-red-200">
              Tudo o que você precisa para seu projeto
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nossa plataforma oferece todas as ferramentas e recursos para você
              planejar, construir, programar e configurar seu volante.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Link
              href={feature.link}
              key={index}
              className="border border-white/30 rounded-xl"
            >
              <Card className="h-full">
                <CardHeader className="flex flex-col items-start gap-3">
                  <div>{feature.icon}</div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-zinc-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant="shadow"
                    color="secondary"
                    className="group-hover:bg-primary hover:bg-red-500/40 group-hover:text-primary-foreground text-zinc-300"
                  >
                    Explorar
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

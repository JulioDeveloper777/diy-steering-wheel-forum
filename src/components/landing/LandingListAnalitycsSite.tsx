"use client"

import { NumberTicker } from "../magicui/number-ticker";

export const LandingListAnalitycsSite = () => {
  return (
    <section className="py-12 border-y border-zinc-800">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-bold text-primary">
              <NumberTicker decimalPlaces={1} value={5000}/>
              </div>  
            <p className="text-muted-foreground">Usuários Ativos</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-bold text-primary">
              <NumberTicker decimalPlaces={2} value={12000}/>
            </div>
            <p className="text-muted-foreground">Projetos Compartilhados</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-bold text-primary">
              <NumberTicker value={350}/>
            </div>
            <p className="text-muted-foreground">Tutoriais Detalhados</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl font-bold text-primary">
              <NumberTicker decimalPlaces={2} value={85000}/>
            </div>
            <p className="text-muted-foreground">Downloads</p>
          </div>
        </div>
      </div>
    </section>
  );
};

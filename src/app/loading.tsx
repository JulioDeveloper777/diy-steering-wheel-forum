import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 color="red" className="h-12 w-12 animate-spin text-primary" />
        <h2 className="text-2xl font-bold tracking-tight">Carregando...</h2>
        <p className="text-muted-foreground">
          Estamos preparando tudo, só um instante!
        </p>
        <p className="text-sm text-muted-foreground max-w-md text-center italic mt-8">
          "Um bom volante DIY é como uma obra de arte... leva tempo, mas o
          resultado é incrível!"
        </p>
      </div>
    </div>
  );
}

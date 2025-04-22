import { Button } from "@heroui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <AlertCircle color="red" className="h-16 w-16 text-destructive mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">
          Oops, parece que derrapamos!
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Essa página não existe ou pode ter sido movida. É como procurar um
          parafuso de 10mm na oficina - simplesmente desapareceu!
        </p>
        <div className="space-y-4">
          <Link href="/">
            <Button size="lg" color="secondary" className="w-full sm:w-auto">
              Voltar para a página inicial
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Se você acha que isso é um erro, nos envie uma mensagem e daremos
            uma olhada no nosso painel de controle.
          </p>
        </div>
      </div>
    </div>
  );
}

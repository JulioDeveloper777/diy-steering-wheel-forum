import { Button } from "@heroui/button";
import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/20 py-12">
      <div className="mx-10">
        <div className="flex justify-between gap-4 md:flex-row">
          <div className="">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-clip-text gap-3 flex text-transparent bg-gradient-to-r from-red-500 to-red-600">
                  DIY<span className="text-slate-200">Steering Wheel</span>
                </span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Comunidade dedicada a ajudar entusiastas a construir seus
                próprios volantes para simulação de corrida.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" aria-label="Youtube">
                  <Youtube className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" aria-label="Github">
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-lg">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-muted-foreground hover:text-foreground hover:opacity-40 transition-opacity"
                >
                  Documentação
                </Link>
              </li>
              <li>
                <Link
                  href="/forum"
                  className="text-muted-foreground hover:text-foreground hover:opacity-40 transition-opacity"
                >
                  Fórum
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-foreground hover:opacity-40 transition-opacity"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  href="/downloads"
                  className="text-muted-foreground hover:text-foreground hover:opacity-40 transition-opacity"
                >
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-lg">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/perguntas"
                  className="text-muted-foreground hover:text-foreground hover:opacity-40 transition-opacity"
                >
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-muted-foreground hover:text-foreground hover:opacity-40 transition-opacity"
                >
                  Suporte Técnico
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace"
                  className="text-muted-foreground hover:text-foreground hover:opacity-40 transition-opacity"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground hover:opacity-40 transition-opacity"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DIY Steering Wheel. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground hover:opacity-40 transition-opacity"
            >
              Termos de Uso
            </Link>
            <Link
              href="/privacity"
              className="text-sm text-muted-foreground hover:text-foreground hover:opacity-40 transition-opacity"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

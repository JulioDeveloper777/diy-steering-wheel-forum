import {
  BookOpen,
  Download,
  HelpCircle,
  Image,
  MessageSquare,
  ShoppingCart,
} from "lucide-react";

export const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "Fórum DSW",
    description:
      "Compartilhe seus projetos, faça perguntas e conecte-se com outros construtores de volantes.",
    link: "/forum",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Tutoriais & Documentação",
    description:
      "Aprenda com guias detalhados sobre eletrônica, programação e mecânica.",
    link: "/documentacao",
  },
  {
    icon: <Image className="h-10 w-10 text-primary" />,
    title: "Galeria de Projetos",
    description: "Inspire-se com os projetos compartilhados pela comunidade.",
    link: "/galeria",
  },
  {
    icon: <Download className="h-10 w-10 text-primary" />,
    title: "Downloads",
    description: "Acesse firmware, drivers e softwares para seu projeto.",
    link: "/downloads",
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: "Marketplace",
    description: "Compre e venda componentes para volantes DIY.",
    link: "/marketplace",
  },
  {
    icon: <HelpCircle className="h-10 w-10 text-primary" />,
    title: "Perguntas & Respostas",
    description:
      "Tire suas dúvidas específicas com a comunidade e especialistas.",
    link: "/perguntas",
  },
];

export const testimonials = [
  {
    quote:
      "Graças aos tutoriais da DSW, consegui construir meu primeiro volante F1 com display LCD. Simplesmente incrível!",
    author: "Carlos R.",
    role: "Entusiasta de SimRacing",
    avatar: "https://placehold.co/100/222222/DDDDDD?text=CR",
  },
  {
    quote:
      "A comunidade da DSWWheel é fantástica! Sempre que tenho um problema, alguém está pronto para ajudar. Melhor plataforma DIY!",
    author: "Ana M.",
    role: "Desenvolvedora e Piloto Virtual",
    avatar: "https://placehold.co/100/222222/DDDDDD?text=AM",
  },
  {
    quote:
      "Economizei uma fortuna construindo meu próprio button box seguindo as dicas daqui. Valeu muito a pena!",
    author: "Pedro S.",
    role: "Piloto de Endurance Virtual",
    avatar: "https://placehold.co/100/222222/DDDDDD?text=PS",
  },
];

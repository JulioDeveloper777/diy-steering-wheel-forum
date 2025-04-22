import { Header } from "@/components/header/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DIY Steering Wheel",
  description: "Uma plataforma para criar e compartilhar projetos de steering wheel",
  keywords: [
    "DIY",
    "DIY Steering Wheel",
    "Volantes DIY",
    "Volantes Caseiros",
    "Simulador caseiro",
    "Simulador de carro",
  ],
  authors: [{ name: "Júlio Developer" }, { name: "Valdemir" }],
  openGraph: {
    title: "DIY Steering Wheel",
    description: "Uma plataforma para criar e compartilhar projetos de steering wheel",
    url: "https://thejupiter.com.br",
    siteName: "DIY Steering Wheel",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "DIY Steering Wheel",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIY Steering Wheel",
    description: "Uma plataforma para criar e compartilhar projetos de steering wheel",
    images: [""],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning className="dark">
      <body className={`${inter.className} bg-transparent`}>
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
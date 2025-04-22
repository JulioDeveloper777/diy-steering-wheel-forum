import { Spinner } from "@/components/ui/spinner";
import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Wrench } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Crie sua conta",
  description: "Crie sua conta na plataforma",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 to-black p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-4xl flex-col lg:flex-row font-bold flex gap-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-600">
              DSW<span className="text-slate-200">Steering Wheel</span>
            </span>
          </Link>
          <p className="text-muted-foreground mt-2">
            Crie sua conta para interagir com a comunidade
          </p>
        </div>
        <Suspense fallback={<Spinner />}>
          {/* <RegisterForm /> */}
          <SignUp
            routing="hash"
            afterSignOutUrl={"/profile"}
            appearance={{
              layout: {
                animations: true,
                logoImageUrl: "/logo.svg",
                shimmer: true,
                unsafe_disableDevelopmentModeWarnings: true,
              },
              baseTheme: dark,
            }}
            signInUrl="/login"
          />
        </Suspense>
        <div className="mt-10 text-center">
          <p className="text-sm text-zinc-500">
            DSW - A plataforma para amantes de volantes DIY
          </p>
          <div className="flex justify-center mt-2">
            <Wrench className="h-4 w-4 text-red-500 mr-1" />
            <p className="text-xs text-zinc-600">Faça. Modifique. Simule.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

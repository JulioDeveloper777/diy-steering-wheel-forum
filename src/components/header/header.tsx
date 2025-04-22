"use client";

import Loading from "@/app/loading";
import { useUser } from "@clerk/nextjs";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import Logo from "../logo";
import { AuthButtons } from "./auth-buttons";
import { UserHeader } from "./user-header";

export const Header = () => {
  const { isSignedIn, isLoaded } = useUser();
  const pathname = usePathname();

  if (!isLoaded) {
    return <Loading />;
  }

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <Navbar className="bg-black/20 backdrop-blur-md">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color={isActive("/") ? "secondary" : "foreground"} href="/">
            Início
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={isActive("/gallery") ? "secondary" : "foreground"}
            href="/gallery"
          >
            Galeria
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={isActive("/docs") ? "secondary" : "foreground"}
            href="/docs"
          >
            Documentação
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={isActive("/forum") ? "secondary" : "foreground"}
            href="/forum"
          >
            Fórum
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={isActive("/downloads") ? "secondary" : "foreground"}
            href="/downloads"
          >
            Downloads
          </Link>
        </NavbarItem>
      </NavbarContent>
      {isSignedIn ? <UserHeader /> : <AuthButtons />}
    </Navbar>
  );
};

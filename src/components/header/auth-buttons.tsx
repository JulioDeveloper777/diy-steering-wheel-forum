import { Button } from "@heroui/button";
import { NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from "next/link";

export const AuthButtons = () => {
  return (
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="/login">Entrar</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="secondary" href="/register" variant="shadow">
          Criar conta
        </Button>
      </NavbarItem>
    </NavbarContent>
  );
};

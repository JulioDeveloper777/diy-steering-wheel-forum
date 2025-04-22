import { useClerk, useUser } from "@clerk/nextjs";
import { Avatar } from "@heroui/avatar";
import { NavbarContent } from "@heroui/navbar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";

export const UserHeader = () => {
  const { user } = useUser();
  if (!user) return null;

  const { signOut } = useClerk();

  const handleLogout = () => {
    signOut({
      redirectUrl: "/",
    });
  };

  return (
    <>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={user.firstName as string}
              size="sm"
              src={user.imageUrl}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Logado como</p>
              <p className="font-semibold">{user.primaryEmailAddress?.emailAddress}</p>
            </DropdownItem>
            <DropdownItem href="/profile" key="profile">Perfil</DropdownItem>
            <DropdownItem
              onClick={handleLogout}
              key="logout"
              color="danger"
            >
              Sair
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </>
  );
};
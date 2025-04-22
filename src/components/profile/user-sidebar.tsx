"use client";

import Loading from "@/app/loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import { Avatar } from "@heroui/avatar";
import {
  Button,
  Chip,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { Settings } from "lucide-react";
import { useState } from "react";
import { ForumPost, Badges } from "@prisma/client";

export type UserData = {
  id: string;
  bio: string | null;
  ForumPost: ForumPost[];
  Badges: Badges[];
};

interface UserSidebarProps {
  userData: UserData;
  postCount: number;
}

export const UserSidebar = ({ userData, postCount }: UserSidebarProps) => {
  const { isLoaded, user } = useUser();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [fullName, setFullName] = useState(`${user?.firstName || ""} ${user?.lastName || ""}`);
  const [username, setUsername] = useState(user?.username || "");
  const [bio, setBio] = useState(userData.bio || "");
  const [profileImage, setProfileImage] = useState<File | null>(null);

  if (!isLoaded || !user) {
    return <Loading />;
  }

  const handleSave = async () => {
    const [firstName, ...lastNameParts] = fullName.split(" ");
    const lastName = lastNameParts.join(" ");
  
    try {
      // Update user data in Clerk
      await user.update({
        firstName,
        lastName,
        username,
      });
  
      // Update profile image if provided
      if (profileImage) {
        await user.setProfileImage({ file: profileImage });
      }
  
      // Update bio in your database
      await fetch("/api/update-bio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, bio }),
      });
  
      onClose(); // Close the modal after saving
    } catch (error) {
      console.error("Failed to update profile:", error);
      // Show a user-friendly message
      alert("Unable to update profile: " + error);
    }
  };

  return (
    <Card className="lg:col-span-1 rounded-xl border-white border-opacity-35">
      <CardHeader className="text-center">
        <Avatar
          className="w-24 h-24 mx-auto mb-4"
          isBordered
          as="button"
          color="success"
          name={user.firstName ?? ""}
          size="lg"
          src={user.imageUrl}
        />
        <CardTitle>{user.firstName} {user.lastName}</CardTitle>
        <CardDescription>@{user.username}</CardDescription>
        <div className="text-sm text-muted-foreground mt-1">
          Membro desde {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : ""}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-6">{userData.bio || "No bio available"}</p>
        <div className="grid grid-cols-3 gap-4 text-center mb-6">
          <div>
            <p className="text-xl font-semibold">{postCount}</p>
            <p className="text-xs text-muted-foreground">Posts</p>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Conquistas</h3>
          <div className="flex flex-wrap gap-2">
            {userData.Badges.map((badge) => (
              <Chip key={badge.id} variant="bordered" color="success">
                {badge.badge}
              </Chip>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            variant="bordered"
            size="sm"
            className="w-full hover:border-red-500"
            onPress={onOpen}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Editar Perfil</span>
          </Button>
          <Modal
            isOpen={isOpen}
            backdrop="opaque"
            classNames={{
              backdrop:
                "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
            }}
            onOpenChange={onOpenChange}
            placement="top-center"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Editar Perfil
                  </ModalHeader>
                  <ModalBody className="items-center flex flex-col gap-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          setProfileImage(e.target.files[0]);
                        }
                      }}
                    />
                    <Avatar
                      alt="Enviar imagem"
                      color="success"
                      size="lg"
                      className="hover:opacity-40 w-20 mb-5 h-20 hover:cursor-pointer"
                      src={profileImage ? URL.createObjectURL(profileImage) : user.imageUrl}
                    />
                    <Input
                      label="Nome Completo"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      type="text"
                      color="secondary"
                      variant="bordered"
                    />
                    <Input
                      label="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      color="secondary"
                      variant="bordered"
                    />
                    <Input
                      label="Bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      type="text"
                      color="secondary"
                      variant="bordered"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Fechar
                    </Button>
                    <Button color="success" onPress={handleSave}>
                      Salvar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </CardContent>
    </Card>
  );
};
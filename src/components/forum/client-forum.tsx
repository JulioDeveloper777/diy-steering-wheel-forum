"use client";

import { AsideForum } from "@/components/forum/categories/aside";
import { CategoryItem } from "@/components/forum/categories/category-item";
import { Button } from "@heroui/button";
import { Tab, Tabs } from "@heroui/tabs";
import { Badges, ForumPost, Project } from "@prisma/client";
import { PlusCircle } from "lucide-react";
import { PostItem } from "./categories/post-item";

export type UserData = {
  id: string;
  bio: string | null;
  Project: Project[];
  ForumPost: ForumPost[];
  Badges: Badges[];
};

export interface ClientForumProps {
  postCount: number;
  usersCount: number;
  userData: UserData;
}

export default function ClientForum({
  postCount,
  userData,
  usersCount,
}: ClientForumProps) {
  return (
    <div className="px-10 bg-gradient-to-br py-12 from-black via-neutral-800 to-black">
      <div className="mb-8">
        <h3 className="text-3xl font-bold tracking-tighter mb-2">Fórum DSW</h3>
        <p className="text-muted-foreground text-lg">
          Conecte-se com outros construtores, compartilhe ideias e encontre
          soluções.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <AsideForum postCount={postCount} usersCount={usersCount} />
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Fórum</h2>
            <Button variant="shadow" color="secondary">
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>Nova Postagem</span>
            </Button>
          </div>
          <Tabs
            aria-label="categorias-forum"
            variant="bordered"
            color="secondary"
          >
            <Tab key="category" title="Categorias">
              <CategoryItem />
            </Tab>
            <Tab key="topics" title="Posts em Destaque">
              <PostItem />
            </Tab>
          </Tabs>
          {/* <StatisticsCategoryForum />
          <UserActivityForum /> */}
        </div>
      </div>
    </div>
  );
}

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@heroui/button";
import { Tab, Tabs } from "@heroui/tabs";
import { ForumPost } from "@prisma/client";
import { MessageSquare, Share2, User } from "lucide-react";

interface ContentProfileProps {
  postsProfile: ForumPost[];
  commentsCount: number;
  viewsCount: number;
}

export const ContentTab = ({
  postsProfile,
  commentsCount,
  viewsCount,
}: ContentProfileProps) => {
  return (
    <Tabs
      aria-label="tabs-profile"
      className="w-full flex justify-start"
      variant="bordered"
      color="secondary"
    >
      <Tab key="posts" title="Postagens">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {postsProfile.length > 0 ? (
            postsProfile.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden group rounded-xl border-white border-opacity-35"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription>
                    {post.createdAt.toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    {post.content.substring(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <MessageSquare color="red" className="h-4 w-4" />
                        <span>{commentsCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User color="red" className="h-4 w-4" />
                        <span>{viewsCount}</span>
                      </div>
                    </div>
                    <Button
                      variant="faded"
                      size="sm"
                      className="text-muted-foreground bg-transparent border-red-500 hover:bg-red-500"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="flex items-center border text-center px-96 py-52 border-white/50 rounded-xl justify-center">
              <p className="text-nowrap text-2xl">Nenhum post encontrado.</p>
            </div>
          )}
        </div>
      </Tab>
    </Tabs>
  );
};

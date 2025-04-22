"use client";

import { categories } from "@/config/forum";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import { MessageSquare } from "lucide-react";

export const CategoryItem = () => {
  return (
    <>
      {categories.map((category) => (
        <Card
          key={category.id}
          className="overflow-hidden hover:border-primary h-24 transition-colors bg-[#1a1a1a] mb-5"
        >
          <div className="flex">
            <div className="flex items-center justify-center h-24 w-16 bg-red-800 bg-opacity-15">
              {category.icon}
            </div>
            <div className="flex-1 flex-col">
              <CardHeader className="pb-2 flex flex-col items-start justify-start">
                <div className="flex justify-between">
                  <div className="text-xl hover:text-primary cursor-pointer text-white">
                    {category.name}
                  </div>
                </div>
                <p className="text-white/50">{category.description}</p>
              </CardHeader>
              <CardFooter className="pt-0 pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MessageSquare color="red" className="h-4 w-4 opacity-50" />
                    <span className="text-white/50">
                      {category.posts} Posts
                    </span>
                  </div>
                </div>
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

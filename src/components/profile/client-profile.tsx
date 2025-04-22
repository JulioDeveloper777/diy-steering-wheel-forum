"use client";

import { ContentTab } from "@/components/profile/content-tab";
import { UserSidebar } from "@/components/profile/user-sidebar";
import { UserData } from "../forum/client-forum";
import { ForumPost } from "@prisma/client";

export interface ClientProfileProps {
  commentsCount: number;
  viewsCount: number;
  postCount: number;
  postsProfile: ForumPost[];
  userData: UserData;
}

export const ClientProfile = ({
  postsProfile,
  postCount,
  commentsCount,
  viewsCount,
  userData,
}: ClientProfileProps) => {
  return (
    <div className=" py-12 flex flex-col min-h-screen bg-gradient-to-br from-black via-neutral-800 to-black">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mx-5">
        <UserSidebar userData={userData} postCount={postCount} />
        <div className="lg:col-span-3">
          <ContentTab
            commentsCount={commentsCount}
            postsProfile={postsProfile}
            viewsCount={viewsCount}
          />
        </div>
      </div>
    </div>
  );
};
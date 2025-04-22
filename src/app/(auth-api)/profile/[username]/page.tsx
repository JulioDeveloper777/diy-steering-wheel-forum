"use server";

import {
  getPostsForumCount,
  getPostsFromProfile,
  getTotalCommentsForUser,
  getTotalViewsForUser,
} from "@/actions/posts-forum-actions";
import { getUserById } from "@/actions/user-actions";
import { ClientProfile } from "@/components/profile/client-profile";
import { auth } from "@clerk/nextjs/server";

export default async function ProfilePage() {
  const { userId } = await auth();

  if (!userId) return null;

  const userData = await getUserById(userId);
  const postsCount = (await getPostsForumCount(userId)) ?? 0;

  const postsProfile = await getPostsFromProfile(userId);
  const commentsCount = await getTotalCommentsForUser(userId);
  const viewsCount = await getTotalViewsForUser(userId);

  if (!userData) return null;

  return (
    <ClientProfile
      postCount={postsCount}
      userData={userData}
      commentsCount={commentsCount}
      postsProfile={postsProfile}
      viewsCount={viewsCount}
    />
  );
}
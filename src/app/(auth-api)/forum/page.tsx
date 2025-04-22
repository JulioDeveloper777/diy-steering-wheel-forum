"use server";

import { getPostsForumCount } from "@/actions/posts-forum-actions";
import { countUsers, getUserById } from "@/actions/user-actions";
import ClientForum from "@/components/forum/client-forum";
import { auth } from "@clerk/nextjs/server";

export default async function Forum() {
  const { userId } = await auth();

  if (!userId) return null;

  const postsCount = (await getPostsForumCount(userId)) ?? 0;
  const usersCount = (await countUsers()) ?? 0;
  const userData = await getUserById(userId);

  if (!userData) return null;

  return <ClientForum usersCount={usersCount} postCount={postsCount} userData={userData} />;
}

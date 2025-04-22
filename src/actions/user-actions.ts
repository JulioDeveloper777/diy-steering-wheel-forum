"use server";

import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function syncUser() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) return undefined;

    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (existingUser) return existingUser;

    const dbUser = await prisma.user.create({
      data: {
        id: userId,
      },
    });

    return dbUser;
  } catch (error) {
    console.error("Error in syncError: ", error);
  }
}

export async function getUserById(userId: string) {
  try {
    return prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        Project: true,
        ForumPost: true,
        Badges: true
      },
    });
  } catch (error) {
    console.error("Error in getUserById: ", error);
  }
}

export async function countUsers() {
  try {
    const users = await prisma.user.count({}) 
    
    return users
  } catch (error) {
    console.error('Error counting users')
  }
}
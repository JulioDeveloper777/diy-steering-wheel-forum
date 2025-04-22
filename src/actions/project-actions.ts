"use server";

import prisma from "@/lib/prisma";

// export async function create() {
//   try {
//     const { userId } = await auth();
//     const user = await currentUser();

//     if (!userId || !user) return;

//     const existingUser = await prisma.user.findUnique({
//       where: {
//         id: userId,
//       },
//     });

//     if (existingUser) return existingUser;

//     const dbUser = await prisma.user.create({
//       data: {
//         clerkId: userId,
//         name: `${user.firstName || " "} ${user.lastName || " "}`,
//         username:
//           user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
//         email: user.emailAddresses[0].emailAddress,
//         avatarUrl: user.imageUrl,
//         providerId: userId,
//       },
//     });

//     return dbUser;
//   } catch (error) {
//     console.error("Error in syncError: ", error);
//   }
// }

export async function getProjectsCount(userId: string) {
  try {
    return prisma.project.count({
      where: {
        authorId: userId,
      },
    });
  } catch (error) {
    console.error("Error in getProjectsCount: ", error);
  }
}
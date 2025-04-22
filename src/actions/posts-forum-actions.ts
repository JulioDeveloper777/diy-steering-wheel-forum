"use server";

import prisma from "@/lib/prisma";
import { CategorysForum } from "@prisma/client";

export async function create(title: string, content: string, authorId: string, category: CategorysForum) {
  try {
    const post = await prisma.forumPost.create({
      data: {
        title,
        content,
        authorId,
        categorysForumId: category.id // rever isso
      }
    })

    return post;
  } catch (error) {
    console.error("Error creating post.")
  }

}

export async function getPostsForumCount(userId: string) {
  try {
    return prisma.forumPost.count({
      where: {
        authorId: userId,
      },
    });
  } catch (error) {
    console.error("Error in getPostsForumCount: ", error);
  }
}

export async function getPostById(postId: string) {
  try {
    const post = await prisma.forumPost.findUnique({
      where: {
        id: postId
      }
    })

    return post
  } catch (error) {
    console.error('Error counting posts')
  }
}

export async function getPostsFromProfile(userId: string) {
  try {
    const posts = await prisma.forumPost.findMany({
      where: {
        authorId: userId,
      },
      select: {
        id: true,
        title: true,
        content: true,
        views: true,
        authorId: true,
        createdAt: true,
        updatedAt: true,
        replies: true,
        categorysForumId: true
      },
      take: 6,
    });
    
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getAllPostsFromProfile(userId: string) {
  try {
    const post = await prisma.forumPost.findFirst({
      where: {
        authorId: userId
      },
      // take: 100,
    })

    return post
  } catch (error) {
    console.error('Error counting posts')
  }
}

export async function getTotalCommentsForUser(userId: string) {
  try {
    const totalComments = await prisma.comment.count({
      where: {
        post: {
          authorId: userId,
        },
      },
    });
    return totalComments;
  } catch (error) {
    console.error("Error counting comments:", error);
    return 0;
  }
}

export async function getTotalViewsForUser(userId: string) {
  try {
    const totalViews = await prisma.forumPost.aggregate({
      where: {
        authorId: userId,
      },
      _sum: {
        views: true,
      },
    });
    return totalViews._sum.views || 0;
  } catch (error) {
    console.error("Error summing views:", error);
    return 0;
  }
}

export async function getPostCountByCategory() {
  try {
    // Busca todas as categorias existentes no banco
    const categories = await prisma.categorysForum.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    // Agrupa os posts por categorysForumId e conta os posts em cada grupo
    const postCounts = await prisma.forumPost.groupBy({
      by: ["categorysForumId"],
      _count: {
        id: true, // Conta os posts pelo campo id
      },
    });

    // Cria um mapa para facilitar a busca das contagens por categoria
    const postCountMap = new Map(
      postCounts.map((pc) => [pc.categorysForumId, pc._count.id])
    );

    // Combina os dados das categorias com as contagens de posts
    const result = categories.map((category) => ({
      categoryId: category.id,
      categoryName: category.name,
      postCount: postCountMap.get(category.id) || 0, // Usa 0 se não houver posts
    }));

    return result;
  } catch (error) {
    console.error("Erro ao buscar a contagem de posts por categoria:", error);
    throw error;
  }
}
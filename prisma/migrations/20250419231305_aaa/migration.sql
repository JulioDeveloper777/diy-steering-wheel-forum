/*
  Warnings:

  - You are about to drop the `CategorysForum` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "forum_posts" DROP CONSTRAINT "forum_posts_categorysForumId_fkey";

-- DropTable
DROP TABLE "CategorysForum";

-- CreateTable
CREATE TABLE "category_forum" (
    "id" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "category_forum_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_forum_id_key" ON "category_forum"("id");

-- CreateIndex
CREATE UNIQUE INDEX "category_forum_name_key" ON "category_forum"("name");

-- AddForeignKey
ALTER TABLE "forum_posts" ADD CONSTRAINT "forum_posts_categorysForumId_fkey" FOREIGN KEY ("categorysForumId") REFERENCES "category_forum"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `category` on the `forum_posts` table. All the data in the column will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categorysForumId` to the `forum_posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "forum_posts" DROP COLUMN "category",
ADD COLUMN     "categorysForumId" TEXT NOT NULL;

-- DropTable
DROP TABLE "products";

-- CreateTable
CREATE TABLE "CategorysForum" (
    "id" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "CategorysForum_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategorysForum_id_key" ON "CategorysForum"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CategorysForum_name_key" ON "CategorysForum"("name");

-- AddForeignKey
ALTER TABLE "forum_posts" ADD CONSTRAINT "forum_posts_categorysForumId_fkey" FOREIGN KEY ("categorysForumId") REFERENCES "CategorysForum"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

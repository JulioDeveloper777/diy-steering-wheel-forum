/*
  Warnings:

  - You are about to drop the column `createdAt` on the `badges` table. All the data in the column will be lost.
  - You are about to drop the column `imgUrl` on the `badges` table. All the data in the column will be lost.
  - Made the column `userId` on table `badges` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "badges" DROP CONSTRAINT "badges_userId_fkey";

-- AlterTable
ALTER TABLE "badges" DROP COLUMN "createdAt",
DROP COLUMN "imgUrl",
ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "badges" ADD CONSTRAINT "badges_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

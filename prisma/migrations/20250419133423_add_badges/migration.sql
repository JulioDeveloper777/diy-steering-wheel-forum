/*
  Warnings:

  - You are about to drop the column `name` on the `badges` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "BadgesDB" AS ENUM ('Explorador', 'Famosinho');

-- AlterTable
ALTER TABLE "badges" DROP COLUMN "name",
ADD COLUMN     "badge" "BadgesDB" NOT NULL DEFAULT 'Explorador';

-- DropEnum
DROP TYPE "AccountStatus";

-- DropEnum
DROP TYPE "Roles";

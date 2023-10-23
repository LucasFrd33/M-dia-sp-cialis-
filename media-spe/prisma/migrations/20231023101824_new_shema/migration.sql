/*
  Warnings:

  - You are about to drop the column `content` on the `Articles` table. All the data in the column will be lost.
  - You are about to drop the column `file` on the `Articles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `media` to the `Articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `miniatureArticle` to the `Articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Articles" DROP COLUMN "content",
DROP COLUMN "file",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "headlineImage" TEXT,
ADD COLUMN     "headlineTitle" TEXT,
ADD COLUMN     "isHeadline" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "media" TEXT NOT NULL,
ADD COLUMN     "miniatureArticle" TEXT NOT NULL,
ADD COLUMN     "source" TEXT,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

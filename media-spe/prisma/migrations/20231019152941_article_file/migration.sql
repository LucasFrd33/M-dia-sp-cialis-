/*
  Warnings:

  - You are about to drop the column `image1` on the `Articles` table. All the data in the column will be lost.
  - Added the required column `file` to the `Articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Articles" DROP COLUMN "image1",
ADD COLUMN     "file" TEXT NOT NULL;

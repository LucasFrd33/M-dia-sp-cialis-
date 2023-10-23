/*
  Warnings:

  - Added the required column `text` to the `Articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Articles" ADD COLUMN     "text" TEXT NOT NULL;

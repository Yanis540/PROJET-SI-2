/*
  Warnings:

  - You are about to drop the column `photo` on the `Officier` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Officier" DROP COLUMN "photo",
ADD COLUMN     "photoB" BYTEA;

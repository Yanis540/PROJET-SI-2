/*
  Warnings:

  - You are about to drop the column `photoB` on the `Officier` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Officier" DROP COLUMN "photoB",
ADD COLUMN     "photo" BYTEA;

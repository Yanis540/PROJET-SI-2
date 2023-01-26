/*
  Warnings:

  - You are about to drop the column `date` on the `ActeDeces` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `ActeMariage` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `ActeNaissance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ActeDeces" DROP COLUMN "date";

-- AlterTable
ALTER TABLE "ActeMariage" DROP COLUMN "date";

-- AlterTable
ALTER TABLE "ActeNaissance" DROP COLUMN "date";

/*
  Warnings:

  - You are about to drop the column `lieu` on the `ActeDeces` table. All the data in the column will be lost.
  - You are about to drop the column `lieu` on the `ActeMariage` table. All the data in the column will be lost.
  - You are about to drop the column `lieu` on the `ActeNaissance` table. All the data in the column will be lost.
  - Made the column `lieu` on table `Acte` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Acte" ALTER COLUMN "lieu" SET NOT NULL;

-- AlterTable
ALTER TABLE "ActeDeces" DROP COLUMN "lieu";

-- AlterTable
ALTER TABLE "ActeMariage" DROP COLUMN "lieu";

-- AlterTable
ALTER TABLE "ActeNaissance" DROP COLUMN "lieu";

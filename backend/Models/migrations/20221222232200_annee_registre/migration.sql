/*
  Warnings:

  - A unique constraint covering the columns `[annee,num_commune]` on the table `Registre` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `annee` on the `Registre` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Registre" DROP COLUMN "annee",
ADD COLUMN     "annee" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Registre_annee_num_commune_key" ON "Registre"("annee", "num_commune");

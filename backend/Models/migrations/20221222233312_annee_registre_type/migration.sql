/*
  Warnings:

  - A unique constraint covering the columns `[annee,num_commune,type_registre]` on the table `Registre` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Registre_annee_num_commune_key";

-- CreateIndex
CREATE UNIQUE INDEX "Registre_annee_num_commune_type_registre_key" ON "Registre"("annee", "num_commune", "type_registre");

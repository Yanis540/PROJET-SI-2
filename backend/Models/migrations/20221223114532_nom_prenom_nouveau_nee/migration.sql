/*
  Warnings:

  - Added the required column `nom` to the `ActeNaissance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prenom` to the `ActeNaissance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ActeNaissance" ADD COLUMN     "nom" VARCHAR(255) NOT NULL,
ADD COLUMN     "prenom" VARCHAR(255) NOT NULL;

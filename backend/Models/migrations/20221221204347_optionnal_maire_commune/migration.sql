-- DropForeignKey
ALTER TABLE "Commune" DROP CONSTRAINT "Commune_matricule_maire_fkey";

-- AlterTable
ALTER TABLE "Commune" ALTER COLUMN "matricule_maire" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Commune" ADD CONSTRAINT "Commune_matricule_maire_fkey" FOREIGN KEY ("matricule_maire") REFERENCES "Officier"("matricule") ON DELETE SET NULL ON UPDATE CASCADE;

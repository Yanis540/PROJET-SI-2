/*
  Warnings:

  - The primary key for the `Acte` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ActeDeces` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ActeMariage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ActeNaissance` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "ActeDeces" DROP CONSTRAINT "ActeDeces_num_acte_fkey";

-- DropForeignKey
ALTER TABLE "ActeDeces" DROP CONSTRAINT "ActeDeces_num_acte_naissance_fkey";

-- DropForeignKey
ALTER TABLE "ActeMariage" DROP CONSTRAINT "ActeMariage_num_acte_fkey";

-- DropForeignKey
ALTER TABLE "ActeMariage" DROP CONSTRAINT "ActeMariage_num_acte_naissance_femme_fkey";

-- DropForeignKey
ALTER TABLE "ActeMariage" DROP CONSTRAINT "ActeMariage_num_acte_naissance_mari_fkey";

-- DropForeignKey
ALTER TABLE "ActeNaissance" DROP CONSTRAINT "ActeNaissance_num_acte_fkey";

-- DropForeignKey
ALTER TABLE "ActeNaissance" DROP CONSTRAINT "ActeNaissance_num_mere_fkey";

-- DropForeignKey
ALTER TABLE "ActeNaissance" DROP CONSTRAINT "ActeNaissance_num_pere_fkey";

-- DropForeignKey
ALTER TABLE "_declarations" DROP CONSTRAINT "_declarations_A_fkey";

-- DropForeignKey
ALTER TABLE "_temoignages" DROP CONSTRAINT "_temoignages_A_fkey";

-- AlterTable
ALTER TABLE "Acte" DROP CONSTRAINT "Acte_pkey",
ALTER COLUMN "num_acte" DROP DEFAULT,
ALTER COLUMN "num_acte" SET DATA TYPE TEXT,
ADD CONSTRAINT "Acte_pkey" PRIMARY KEY ("num_acte");
DROP SEQUENCE "Acte_num_acte_seq";

-- AlterTable
ALTER TABLE "ActeDeces" DROP CONSTRAINT "ActeDeces_pkey",
ALTER COLUMN "num_acte" SET DATA TYPE TEXT,
ALTER COLUMN "num_acte_naissance" SET DATA TYPE TEXT,
ADD CONSTRAINT "ActeDeces_pkey" PRIMARY KEY ("num_acte");

-- AlterTable
ALTER TABLE "ActeMariage" DROP CONSTRAINT "ActeMariage_pkey",
ALTER COLUMN "num_acte" SET DATA TYPE TEXT,
ALTER COLUMN "num_acte_naissance_mari" SET DATA TYPE TEXT,
ALTER COLUMN "num_acte_naissance_femme" SET DATA TYPE TEXT,
ADD CONSTRAINT "ActeMariage_pkey" PRIMARY KEY ("num_acte");

-- AlterTable
ALTER TABLE "ActeNaissance" DROP CONSTRAINT "ActeNaissance_pkey",
ALTER COLUMN "num_acte" SET DATA TYPE TEXT,
ALTER COLUMN "num_pere" SET DATA TYPE TEXT,
ALTER COLUMN "num_mere" SET DATA TYPE TEXT,
ADD CONSTRAINT "ActeNaissance_pkey" PRIMARY KEY ("num_acte");

-- AlterTable
ALTER TABLE "_declarations" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_temoignages" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "ActeDeces" ADD CONSTRAINT "ActeDeces_num_acte_fkey" FOREIGN KEY ("num_acte") REFERENCES "Acte"("num_acte") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActeDeces" ADD CONSTRAINT "ActeDeces_num_acte_naissance_fkey" FOREIGN KEY ("num_acte_naissance") REFERENCES "ActeNaissance"("num_acte") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActeMariage" ADD CONSTRAINT "ActeMariage_num_acte_fkey" FOREIGN KEY ("num_acte") REFERENCES "Acte"("num_acte") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActeMariage" ADD CONSTRAINT "ActeMariage_num_acte_naissance_mari_fkey" FOREIGN KEY ("num_acte_naissance_mari") REFERENCES "ActeNaissance"("num_acte") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActeMariage" ADD CONSTRAINT "ActeMariage_num_acte_naissance_femme_fkey" FOREIGN KEY ("num_acte_naissance_femme") REFERENCES "ActeNaissance"("num_acte") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActeNaissance" ADD CONSTRAINT "ActeNaissance_num_acte_fkey" FOREIGN KEY ("num_acte") REFERENCES "Acte"("num_acte") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActeNaissance" ADD CONSTRAINT "ActeNaissance_num_pere_fkey" FOREIGN KEY ("num_pere") REFERENCES "ActeNaissance"("num_acte") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActeNaissance" ADD CONSTRAINT "ActeNaissance_num_mere_fkey" FOREIGN KEY ("num_mere") REFERENCES "ActeNaissance"("num_acte") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_declarations" ADD CONSTRAINT "_declarations_A_fkey" FOREIGN KEY ("A") REFERENCES "Acte"("num_acte") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_temoignages" ADD CONSTRAINT "_temoignages_A_fkey" FOREIGN KEY ("A") REFERENCES "ActeMariage"("num_acte") ON DELETE CASCADE ON UPDATE CASCADE;

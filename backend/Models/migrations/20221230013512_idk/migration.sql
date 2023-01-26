-- DropForeignKey
ALTER TABLE "ActeMariage" DROP CONSTRAINT "ActeMariage_num_acte_fkey";

-- AddForeignKey
ALTER TABLE "ActeMariage" ADD CONSTRAINT "ActeMariage_num_acte_fkey" FOREIGN KEY ("num_acte") REFERENCES "Acte"("num_acte") ON DELETE CASCADE ON UPDATE CASCADE;

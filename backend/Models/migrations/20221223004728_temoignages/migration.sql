-- DropForeignKey
ALTER TABLE "_temoignages" DROP CONSTRAINT "_temoignages_A_fkey";

-- AddForeignKey
ALTER TABLE "_temoignages" ADD CONSTRAINT "_temoignages_A_fkey" FOREIGN KEY ("A") REFERENCES "ActeMariage"("num_acte") ON DELETE CASCADE ON UPDATE CASCADE;

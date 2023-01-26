-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MAIRE', 'OFFICIER', 'CONSULAIRE');

-- CreateEnum
CREATE TYPE "TypeActe" AS ENUM ('NAISSANCE', 'DECES', 'MARIAGE');

-- CreateEnum
CREATE TYPE "SEXE" AS ENUM ('HOMME', 'FEMME');

-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('REFRESH', 'ACCESS', 'VALIDATION');

-- CreateTable
CREATE TABLE "Commune" (
    "num_commune" INTEGER NOT NULL,
    "nom_commune" VARCHAR(255) NOT NULL,
    "num_arrondissement" INTEGER NOT NULL,
    "matricule_maire" INTEGER NOT NULL,
    "num_ville" INTEGER NOT NULL,

    CONSTRAINT "Commune_pkey" PRIMARY KEY ("num_commune")
);

-- CreateTable
CREATE TABLE "Arrondissement" (
    "num_arrondissement" INTEGER NOT NULL,
    "nom_arrondissement" VARCHAR(255) NOT NULL,
    "num_province" INTEGER NOT NULL,

    CONSTRAINT "Arrondissement_pkey" PRIMARY KEY ("num_arrondissement")
);

-- CreateTable
CREATE TABLE "Province" (
    "num_province" INTEGER NOT NULL,
    "nom_province" VARCHAR(255) NOT NULL,
    "num_ville" INTEGER NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("num_province")
);

-- CreateTable
CREATE TABLE "Ville" (
    "num_ville" INTEGER NOT NULL,
    "nom_ville" VARCHAR(255) NOT NULL,
    "superficie" DOUBLE PRECISION NOT NULL,
    "pays" VARCHAR(255) NOT NULL,

    CONSTRAINT "Ville_pkey" PRIMARY KEY ("num_ville")
);

-- CreateTable
CREATE TABLE "Officier" (
    "matricule" SERIAL NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "prenom" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "date_entree" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isValid" BOOLEAN NOT NULL DEFAULT false,
    "photo" VARCHAR(255) NOT NULL,
    "role" "Role" NOT NULL,
    "num_commune" INTEGER NOT NULL,

    CONSTRAINT "Officier_pkey" PRIMARY KEY ("matricule")
);

-- CreateTable
CREATE TABLE "Registre" (
    "num_registre" TEXT NOT NULL,
    "annee" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type_registre" "TypeActe" NOT NULL,
    "num_commune" INTEGER NOT NULL,

    CONSTRAINT "Registre_pkey" PRIMARY KEY ("num_registre")
);

-- CreateTable
CREATE TABLE "Delegation" (
    "num_delegation" SERIAL NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "matricule_maire" INTEGER NOT NULL,
    "matricule_nouveau_maire" INTEGER NOT NULL,

    CONSTRAINT "Delegation_pkey" PRIMARY KEY ("num_delegation")
);

-- CreateTable
CREATE TABLE "Personne" (
    "NIN" INTEGER NOT NULL,
    "CNI" INTEGER NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "prenom" VARCHAR(255) NOT NULL,

    CONSTRAINT "Personne_pkey" PRIMARY KEY ("NIN")
);

-- CreateTable
CREATE TABLE "Acte" (
    "num_acte" SERIAL NOT NULL,
    "nom_acte" VARCHAR(255) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "TypeActe" NOT NULL,
    "num_registre" TEXT NOT NULL,
    "matricule_officier" INTEGER NOT NULL,
    "num_commune" INTEGER NOT NULL,

    CONSTRAINT "Acte_pkey" PRIMARY KEY ("num_acte")
);

-- CreateTable
CREATE TABLE "ActeDeces" (
    "num_acte" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lieu" VARCHAR(255) NOT NULL,
    "num_acte_naissance" INTEGER NOT NULL,

    CONSTRAINT "ActeDeces_pkey" PRIMARY KEY ("num_acte")
);

-- CreateTable
CREATE TABLE "ActeMariage" (
    "num_acte" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lieu" VARCHAR(255) NOT NULL,
    "num_acte_naissance_mari" INTEGER NOT NULL,
    "num_acte_naissance_femme" INTEGER NOT NULL,

    CONSTRAINT "ActeMariage_pkey" PRIMARY KEY ("num_acte")
);

-- CreateTable
CREATE TABLE "ActeNaissance" (
    "num_acte" INTEGER NOT NULL,
    "sexe" "SEXE" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lieu" VARCHAR(255) NOT NULL,
    "profession" VARCHAR(255) NOT NULL,
    "num_pere" INTEGER NOT NULL,
    "num_mere" INTEGER NOT NULL,

    CONSTRAINT "ActeNaissance_pkey" PRIMARY KEY ("num_acte")
);

-- CreateTable
CREATE TABLE "Token" (
    "token" TEXT NOT NULL,
    "matricule" INTEGER NOT NULL,
    "type" "TokenType" NOT NULL,
    "expiresIn" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("token")
);

-- CreateTable
CREATE TABLE "_declarations" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_temoignages" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Commune_matricule_maire_key" ON "Commune"("matricule_maire");

-- CreateIndex
CREATE UNIQUE INDEX "ActeDeces_num_acte_naissance_key" ON "ActeDeces"("num_acte_naissance");

-- CreateIndex
CREATE UNIQUE INDEX "ActeNaissance_num_pere_key" ON "ActeNaissance"("num_pere");

-- CreateIndex
CREATE UNIQUE INDEX "ActeNaissance_num_mere_key" ON "ActeNaissance"("num_mere");

-- CreateIndex
CREATE UNIQUE INDEX "_declarations_AB_unique" ON "_declarations"("A", "B");

-- CreateIndex
CREATE INDEX "_declarations_B_index" ON "_declarations"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_temoignages_AB_unique" ON "_temoignages"("A", "B");

-- CreateIndex
CREATE INDEX "_temoignages_B_index" ON "_temoignages"("B");

-- AddForeignKey
ALTER TABLE "Commune" ADD CONSTRAINT "Commune_num_arrondissement_fkey" FOREIGN KEY ("num_arrondissement") REFERENCES "Arrondissement"("num_arrondissement") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commune" ADD CONSTRAINT "Commune_matricule_maire_fkey" FOREIGN KEY ("matricule_maire") REFERENCES "Officier"("matricule") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commune" ADD CONSTRAINT "Commune_num_ville_fkey" FOREIGN KEY ("num_ville") REFERENCES "Ville"("num_ville") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Arrondissement" ADD CONSTRAINT "Arrondissement_num_province_fkey" FOREIGN KEY ("num_province") REFERENCES "Province"("num_province") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Province" ADD CONSTRAINT "Province_num_ville_fkey" FOREIGN KEY ("num_ville") REFERENCES "Ville"("num_ville") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Officier" ADD CONSTRAINT "Officier_num_commune_fkey" FOREIGN KEY ("num_commune") REFERENCES "Commune"("num_commune") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registre" ADD CONSTRAINT "Registre_num_commune_fkey" FOREIGN KEY ("num_commune") REFERENCES "Commune"("num_commune") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delegation" ADD CONSTRAINT "Delegation_matricule_maire_fkey" FOREIGN KEY ("matricule_maire") REFERENCES "Officier"("matricule") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delegation" ADD CONSTRAINT "Delegation_matricule_nouveau_maire_fkey" FOREIGN KEY ("matricule_nouveau_maire") REFERENCES "Officier"("matricule") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acte" ADD CONSTRAINT "Acte_num_registre_fkey" FOREIGN KEY ("num_registre") REFERENCES "Registre"("num_registre") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acte" ADD CONSTRAINT "Acte_matricule_officier_fkey" FOREIGN KEY ("matricule_officier") REFERENCES "Officier"("matricule") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acte" ADD CONSTRAINT "Acte_num_commune_fkey" FOREIGN KEY ("num_commune") REFERENCES "Commune"("num_commune") ON DELETE CASCADE ON UPDATE CASCADE;

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
ALTER TABLE "Token" ADD CONSTRAINT "Token_matricule_fkey" FOREIGN KEY ("matricule") REFERENCES "Officier"("matricule") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_declarations" ADD CONSTRAINT "_declarations_A_fkey" FOREIGN KEY ("A") REFERENCES "Acte"("num_acte") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_declarations" ADD CONSTRAINT "_declarations_B_fkey" FOREIGN KEY ("B") REFERENCES "Personne"("NIN") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_temoignages" ADD CONSTRAINT "_temoignages_A_fkey" FOREIGN KEY ("A") REFERENCES "Acte"("num_acte") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_temoignages" ADD CONSTRAINT "_temoignages_B_fkey" FOREIGN KEY ("B") REFERENCES "Personne"("NIN") ON DELETE CASCADE ON UPDATE CASCADE;

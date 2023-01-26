/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Officier` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Officier_email_key" ON "Officier"("email");

/*
  Warnings:

  - A unique constraint covering the columns `[hashatag]` on the table `Hashtag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Hashtag.hashatag_unique" ON "Hashtag"("hashatag");

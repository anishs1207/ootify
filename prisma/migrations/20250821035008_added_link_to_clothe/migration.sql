/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - Added the required column `link` to the `Clothe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Clothe" ADD COLUMN     "link" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "emailVerified";

-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('M', 'F');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "gender" "public"."Gender",
ADD COLUMN     "occasions" TEXT[];

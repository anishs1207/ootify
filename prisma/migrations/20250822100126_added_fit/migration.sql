-- CreateTable
CREATE TABLE "public"."Fit" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "topId" TEXT,
    "lowerId" TEXT,
    "footWearId" TEXT,
    "accessoriesId" TEXT,

    CONSTRAINT "Fit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Fit" ADD CONSTRAINT "Fit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Fit" ADD CONSTRAINT "Fit_topId_fkey" FOREIGN KEY ("topId") REFERENCES "public"."Clothe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Fit" ADD CONSTRAINT "Fit_lowerId_fkey" FOREIGN KEY ("lowerId") REFERENCES "public"."Clothe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Fit" ADD CONSTRAINT "Fit_footWearId_fkey" FOREIGN KEY ("footWearId") REFERENCES "public"."Clothe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Fit" ADD CONSTRAINT "Fit_accessoriesId_fkey" FOREIGN KEY ("accessoriesId") REFERENCES "public"."Clothe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

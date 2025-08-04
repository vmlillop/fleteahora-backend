-- CreateTable
CREATE TABLE "public"."Evaluacion" (
    "id" SERIAL NOT NULL,
    "comentario" TEXT NOT NULL,
    "puntuacion" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fleteId" INTEGER NOT NULL,

    CONSTRAINT "Evaluacion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Evaluacion" ADD CONSTRAINT "Evaluacion_fleteId_fkey" FOREIGN KEY ("fleteId") REFERENCES "public"."Flete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

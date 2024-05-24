/*
  Warnings:

  - You are about to drop the column `fecha` on the `Prueba` table. All the data in the column will be lost.
  - You are about to drop the column `id_problema` on the `Prueba` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `Prueba` table. All the data in the column will be lost.
  - You are about to drop the column `prueba` on the `Prueba` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `Solucion` table. All the data in the column will be lost.
  - You are about to drop the column `id_problema` on the `Solucion` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `Solucion` table. All the data in the column will be lost.
  - You are about to drop the column `solucion` on the `Solucion` table. All the data in the column will be lost.
  - You are about to drop the column `id_problema` on the `Tareas` table. All the data in the column will be lost.
  - Added the required column `Hora_atencion` to the `Prueba` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Hora_termina` to the `Prueba` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descripcion` to the `Prueba` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Hora_atencion` to the `Solucion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Hora_termina` to the `Solucion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descripcion` to the `Solucion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Evidencia` to the `Tareas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Titulo` to the `Tareas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descripcion` to the `Tareas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Tareas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Prueba` DROP COLUMN `fecha`,
    DROP COLUMN `id_problema`,
    DROP COLUMN `id_usuario`,
    DROP COLUMN `prueba`,
    ADD COLUMN `Hora_atencion` DATETIME(3) NOT NULL,
    ADD COLUMN `Hora_creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `Hora_termina` DATETIME(3) NOT NULL,
    ADD COLUMN `descripcion` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Solucion` DROP COLUMN `fecha`,
    DROP COLUMN `id_problema`,
    DROP COLUMN `id_usuario`,
    DROP COLUMN `solucion`,
    ADD COLUMN `Hora_atencion` DATETIME(3) NOT NULL,
    ADD COLUMN `Hora_creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `Hora_termina` DATETIME(3) NOT NULL,
    ADD COLUMN `descripcion` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Tareas` DROP COLUMN `id_problema`,
    ADD COLUMN `Evidencia` VARCHAR(191) NOT NULL,
    ADD COLUMN `Titulo` VARCHAR(191) NOT NULL,
    ADD COLUMN `descripcion` VARCHAR(191) NOT NULL,
    ADD COLUMN `estado` VARCHAR(191) NOT NULL;

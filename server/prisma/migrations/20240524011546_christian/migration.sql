/*
  Warnings:

  - Added the required column `Hora_termina` to the `Tareas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Tareas` ADD COLUMN `Hora_creacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `Hora_termina` DATETIME(3) NOT NULL;

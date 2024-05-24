/*
  Warnings:

  - You are about to drop the column `fecha` on the `Tareas` table. All the data in the column will be lost.
  - You are about to drop the column `tarea` on the `Tareas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Tareas` DROP COLUMN `fecha`,
    DROP COLUMN `tarea`;

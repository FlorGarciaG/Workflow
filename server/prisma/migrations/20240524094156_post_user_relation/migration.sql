/*
  Warnings:

  - You are about to drop the column `Hora_atencion` on the `Prueba` table. All the data in the column will be lost.
  - You are about to drop the column `Hora_creacion` on the `Prueba` table. All the data in the column will be lost.
  - You are about to drop the column `Hora_termina` on the `Prueba` table. All the data in the column will be lost.
  - You are about to alter the column `descripcion` on the `Prueba` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(120)`.
  - You are about to drop the column `Hora_atencion` on the `Solucion` table. All the data in the column will be lost.
  - You are about to drop the column `Hora_creacion` on the `Solucion` table. All the data in the column will be lost.
  - You are about to drop the column `Hora_termina` on the `Solucion` table. All the data in the column will be lost.
  - You are about to alter the column `descripcion` on the `Solucion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(120)`.
  - You are about to drop the column `Evidencia` on the `Tareas` table. All the data in the column will be lost.
  - You are about to drop the column `Hora_creacion` on the `Tareas` table. All the data in the column will be lost.
  - You are about to drop the column `Hora_termina` on the `Tareas` table. All the data in the column will be lost.
  - You are about to drop the column `Titulo` on the `Tareas` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `Tareas` table. All the data in the column will be lost.
  - You are about to alter the column `descripcion` on the `Tareas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(120)`.
  - You are about to alter the column `estado` on the `Tareas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(30)`.
  - You are about to alter the column `nombre` on the `Usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `ap_paterno` on the `Usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `ap_materno` on the `Usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `correo` on the `Usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `contrasenia` on the `Usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `rol` on the `Usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to drop the `SolxPru` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `hora_creacion` to the `Prueba` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_tecnico` to the `Prueba` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora_creacion` to the `Solucion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_solucionador` to the `Solucion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_tarea` to the `Solucion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `evidencias` to the `Tareas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora_creacion` to the `Tareas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora_termina` to the `Tareas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_creo` to the `Tareas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_prueba` to the `Tareas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_solucionador` to the `Tareas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Tareas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `SolxPru` DROP FOREIGN KEY `SolxPru_id_prueba_fkey`;

-- DropForeignKey
ALTER TABLE `SolxPru` DROP FOREIGN KEY `SolxPru_id_solucion_fkey`;

-- DropForeignKey
ALTER TABLE `SolxPru` DROP FOREIGN KEY `SolxPru_id_tarea_fkey`;

-- DropForeignKey
ALTER TABLE `Tareas` DROP FOREIGN KEY `Tareas_id_usuario_fkey`;

-- AlterTable
ALTER TABLE `Prueba` DROP COLUMN `Hora_atencion`,
    DROP COLUMN `Hora_creacion`,
    DROP COLUMN `Hora_termina`,
    ADD COLUMN `hora_creacion` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `id_tecnico` INTEGER NOT NULL,
    MODIFY `descripcion` VARCHAR(120) NOT NULL;

-- AlterTable
ALTER TABLE `Solucion` DROP COLUMN `Hora_atencion`,
    DROP COLUMN `Hora_creacion`,
    DROP COLUMN `Hora_termina`,
    ADD COLUMN `hora_creacion` TIMESTAMP(0) NOT NULL,
    ADD COLUMN `id_solucionador` INTEGER NOT NULL,
    ADD COLUMN `id_tarea` INTEGER NOT NULL,
    MODIFY `descripcion` VARCHAR(120) NOT NULL;

-- AlterTable
ALTER TABLE `Tareas` DROP COLUMN `Evidencia`,
    DROP COLUMN `Hora_creacion`,
    DROP COLUMN `Hora_termina`,
    DROP COLUMN `Titulo`,
    DROP COLUMN `id_usuario`,
    ADD COLUMN `evidencias` VARCHAR(50) NOT NULL,
    ADD COLUMN `hora_creacion` DATETIME(0) NOT NULL,
    ADD COLUMN `hora_termina` DATETIME(0) NOT NULL,
    ADD COLUMN `id_creo` INTEGER NOT NULL,
    ADD COLUMN `id_prueba` INTEGER NOT NULL,
    ADD COLUMN `id_solucionador` INTEGER NOT NULL,
    ADD COLUMN `titulo` VARCHAR(50) NOT NULL,
    MODIFY `descripcion` VARCHAR(120) NOT NULL,
    MODIFY `estado` VARCHAR(30) NOT NULL;

-- AlterTable
ALTER TABLE `Usuario` MODIFY `nombre` VARCHAR(50) NOT NULL,
    MODIFY `ap_paterno` VARCHAR(50) NOT NULL,
    MODIFY `ap_materno` VARCHAR(50) NOT NULL,
    MODIFY `correo` VARCHAR(50) NOT NULL,
    MODIFY `contrasenia` VARCHAR(50) NOT NULL,
    MODIFY `rol` VARCHAR(50) NOT NULL;

-- DropTable
DROP TABLE `SolxPru`;

-- CreateIndex
CREATE INDEX `fk$prueb$tecni$id` ON `Prueba`(`id_tecnico`);

-- CreateIndex
CREATE INDEX `fk$sol$sol$id` ON `Solucion`(`id_solucionador`);

-- CreateIndex
CREATE INDEX `fk$sol$tar$id` ON `Solucion`(`id_tarea`);

-- CreateIndex
CREATE INDEX `id_creo` ON `Tareas`(`id_creo`);

-- CreateIndex
CREATE INDEX `id_prueba` ON `Tareas`(`id_prueba`);

-- CreateIndex
CREATE INDEX `id_solucionador` ON `Tareas`(`id_solucionador`);

-- AddForeignKey
ALTER TABLE `Tareas` ADD CONSTRAINT `Tareas_ibfk_1` FOREIGN KEY (`id_creo`) REFERENCES `Usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tareas` ADD CONSTRAINT `Tareas_ibfk_2` FOREIGN KEY (`id_solucionador`) REFERENCES `Usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Tareas` ADD CONSTRAINT `Tareas_ibfk_3` FOREIGN KEY (`id_prueba`) REFERENCES `Usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Solucion` ADD CONSTRAINT `fk$sol$sol$id` FOREIGN KEY (`id_solucionador`) REFERENCES `Tareas`(`id_tarea`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Solucion` ADD CONSTRAINT `fk$sol$tar$id` FOREIGN KEY (`id_tarea`) REFERENCES `Tareas`(`id_tarea`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Prueba` ADD CONSTRAINT `fk$prueb$tecni$id` FOREIGN KEY (`id_tecnico`) REFERENCES `Solucion`(`id_solucion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- RenameIndex
ALTER TABLE `Usuario` RENAME INDEX `Usuario_correo_key` TO `correo`;

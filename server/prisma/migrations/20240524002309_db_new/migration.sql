-- CreateTable
CREATE TABLE `Usuario` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `ap_paterno` VARCHAR(191) NOT NULL,
    `ap_materno` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `contrasenia` VARCHAR(191) NOT NULL,
    `rol` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Usuario_correo_key`(`correo`),
    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tareas` (
    `id_tarea` INTEGER NOT NULL AUTO_INCREMENT,
    `id_problema` INTEGER NOT NULL,
    `id_usuario` INTEGER NOT NULL,
    `tarea` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_tarea`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SolxPru` (
    `id_solxpru` INTEGER NOT NULL AUTO_INCREMENT,
    `id_solucion` INTEGER NOT NULL,
    `id_prueba` INTEGER NOT NULL,
    `id_tarea` INTEGER NOT NULL,

    PRIMARY KEY (`id_solxpru`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Solucion` (
    `id_solucion` INTEGER NOT NULL AUTO_INCREMENT,
    `id_problema` INTEGER NOT NULL,
    `id_usuario` INTEGER NOT NULL,
    `solucion` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_solucion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Prueba` (
    `id_prueba` INTEGER NOT NULL AUTO_INCREMENT,
    `id_problema` INTEGER NOT NULL,
    `id_usuario` INTEGER NOT NULL,
    `prueba` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_prueba`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tareas` ADD CONSTRAINT `Tareas_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SolxPru` ADD CONSTRAINT `SolxPru_id_solucion_fkey` FOREIGN KEY (`id_solucion`) REFERENCES `Solucion`(`id_solucion`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SolxPru` ADD CONSTRAINT `SolxPru_id_prueba_fkey` FOREIGN KEY (`id_prueba`) REFERENCES `Prueba`(`id_prueba`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SolxPru` ADD CONSTRAINT `SolxPru_id_tarea_fkey` FOREIGN KEY (`id_tarea`) REFERENCES `Tareas`(`id_tarea`) ON DELETE RESTRICT ON UPDATE CASCADE;

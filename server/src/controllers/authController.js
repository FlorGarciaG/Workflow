import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();
0
export const login = async (req, res) => {
  const { correo, contrasenia } = req.body;
  try {
    const usuarioFound = await prisma.Usuario.findUnique({
      where: { correo: correo },
    });
    if (!usuarioFound) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const hash = crypto.createHash("sha256");
    hash.update(contrasenia);
    const hashedContrasenia = hash.digest("hex");

    if (hashedContrasenia !== usuarioFound.contrasenia) {
      return res.status(400).json({ message: "La contraseña es incorrecta" });
    }

    res.json({
      id_usuario: usuarioFound.id_usuario,
      nombre: usuarioFound.nombre,
      ap_paterno: usuarioFound.ap_paterno,
      ap_materno: usuarioFound.ap_materno,
      correo: usuarioFound.correo,
      rol: usuarioFound.rol,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

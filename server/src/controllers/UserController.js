import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.Usuario.findMany();
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const { nombre, ap_paterno, ap_materno, correo, contrasenia, rol } = req.body;
  try {
    const user = await prisma.Usuario.create({
      data: {
        nombre,
        ap_paterno,
        ap_materno,
        correo,
        contrasenia,
        rol,
      },
    });
    return res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

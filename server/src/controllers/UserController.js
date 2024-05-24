import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

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
    const userFound = await prisma.Usuario.findUnique({
      where: { correo: String(req.params.correo) },
    });

    if (userFound)
      return res.status(400).json({
        message: ["El email ya esta en uso"],
      });

    const hash = crypto.createHash("sha256");
    hash.update(contrasenia);
    const passwordHash = hash.digest("hex");

    const user = await prisma.Usuario.create({
      data: {
        nombre,
        ap_paterno,
        ap_materno,
        correo,
        contrasenia: passwordHash,
        rol,
      },
    });
    return res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const testActualizado = await prisma.Usuario.update({
      where: { id_usuario: Number(req.params.id) },
      data: req.body,
    });
    if (!testActualizado)
      return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(200).json(testActualizado);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const test = await prisma.Usuario.findUnique({
      where: { id_usuario: Number(req.params.id) },
    });
    if (!test) return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(200).json(test);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userEliminado = await prisma.Usuario.delete({
      where: { id_usuario: Number(req.params.id) },
    });
    if (!userEliminado)
      return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(200).json(userEliminado);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTests = async (req, res) => {
  try {
    const tests = await prisma.Prueba.findMany();
    return res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTest = async (req, res) => {
  const { Hora_atencion, Hora_creacion, Hora_termina, descripcion } = req.body;
  try {
    const test = await prisma.Prueba.create({
      data: {
        Hora_atencion,
        Hora_creacion,
        Hora_termina,
        descripcion,
      },
    });
    return res.status(201).json(test);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTest = async (req, res) => {
  try {
    const testActualizado = await prisma.Prueba.update({
      where: { id_prueba: Number(req.params.id) },
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

export const getTestById = async (req, res) => {
  try {
    const test = await prisma.Prueba.findUnique({
      where: { id_prueba: Number(req.params.id) },
    });
    if (!test) return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(200).json(test);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

export const deleteTest = async (req, res) => {
  try {
    const testEliminado = await prisma.Prueba.delete({
      where: { id_prueba: Number(req.params.id) },
    });
    if (!testEliminado)
      return res.status(404).json({ error: "Camionero no encontrado" });
    res.status(200).json(testEliminado);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

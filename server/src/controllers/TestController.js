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

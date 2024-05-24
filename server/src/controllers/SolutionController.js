import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSolutions = async (req, res) => {
  try {
    const solutions = await prisma.Solucion.findMany();
    return res.status(200).json(solutions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSolution = async (req, res) => {
  const { Hora_atencion, Hora_creacion, Hora_termina, descripcion } = req.body;
  try {
    const solution = await prisma.Solucion.create({
      data: {
        Hora_atencion,
        Hora_creacion,
        Hora_termina,
        descripcion,
      },
    });
    return res.status(201).json(solution);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

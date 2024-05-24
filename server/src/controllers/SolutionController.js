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

export const getSolutionById = async (req, res) => {
  try {
    const solution = await prisma.Solucion.findUnique({
      where: { id_solucion: Number(req.params.id), },
    });
    return res.status(200).json(solution);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSolution = async (req, res) => {
  try {
    await prisma.Solucion.delete({
      where: { id_solucion: Number(req.params.id), },
    });
    return res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSolution = async (req, res) => {
  const { Hora_atencion, Hora_creacion, Hora_termina, descripcion } = req.body;
  try {
    const solution = await prisma.Solucion.update({
      where: { id_solucion: Number(req.params.id), },
      data: {
        Hora_atencion,
        Hora_creacion,
        Hora_termina,
        descripcion,
      },
    });
    return res.status(200).json(solution);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
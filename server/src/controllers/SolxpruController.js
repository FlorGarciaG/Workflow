import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSolxprus = async (req, res) => {
  try {
    const solxprus = await prisma.SolxPru.findMany();
    return res.status(200).json(solxprus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSolxpru = async (req, res) => {
  const { id_solucion, id_prueba, id_tarea } = req.body;
  try {
    const solxpru = await prisma.SolxPru.create({
      data: {
        id_solucion,
        id_prueba,
        id_tarea,
      },
    });
    return res.status(201).json(solxpru);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSolutionById = async (req, res) => {
  try {
    const solxpru = await prisma.SolxPru.findUnique({
      where: { id_solxpru: Number(req.params.id), },
    });
    return res.status(200).json(solxpru);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSolxpru = async (req, res) => {
  try {
    await prisma.SolxPru.delete({
      where: { id_solxpru: Number(req.params.id), },
    });
    return res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putSolxpru = async (req, res) => {
  const { id_solucion, id_prueba, id_tarea } = req.body;
  try {
    const solxpru = await prisma.SolxPru.update({
      where: { id_solxpru: Number(req.params.id), },
      data: {
        id_solucion,
        id_prueba,
        id_tarea,
      },
    });
    return res.status(200).json(solxpru);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
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

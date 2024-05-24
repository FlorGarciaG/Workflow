import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSolution = async (req, res) => {
  try {
    const soluciones = await prisma.Solucion.findMany();
    return res.status(200).json(soluciones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export const createSolution = async (req, res) => {
  const { id_Tarea, id_Usuario, Evidencia } = req.body;
  try {
    const solucion = await prisma.Solucion.create({
      data: {
        id_Tarea,
        id_Usuario,
        Evidencia
      },
    });
    return res.status(201).json(solucion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.Tareas.findMany();
    return res.status(200).json(tasks);
  }catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { Titulo, descripcion, Evidencia, estado, id_Usuario, Hora_termina } = req.body;
  try {
    const task = await prisma.Tareas.create({
      data: {
        Titulo,
        descripcion,
        Evidencia,
        estado,
        id_Usuario,
        Hora_termina
      },
    });
    return res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
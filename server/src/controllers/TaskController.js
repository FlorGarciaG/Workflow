import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.Tareas.findMany();
    return res.status(200).json(tasks);
  }catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const postTask = async (req, res) => {
  try {
    const { nombre, descripcion, evidencias, estado, id_Usuario } = req.body;
    const task = await prisma.Tareas.create({
      data: {
        nombre,
        descripcion,
        evidencias,
        estado,
        id_Usuario
      }
    });
    return res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
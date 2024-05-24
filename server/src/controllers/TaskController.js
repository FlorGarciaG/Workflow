import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.Tareas.findMany();
    return res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const {
    Titulo,
    descripcion,
    Evidencia,
    estado,
    id_usuario,
    Hora_creacion,
    Hora_termina,
  } = req.body;
  try {
    const task = await prisma.Tareas.create({
      data: {
        Titulo,
        descripcion,
        Evidencia,
        estado,
        id_usuario,
        Hora_creacion,
        Hora_termina,
      },
    });
    return res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTasksById = async (req, res) => {
  try {
    const solution = await prisma.Tareas.findUnique({
      where: { id_tarea: Number(req.params.id), },
    });
    return res.status(200).json(solution);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await prisma.Tareas.delete({
      where: { id_tarea: Number(req.params.id), },
    });
    return res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const {
    Titulo,
    descripcion,
    Evidencia,
    estado,
    id_usuario,
    Hora_creacion,
    Hora_termina,
  } = req.body;
  try {
    const task = await prisma.Tareas.update({
      where: { id_tarea: Number(req.params.id), },
      data: {
        Titulo,
        descripcion,
        Evidencia,
        estado,
        id_usuario,
        Hora_creacion,
        Hora_termina,
      },
    });
    return res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
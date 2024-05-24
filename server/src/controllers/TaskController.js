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
    titulo,
    descripcion,
    evidencias,
    estado,
    id_creo,
    hora_creacion,
    hora_termina,
    id_solucionador,
    id_prueba,
  } = req.body;
  try {
    const task = await prisma.Tareas.create({
      data: {
        titulo,
        descripcion,
        evidencias,
        estado,
        id_creo,
        hora_creacion,
        hora_termina,
        id_solucionador,
        id_prueba,
      },
    });
    return res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTasksById = async (req, res) => {
  console.log(req.params);

  try {
    const solution = await prisma.Tareas.findMany({
      where: { id_creo: Number(req.params.id) },
    });
    return res.status(200).json(solution);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await prisma.Tareas.delete({
      where: { id_tarea: Number(req.params.id) },
    });
    return res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const {
    titulo,
    descripcion,
    evidencias,
    estado,
    id_creo,
    hora_creacion,
    hora_termina,
    id_solucionador,
    id_prueba,
  } = req.body;
  try {
    const task = await prisma.Tareas.update({
      where: { id_tarea: Number(req.params.id) },
      data: {
        titulo,
        descripcion,
        evidencias,
        estado,
        id_creo,
        hora_creacion,
        hora_termina,
        id_solucionador,
        id_prueba,
      },
    });
    return res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
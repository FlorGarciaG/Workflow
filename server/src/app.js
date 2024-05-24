import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";
import path from "path";

import TaskRoutes from "./routes/task.routes.js";
import UserRoutes from "./routes/user.routes.js";
import SolutionRoutes from "./routes/solution.routes.js";
import TestRoutes from "./routes/test.routes.js";
import AuthRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();

const URI = process.env.DATABASE_URL
  ? process.env.DATABASE_URL
  : "mysql://root:ozaAQLsRwHBNytucoDwzMZPKYpzWXjUK@roundhouse.proxy.rlwy.net:58222/railway";
console.log(URI);

//Settings
app.set("port", process.env.PORT ? process.env.PORT : 5001);

//Middlewares
app.use(
  cors({
    origin: `http://localhost:${process.env.PORT_FRONT}`,
    credentials: true,
  })
);
console.log(
  `origin: "http://localhost:${process.env.PORT_FRONT}", credentials: true,`
);
app.use(express.json());
app.use(morgan("dev"));

// Configuración de Multer para almacenar archivos en el directorio 'uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directorio donde se guardarán los archivos subidos
  },
  filename: (req, file, cb) => {
    // Genera un nombre único para el archivo
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(express.json());

// Ruta para subir cualquier tipo de archivo
app.post("/upload", upload.single("file"), (req, res) => {
  try {
    res.status(200).send("File uploaded.");
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ruta para listar todos los archivos disponibles en 'ima/'
app.get('/listFiles', (req, res) => {
  try {
    const directoryPath = path.join(__dirname, '../uploads/');
    // Lee el contenido del directorio 'ima/'
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error('Error al leer el directorio:', err);
        res.status(500).send('Error al listar archivos.');
      } else {
        res.status(200).json(files);
      }
    });
  } catch (error) {
    console.error('Error en la ruta /listFiles:', error);
    res.status(500).send('Error interno del servidor.');
  }
});


//Routes
app.use("/api", AuthRoutes);
app.use("/api/tasks", TaskRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/solutions", SolutionRoutes);
app.use("/api/tests", TestRoutes);

//Export
export default app;

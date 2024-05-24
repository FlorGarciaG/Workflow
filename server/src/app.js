import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";

import TaskRoutes from "./routes/task.routes.js";
import UserRoutes from "./routes/user.routes.js";
import SolutionRoutes from "./routes/solution.routes.js";
import SolxpruRoutes from "./routes/solxpru.routes.js";
import TestRoutes from "./routes/test.routes.js";
import AuthRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();

const URI = process.env.DATABASE_URL
  ? process.env.DATABASE_URL
  : "mysql://root:vyJDrzOGquIrgoWUEuvvdgUBVcQfreWO@monorail.proxy.rlwy.net:21532/railway";
console.log(URI);

//Settings
app.set("port", process.env.PORT ? process.env.PORT : 5001);

//Middlewares
app.use(
  cors(
    `origin: "http://localhost:${process.env.PORT_FRONT}", credentials: true,`
  )
);
console.log(
  `origin: "http://localhost:${process.env.PORT_FRONT}", credentials: true,`
);
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api", AuthRoutes);
app.use("/api/tasks", TaskRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/solutions", SolutionRoutes);
app.use("/api/solxprus", SolxpruRoutes);
app.use("/api/tests", TestRoutes);

//Export
export default app;

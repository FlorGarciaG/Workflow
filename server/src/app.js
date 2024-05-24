import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import TaskRoutes from "./routes/task.routes.js";
import UserRoutes from "./routes/user.routes.js";

const app = express();

dotenv.config();

const URI = process.env.DATABASE_URL
  ? process.env.DATABASE_URL
  : "mysql://root:vyJDrzOGquIrgoWUEuvvdgUBVcQfreWO@monorail.proxy.rlwy.net:21532/railway";
console.log(URI);

//Settings
app.set("port", process.env.PORT ? process.env.PORT : 5001);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api/tasks", TaskRoutes);
app.use("/api/users", UserRoutes);

//Export
export default app;

import express, { Express } from "express";
import dotenv from "dotenv";

import tablesRoutes from "./routes/tables.routes";
import profileRoutes from "./routes/profile.routes";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tables", tablesRoutes);
app.use("/profile", profileRoutes);

export default app;

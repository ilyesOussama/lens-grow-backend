import express, { Express } from "express";
import dotenv from "dotenv";

import tablesRoute from "./routes/tables.route";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tables", tablesRoute);

export default app;

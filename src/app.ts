import express, { Express } from "express";
import dotenv from "dotenv";

import tablesRoutes from "./routes/tables.routes";
import profileRoutes from "./routes/profile.routes";
import ensRoutes from "./routes/ens.routes";
import pohRoutes from "./routes/poh.routes";
import sybilRoutes from "./routes/sybil.routes";
import worldcoinRoutes from "./routes/worldcoin.routes";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/tables", tablesRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/ens", ensRoutes);
app.use("/api/v1/poh", pohRoutes);
app.use("/api/v1/sybil", sybilRoutes);
app.use("/api/v1/worldcoin", worldcoinRoutes);

export default app;

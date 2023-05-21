import express from "express";
import { getTables } from "../controllers/tables.controller";

const router = express.Router();

router.get("/", getTables);

export default router;

import express from "express";
import { getPOH } from "../controllers/poh.contrroller";

const router = express.Router();

router.get("/", getPOH);

export default router;

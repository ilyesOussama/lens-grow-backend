import express from "express";
import {
  getReorgBlock,
  getReorgBlocks,
} from "../controllers/reorgBlockStatus.controllers";

const router = express.Router();

router.get("/", getReorgBlocks);
router.get("/:id", getReorgBlock);

export default router;

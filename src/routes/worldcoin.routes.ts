import express from "express";

import {
  getWorldcoinBlocksInfo,
  getWorldcoinBlockInfo,
  getWorldcoinHumansCheck,
  getWorldcoinHumanCheck,
} from "../controllers/worldcoin.controllers";

const router = express.Router();

router.get("/", getWorldcoinBlocksInfo);
router.get("/:id", getWorldcoinBlockInfo);
router.get("/", getWorldcoinHumansCheck);
router.get("/:id", getWorldcoinHumanCheck);

export default router;

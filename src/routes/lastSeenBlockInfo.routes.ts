import express from "express";

import {
  getLastSeenBlockInfoParams,
  getLastSeenBlocksInfoParams,
} from "../controllers/lastSeenBlockInfo.controllers";

const router = express.Router();

router.get("/", getLastSeenBlocksInfoParams);
router.get("/:id", getLastSeenBlocksInfoParams);

export default router;

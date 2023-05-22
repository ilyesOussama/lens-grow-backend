import express from "express";

import {
  getMention,
  getMentionStats,
  getMentionsStats,
  getMentions,
} from "../controllers/mentions.controllers";

const router = express.Router();

router.get("/", getMentions);
router.get("/:id", getMention);
router.get("/stats", getMentionsStats);
router.get("/stats/:id", getMentionStats);

export default router;

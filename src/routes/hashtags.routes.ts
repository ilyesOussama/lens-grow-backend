import express from "express";

import {
  getHashtag,
  getHashtagStats,
  getHashtags,
  getHashtagsStats,
} from "../controllers/hashtags.controllers";

const router = express.Router();

router.get("/", getHashtags);
router.get("/:id", getHashtag);
router.get("/stats", getHashtagsStats);
router.get("/stats/:id", getHashtagStats);

export default router;

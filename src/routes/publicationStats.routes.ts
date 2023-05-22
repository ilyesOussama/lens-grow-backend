import express from "express";

import {
  getPublicationStats,
  getPublicationsStats,
} from "../controllers/publicationStats.controllers";

const router = express.Router();

router.get("/", getPublicationsStats);
router.get("/:id", getPublicationStats);

export default router;

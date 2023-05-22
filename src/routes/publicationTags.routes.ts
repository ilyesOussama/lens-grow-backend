import express from "express";
import {
  getPublicationsTagStats,
  getPublicationTagStat,
  getPublicationsTag,
  getPublicationTag,
} from "../controllers/publicationTags.controllers";

const router = express.Router();

router.get("/", getPublicationsTagStats);
router.get("/:id", getPublicationTagStat);
router.get("/", getPublicationsTag);
router.get("/:id", getPublicationTag);

export default router;

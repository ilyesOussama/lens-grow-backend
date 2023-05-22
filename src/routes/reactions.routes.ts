import express from "express";
import {
  getPublicationsReactionsRecords,
  getPublicationReactionRecords,
} from "../controllers/reactions.controllers";

const router = express.Router();

router.get("/", getPublicationsReactionsRecords);
router.get("/:id", getPublicationReactionRecords);

export default router;

import express from "express";
import {
  getPublicationsPointers,
  getPublicationPointer,
} from "../controllers/publicationPointer.controllers";

const router = express.Router();

router.get("/", getPublicationsPointers);
router.get("/:id", getPublicationPointer);

export default router;

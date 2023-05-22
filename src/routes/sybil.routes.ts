import express from "express";
import {
  getSybilVerified,
  getSybilsVerified,
} from "../controllers/sybil.controllers";

const router = express.Router();

router.get("/", getSybilVerified);
router.get("/:id", getSybilsVerified);

export default router;

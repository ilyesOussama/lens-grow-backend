import express from "express";
import {
  getAddressReverseRecord,
  getEnsReverseRecord,
} from "../controllers/ens.controllers";

const router = express.Router();

router.get("/", getEnsReverseRecord);
router.get("/:id", getAddressReverseRecord);

export default router;

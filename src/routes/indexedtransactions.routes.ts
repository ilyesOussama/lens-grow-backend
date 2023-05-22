import express from "express";

import {
  getIndexedTransaction,
  getIndexedTransactions,
} from "../controllers/indexedtransactions.controllers";

const router = express.Router();

router.get("/", getIndexedTransactions);
router.get("/:id", getIndexedTransaction);

export default router;

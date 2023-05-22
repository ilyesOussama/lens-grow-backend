import express from "express";

import { getProtocolState } from "../controllers/protocolState.controllers";

const router = express.Router();

router.get("/", getProtocolState);

export default router;

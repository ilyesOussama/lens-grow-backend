import express from "express";
import {
  getPublicationsAccessControl,
  getPublicationAccessControl,
  getPublicationAccessControlPending,
  getPublicationsAccessControlPending,
} from "../controllers/publicationAccessControl.controllers";

const router = express.Router();

router.get("/", getPublicationsAccessControl);
router.get("/:id", getPublicationAccessControl);
router.get("/pending", getPublicationAccessControlPending);
router.get("/pending/:id", getPublicationsAccessControlPending);

export default router;

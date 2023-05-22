import express from "express";

import {
  getAppAppPublicationStats,
  getAppAppPublicationTagStats,
  getAppPubPublicationStats,
  getAppTagPublicationTagStats,
  getAppPubPublicationsStats,
  getAppsAppProfilesStats,
  getAppsAppPublicationsStats,
  getAppsAppPublicationsTagsStats,
  getAppProfileProfileStats,
  getAppsProfilesProfilesStats,
  getAppsTagPublicationsTagsStats,
  getAppAppProfileStats,
} from "../controllers/appstats.controllers";

const router = express.Router();

router.get("/publication", getAppsProfilesProfilesStats);
router.get("/publication/:id", getAppProfileProfileStats);
router.get("/app", getAppsAppProfilesStats);
router.get("/app/:id", getAppAppPublicationStats);
router.get("/tag");
router.get("/tag/:id");
router.get("/tag/app");
router.get("/tag/app/:id");
router.get("/profile");
router.get("/profile/:id");
router.get("/profile/app");
router.get("/profile/app/:id");

export default router;

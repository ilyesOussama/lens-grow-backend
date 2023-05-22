import express from "express";

import {
  getAppsAppPublicationsStats,
  getAppAppPublicationStats,
  getAppsPubPublicationsStats,
  getAppPubPublicationStats,
  getAppsAppPublicationsTagsStats,
  getAppAppPublicationTagStats,
  getAppsTagPublicationsTagsStats,
  getAppTagPublicationTagStats,
  getAppsAppProfilesStats,
  getAppAppProfileStats,
  getAppsProfilesProfilesStats,
  getAppsProfileProfilesStats,
} from "../controllers/appstats.controllers";

const router = express.Router();

router.get("/publication", getAppsPubPublicationsStats);
router.get("/publication/:id", getAppPubPublicationStats);
router.get("/app", getAppsAppPublicationsStats);
router.get("/app/:id", getAppAppPublicationStats);
router.get("/tag", getAppsTagPublicationsTagsStats);
router.get("/tag/:id", getAppTagPublicationTagStats);
router.get("/tag/app", getAppsAppPublicationsTagsStats);
router.get("/tag/app/:id", getAppAppPublicationTagStats);
router.get("/profile", getAppsProfilesProfilesStats);
router.get("/profile/:id", getAppsProfileProfilesStats);
router.get("/profile/app", getAppsAppProfilesStats);
router.get("/profile/app/:id", getAppAppProfileStats);

export default router;

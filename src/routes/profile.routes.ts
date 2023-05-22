import express, { Request, Response } from "express";
import {
  getProfileDispatcher,
  getProfileFollowNft,
  getProfileStats,
  getProfile,
  getProfileCurated,
  getProfileFollowModuleDetails,
  getProfileFollowModuleDetailsHistory,
  getProfileFollowModuleFollowRecord,
  getProfileNftGallery,
  getProfileRecommendedDismissed,
} from "../controllers/profile.controllers";

const router = express.Router();

router.get("/:id/dispatcher", getProfileDispatcher);
router.get("/:id/followNft", getProfileFollowNft);
router.get("/:id/stats", getProfileStats);
router.get("/:id", getProfile);
router.get("/:id/followmoduledetails", getProfileFollowModuleDetails);
router.get("/:id/curated", getProfileCurated);
router.get(
  "/:id/followmoduledetailshistory",
  getProfileFollowModuleDetailsHistory
);
router.get("/:id/followmodulefollowrecord", getProfileFollowModuleFollowRecord);
router.get("/:id/nftgallery", getProfileNftGallery);
router.get("/:id/recommendeddismissed", getProfileRecommendedDismissed);

export default router;

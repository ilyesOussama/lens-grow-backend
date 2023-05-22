import express from "express";

import {
  getApprovalFollowersUsersData,
  getApprovalFollowerUserData,
  getApprovalFollowers,
  getApprovalFollower,
} from "../controllers/approval.controllers";

const router = express.Router();

router.get("/follower", getApprovalFollowers);
router.get("/follower/:id", getApprovalFollower);
router.get("/followeruser", getApprovalFollowersUsersData);
router.get("/followeruser/:id", getApprovalFollowerUserData);

export default router;

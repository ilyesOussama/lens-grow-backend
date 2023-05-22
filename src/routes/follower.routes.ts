import express from "express";

import {
  getFollower,
  getFollowerProfile,
  getFollowerUser,
  getFollowers,
  getFollowersProfiles,
  getFollowersUsers,
} from "../controllers/follower.controllers";

const router = express.Router();

router.get("/", getFollowers);
router.get("/:id", getFollower);
router.get("/user", getFollowersUsers);
router.get("/user/:id", getFollowerUser);
router.get("/profile", getFollowerProfile);
router.get("/profile/:id", getFollowersProfiles);

export default router;

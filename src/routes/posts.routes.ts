import express from "express";

import {
  getPostComment,
  getPostsComments,
  getProfilePost,
  getProfilesPosts,
} from "../controllers/posts.controllers";

const router = express.Router();

router.get("/comment", getPostsComments);
router.get("/comment/:id", getPostComment);
router.get("/profile", getProfilesPosts);
router.get("/profile/:id", getProfilePost);

export default router;

import express from "express";

import {
  getCommentNft,
  getCommentsNfts,
  getFollowNft,
  getFollowsNfts,
  getPostNft,
  getPostsNfts,
} from "../controllers/pubfollowNft.controllers";

const router = express.Router();

router.get("/comments", getCommentsNfts);
router.get("/comments/:id", getCommentNft);
router.get("/follow/:id", getFollowNft);
router.get("/follow", getFollowsNfts);
router.get("/post", getPostsNfts);
router.get("/post/:id", getPostNft);

export default router;

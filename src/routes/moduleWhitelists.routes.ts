import express from "express";
import {
  getCollectModuleWhitelisted,
  getCollectModulesWhitelisted,
  getFollowModuleWhitelisted,
  getFollowModulesWhitelisted,
  getRefrenceModuleWhitelisted,
  getRefrenceModulesWhitelisted,
} from "../controllers/moduleWhitelists.controllers";

const router = express.Router();

router.get("/collect", getCollectModulesWhitelisted);
router.get("/collect/:id", getCollectModuleWhitelisted);
router.get("/follow", getFollowModulesWhitelisted);
router.get("/follow/:id", getFollowModuleWhitelisted);
router.get("/refrence", getRefrenceModulesWhitelisted);
router.get("/refrence/:id", getRefrenceModuleWhitelisted);

export default router;

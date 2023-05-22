import express from "express";
import {
  getNotification,
  getNotificationType,
  getNotificationStats,
} from "../controllers/notifications.controller";

const router = express.Router();

router.get("/:id", getNotification);
router.get("/:id/type", getNotificationType);
router.get("/:id/stats", getNotificationStats);

export default router;

import express from "express";
import {
  createNotification,
  getNotificationById,
  cancelNotification,
  getAllNotifications,
} from "../controller/NotificationsController.js";

const router = express.Router();

router.get("/", getAllNotifications);
router.post("/", createNotification);
router.get("/:id", getNotificationById);
router.get("/:id/cancel", cancelNotification);

export default router;

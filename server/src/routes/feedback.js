import express from "express";
import {
  getAllItems,
  createFeedback
} from "../controllers/feedbackController.js";

const router = express.Router();

// route: /feedback/*
router
  .route("/")
  .get(getAllItems)
  .post(createFeedback)

export default router;

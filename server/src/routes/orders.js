import express from "express";
import {
  getAllOrders,
  createNewOrder,
  deleteOrders,
} from "../controllers/orderController.js";

const router = express.Router();

// route: /orders/*
router.route("/").get(getAllOrders).post(createNewOrder).delete(deleteOrders);

export default router;

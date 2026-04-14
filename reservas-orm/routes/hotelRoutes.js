import express from "express";
import { getHoteles, getHotelById, createHotel, updateHotel } from "../controller/hotelController.js";

const router = express.Router();

router.get("/", getHoteles);
router.get("/:id", getHotelById);
router.post("/", createHotel);
router.put("/:id", updateHotel);

export default router;

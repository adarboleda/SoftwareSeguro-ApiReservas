import express from "express";
import { getReservas, getReservaById, createReserva, updateReserva } from "../controller/reservaController.js";

const router = express.Router();

router.get("/", getReservas);
router.get("/:id", getReservaById);
router.post("/", createReserva);
router.put("/:id", updateReserva);

export default router;

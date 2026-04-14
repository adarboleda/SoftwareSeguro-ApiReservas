import express from "express";
import { getClientes, getClienteById, createCliente, updateCliente } from "../controller/clienteController.js";

const router = express.Router();

router.get("/", getClientes);
router.get("/:id", getClienteById);
router.post("/", createCliente);
router.put("/:id", updateCliente);

export default router;

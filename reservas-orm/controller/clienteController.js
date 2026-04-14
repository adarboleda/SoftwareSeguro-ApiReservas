import { Cliente } from "../models/index.js";

// Obtener todos los clientes
export const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los clientes" });
  }
};

// Obtener cliente por ID
export const getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el cliente" });
  }
};

// Crear cliente
export const createCliente = async (req, res) => {
  try {
    const { nombre, email, telefono } = req.body;
    if (!nombre || !email) {
      return res.status(400).json({ error: "Nombre y email son obligatorios" });
    }
    const nuevoCliente = await Cliente.create({ nombre, email, telefono });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el cliente" });
  }
};

// Actualizar cliente
export const updateCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    const { nombre, email, telefono } = req.body;
    if (!nombre || !email) {
      return res.status(400).json({ error: "Nombre y email son obligatorios" });
    }
    await cliente.update({ nombre, email, telefono });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el cliente" });
  }
};

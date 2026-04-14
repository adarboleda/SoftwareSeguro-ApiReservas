import { Hotel } from "../models/index.js";

// Obtener todos los hoteles (GET)
export const getHoteles = async (req, res) => {
  try {
    const hoteles = await Hotel.findAll();
    res.status(200).json(hoteles);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los hoteles" });
  }
};

// Obtener un hotel por ID (GET)
export const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    if (!hotel) {
      return res.status(404).json({ error: "Hotel no encontrado" });
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el hotel" });
  }
};

// Crear un nuevo hotel (POST)
export const createHotel = async (req, res) => {
  try {
    const { nombre, direccion, estrellas, telefono } = req.body;
    if (!nombre || !direccion) {
      return res.status(400).json({ error: "Nombre y dirección son obligatorios" });
    }
    const nuevoHotel = await Hotel.create({ nombre, direccion, estrellas, telefono });
    res.status(201).json(nuevoHotel);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el hotel" });
  }
};

// Actualizar un hotel (PUT)
export const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    if (!hotel) {
      return res.status(404).json({ error: "Hotel no encontrado" });
    }
    const { nombre, direccion, estrellas, telefono } = req.body;
    if (!nombre || !direccion) {
      return res.status(400).json({ error: "Nombre y dirección son obligatorios" });
    }
    await hotel.update({ nombre, direccion, estrellas, telefono });
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el hotel" });
  }
};

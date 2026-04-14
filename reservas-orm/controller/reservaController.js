import { Reserva, Hotel, Cliente } from "../models/index.js";

// Obtener todas las reservas
export const getReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll({
       include: [
         { model: Hotel, attributes: ['nombre'] },
         { model: Cliente, attributes: ['nombre', 'email'] }
       ]
    });
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las reservas" });
  }
};

// Obtener reserva por ID
export const getReservaById = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id, {
        include: [
         { model: Hotel, attributes: ['nombre'] },
         { model: Cliente, attributes: ['nombre', 'email'] }
       ]
    });
    if (!reserva) {
      return res.status(404).json({ error: "Reserva no encontrada" });
    }
    res.status(200).json(reserva);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la reserva" });
  }
};

// Crear reserva
export const createReserva = async (req, res) => {
  try {
    const { fecha_entrada, fecha_salida, num_huespedes, hotel_id, cliente_id } = req.body;
    if (!fecha_entrada || !fecha_salida || !hotel_id || !cliente_id) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }
    const nuevaReserva = await Reserva.create({ fecha_entrada, fecha_salida, num_huespedes, hotel_id, cliente_id });
    res.status(201).json(nuevaReserva);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la reserva" });
  }
};

// Actualizar reserva
export const updateReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ error: "Reserva no encontrada" });
    }
    const { fecha_entrada, fecha_salida, num_huespedes, hotel_id, cliente_id } = req.body;
    if (!fecha_entrada || !fecha_salida || !hotel_id || !cliente_id) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }
    await reserva.update({ fecha_entrada, fecha_salida, num_huespedes, hotel_id, cliente_id });
    res.status(200).json(reserva);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la reserva" });
  }
};

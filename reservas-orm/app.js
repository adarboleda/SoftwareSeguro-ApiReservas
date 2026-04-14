import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";

import hotelRoutes from "./routes/hotelRoutes.js";
import clienteRoutes from "./routes/clienteRoutes.js";
import reservaRoutes from "./routes/reservaRoutes.js";


dotenv.config();
const app = express();

// Middleware (para manejar JSON y CORS)
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (_req, res) => res.send("Servidor de Gestión de Reservas funcionando correctamente"));

// Registrar rutas
app.use("/api/hoteles", hotelRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/reservas", reservaRoutes);

// Conexión a la BD y arranque del servidor
const iniciarServidor = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Crea tablas si no existen
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));
  } catch (error) {
    console.error(" Error al conectar con la base de datos:", error.message);
  }
};

iniciarServidor();

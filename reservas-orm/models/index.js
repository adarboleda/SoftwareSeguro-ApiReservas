import Hotel from "./Hotel.js";
import Cliente from "./Cliente.js";
import Reserva from "./Reserva.js";

// Establecer Relaciones
Hotel.hasMany(Reserva, { foreignKey: "hotel_id" });
Reserva.belongsTo(Hotel, { foreignKey: "hotel_id" });

Cliente.hasMany(Reserva, { foreignKey: "cliente_id" });
Reserva.belongsTo(Cliente, { foreignKey: "cliente_id" });

export { Hotel, Cliente, Reserva };

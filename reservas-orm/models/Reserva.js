import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Reserva = sequelize.define("Reserva", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fecha_entrada: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fecha_salida: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  num_huespedes: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  hotel_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'hoteles',
      key: 'id'
    }
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'clientes',
      key: 'id'
    }
  }
}, {
  tableName: "reservas",
  timestamps: false
});

export default Reserva;

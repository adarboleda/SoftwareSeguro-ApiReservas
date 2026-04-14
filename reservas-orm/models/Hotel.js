import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Hotel = sequelize.define("Hotel", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  estrellas: {
    type: DataTypes.INTEGER,
  },
  telefono: {
    type: DataTypes.STRING(20),
  },
}, {
  tableName: "hoteles",
  timestamps: false
});

export default Hotel;

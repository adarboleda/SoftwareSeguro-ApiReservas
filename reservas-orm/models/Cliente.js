import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Cliente = sequelize.define("Cliente", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  telefono: {
    type: DataTypes.STRING(20),
  },
}, {
  tableName: "clientes",
  timestamps: false
});

export default Cliente;

import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Compra = sequelize.define("Compra", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  laboratorio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

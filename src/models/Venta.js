import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Venta = sequelize.define("Venta", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

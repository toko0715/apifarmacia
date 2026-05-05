import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const VentaDetalle = sequelize.define("VentaDetalle", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

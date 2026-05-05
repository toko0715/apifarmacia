import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const CompraDetalle = sequelize.define("CompraDetalle", {
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

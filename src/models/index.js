import { User } from "./User.js";
import { Medicamento } from "./Medicamento.js";
import { Compra } from "./Compra.js";
import { CompraDetalle } from "./CompraDetalle.js";
import { Venta } from "./Venta.js";
import { VentaDetalle } from "./VentaDetalle.js";

// 🛒 COMPRAS
Compra.hasMany(CompraDetalle, { foreignKey: "compraId" });
CompraDetalle.belongsTo(Compra, { foreignKey: "compraId" });

// 💰 VENTAS
Venta.hasMany(VentaDetalle, { foreignKey: "ventaId" });
VentaDetalle.belongsTo(Venta, { foreignKey: "ventaId" });

// 💊 MEDICAMENTOS
Medicamento.hasMany(CompraDetalle, { foreignKey: "medicamentoId" });
Medicamento.hasMany(VentaDetalle, { foreignKey: "medicamentoId" });

CompraDetalle.belongsTo(Medicamento, { foreignKey: "medicamentoId" });
VentaDetalle.belongsTo(Medicamento, { foreignKey: "medicamentoId" });

export { User, Medicamento, Compra, CompraDetalle, Venta, VentaDetalle };

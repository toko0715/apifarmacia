import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import medicamentoRoutes from "./routes/medicamento.routes.js";
import compraRoutes from "./routes/compra.routes.js";
import ventaRoutes from "./routes/venta.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

// RUTAS
app.use("/api/auth", authRoutes);
app.use("/api/medicamentos", medicamentoRoutes);
app.use("/api/compras", compraRoutes);
app.use("/api/ventas", ventaRoutes);

export default app;

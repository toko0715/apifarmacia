import { Router } from "express";
import { crearCompra } from "../controllers/compra.controller.js";

import { auth } from "../middleware/auth.middleware.js";
import { role } from "../middleware/role.middleware.js";

const router = Router();

// SOLO ALMACEN
router.post("/", auth, role("ALMACEN"), crearCompra);

export default router;

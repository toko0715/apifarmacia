import { Router } from "express";
import { crearVenta } from "../controllers/venta.controller.js";

import { auth } from "../middleware/auth.middleware.js";
import { role } from "../middleware/role.middleware.js";

const router = Router();

// SOLO VENDEDOR
router.post("/", auth, role("VENDEDOR"), crearVenta);

export default router;

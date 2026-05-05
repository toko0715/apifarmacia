import { Router } from "express";
import {
  createMedicamento,
  getMedicamentos,
  updateMedicamento,
  deleteMedicamento,
} from "../controllers/medicamento.controller.js";

import { auth } from "../middleware/auth.middleware.js";
import { role } from "../middleware/role.middleware.js";

const router = Router();

// ADMIN crea
router.post("/", auth, role("ADMIN"), createMedicamento);

// TODOS autenticados ven
router.get("/", auth, getMedicamentos);

// ADMIN actualiza
router.put("/:id", auth, role("ADMIN"), updateMedicamento);

// SOLO ADMIN elimina
router.delete("/:id", auth, role("ADMIN"), deleteMedicamento);

export default router;

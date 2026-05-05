import { Medicamento } from "../models/index.js";

export const createMedicamento = async (req, res) => {
  try {
    const { nombre, precio, stock } = req.body;

    if (!nombre || !precio) {
      return res.status(400).json({ msg: "Datos obligatorios faltantes" });
    }

    const med = await Medicamento.create({
      nombre,
      precio,
      stock: stock || 0,
    });

    res.status(201).json(med);
  } catch (error) {
    res.status(500).json({ msg: "Error creando medicamento", error });
  }
};

export const getMedicamentos = async (req, res) => {
  try {
    const meds = await Medicamento.findAll();
    res.json(meds);
  } catch (error) {
    res.status(500).json({ msg: "Error obteniendo medicamentos", error });
  }
};

export const updateMedicamento = async (req, res) => {
  try {
    const { id } = req.params;

    const med = await Medicamento.findByPk(id);
    if (!med) return res.status(404).json({ msg: "No existe" });

    await med.update(req.body);

    res.json(med);
  } catch (error) {
    res.status(500).json({ msg: "Error actualizando", error });
  }
};

export const deleteMedicamento = async (req, res) => {
  try {
    const { id } = req.params;

    const med = await Medicamento.findByPk(id);
    if (!med) return res.status(404).json({ msg: "No existe" });

    await med.destroy();

    res.json({ msg: "Eliminado" });
  } catch (error) {
    res.status(500).json({ msg: "Error eliminando", error });
  }
};

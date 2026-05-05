import { Compra, CompraDetalle, Medicamento } from "../models/index.js";

export const crearCompra = async (req, res) => {
  try {
    const { laboratorio, detalles } = req.body;

    if (!laboratorio || !detalles || detalles.length === 0) {
      return res.status(400).json({ msg: "Datos incompletos" });
    }

    const compra = await Compra.create({ laboratorio });

    for (let d of detalles) {
      const med = await Medicamento.findByPk(d.medicamentoId);

      if (!med) {
        return res.status(404).json({ msg: "Medicamento no existe" });
      }

      await CompraDetalle.create({
        cantidad: d.cantidad,
        compraId: compra.id,
        medicamentoId: d.medicamentoId,
      });

      // 🔥 AUMENTAR STOCK
      med.stock += d.cantidad;
      await med.save();
    }

    res.status(201).json(compra);
  } catch (error) {
    res.status(500).json({ msg: "Error en compra", error });
  }
};

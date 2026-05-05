import { Venta, VentaDetalle, Medicamento } from "../models/index.js";

export const crearVenta = async (req, res) => {
  try {
    const { detalles } = req.body;

    if (!detalles || detalles.length === 0) {
      return res.status(400).json({ msg: "Detalles requeridos" });
    }

    const venta = await Venta.create();

    for (let d of detalles) {
      const med = await Medicamento.findByPk(d.medicamentoId);

      if (!med) {
        return res.status(404).json({ msg: "Medicamento no existe" });
      }

      if (med.stock < d.cantidad) {
        return res.status(400).json({
          msg: `Stock insuficiente para ${med.nombre}`,
        });
      }

      // 🔥 RESTAR STOCK
      med.stock -= d.cantidad;
      await med.save();

      await VentaDetalle.create({
        cantidad: d.cantidad,
        ventaId: venta.id,
        medicamentoId: d.medicamentoId,
      });
    }

    res.status(201).json(venta);
  } catch (error) {
    res.status(500).json({ msg: "Error en venta", error });
  }
};

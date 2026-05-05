export const role = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ msg: "No autenticado" });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ msg: "Acceso denegado" });
    }

    next();
  };
};

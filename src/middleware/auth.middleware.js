import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ msg: "No autorizado (sin token)" });
    }

    // formato: "Bearer token"
    const tokenClean = token.split(" ")[1];

    const decoded = jwt.verify(tokenClean, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({ msg: "Token inválido" });
  }
};

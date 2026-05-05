import app from "./app.js";
import { sequelize } from "./config/db.js";

const PORT = process.env.PORT || 3000;

const main = async () => {
  try {
    await sequelize.sync();
    console.log("DB conectada");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();

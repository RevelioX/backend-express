const express = require("express");

// crear servidor
const app = express();
require("./base-orm/sqlite-init");  // crear base si no existe
app.use(express.json());

// controlar ruta
app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

app.get("/_isalive", (req, res) => {
  res.send("Ejecutandose desde:");
});

const articulosfamiliasmockRouter = require("./routes/articulosfamiliasmock");
app.use(articulosfamiliasmockRouter);

app.use(express.json());

const articulosfamiliasRouter = require("./routes/articulosfamilias");
app.use(articulosfamiliasRouter);

const articulos = require("./routes/articulos");
app.use(articulos);

const seguridad = require("./routes/seguridad");
app.use(seguridad);

// levantar servidor
if (!module.parent) {   // si no es llamado por otro modulo, es decir, si es el modulo principal -> levantamos el servidor
  const port = process.env.PORT || 3000;   // en produccion se usa el puerto de la variable de entorno PORT
  app.locals.fechaInicio = new Date();
  app.listen(port, () => {
    console.log(`sitio escuchando en el puerto ${port}`);
  });
}
module.exports = app; // para testing

const express = require("express");

// crear servidor
const app = express();
require("./base-orm/sqlite-init");  // crear base si no existe
app.use(express.json());

// controlar ruta
app.get("/", (req, res) => {
  res.send("Backend inicial dds-backend!");
});


const articulosfamiliasmockRouter = require("./routes/articulosfamiliasmock");
app.use(articulosfamiliasmockRouter);

app.use(express.json());

const articulosfamiliasRouter = require("./routes/articulosfamilias");
app.use(articulosfamiliasRouter);

const articulos = require("./routes/articulos");
app.use(articulos);

// levantar servidor
const port = 3000;
app.listen(port, () => {
    console.log(`sitio escuchando en el puerto ${port}`);
});

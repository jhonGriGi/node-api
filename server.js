const express = require("express"); // Para requerir el framework express
const app = express(); // Instancia de express
const bodyParser = require("body-parser"); // Permite leer el cuerpo para analizarlo en el objeto json
const morgan = require("morgan"); // Middleware que informa sobre las peticiones al servidor
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// settings
app.set("port", process.env.PORT || 4000); // Se setea el puerto, toma 4000 si no esta configura en ENV

// middlewares
app.use(bodyParser.urlencoded({ extended: false })); // para recibir datos desde un formulaio
app.use(bodyParser.json()); // para que el servidor pueda recibir formato json
app.use(morgan("dev")); // La opcion dev da la informacion principal. Combined da mas detalles

// Routes
// Se configura una ruta sencilla a traves del metodo GET para probar
// app.get('/', (req, res) => {
// req->request se envian los datos al server
// res->response se envian los datos hacia el cliente
// res.send('Hello ADSI!'); // se envia la respuesta en texto plano
//   res.send({ Title: "Hello ADSI!" }); // Envio del formato json
// })
app.use("/api/v1/users", require("./api/v1/routes/users.routes")); // Ruta para users
app.use("/api/v1/articles", require("./api/v1/routes/articles.routes")); // Ruta para articulos con la version 1 de la API

// Iniciando el server
app.listen(app.get("port"), () => {
  console.log(`Server running on localhost:${app.get("port")}`);
});

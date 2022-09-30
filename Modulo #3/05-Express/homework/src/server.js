// const bodyParser = require("body-parser");
const express = require("express");
const {
  posts,
  crearPostal,
  crearPostalPorAutor,
  llamarPostal,
  llamarPostalPorAutor,
  llamarPostalPorTitulo,
  actualizarPostal,
  eliminarPostal,
  eliminarPostalPorAutor,
} = require("./controller");

const server = express();

server.use(express.json());

server.post("/posts", crearPostal);

server.post("/posts/author/:author", crearPostalPorAutor);

server.get("/posts", llamarPostal);

server.get("/posts/:author", llamarPostalPorAutor);

server.get("/posts/:author/:title", llamarPostalPorTitulo);

server.put("/posts", actualizarPostal);

server.delete("/posts", eliminarPostal);

server.delete("/author", eliminarPostalPorAutor);

module.exports = { posts, server };

// import frutas from "./frutas.js";
// const frutas = require("./frutas.js");
// console.log(frutas);

// const http = require("http");
// Traigo los metodos de http de node
import http from "http";
// Establezco el puerto con el que voy a trabajar
const port = 3030;
// En la variable server guardo el metodo createServer que tiene 2 parametros
// req: request (petición-solicitud), res: response (respuesta)
// el middleware es una funcion que trabaja entre el request y el response
// entre el pedido y la respuesta que se le da al cliente tengo que tener
// algo que me ayude a procesar esa informacion. Hay diferentes tipos de
// middlewares, los que se ejecutan antes de que llegue la respuesta y los
// que se ejecutan despues de que llegue la respuesta.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, World!</h1>");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
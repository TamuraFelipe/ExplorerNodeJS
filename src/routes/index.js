const { Router } = require('express');

const routes = Router();

/*Agrupador de rogas*/
const usersRouter = require('./users.routes');

/*Rota leva para as requisições*/
routes.use("/users", usersRouter);

module.exports = routes;
const { Router } = require('express');
const routes = Router();
/*Agrupador de rogas*/
const usersRouter = require('./users.routes');
const notesRouter = require('./notes.routes');




/*Rota leva para as requisições*/
routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);

module.exports = routes;
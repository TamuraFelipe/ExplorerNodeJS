require('express-async-errors');
//const migrationsRun = require('./database/sqlite/migrations');
const AppError = require('./utils/AppError');

const express = require('express'); //importando o express
const routes = require('./routes');

//migrationsRun();

const app = express(); //criando uma variável para iniciar o express
app.use(express.json()); // Transformando os dados trazidos pelo body da request em um Json

app.use(routes);

app.use((error, request, response, next) => {
    if(error instanceof AppError){
        response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }
    console.error(error);
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error!"
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));  //O express vai observar a porta 3000

/* response.send("Hello, world!"); é respondido SE alguém solicitar na PORT na rota "/" */


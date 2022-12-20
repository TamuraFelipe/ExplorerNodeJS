const express = require('express'); //importando o express

const routes = require('./routes');

const app = express(); //criando uma variável para iniciar o express
app.use(express.json()); // Transformando os dados trazidos pelo body da request em um Json

app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});  //O express vai observar a porta 3000

/* response.send("Hello, world!"); é respondido SE alguém solicitar na PORT na rota "/" */


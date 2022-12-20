class UsersController {
    create(request, response) {
        const { name, email, password } = request.body;
        response.status(201).send({name, email, password}); // devolvendo para a aplicação em formato json
    }
}

module.exports = UsersController;

/*
index - GET para listar vários registros
show - GET para exibir um registros especifico
create - POST para criar uum registro
update - PUT para atualizar um registro
delete - DELETE para deletar um registro
*/
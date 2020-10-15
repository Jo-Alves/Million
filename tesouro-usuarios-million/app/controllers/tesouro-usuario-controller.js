const TesouroUsuario = require("../models/tesouros_usuario");
const tesouroUsuario = require("../models/tesouros_usuario");
const token = "12345"
const tesouroUsuarioController = {
    find: (request, response, next) => {
        if (request.headers.auth_token === token) {

            tesouroUsuario.find()
                .then(dados => {
                    response.status(200).send(dados);
                })
                .catch(error => {
                    response.status(401).send(error);
                })
        }
        else
            response.status(401).send({ error: "Acesso negado!" });        
    },
    findById: (request, response, next) => {
        if (request.headers.auth_token === token) {

            tesouroUsuario.findById(request.params.id)
                .then(dados => {
                    response.status(200).send(dados);
                })
                .catch(error => {
                    response.status(401).send(error);
                })
        }
        else
            response.status(401).send({ error: "Acesso negado!" });        
    },
    inserted: async (request, response, next) => {
        if (request.headers.auth_token === token) {

            try {
                const tesouroUsuario = await TesouroUsuario.create(request.body);
                response.status(201).send(tesouroUsuario);
            }
            catch (error) {
                response.status(401).send(error);
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" });        
    },
    update: async (request, response, next) => {
        if (request.headers.auth_token === token) {

            try {
                await TesouroUsuario.findByIdAndUpdate({ _id: request.params.id }, request.body);
                response.status(204).send({});
            }
            catch (error) {
                response.status(401).send(error);
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" });        
    },
    delete: async (request, response, next) => {
        if (request.headers.auth_token === token) {

            try {
                await TesouroUsuario.findByIdAndDelete(request.params.id);
                response.status(204).send({});
            }
            catch (error) {
                response.status(401).send(error);
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" });        
    },
}

module.exports = tesouroUsuarioController;
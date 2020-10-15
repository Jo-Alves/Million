const TesouroUsuario = require("../models/tesouros_usuario");
const tesouroUsuario = require("../models/tesouros_usuario");

const tesouroUsuarioController = {
    find: (request, response, next) => {
        tesouroUsuario.find()
            .then(dados => {
                response.status(200).send(dados);
            })
            .catch(error => {
                response.status(401).send(error);
            })
    },
    findById: (request, response, next) => {
        tesouroUsuario.findById(request.params.id)
            .then(dados => {
                response.status(200).send(dados);
            })
            .catch(error => {
                response.status(401).send(error);
            })
    },
    inserted: async (request, response, next) => {
        try {
            const tesouroUsuario = await TesouroUsuario.create(request.body);
            response.status(201).send(tesouroUsuario);
        }
        catch (error) {
            response.status(401).send(error);
        }
    },
    update: async (request, response, next) => {
        try {
            await TesouroUsuario.findByIdAndUpdate({ _id: request.params.id }, request.body);
            response.status(204).send({});
        }
        catch (error) {
            response.status(401).send(error);
        }
    },
    delete: async (request, response, next) => {
        try {
            await TesouroUsuario.findByIdAndDelete(request.params.id);
            response.status(204).send({});
        }
        catch (error) {
            response.status(401).send(error);
        }
    }
}

module.exports = tesouroUsuarioController;
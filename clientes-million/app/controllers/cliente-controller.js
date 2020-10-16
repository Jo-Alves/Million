const Cliente = require("../models/cliente");

const token = "12345";

const clienteController = {
    find: async (request, response, next) => {
        try {
            if (request.headers.auth_token === token) {
                const cliente = await Cliente.find();
                response.status(200).send(cliente);
            }
            else {
                response.status(401).send({ error: "Acesso negado!" });
            }
        }
        catch (error) {
            response.status(401).send({ error })
        }
    },
    findById: async (request, response, next) => {
        try {
            if (request.headers.auth_token === token) {
                const cliente = await Cliente.findById(request.params.id);
                response.status(200).send(cliente);
            }
            else {
                response.status(401).send({ error: "Acesso negado!" });
            }
        }
        catch (error) {
            response.status(401).send({ error })
        }
    },
    inserted: async (request, response, next) => {
        try {
            if (request.headers.auth_token === token) {
                const cliente = await Cliente.create(request.body);
                response.status(201).send(cliente);
            }
            else {
                response.status(401).send({ error: "Acesso negado!" });
            }
        }
        catch (error) {
            response.status(401).send({ error })
        }
    },
    update: async (request, response, next) => {
        try {
            if (request.headers.auth_token === token) {
                const cliente = await Cliente.findByIdAndUpdate({ _id: request.params.id }, request.body);
                response.status(204).send({});
            }
            else {
                response.status(401).send({ error: "Acesso negado!" });
            }
        }
        catch (error) {
            response.status(401).send({ error })
        }
    },
    delete: async (request, response, next) => {
        try {
            if (request.headers.auth_token === token) {
                const cliente = await Cliente.findByIdAndDelete(request.params.id);
                response.status(204).send(cliente);
            }
            else {
                response.status(401).send({ error: "Acesso negado!" });
            }
        }
        catch (error) {
            response.status(401).send({ error })
        }
    }
}

module.exports = clienteController;
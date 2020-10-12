const Acao = require("../models/acao");
const token = "1234567890";

const acaoController = {
    find: (request, response, next) => {
        if (request.headers.auth_token === token) {
            Acao.find({})
                .then(data => response.status(200).send(data))
                .catch(error => response.status(401).send(error));
        }
        else {
            response.status(401).send({ error: "Acesso negado!" });
        }
    },
    findById: (request, response, next) => {
        if (request.headers.auth_token === token) {
            Acao.findById(request.params.id)
                .then(data => response.status(200).send(data))
                .catch(error => response.status(401).send(error));
        }
        else {
            response.status(401).send({ error: "Acesso negado!" });
        }
    },
    inserted: (request, response, next) => {
        if (request.headers.auth_token === token) {
            const acao = new Acao(request.body);
            acao.save(error => {
                if (error)
                    response.status(401).send(error);
                else
                    response.status(201).send(acao);
            })
        }
        else {
            response.status(401).send({ error: "Acesso negado!" });
        }
    },
    update: async (request, response, next) => {
        if (request.headers.auth_token === token) {
            try {
                await Acao.findByIdAndUpdate({ _id: request.params.id }, request.body);
                response.status(204).send({});
            }
            catch (error) {
                response.status(401).send({});
            }
        }
        else {
            response.status(401).send({ error: "Acesso negado!" });
        }
    },
    delete: async (request, response, next) => {
        if (request.headers.auth_token === token) {
            try {
                await Acao.findByIdAndDelete(request.params.id);
                response.status(204).send({});
            }
            catch (error) {
                response.status(401).send({});
            }
        }
        else {
            response.status(401).send({ error: "Acesso negado!" });
        }
    }
}

module.exports = acaoController;
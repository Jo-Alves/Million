const Tesouro = require("../models/tesouro");
const token = "9876543210";

const tesouroController = {
    find: (request, response, next) => {
        if (request.headers.auth_token === token) {
            Tesouro.find()
                .then(data => {
                    response.status(200).send(data);
                })
                .catch(error => {
                    response.status(401).send(`Error: ${error}`)
                })
        }
        else response.status(401).send({ error: "Acesso negado!" });
    },
    findId: (request, response, next) => {
        if (request.headers.auth_token === token) {
            Tesouro.findById(request.params.id)
                .then(data => {
                    response.status(200).send(data);
                })
                .catch(error => {
                    response.status(401).send(`Error: ${error}`)
                })
        }
        else response.status(401).send({ error: "Acesso negado!" });
    },
    inserted: (request, response, next) => {
        if (request.headers.auth_token === token) {
            const tesouro = new Tesouro(request.body);

            tesouro.save(error => {
                if (error) {
                    response.status(401).send(error);
                }
                else
                    response.status(201).send(tesouro);
            })
        }
        else response.status(401).send({ error: "Acesso negado!" });
    },
    update: async (request, response, next) => {
        if (request.headers.auth_token === token) {
            try {
                await Tesouro.findByIdAndUpdate({ _id: request.params.id }, request.body);
                response.status(204).send({})
            }
            catch (error) {
                response.status(401).send({})
            }
        }
        else response.status(401).send({ error: "Acesso negado!" });
    },
    delete: async (request, response, next) => {
        if (request.headers.auth_token === token) {
            try {
                await Tesouro.findByIdAndDelete(request.params.id);
                response.status(204).send({})
            } catch (error) {
                response.status(401).send({})
            }
        }
        else response.status(401).send({ error: "Acesso negado!" });
    },
}

module.exports = tesouroController;
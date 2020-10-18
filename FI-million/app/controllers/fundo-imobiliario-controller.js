const FundoImobiliario = require("../models/fundo-imobiliario");

const token = "12345";

const FundoImobiliarioController = {
    find: async (request, response) => {
        if (request.headers.auth_token === token) {
            try {
                const fi = await FundoImobiliario.find();
                response.status(200).send(fi)
            }
            catch (error) {
                response.status(401).send({ error })
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" });
    },
    findById: async (request, response) => {
        if (request.headers.auth_token === token) {
            try {
                const fi = await FundoImobiliario.findById(request.params.id);
                response.status(200).send(fi)
            }
            catch (error) {
                response.status(401).send({ error })
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" });
    },
    inserted: async (request, response) => {
        if (request.headers.auth_token === token) {
            try {
                const fi = await FundoImobiliario.create(request.body);
                response.status(201).send(fi)
            }
            catch (error) {
                response.status(401).send({ error })
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" });
    },
    update: async (request, response) => {
        if (request.headers.auth_token === token) {
            try {
               await FundoImobiliario.findByIdAndUpdate({_id: request.params.id}, request.body);
                response.status(204).send({})
            }
            catch (error) {
                response.status(401).send({ error })
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" });
    },
    delete: async (request, response) => {
        if (request.headers.auth_token === token) {
            try {
                await FundoImobiliario.findByIdAndDelete(request.params.id);
                response.status(204).send({})
            }
            catch (error) {
                response.status(401).send({ error })
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" });
    }
}

module.exports = FundoImobiliarioController;
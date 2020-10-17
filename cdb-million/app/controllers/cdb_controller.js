const CDB = require("../models/cdb");
const token = "12345";

const cbdController = {
    find: async (request, response) => {

        if (request.headers.auth_token === token) {
            try {
                const cdb = await CDB.find();
                response.status(200).send(cdb);
            }
            catch (error) {
                response.status(401).send({ error });
            }
        }
        else {
            response.status(401).send({ Error: "Acesso negado!" });
        }
    },
    findById: async (request, response) => {

        if (request.headers.auth_token === token) {
            try {
                const cdb = await CDB.findById(request.params.id);
                response.status(200).send(cdb);
            }
            catch (error) {
                response.status(401).send({ error });
            }
        }
        else {
            response.status(401).send({ Error: "Acesso negado!" });
        }
    },
    inserted: async (request, response) => {

        if (request.headers.auth_token === token) {
            try {
                const cdb = await CDB.create(request.body);
                response.status(201).send(cdb);
            }
            catch (error) {
                response.status(401).send({ error });
            }
        }
        else {
            response.status(401).send({ Error: "Acesso negado!" });
        }
    },
    update: async (request, response) => {
       if (request.headers.auth_token === token) {
            try {
                
                await CDB.findByIdAndUpdate({ _id: request.params.id }, request.body)
                response.status(204).send({})
            }
            catch (error) {
                response.status(401).send(error);
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" })
    },
    delete: async (request, response) => {

        if (request.headers.auth_token === token) {
            try {
                await CDB.findByIdAndDelete(request.params.id);
                response.status(204).send({});
            }
            catch (error) {
                response.status(401).send({ error });
            }
        }
        else {
            response.status(401).send({ Error: "Acesso negado!" });
        }
    }
}

module.exports = cbdController
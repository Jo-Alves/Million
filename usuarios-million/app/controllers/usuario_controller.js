const Usuario = require("../models/usuarios");
let token = "12345";

const UsuarioController = {
    find: (request, response, next) => {
        if (request.headers.auth_token === token) {
            Usuario.find()
                .then(dado => response.send(dado))
                .catch(error => {
                    console.log(`Error: ${error}`)
                })
        }
        else {
            response.status(401).send({ Error: "Acesso negado!" })
        }
    },
    findIdOne: (request, response, next) => {
        if (request.headers.auth_token === token) {
            Usuario.findById(request.params.id)
                .then(dado => response.send(dado))
                .catch(error => {
                    console.log(`Error: ${error}`)
                })
        }
        else {
            response.status(401).send({ Error: "Acesso negado!" })
        }
    },
    inserted: (request, response, next) => {
        if (request.headers.auth_token === token) {
            const data = {
                nome: request.body.nome,
                cpf: request.body.cpf,
                telefone: request.body.telefone,
                email: request.body.email,
                endereco: request.body.endereco,
                banco: request.body.banco,
                nivelInvestidor: request.body.nivelInvestidor
            }
            const usuario = new Usuario(data)

            usuario.save(error => {
                if (error) {
                    response.status(401).send(error)
                    return;
                }
                else {
                    return response.status(201).send(usuario);
                }
            })
        }
        else {
            response.status(401).send({ Error: "Acesso negado!" })
        }
    },
    alter: async (request, response, next) => {
        try {
            if (request.headers.auth_token === token) {
                let idUsuario = { _id: request.params.id };
                let body = {
                    nome: request.body.nome,
                    cpf: request.body.cpf,
                    telefone: request.body.telefone,
                    email: request.body.email,
                    endereco: request.body.endereco,
                    banco: request.body.banco,
                    nivelInvestidor: request.body.nivelInvestidor
                };
                await Usuario.findByIdAndUpdate(idUsuario, body);
                response.status(204).send({})
            }
            else {
                response.status(401).send({ Error: "Acesso negado!" })
            }
        }
        catch (error) {
            response.status(401).send(error)
        }
    },
    delete: async (request, response, next) => {
        try {
            if (request.headers.auth_token === token) {
                await Usuario.findByIdAndDelete(request.params.id)
                response.status(204).send({})
            }
            else {
                response.status(401).send({ Error: "Acesso negado!" })
            }
        } catch (error) {
            response.status(204).send({})
        }
    }
}

module.exports = UsuarioController
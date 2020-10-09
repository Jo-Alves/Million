const User = require("../models/user");
let token = "12345";

const UsuarioController = {
    find: (request, response, next) => {
        if (request.headers.auth_token === token) {
            User.find()
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
            User.findById(request.params.id)
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
                cep: request.body.cep,
                endereco: request.body.endereco,
                numero: request.body.numero,
                cidade: request.body.cidade,
                estado: request.body.estado,
                pais: request.body.pais,
                banco: request.body.banco,
                nivelInvestidor: request.body.nivelInvestidor
            }
            const usuario = new User(data)

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
                    cep: request.body.cep,
                    endereco: request.body.endereco,
                    numero: request.body.numero,
                    cidade: request.body.cidade,
                    estado: request.body.estado,
                    pais: request.body.pais,
                    banco: request.body.banco,
                    nivelInvestidor: request.body.nivelInvestidor
                };
                await User.findByIdAndUpdate(idUsuario, body);
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
                await User.findByIdAndDelete(request.params.id)
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
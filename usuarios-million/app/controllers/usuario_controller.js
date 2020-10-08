const Usuario = require("../models/usuarios");

const UsuarioController = {
    find: (request, response, next) => {
        Usuario.find().then(dado => response.send(dado)).catch(error => { console.log(`Error: ${error}`) })
    },
    inserted: (request, response, next) => {
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
    },
    alter: async (request, response, next) => {
        try {
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
            await Usuario.findOneAndUpdate(idUsuario, body);
            response.status(204).send("")
        }
        catch (error) {
            response.status(401).send(error)
        }
    },
    delete: async (request, response, next) => {
        try {
            await Usuario.findByIdAndDelete(request.params.id)
            response.status(204).send({})
        } catch (error) {
            response.status(204).send({})
        }
    }
}

module.exports = UsuarioController
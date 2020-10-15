const AcoesUsuario = require("../models/acoes_usuarios");
const token = "12345"

const AcoesUsuarioController = {
    find: (request, response, next) => {
        if (request.headers.auth_token === token) {
            AcoesUsuario.find({})
                .then(data => response.status(200).send(data))
                .catch(error => response.status(401).send(`Error: ${error}`))
        }
        else
            response.status(401).send({ error: "Acesso negado!" })
    },
    inserted: async (request, response, next) => {
        if (request.headers.auth_token === token) {
            try {
                const acoesUsuario = await AcoesUsuario.create(request.body)

                response.status(201).send(acoesUsuario);
            }
            catch (error) {
                response.status(401).send(error);
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" })
    },
    update: async (request, response, next) => {
        if (request.headers.auth_token === token) {
            try {
                await AcoesUsuario.findByIdAndUpdate({ _id: request.params.id }, request.body)
                response.status(204).send({})
            }
            catch (error) {
                response.status(401).send(error);
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" })
    },
    delete: async (request, response, next) => {
        if (request.headers.auth_token === token) {
            try {
                await AcoesUsuario.findByIdAndDelete(request.params.id);
                response.status(204).send({})
            }
            catch (error) {
                response.status(401).send(error);
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" })
    },
    vender: async (request, response, next) => {
        if (request.headers.auth_token === token) {
            try {
                const { codigoUsuario, codigoAcao } = request.body
                const acoesUsuario = await AcoesUsuario.vender({
                    codigoUsuario,
                    codigoAcao
                })

                response.status(201).send(acoesUsuario);
            }
            catch (error) {
                response.status(401).send(error);
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" })
    },
    comprar: async (request, response, next) => {
        if (request.headers.auth_token === token) {
            try {

                const acoesUsuario = await AcoesUsuario.comprar(request.body)

                response.status(201).send(acoesUsuario);
            }
            catch (error) {
                response.status(401).send(error);
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" })
    },
    valorInvestido: async (request, response, next) => {
        if (request.headers.auth_token === token) {
            try {
                const { codigoUsuario, codigoAcao } = request.body
                const retorno = await AcoesUsuario.valorInvestidoPorAcao(codigoUsuario, codigoAcao)

                response.status(201).send({ total: retorno.total, acao: retorno.acao });
            }
            catch (error) {
                response.status(401).send(error);
            }
        }
        else
            response.status(401).send({ error: "Acesso negado!" })
    }
}

module.exports = AcoesUsuarioController;
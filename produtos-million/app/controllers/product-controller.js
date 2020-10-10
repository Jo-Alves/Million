const Product = require("../models/product");
const token = "12345"
const productController = {
    find: (request, response, next) => {
        if (request.headers.auth_token === token) {
            Product.find()
                .then(dados => response.status(200).send(dados))
                .catch(error => console.log(`Error: ${error}`));
        }
        else
            response.status(401).send({ Error: "Acesso negado!" })
    },
    findById: (request, response, next) => {
        if (request.headers.auth_token === token) {
            Product.findById(request.params.id)
                .then(dados => response.status(200).send(dados))
                .catch(error => console.log(`Error: ${error}`));
        }
        else
            response.status(401).send({ Error: "Acesso negado!" })
    },
    inserted: (request, response, next) => {
        if (request.headers.auth_token === token) {
            const data = {
                nome: request.body.nome,
                descricao: request.body.descricao,
                nivelInvestidor: request.body.nivelInvestidor
            }
            const product = new Product(data)
            product.save(error => {
                if (error)
                    response.status(401).send(error)
                else
                    response.status(201).send(product)
            })
        }
        else
            response.status(401).send({ Error: "Acesso negado!" })
    },
    alter: async (request, response, next) => {
        try {
            if (request.headers.auth_token === token) {
                idProduct = { _id: request.params.id };
                body = {
                    nome: request.body.nome,
                    descricao: request.body.descricao,
                    nivelInvestidor: request.body.nivelInvestidor
                }

                await Product.findByIdAndUpdate(idProduct, body)
                response.status(204).send({})
            }
            else
                response.status(401).send({ Error: "Acesso negado!" })
        }
        catch (error) {
            response.status(401).send(error);
        }
    },
    delete: async (request, response, next) => {
        try {
            if (request.headers.auth_token === token) {
                idProduct = { _id: request.params.id };

                await Product.findByIdAndDelete(idProduct)
                response.status(204).send({})
            }
            else
                response.status(401).send({ Error: "Acesso negado!" })
        }
        catch (error) {
            response.status(401).send(error);
        }
    }
}

module.exports = productController
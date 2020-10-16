const mongoose = require("../../db/connection");

const Cliente = mongoose.model("clientes", {
    nome: {type: String, required: true},
    sobrenome: {type: String, required: true},
    cpf: {type: String, required: true, unique: true},
    login: {type: String, required: true},
    senha: {type: String, required: true},
});

module.exports = Cliente
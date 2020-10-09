const mongoose = require("../../db/connection")

const User = mongoose.model("usuarios", {
        nome: { type: String, required: true },
        cpf: { type: String, required: true, unique: true },
        telefone: { type: String, required: true },
        cep: { type: String, required: true },
        endereco: { type: String, required: true },
        numero: {type: Number, requerid: true},
        cidade: {type: String, requerid: true},
        estado: {type: String, requerid: true},
        pais: {type: String, requerid: true},
        email: { type: String, required: true },
        banco: { type: String, required: true },
        nivelInvestidor: { type: Number, required: true }
})

module.exports = User


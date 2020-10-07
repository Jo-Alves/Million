const mongoose = require("../../db/connection")

// class Usuario {
//     constructor(nome, cpf, telefone, email, banco) {
//         this.nome = nome;
//         this.cpf = cpf;
//         this.telefone = telefone;
//         this.email = email;
//         this.banco = banco;
//     }
//     salvar = () => {

//     }
// }

// Usuario.Buscar = () => {

// }

// Usuario.excluirID = () => {

// }

const Usuario = mongoose.model("usuarios", {
        nome: { type: String, required: true },
        cpf: { type: String, required: true, unique: true },
        telefone: { type: String, required: true },
        endereco: { type: String, required: true },
        email: { type: String, required: true },
        banco: { type: String, required: true },
        nivelInvestidor: { type: Number, required: true }
})

module.exports = Usuario


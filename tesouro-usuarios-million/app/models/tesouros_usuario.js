const mongoose = require("../../db/connection");

const TesouroUsuario = mongoose.model("tesouro_usuarios", {
    codigoTesouro: { type: String, required: true },
    codigoUsuario: { type: String, required: true },
    valorInvestido: { type: Number, required: true },
    dataInvestimento: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now }
})


TesouroUsuario.prototype.comprar = function () {
    return `Está comprando o Tesouro com o código ${this.codigoTesouro}`;
}

TesouroUsuario.prototype.resgatar = function () {
    return `Está resgatando o Tesouro com o código ${this.codigoTesouro}`;
}

TesouroUsuario.prototype.devolver = function () {
    return `Está recebendo o Tesouro com o código ${this.codigoTesouro}`;
}

module.exports = TesouroUsuario;
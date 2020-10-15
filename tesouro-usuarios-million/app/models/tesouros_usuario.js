const mongoose = require("../../db/connection");

const TesouroUsuario = mongoose.model("tesouro_usuarios", {
    codigoTesouro: { type: String, required: true },
    codigoUsuario: { type: String, required: true },
    valorInvestido: { type: Number, required: true },
    devolucao: { type: Date, required: true }
})

module.exports = TesouroUsuario;
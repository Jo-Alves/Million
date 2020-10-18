const mongoose = require("../../db/connection");

const FundoImobiliario = mongoose.model("fundo_Imobialiario", {
    nome: { type: String, required: true },
    taxaRetorno: { type: Number, required: true },
    indiceInfix: { type: Number, required: true }
})

module.exports = FundoImobiliario;
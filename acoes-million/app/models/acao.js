const mongoose = require("../../db/connection");

const Acao = mongoose.model("acoes", {
    nome: { type: String, required: true, unique: true },
    codigo: { type: String, required: true, unique: true },
    taxa: { type: Number, required: true },
    tipo: {
        type: String,
        uppercase: true,
        enum: ['ON', 'PN'],
        required: true,
        message: 'Investidor deve escolher qual tipo de ação ordinaria/preferencial (ON/PN)'
    }
})

module.exports = Acao
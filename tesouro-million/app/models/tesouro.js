const mongoose = require("../../db/connection");

const schema = mongoose.Schema({
    nome: {type: String, required: true},
    taxa: {type: Number, required: true},
    ir: {type: String, required: true, enum: ["SIM", "NÃO"], uppercase: true},
    fixado: {type: String, required: true, enum: ["Pré", "Pós"]},
    pais: {type: String, required: true},
    cencimenro: {type: String, required: true}
});

const Tesouro = mongoose.model("tesouro", schema)
module.exports = Tesouro;
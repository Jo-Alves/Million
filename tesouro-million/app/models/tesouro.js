const mongoose = require("../../db/connection");

const schema = mongoose.Schema({
    nome: {type: String, required: true},
    taxa: {type: Number, required: true},
    ir: {type: String, required: true, enum: ["SIM", "NÃO"], uppercase: true},
    fixado: {type: String, required: true, enum: ["Pré", "Pós"]},
    pais: {type: String, required: true},
    vencimento: {type: Date, required: true}
});

const Tesouro = mongoose.model("tesouros", schema)
module.exports = Tesouro;
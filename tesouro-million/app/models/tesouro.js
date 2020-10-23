const mongoose = require("../../db/connection");

const schema = mongoose.Schema({
    nome: {type: String, required: true},
    taxa: {type: Number, required: true},
    ir: {type: String, required: true, enum: ["SIM", "NÃO"], uppercase: true},
    fixado: {type: String, required: true, enum: ["PRÉ", "PÓS"]},
    pais: {type: String, required: true},
    vencimento: {type: Date, required: true, timezone: "America/Sao_Paulo"}
});

const Tesouro = mongoose.model("tesouros", schema)
module.exports = Tesouro;
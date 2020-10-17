const mongoose = require("../../db/connection");

const CDB = mongoose.model("cdb", {
    nome: { type: String, required: true },
    valorTaxa: { type: Number, required: true },
    vencimento: { type: Date, required: true }
})

module.exports = CDB;
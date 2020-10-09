const mongoose = require("../../db/connection");

const Product = mongoose.model("produtos", {
    nome: { type: String, requerid: true },
    descricao: { type: String, requerid: true },
    nivelInvestidor: { type: Number, requerid: true }
});

module.exports = Product;
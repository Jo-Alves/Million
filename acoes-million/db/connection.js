const mongoose = require("mongoose");
let hostDB = "mongodb://localhost:27017/acoes-million";
let dependencies = { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };
mongoose.connect(hostDB, dependencies);

module.exports = mongoose
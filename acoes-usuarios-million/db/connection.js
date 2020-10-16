const mongoose = require("mongoose");
let hostBD = "mongodb://localhost:27017/acoes-usuario-million";
let dependencies = { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };
mongoose.connect(hostBD, dependencies);

module.exports = mongoose;
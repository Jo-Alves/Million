const mongoose = require("mongoose");
const hostDB = "mongodb://localhost:27017/fi-million";
const dependencies = { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };
mongoose.connect(hostDB, dependencies);

module.exports = mongoose;
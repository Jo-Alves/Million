const mongoose = require("mongoose");
let stringConnection = "mongodb://localhost:27017/million";
let dependencies = { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };
mongoose.connect(stringConnection, dependencies);

module.exports = mongoose
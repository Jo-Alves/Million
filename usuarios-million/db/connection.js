const mongoose = require("mongoose");
let dependencies = { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };
mongoose.connect("mongodb://localhost:27017/million", dependencies);

module.exports = mongoose
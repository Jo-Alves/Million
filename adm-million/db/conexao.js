const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/million", {useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true})

module.exports = mongoose
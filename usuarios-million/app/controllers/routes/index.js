var express = require('express');
var router = express.Router();
let HomeController = require("../home_controller");
let UsuarioController = require("../user_controller");

router.get('/', HomeController.index);
router.get('/usuarios.json', UsuarioController.find);
router.get("/usuarios/:id.json", UsuarioController.findById)
router.post('/usuarios.json', UsuarioController.inserted);
router.put("/usuarios/:id.json", UsuarioController.alter);
router.delete("/usuarios/:id.json", UsuarioController.delete);

module.exports = router;

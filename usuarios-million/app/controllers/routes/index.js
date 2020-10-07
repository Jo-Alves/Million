var express = require('express');
var router = express.Router();
let HomeController = require("../home_controller");
let UsuarioController = require("../usuario_controller")

router.get('/', HomeController.index);
router.get('/usuarios.json', UsuarioController.find);
router.post('/usuarios.json', UsuarioController.inserted);
router.put("/usuarios/:id.json", UsuarioController.alter)

module.exports = router;

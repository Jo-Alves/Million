var express = require('express');
var router = express.Router();
var homeController = require("../home-controller");
const tesouroUsuarioController = require('../tesouro-usuario-controller');

router.get('/', homeController.index);
router.get('/tesouros-usuario.json', tesouroUsuarioController.find);
router.post('/tesouros-usuario.json', tesouroUsuarioController.inserted);
router.get('/tesouros-usuario/:id.json', tesouroUsuarioController.findById);
router.put('/tesouros-usuario/:id.json', tesouroUsuarioController.update);
router.delete('/tesouros-usuario/:id.json', tesouroUsuarioController.delete);

module.exports = router;
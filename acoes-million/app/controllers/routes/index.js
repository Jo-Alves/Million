var express = require('express');
var router = express.Router();
var homeController = require("../home_Controller")
var acoesController = require("../acoes_Controller")

/* GET home page. */
router.get('/', homeController.index);
router.get('/acoes.json', acoesController.find);
router.post('/acoes.json', acoesController.inserted);
router.get('/acoes/:id.json', acoesController.findById);
router.put('/acoes/:id.json', acoesController.update);
router.delete('/acoes/:id.json', acoesController.delete);

module.exports = router;

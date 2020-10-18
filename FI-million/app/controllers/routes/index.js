var express = require('express');
const FundoImobiliarioController = require('../fundo-imobiliario-controller');
const homeController = require('../home_controller');
var router = express.Router();

/* GET home page. */
router.get('/', homeController.index);
router.get('/fi.json', FundoImobiliarioController.find);
router.post('/fi.json', FundoImobiliarioController.inserted);
router.get('/fi/:id.json', FundoImobiliarioController.findById);
router.put('/fi/:id.json', FundoImobiliarioController.update);
router.delete('/fi/:id.json', FundoImobiliarioController.delete);

module.exports = router;

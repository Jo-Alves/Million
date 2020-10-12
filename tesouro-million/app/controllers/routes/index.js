var express = require('express');
var router = express.Router();
var homeController = require("../home_controller");
var tesouroController = require("../tesouro_controller")

/* GET home page. */
router.get('/', homeController.index);
router.get('/tesouros.json', tesouroController.find);
router.post('/tesouros.json', tesouroController.inserted);
router.get('/tesouros/:id.json', tesouroController.findId);
router.put('/tesouros/:id.json', tesouroController.update);
router.delete('/tesouros/:id.json', tesouroController.delete);

module.exports = router;

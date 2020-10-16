var express = require('express');
const clienteController = require('../cliente-controller');
const homeController = require('../homeController');
var router = express.Router();

/* GET home page. */
router.get('/', homeController.index);
router.get("/clientes.json", clienteController.find);
router.get("/clientes/:id.json", clienteController.findById);
router.post("/clientes.json", clienteController.inserted);
router.put("/clientes/:id.json", clienteController.update);
router.delete("/clientes/:id.json", clienteController.delete);

module.exports = router;

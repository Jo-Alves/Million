var express = require('express');
var router = express.Router();
var productController = require("../product-controller")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '[API] usuários' });
});
router.get("/produtos.json", productController.find)
router.get("/produtos/:id.json", productController.findById)
router.post("/produtos.json", productController.inserted)
router.put("/produtos/:id.json", productController.alter)
router.delete("/produtos/:id.json", productController.delete)

module.exports = router;

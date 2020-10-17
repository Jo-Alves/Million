var express = require('express');
const cbdController = require('../cdb_controller');
const homeController = require('../home_controller');
var router = express.Router();

/* GET home page. */
router.get('/', homeController.index);
router.get('/cdb.json', cbdController.find);
router.post('/cdb.json', cbdController.inserted);
router.put('/cdb/:id.json', cbdController.update);
router.get('/cdb/:id.json', cbdController.findById);
router.delete('/cdb/:id.json', cbdController.delete);

module.exports = router;

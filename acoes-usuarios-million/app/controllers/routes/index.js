var express = require('express');
var router = express.Router();
var homeController = require("../homeController");
var AcoesUsuarioController = require("../acoes_usuario_controller");

router.get("/", homeController.index);
router.get("/acoes-usuario.json", AcoesUsuarioController.find);
router.post("/acoes-usuario.json", AcoesUsuarioController.inserted);
router.post("/acoes-usuario/valor-investido.json", AcoesUsuarioController.valorInvestido);
router.post("/acoes-usuario/comprar.json", AcoesUsuarioController.comprar);
router.post("/acoes-usuario/vender.json", AcoesUsuarioController.vender);
router.put("/acoes-usuario/:id.json", AcoesUsuarioController.update);
router.delete("/acoes-usuario/:id.json", AcoesUsuarioController.delete);

module.exports = router;

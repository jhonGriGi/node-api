// Creamos el router para poder usar los verbos HTTP
const { Router } = require('express');
// Incluimos nuestro controlador de usuario
const articleController = require("../../../controllers/articleController");
const router = Router(); // Llamamos el metodo de router a express

router.get("/", articleController.getAllArticles);

router.get('/:id', articleController.getArticle);

router.post("/", articleController.createArticle);

router.put("/:id", articleController.updateArticle);

router.delete("/:id", articleController.deleteArticle);

module.exports = router;
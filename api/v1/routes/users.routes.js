const { Router } = require("express");
const userController = require("../../../controllers/userController");
// Creamos el router para poder usar los verbos HTTP
const router = Router();

// req -> request -> En request llegan los datos del body
// res -> response -> Se envian los datos hacia al cliente
router.get("/", userController.getAllUsers);

router.post("/", userController.createUser);

router.get("/all", userController.getAllUsers);

router.get("/:id", userController.getUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;

const express = require("express");
// config multer.
const upload = require("../config/upload");
const movieController = require("../controllers/movieController");

const router = express.Router();

router.get("/", movieController.index);

// Rota que recebe as info do filme e o poster, chamando primeiro o multer depois o controller.
router.post("/cadastrar", upload.any(), movieController.store);

// Rota para ver filme que ja assistiu.
router.get("/assitir/:id", movieController.checkWatched);

module.exports = router;

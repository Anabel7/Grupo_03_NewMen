const express = require('express');
const router = express.Router();
const prodController = require('../controllers/prodController');

router.get('/detalles', prodController.detalles);
router.get('/agregarProducto', prodController.agregarProducto);
router.get('/editarProducto', prodController.editarProducto);

module.exports = router;
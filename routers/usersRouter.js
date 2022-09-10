const express = require('express');

const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/login', usersController.login);

router.get('/register', usersController.register);

router.get('/crearEditar', usersController.crearEditar);

module.exports = router;
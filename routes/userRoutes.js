const express = require('express');
const userController = require('../Controller/userController');

const router = express.Router();

router.post('/', userController.createUser);

module.exports = router;

const express = require('express');
const hospitalController = require('./hospitalController');

const router = express.Router();

router.route('/')
.get(hospitalController.getAllHospitals)
.post(hospitalController.createHospital);

router.route('/:id')
.get(hospitalController.getHospital)
.patch(hospitalController.updateHospital);

module.exports = router;

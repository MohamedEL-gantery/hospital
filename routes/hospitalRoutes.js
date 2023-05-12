const express = require('express');
const hospitalController = require('../Controller/hospitalController');

const router = express.Router();

router
  .route('/')
  .get(hospitalController.getAllHospitals)
  .post(hospitalController.createHospital);

router
  .route('/:id')
  .get(hospitalController.getHospital)
  .patch(hospitalController.updateHospital);

router.get('/distances ', hospitalController.getDistance);
module.exports = router;

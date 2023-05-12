const express = require('express');
const hospitalController = require('../Controller/hospitalController');

const router = express.Router();

router
  .route('/add')
  .get(hospitalController.getAllHospitals)
  .post(hospitalController.createHospital);

router
  .route('/:id')
  .get(hospitalController.getHospital)
  .patch(hospitalController.updateHospital);

router.get('/', hospitalController.getDistance);
module.exports = router;

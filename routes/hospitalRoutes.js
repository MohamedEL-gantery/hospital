const express = require('express');
const hospitalController = require('../Controller/hospitalController');
const ratingRouter = require('./ratingRoutes');

const router = express.Router();

router.post('/new', hospitalController.createHospital);

router.get('/all', hospitalController.getAllHospitals);

router
  .route('/:id')
  .get(hospitalController.getHospital)
  .patch(hospitalController.updateHospital);

router.get('/', hospitalController.getDistance);

router.get('/area/near', hospitalController.getArea);

router.use('/:id/rating', ratingRouter);

module.exports = router;

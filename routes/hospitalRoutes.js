const express = require('express');
const hospitalController = require('../Controller/hospitalController');
ratingController = require('./../Controller/ratingController');
ratingRouter = require('./ratingRoutes');

const router = express.Router();

router
  .route('/')
  .get(hospitalController.getAllHospitals)
  .post(hospitalController.createHospital);

router
  .route('/:id')
  .get(hospitalController.getHospital)
  .patch(hospitalController.updateHospital);

router.get('/', hospitalController.getDistance);

//router.route('/:id/rating').post(ratingController.createRating);
router.use('/:id/rating', ratingRouter);
module.exports = router;

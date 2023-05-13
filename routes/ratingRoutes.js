const express = require('express');
const ratingController = require('./../Controller/ratingController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(ratingController.getAllRatings)
  .post(ratingController.createRating);

module.exports = router;

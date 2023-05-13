const Rating = require('./../models/RatingModel');

exports.createRating = async (req, res) => {
  try {
    if (!req.body.hospital) req.body.hospital = req.params.id;
    const newRating = await Rating.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        newRating,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllRatings = async (req, res) => {
  try {
    let filter = {};
    if (req.params.id) filter = { hospital: req.params.id };
    const allRatings = await Rating.find(filter);

    res.status(201).json({
      status: 'success',
      results: allRatings.length,
      data: {
        allRatings,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

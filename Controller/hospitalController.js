const Hospital = require('../models/hospitalModel');

exports.createHospital = async (req, res) => {
  try {
    const newHospital = await Hospital.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        newHospital,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();

    res.status(200).json({
      status: 'success',
      results: hospitals.length,
      data: {
        hospitals,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id).populate('ratings');

    res.status(200).json({
      status: 'success',
      data: {
        hospital,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        hospital,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getDistance = async (req, res) => {
  try {
    let maxDistance = req.query.maxDistance || 5000;
    const data = await Hospital.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [req.query.long, req.query.lat],
          },
          $maxDistance: maxDistance,
        },
      },
    });
    res.status(200).json({
      status: 'success',
      results: data.length,
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getArea = async (req, res) => {
  try {
    const data = await Hospital.find({ area: req.query.area });
    res.status(200).json({
      status: 'success',
      results: data.length,
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

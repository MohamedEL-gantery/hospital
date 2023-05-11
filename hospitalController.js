const Hospital = require('./hospitalModel');

exports.getAllHospitals = async (req, res) => {
    try {
        const hospitals = await Hospital.find();

        res.status(200).json({
            status: 'success',
            results: hospitals.length,
            data: {
                hospitals
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.getHospital = async (req, res) => {
    try {
        const hospital = await Hospital.findById(req.params.id);
  
    res.status(200).json({
      status: 'success',
      data: {
        hospital,
      },
    });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
  };

  exports.updateHospital = async (req, res) => {
    try {
        const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            status: 'success',
            data: {
              hospital,
            },
    });
  } catch (err) {
    res.status(404).json({
        status: 'fail',
        message: err
    });
  };
};

exports.createHospital = async (req, res) => {
    try {
        const newHospital = await Hospital.create(req.body);
  
    res.status(201).json({
      status: 'success',
      data: {
        hospital: newHospital,
      },
    });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
  };
const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const newuser = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        newuser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();

    res.status(200).json({
      status: 'success',
      results: allUsers.length,
      data: {
        allUsers,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

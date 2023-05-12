const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Must enter name'],
    },
    description: String,
    level: {
      type: String,
      enum: ['good', 'mid', 'super'],
      required: [true, 'Must enter level'],
    },
    doctors_num: {
      type: Number,
      required: [true, 'Enter number of doctors'],
    },
    departments_num: {
      type: Number,
      required: [true, 'Enter number of departments'],
    },
    priceRange: {
      type: String,
      required: [true, 'Enter price range'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Must enter phone number'],
    },
    area: {
      type: String,
      required: [true, 'Must enter area'],
    },
    location: {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: [Number],
      address: String,
    },
    ratingsAverage: {
      type: Number,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: (val) => Math.round(val * 10) / 10, // 4.666666, 46.6666, 47, 4.7
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

hospitalSchema.index({ location: '2dsphere' });

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
//31.24487806738279, 32.319790440978295
//32.32051574618782,31.254651993476667
//31.2516198245799, 32.3194016488574
//31.25675030169158, 32.28303562403906
//31.263818693371427, 32.25877127004152
//31.263886020832288, 32.30497903962288
//31.270208183782778, 32.29414657130819
//31.269948509668303, 32.2925060062907
//////
//31.250047416350814, 32.31690250911857 me

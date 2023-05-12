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

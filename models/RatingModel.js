const mongoose = require('mongoose');
const Hospital = require('./hospitalModel');

const ratingSchema = mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    feedback: {
      type: String,
      required: [true, 'Feedback can not be empty'],
    },
    hospital: {
      type: mongoose.Schema.ObjectId,
      ref: 'Hospital',
      required: [true, 'Rating must belongs to hospital'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Rating must belongs to user'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ratingSchema.pre(/^find/, function (next) {
  this.populate({
    //this=>query
    path: 'user',
    select: 'name',
  });
  next();
});

ratingSchema.statics.calcAverageRating = async function (hospitalId) {
  const stats = await this.aggregate([
    //this=>model
    {
      $match: { hospital: hospitalId },
    },
    {
      $group: {
        _id: '$hospital',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);
  console.log(stats);
  if (stats.length > 0) {
    await Hospital.findByIdAndUpdate(hospitalId, {
      ratingsQuantity: stats[0].nRating,
      ratingsAverage: stats[0].avgRating,
    });
  } else {
    await Hospital.findByIdAndUpdate(hospitalId, {
      ratingsQuantity: 0,
      ratingsAverage: 0,
    });
  }
};
ratingSchema.post('save', function () {
  this.constructor.calcAverageRating(this.hospital);
});

//findbyIdAndUpdate
//findbyIdAndDelete
// ratingSchema.pre(/^findOneAnd/, async function (next) {
//   this.r = await this.findOne(); //pre not post because when use post we cannot access query
//   console.log(this.r);
// });

// ratingSchema.post(/^findOneAnd/, async function (next) {
//   await this.r.constructor.calcAverageRating(this.r.hospital);
// });
const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;

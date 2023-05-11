const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must enter name']
    },
    description: [String],
    address: {
        type: String,
        required: [true, 'Must enter address']
    },
    level: {
        type: String,
        enum: ['good','mid','super'],
        required: [true, 'Must enter level']
    },
    doctors_num: {
        type: Number,
        required: [true, 'Enter number of doctors']
    },
    location: {
        type: String,
        required: [true, 'Enter location']
    },
    departments_num: {
        type: Number,
        required: [true, 'Enter number of departments']
    },
    area: {
        type: String,
        required: [true, 'Must enter area']
    },
    priceRange: {
        type: String,
        required: [true, 'Enter price range']
    },
    openingHours: {
        type: String,
        required: [true, 'Enter opening hours']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Must enter phone number']
    }
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
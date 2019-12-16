const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add a title for the review'],
    maxlength: 100
  },
  text: {
    type: String,
    required: [true, 'Please add some text']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: [true, 'Please add a rating between 1-10']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  bootcamp: {
    type: ObjectId,
    ref: 'Bootcamp',
    required: true
  },
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  }
});


module.exports = mongoose.model('Review', ReviewSchema);

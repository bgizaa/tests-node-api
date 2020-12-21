const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    questionone: {
      type: String
    },
    questiontwo: {
      type: String

    },
    questionthree: {
      type: String

    },

  },

  {
    timestamps: true,
  }

);

const test = mongoose.model('test', testSchema);

module.exports = test;
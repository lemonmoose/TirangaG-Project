const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  category: {
    type: String,
    enum: ['residential', 'commercial', 'industrial'],
    default: 'residential'
  },
  images: [String],
  thumbnail: String,
  location: String,
  systemCapacity: {
    type: Number,
    description: 'Capacity in kW'
  },
  annualSavings: {
    type: Number,
    description: 'Annual savings in currency'
  },
  co2Reduction: {
    type: Number,
    description: 'CO2 reduction in tons per year'
  },
  installationDate: Date,
  testimonial: mongoose.Schema.Types.ObjectId,
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', projectSchema);

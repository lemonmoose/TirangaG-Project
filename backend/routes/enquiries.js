const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');
const { protect } = require('../middleware/auth');
const { 
  validateEnquiry, 
  validateEnquiryUpdate, 
  validateMongoId,
  validatePagination 
} = require('../middleware/validators');

// Create enquiry (public) - with validation
router.post('/', validateEnquiry, async (req, res) => {
  try {
    const { name, email, phone, subject, message, type, source } = req.body;

    const enquiry = new Enquiry({
      name,
      email,
      phone,
      subject,
      message,
      type,
      source
    });

    await enquiry.save();

    // TODO: Send email notification to admin
    // TODO: Send WhatsApp notification

    res.status(201).json({
      message: 'Thank you! We will contact you soon.',
      enquiry
    });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    res.status(500).json({ 
      message: 'Failed to submit enquiry. Please try again later.' 
    });
  }
});

// Get all enquiries (admin only) - with pagination validation
router.get('/', protect, validatePagination, async (req, res) => {
  try {
    const { status, type, page = 1, limit = 20 } = req.query;
    let query = {};

    if (status) query.status = status;
    if (type) query.type = type;

    const enquiries = await Enquiry.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Enquiry.countDocuments(query);

    res.json({
      enquiries,
      total,
      pages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    res.status(500).json({ 
      message: 'Failed to fetch enquiries. Please try again later.' 
    });
  }
});

// Get single enquiry - with ID validation
router.get('/:id', protect, validateMongoId, async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }
    res.json(enquiry);
  } catch (error) {
    console.error('Error fetching enquiry:', error);
    res.status(500).json({ 
      message: 'Failed to fetch enquiry. Please try again later.' 
    });
  }
});

// Update enquiry status and notes - with validation
router.put('/:id', protect, validateEnquiryUpdate, async (req, res) => {
  try {
    const { status, notes } = req.body;
    const update = {};

    if (status) update.status = status;
    if (notes !== undefined) update.notes = notes;
    update.updatedAt = Date.now();

    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }

    res.json({ message: 'Enquiry updated successfully', enquiry });
  } catch (error) {
    console.error('Error updating enquiry:', error);
    res.status(500).json({ 
      message: 'Failed to update enquiry. Please try again later.' 
    });
  }
});

module.exports = router;

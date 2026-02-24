const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contacts
// @desc    Create a new contact inquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const contact = new Contact({
      name,
      email,
      phone,
      message
    });

    await contact.save();
    
    res.status(201).json({
      success: true,
      message: 'Thank you! We will get back to you soon.',
      data: contact
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting contact form. Please try again.'
    });
  }
});

// @route   GET /api/contacts
// @desc    Get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts'
    });
  }
});

module.exports = router;

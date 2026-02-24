const express = require('express');
const router = express.Router();
const LoanInquiry = require('../models/LoanInquiry');

// @route   POST /api/loan-inquiries
// @desc    Create a new loan inquiry
router.post('/', async (req, res) => {
  try {
    console.log('Received loan inquiry:', req.body);
    
    const { name, email, phone, loanType, loanAmount, employmentType, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !loanType || !loanAmount) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    const loanInquiry = new LoanInquiry({
      name,
      email,
      phone,
      loanType,
      loanAmount,
      employmentType,
      message
    });

    await loanInquiry.save();
    console.log('Loan inquiry saved:', loanInquiry);
    
    res.status(201).json({
      success: true,
      message: 'Loan inquiry submitted successfully! Our team will contact you soon.',
      data: loanInquiry
    });
  } catch (error) {
    console.error('Error saving loan inquiry:', error.message);
    console.error('Error details:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting loan inquiry. Please try again.',
      error: error.message
    });
  }
});

// @route   GET /api/loan-inquiries
// @desc    Get all loan inquiries
router.get('/', async (req, res) => {
  try {
    const inquiries = await LoanInquiry.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (error) {
    console.error('Error fetching loan inquiries:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching loan inquiries'
    });
  }
});

module.exports = router;

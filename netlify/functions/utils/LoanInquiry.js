const mongoose = require('mongoose');

const LoanInquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  loanType: {
    type: String,
    required: true,
    enum: [
      'Home Loan',
      'Loan Against Property',
      'Business Loan',
      'Personal Loan',
      'Vehicle Loan',
      'Used Car Loan',
      'Education Loan',
      'Working Capital Finance',
      'Loan Against Shares'
    ]
  },
  loanAmount: {
    type: Number,
    required: true
  },
  employmentType: {
    type: String,
    enum: ['Salaried', 'Self-Employed', 'Business Owner']
  },
  message: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'approved', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.LoanInquiry || mongoose.model('LoanInquiry', LoanInquirySchema);

const connectDB = require('./utils/db');
const LoanInquiry = require('./utils/LoanInquiry');

exports.handler = async (event, context) => {
  // Allow CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    await connectDB();

    if (event.httpMethod === 'POST') {
      const { name, email, phone, loanType, loanAmount, employmentType, message } = JSON.parse(event.body);

      // Validate required fields
      if (!name || !email || !phone || !loanType || !loanAmount) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            message: 'Please fill in all required fields'
          })
        };
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

      return {
        statusCode: 201,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Loan inquiry submitted successfully! Our team will contact you soon.',
          data: loanInquiry
        })
      };
    }

    if (event.httpMethod === 'GET') {
      const loanInquiries = await LoanInquiry.find().sort({ createdAt: -1 });
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          count: loanInquiries.length,
          data: loanInquiries
        })
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Error processing loan inquiry',
        error: error.message
      })
    };
  }
};

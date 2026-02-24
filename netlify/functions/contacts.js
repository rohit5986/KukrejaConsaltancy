const connectDB = require('./utils/db');
const Contact = require('./utils/Contact');

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
      const { name, email, phone, message } = JSON.parse(event.body);

      const contact = new Contact({
        name,
        email,
        phone,
        message
      });

      await contact.save();

      return {
        statusCode: 201,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Thank you! We will get back to you soon.',
          data: contact
        })
      };
    }

    if (event.httpMethod === 'GET') {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          count: contacts.length,
          data: contacts
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
        message: 'Error processing request',
        error: error.message
      })
    };
  }
};

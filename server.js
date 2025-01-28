import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const app = express();

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('ERROR: Missing email credentials in .env file!');
  process.exit(1);
}

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify email configuration
transporter.verify((error) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Server ready to send emails');
  }
});

// Middleware
app.use(cors({
  origin: 'http://localhost:5181',
  methods: ['POST', 'OPTIONS']
}));

app.use(bodyParser.json());

// Request logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Form submission endpoint
app.post('/submit-form', async (req, res) => {
  console.log('Received data:', req.body);
  
  try {
    const { firstName, lastName, email, service, message } = req.body;

    // Validation
    const missingFields = [];
    if (!firstName) missingFields.push('firstName');
    if (!lastName) missingFields.push('lastName');
    if (!email) missingFields.push('email');
    if (!service) missingFields.push('service');
    if (!message) missingFields.push('message');

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: 'Missing required fields',
        missingFields
      });
    }

    // Prepare emails
    const adminEmail = {
      from: `Service Request <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Service Request: ${service}`,
      html: `
        <h3>New Service Request</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <pre>${message}</pre>
        <p>Received at: ${new Date().toLocaleString()}</p>
      `
    };

    const userEmail = {
      from: `Service Team <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'We Received Your Request',
      html: `
        <h3>Hi ${firstName},</h3>
        <p>Thank you for contacting us! We've received your ${service} request.</p>
        <p><strong>Your Message:</strong></p>
        <pre>${message}</pre>
        <p>Our team will respond within 24 business hours.</p>
        <p>Best regards,<br/>Service Team</p>
      `
    };

    // Send emails
    await transporter.sendMail(adminEmail);
    await transporter.sendMail(userEmail);

    res.status(200).json({
      success: true,
      message: 'Request submitted successfully'
    });

  } catch (error) {
    console.error('Server Error:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    
    res.status(500).json({
      error: 'Failed to process request',
      details: error.response?.message || error.message
    });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email configured for: ${process.env.EMAIL_USER}`);
});
// Load environment variables from .env file
require("dotenv").config();

// Import express framework
const express = require("express");

// Import CORS middleware
const cors = require("cors");

// Create express application
const app = express();

/* =========================
   MIDDLEWARE SECTION
   ========================= */

// Allow requests from frontend (React)
app.use(cors());

// Allow server to read JSON data from requests
app.use(express.json());

/* =========================
   ROUTES SECTION
   ========================= */

// Test route (health check)
app.get("/", (req, res) => {
  res.send("Backend with middleware running ✅");
});

/* =========================
   SERVER START
   ========================= */

const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// =========================
// CONTACT FORM API (WITH EMAIL)
// =========================

app.post("/api/contact", async (req, res) => {
  try {
    // Extract data from request body
    const { name, email, message } = req.body;

    // 1️⃣ Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 2️⃣ Create email transporter
    // This handles authentication with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    // 3️⃣ Define email content
    const mailOptions = {
      from: email, // sender (visitor)
      to: process.env.EMAIL_USER, // receiver (you)
      subject: `Portfolio Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    // 4️⃣ Send email
    await transporter.sendMail(mailOptions);

    // 5️⃣ Success response
    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email send error:", error);

    // Error response
    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

const nodemailer = require("nodemailer");

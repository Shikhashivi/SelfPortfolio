const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const twilio = require("twilio");
require("dotenv").config();

// Twilio Configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;  // Twilio WhatsApp Number
const AdminPhone = process.env.ADMIN_PHONE_NUMBER;   // Your WhatsApp Number
const client = new twilio(accountSid, authToken);

router.post("/", async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;

        // Save to Database
        const newContact = new Contact({ firstName, lastName, email, phone, message });
        await newContact.save();

        // Send WhatsApp message via Twilio
        await client.messages.create({
            from: twilioPhone, // Twilio's WhatsApp Sandbox Number
            to: AdminPhone, // Replace with Admin's verified WhatsApp number
            body: `New Contact:\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
        });

        res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, error: "Server Error" });
    }
});

module.exports = router;

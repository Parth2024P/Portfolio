import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "860df2ca043568",
    pass: "461bb40f6a6815"
  }
});

// Verify transporter on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email transporter error:", error.message);
  } else {
    console.log("✅ Email transporter configured successfully!");
  }
});

export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Email to you (notification)
    console.log("📧 Sending notification email...");

    await transporter.sendMail({
      from: "noreply@portfolio.com",
      to: "parthpareek177@gmail.com", // Your email
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("✅ Notification email sent!");

    // Confirmation email to user
    await transporter.sendMail({
      from: "noreply@portfolio.com",
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>I received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Email error:", error.message);
    console.error("Error code:", error.code);
    console.error("Error response:", error.response);
    res.status(500).json({ error: `Failed to send email: ${error.message}` });
  }
};

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields are required: name, email, message',
    });
  }

  // Log message (works without any external services)
  console.log('📩 Contact form:', { name, email, message: message.substring(0, 100) });

  // In production, add Nodemailer or a service like Resend/SendGrid here
  return res.status(200).json({
    success: true,
    message: "Message received! I'll get back to you soon.",
  });
}

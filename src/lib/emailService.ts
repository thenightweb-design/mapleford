import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default transporter;

interface InquiryData {
  parentName: string;
  contactNumber: string;
  email: string;
  childName: string;
  childDob: string;
  gradeApplying: string;
  message?: string;
}

export async function sendConfirmationEmail(inquiryData: InquiryData) {
  const { parentName, email, childName, gradeApplying } = inquiryData;

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Admission Enquiry Confirmation</title>
      <style>
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #d0302b, #8d211d);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .header h1 {
          margin: 0;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 28px;
        }
        .content {
          background: #ffffff;
          padding: 30px;
          border: 1px solid #e0e0e0;
          border-top: none;
        }
        .details {
          background: #f8f8f8;
          padding: 20px;
          border-left: 4px solid #d0302b;
          margin: 20px 0;
        }
        .details h3 {
          color: #d0302b;
          margin-top: 0;
        }
        .footer {
          background: #f5f5f5;
          padding: 20px;
          text-align: center;
          border-radius: 0 0 8px 8px;
          font-size: 14px;
          color: #666;
        }
        .button {
          display: inline-block;
          background: linear-gradient(135deg, #d0302b, #8d211d);
          color: white;
          padding: 12px 30px;
          text-decoration: none;
          border-radius: 6px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🍁 Maple Ford International School</h1>
        <p style="margin: 10px 0 0 0; font-size: 16px;">Knowledge | Integrity | Excellence</p>
      </div>
      
      <div class="content">
        <h2>Thank You for Your Interest!</h2>
        <p>Dear ${parentName},</p>
        
        <p>Thank you for submitting an admission enquiry for <strong>${childName}</strong> at Maple Ford International School. We have successfully received your application and our admissions team will review it shortly.</p>
        
        <div class="details">
          <h3>Enquiry Details:</h3>
          <p><strong>Child's Name:</strong> ${childName}</p>
          <p><strong>Grade Applying For:</strong> ${gradeApplying}</p>
          <p><strong>Parent/Guardian:</strong> ${parentName}</p>
        </div>
        
        <h3>What's Next?</h3>
        <ul>
          <li>Our admissions team will contact you within 2-3 business days</li>
          <li>We will schedule a campus tour and interaction session</li>
          <li>You'll receive information about the admission process and fee structure</li>
        </ul>
        
        <p>In the meantime, feel free to explore our website to learn more about our programs, curriculum, and facilities.</p>
        
        <center>
          <a href="https://wa.me/919346648486" class="button">Chat with Us on WhatsApp</a>
        </center>
        
        <p style="margin-top: 30px; font-size: 14px; color: #666;">
          If you have any immediate questions, please don't hesitate to contact us at:
          <br><strong>Phone:</strong> +91 93466 48486
          <br><strong>Email:</strong> admissions@maplefordinternational.com
        </p>
      </div>
      
      <div class="footer">
        <p><strong>Maple Ford International School</strong></p>
        <p>Hayathnagar, Hyderabad</p>
        <p style="font-size: 12px; margin-top: 15px;">
          This is an automated confirmation email. Please do not reply directly to this email.
        </p>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: `"Maple Ford International School" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `Admission Enquiry Confirmation - ${childName}`,
    html: emailHtml,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send confirmation email');
  }
}

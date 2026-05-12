import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface InquiryData {
  parentName: string;
  contactNumber: string;
  email: string;
  childName: string;
  childDob: string;
  gradeApplying: string;
  message?: string;
  source?: string;
}

const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev";
const ADMIN_EMAIL = "info@maplefordinternational.com";

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
        body { font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #d0302b, #8d211d); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
        .details { background: #f8f8f8; padding: 20px; border-left: 4px solid #d0302b; margin: 20px 0; }
        .details h3 { color: #d0302b; margin-top: 0; }
        .footer { background: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; color: #666; }
        .button { display: inline-block; background: #d0302b; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
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
        <center>
          <a href="https://wa.me/919346648486" class="button">Chat with Us on WhatsApp</a>
        </center>
        <p style="margin-top: 30px; font-size: 14px; color: #666;">
          If you have any immediate questions, please contact us at: admissions@maplefordinternational.com
        </p>
      </div>
      <div class="footer">
        <p><strong>Maple Ford International School</strong></p>
        <p>Hayathnagar, Hyderabad</p>
      </div>
    </body>
    </html>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: `Maple Ford International School <${FROM_EMAIL}>`,
      to: [email],
      subject: `Admission Enquiry Confirmation - ${childName}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend Error (Confirmation):', error);
      throw error;
    }
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    throw new Error('Failed to send confirmation email');
  }
}

export async function sendAdminNotificationEmail(inquiryData: InquiryData) {
  const { parentName, email, contactNumber, childName, childDob, gradeApplying, message, source } = inquiryData;

  const emailHtml = `
    <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      <div style="background: #d0302b; color: white; padding: 15px; border-radius: 8px 8px 0 0; text-align: center;">
        <h2>New Form Submission</h2>
        <p>Source: ${source || 'Website'}</p>
      </div>
      <div style="padding: 20px;">
        <p><strong>Parent Name:</strong> ${parentName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contactNumber}</p>
        <p><strong>Child's Name:</strong> ${childName}</p>
        ${childDob ? `<p><strong>DOB:</strong> ${new Date(childDob).toLocaleDateString()}</p>` : ''}
        <p><strong>Grade/Subject:</strong> ${gradeApplying}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      </div>
    </div>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: `Maple Ford Website <${FROM_EMAIL}>`,
      to: [ADMIN_EMAIL],
      reply_to: email,
      subject: `New Inquiry: ${parentName} - ${gradeApplying}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend Error (Admin Notification):', error);
      throw error;
    }
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send admin notification:', error);
    throw new Error('Failed to send admin notification');
  }
}

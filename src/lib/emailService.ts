
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

const ADMIN_EMAIL = "info@maplefordinternational.com";

// Email service temporarily disabled for build stability
export async function sendConfirmationEmail(inquiryData: InquiryData) {
  console.log('Email Service [DISABLED]: Confirmation would be sent to', inquiryData.email);
  return { success: true, message: 'Email service temporarily disabled' };
}

export async function sendAdminNotificationEmail(inquiryData: InquiryData) {
  console.log('Email Service [DISABLED]: Admin notification for', inquiryData.parentName);
  return { success: true, message: 'Email service temporarily disabled' };
}

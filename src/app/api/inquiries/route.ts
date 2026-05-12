import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';
import { verifyToken } from '@/lib/auth';
import { sendConfirmationEmail, sendAdminNotificationEmail } from '@/lib/emailService';

// POST - Submit inquiry
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const inquiry = new Inquiry(body);
    await inquiry.save();

    // Send emails (don't block the response if email fails)
    // Using Promise.allSettled to attempt both independently
    Promise.allSettled([
      sendConfirmationEmail(body)
        .then(() => console.log('Confirmation email sent to user')),
      sendAdminNotificationEmail(body)
        .then(() => console.log('Notification email sent to admin'))
    ]).then((results) => {
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          console.error(`Email ${index === 0 ? 'Confirmation' : 'Notification'} failed:`, result.reason);
        }
      });
    });

    return NextResponse.json({ message: 'Inquiry submitted successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET - Get all inquiries (admin only)
export async function GET(request: NextRequest) {
  try {
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    return NextResponse.json(inquiries);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
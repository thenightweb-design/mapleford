import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import SEO from '@/models/SEO';
import { verifyToken } from '@/lib/auth';

// GET all SEO configs
export async function GET(request: NextRequest) {
  try {
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const seoData = await SEO.find().sort({ pagePath: 1 });
    return NextResponse.json(seoData);
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST/PUT - Save SEO config
export async function POST(request: NextRequest) {
  try {
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const body = await request.json();
    const { pagePath, title, description, keywords, ogImage } = body;

    const seo = await SEO.findOneAndUpdate(
      { pagePath },
      { title, description, keywords, ogImage, updatedAt: new Date() },
      { upsert: true, new: true }
    );

    return NextResponse.json(seo);
  } catch (error) {
    console.error('Error saving SEO data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

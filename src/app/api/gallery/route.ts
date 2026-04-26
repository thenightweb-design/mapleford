import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Gallery from '@/models/Gallery';
import { verifyToken } from '@/lib/auth';

import cloudinary from '@/lib/cloudinary';

export const dynamic = 'force-dynamic';

// GET - Get all gallery images (public)
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const galleryItems = await Gallery.find({}).sort({ createdAt: -1 });
    return NextResponse.json(galleryItems);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Add new gallery item (admin only)
export async function POST(request: NextRequest) {
  try {
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const body = await request.json();

    // If imageUrl is base64, upload to Cloudinary
    if (body.imageUrl && body.imageUrl.startsWith('data:image')) {
      const uploadResponse = await cloudinary.uploader.upload(body.imageUrl, {
        folder: 'mapleford/gallery',
      });
      body.imageUrl = uploadResponse.secure_url;
    }

    const galleryItem = new Gallery(body);
    await galleryItem.save();
    return NextResponse.json(galleryItem, { status: 201 });
  } catch (error: any) {
    console.error('Error creating gallery item:', error);
    return NextResponse.json({ 
      error: error.message || 'Internal server error',
      details: error.http_code ? `Cloudinary Error ${error.http_code}` : undefined
    }, { status: 500 });
  }
}


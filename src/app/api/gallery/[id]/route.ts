import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Gallery from '@/models/Gallery';
import { verifyToken } from '@/lib/auth';
import cloudinary from '@/lib/cloudinary';


type Props = {
  params: Promise<{ id: string }>
}

// DELETE - Remove a gallery item (admin only)
export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { id } = await params;
    const deletedItem = await Gallery.findByIdAndDelete(id);

    if (!deletedItem) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Update a gallery item (admin only)
export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { id } = await params;
    const body = await request.json();

    // If imageUrl is base64, upload to Cloudinary
    if (body.imageUrl && body.imageUrl.startsWith('data:image')) {
      const uploadResponse = await cloudinary.uploader.upload(body.imageUrl, {
        folder: 'mapleford/gallery',
      });
      body.imageUrl = uploadResponse.secure_url;
    }

    const updatedItem = await Gallery.findByIdAndUpdate(id, body, { new: true });

    if (!updatedItem) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error('Error updating gallery item:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


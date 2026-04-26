import mongoose from 'mongoose';

const GallerySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image URL or base64 data'],
  },
  category: {
    type: String,
    default: 'General',
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema);

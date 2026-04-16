import mongoose from 'mongoose';

const SEOSchema = new mongoose.Schema({
  pagePath: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keywords: {
    type: String,
  },
  ogImage: {
    type: String,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.SEO || mongoose.model('SEO', SEOSchema);

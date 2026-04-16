import mongoose from 'mongoose';

const InquirySchema = new mongoose.Schema({
  parentName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  childName: { type: String, required: true },
  childDob: { type: Date },

  gradeApplying: { type: String, required: true },
  message: { type: String },
  source: { type: String, default: 'Website' },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Inquiry || mongoose.model('Inquiry', InquirySchema);
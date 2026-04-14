import connectDB from './mongodb';
import SEO from '@/models/SEO';
import { Metadata } from 'next';

export async function getPageMetadata(path: string): Promise<Metadata> {
  try {
    await connectDB();
    const seoData = await SEO.findOne({ pagePath: path });

    if (seoData) {
      return {
        title: seoData.title,
        description: seoData.description,
        keywords: seoData.keywords,
        openGraph: seoData.ogImage ? {
          images: [{ url: seoData.ogImage }],
        } : undefined,
      };
    }
  } catch (error) {
    console.error(`Error fetching SEO data for ${path}:`, error);
  }

  // Fallback metadata if not found in DB
  return {
    title: 'Mapleford International School | Hyderabad',
    description: 'Mapleford International School offers world-class education with CBSE and Canadian curriculum in Hyderabad.',
  };
}

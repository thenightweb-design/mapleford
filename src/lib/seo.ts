import connectDB from './mongodb';
import SEO from '@/models/SEO';
import { Metadata } from 'next';

interface ISEOData {
  pagePath: string;
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export async function getPageMetadata(path: string, fallback?: Partial<Metadata>): Promise<Metadata> {
  try {
    await connectDB();
    const seoData = (await SEO.findOne({ pagePath: path }).lean()) as ISEOData | null;

    if (seoData && (seoData.title || seoData.description)) {
      return {
        title: {
          absolute: seoData.title || (fallback?.title as string | undefined) || 'Mapleford International School | Hyderabad',
        },
        description: seoData.description || fallback?.description,
        keywords: seoData.keywords ? seoData.keywords.split(',').map((k: string) => k.trim()).filter(Boolean) : fallback?.keywords,
        openGraph: {
          title: seoData.title || (fallback?.openGraph?.title as string | undefined),
          description: seoData.description || (fallback?.openGraph?.description as string | undefined),
          images: seoData.ogImage
            ? [{ url: seoData.ogImage }]
            : (fallback?.openGraph?.images as any),
        },
      };
    }
  } catch (error) {
    console.error(`Error fetching SEO data for ${path}:`, error);
  }

  // Fallback metadata if not found in DB
  return {
    title: fallback?.title || 'Mapleford International School | Hyderabad',
    description:
      fallback?.description ||
      'Mapleford International School offers world-class education with CBSE and Canadian curriculum in Hyderabad.',
    keywords: fallback?.keywords,
    openGraph: fallback?.openGraph,
  };
}

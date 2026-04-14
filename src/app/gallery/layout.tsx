import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/gallery');
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

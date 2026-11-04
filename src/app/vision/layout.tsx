export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';

const fallbackMetadata: Metadata = {
  title: 'Our Vision & Values | Building Leaders of Tomorrow',
  description: 'Learn about the core values, vision, and pedagogical pillars of Mapleford International School. We aim to nurture leaders through integrity and excellence.',
  keywords: ['school vision', 'core values', 'educational philosophy', 'building student character'],
};

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/vision', fallbackMetadata);
}

export default function VisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

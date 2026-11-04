export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';

const fallbackMetadata: Metadata = {
  title: 'Life at Mapleford | Student Zone & Houses',
  description: 'Explore life beyond the classroom at Mapleford International School. Join the Terra, Blaze, Aero, or Astra houses and enjoy arts, sports, and science clubs.',
  keywords: ['student activities', 'school house system', 'arts and culture school', 'sports excellence in school', 'Science clubs'],
};

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/student-zone', fallbackMetadata);
}

export default function StudentZoneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

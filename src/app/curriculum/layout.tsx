import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/curriculum');
}

export default function CurriculumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

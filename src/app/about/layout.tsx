import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/about');
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

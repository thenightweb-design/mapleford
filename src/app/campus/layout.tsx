import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/campus');
}

export default function CampusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

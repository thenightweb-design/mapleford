import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/blogs');
}

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

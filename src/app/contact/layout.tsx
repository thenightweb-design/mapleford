import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/contact');
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/admissions');
}

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

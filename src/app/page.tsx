export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';
import HomeClient from './HomeClient';

const fallbackMetadata: Metadata = {
  title: 'Mapleford International School | CBSE & Canadian Curriculum | Hyderabad',
  description:
    'Mapleford International School in Hayathnagar, Hyderabad offers a world-class CBSE curriculum enriched by Canadian pedagogy through Maple Bear Global Schools. Admissions open for Nursery to Grade 10.',
  keywords: [
    'Mapleford International School',
    'CBSE school Hyderabad',
    'Maple Bear Global Schools',
    'international school Hayathnagar',
    'Canadian curriculum India',
    'best school Hyderabad',
    'CBSE school Telangana',
    'top school Hayathnagar',
  ],
  openGraph: {
    title: 'Mapleford International School | CBSE & Canadian Curriculum | Hyderabad',
    description:
      'A premier CBSE school in Hayathnagar, Hyderabad, blending Indian academic excellence with Canadian pedagogy. Admissions open for Nursery to Grade 10.',
    images: [{ url: '/SHEI.png' }],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/', fallbackMetadata);
}

export default function Page() {
  return <HomeClient />;
}


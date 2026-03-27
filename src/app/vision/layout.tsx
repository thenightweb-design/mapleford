import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Vision & Values | Building Leaders of Tomorrow',
  description: 'Learn about the core values, vision, and pedagogical pillars of Mapleford International School. We aim to nurture leaders through integrity and excellence.',
  keywords: ['school vision', 'core values', 'educational philosophy', 'building student character'],
};

export default function VisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

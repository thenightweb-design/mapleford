import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CBSE & Canadian Curriculum | Maple Bear Pedagogy',
  description: 'Experience a unique blend of CBSE academic excellence and Canadian pedagogy at Mapleford International School. We focus on critical thinking and real-world application.',
  keywords: ['CBSE curriculum', 'Canadian pedagogy', 'Maple Bear Global Schools', 'experiential learning', 'top curriculum Hyderabad'],
};

export default function CurriculumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

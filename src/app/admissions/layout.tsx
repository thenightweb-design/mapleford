import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admissions Open 2026-27 | Start Your Journey Today',
  description: 'Join Mapleford International School, the premier CBSE school in Hayathnagar. Admissions open for Nursery to Grade 10. Start your child\'s global future today.',
  keywords: ['school admissions Hyderabad', 'enrollment open 2026-27', 'private school admissions', 'top CBSE school in Hayathnagar'],
};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

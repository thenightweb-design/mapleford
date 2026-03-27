import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Our Story, Mission & Excellence',
  description: 'Learn about the history, mission, and leadership of Mapleford International School. We combine CBSE excellence with Canadian pedagogy to nurture global citizens.',
  keywords: ['school history', 'educational mission', 'Mapleford leadership', 'top school Hyderabad'],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

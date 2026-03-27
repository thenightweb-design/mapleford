import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Reach Our Admissions Office',
  description: 'Have questions? Contact Mapleford International School in Hayathnagar, Hyderabad. Get directions, email us, or call our admissions team.',
  keywords: ['contact Mapleford', 'school phone number', 'school location Hyderabad', 'admission inquiry'],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

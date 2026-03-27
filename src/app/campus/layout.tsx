import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Campus Facilities | Best Infrastructure in Hyderabad',
  description: 'Explore our state-of-the-art campus in Hayathnagar, Hyderabad. Modern classrooms, secure buses, science labs, and sports arenas for holistic development.',
  keywords: ['school facilities Hyderabad', 'modern classrooms', 'school laboratories', 'safe school transport', 'campus tour'],
};

export default function CampusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best CBSE School in Hyderabad | Admissions Open 2026-27',
    description: 'Looking for the best CBSE school in Hayathnagar, Hyderabad? Mapleford International School offers world-class CBSE curriculum with Canadian pedagogy. Admissions open for 2026-27.',
    keywords: [
        'best cbse school Hyderabad',
        'top cbse school Hayathnagar',
        'international school admissions Hyderabad',
        'cbse school near me',
        'Mapleford International School admissions',
    ],
    openGraph: {
        title: 'Best CBSE School in Hyderabad | Mapleford International School',
        description: 'Admissions open for 2026-27 at Hayathnagar\'s premier CBSE school.',
        images: ['/images/Image19.png'],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

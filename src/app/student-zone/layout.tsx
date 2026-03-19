import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Zone | House Arena, Clubs & Life at Mapleford",
  description:
    "Explore life at Mapleford International School beyond the classroom — the House Arena (Terra, Blaze, Aero, Astra), arts, sports, clubs, leadership programs, and vibrant school events.",
  openGraph: {
    title: "Student Zone | Life at Mapleford International School",
    description:
      "Houses, clubs, events, and a vibrant student culture. Discover everything the Student Zone has to offer at Mapleford International School, Hyderabad.",
  },
};

export default function StudentZoneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

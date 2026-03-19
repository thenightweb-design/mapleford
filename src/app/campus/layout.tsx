import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus | State-of-the-Art Facilities",
  description:
    "Explore Mapleford International School's 4-acre campus in Hayathnagar, Hyderabad — featuring smart classrooms, science labs, computer labs, a library, resource rooms, and 10 sports arenas.",
  openGraph: {
    title: "Mapleford International School Campus | Modern Facilities",
    description:
      "A 4-acre campus designed for discovery — smart classrooms, labs, sports arenas, and more at Mapleford International School, Hyderabad.",
  },
};

export default function CampusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

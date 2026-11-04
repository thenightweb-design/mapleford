export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

const fallbackMetadata: Metadata = {
  title: "Careers | Join Our Team",
  description:
    "Explore career opportunities at Mapleford International School, Hyderabad. We are looking for passionate educators, coordinators, and staff who share our commitment to excellence in international education.",
  openGraph: {
    title: "Careers at Mapleford International School",
    description:
      "Join a team of passionate educators shaping the next generation of leaders. View current openings at Mapleford International School, Hyderabad.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/careers', fallbackMetadata);
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

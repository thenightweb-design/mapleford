export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

const fallbackMetadata: Metadata = {
  title: "Meet Our Team | Leadership & Educators",
  description:
    "Meet the visionary leaders and dedicated faculty at Mapleford International School, committed to providing global excellence in education for every student.",
};

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/about/team', fallbackMetadata);
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

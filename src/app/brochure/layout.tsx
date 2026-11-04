export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

const fallbackMetadata: Metadata = {
  title: "School Brochure | Download Our Programme Guide",
  description:
    "Download the Mapleford International School brochure to learn all about our CBSE + Canadian curriculum, campus facilities, admissions process, and school programmes.",
  openGraph: {
    title: "Mapleford International School Brochure",
    description:
      "Get a complete overview of Mapleford International School — curriculum, campus, admissions, and more. Download our brochure today.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/brochure', fallbackMetadata);
}

export default function BrochureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

const fallbackMetadata: Metadata = {
  title: "Mandatory Disclosure | Transparency & Governance",
  description:
    "Review the mandatory public disclosures for Mapleford International School, Hyderabad, including affiliation documents, society details, certificates, and school committees.",
  openGraph: {
    title: "Mandatory Disclosure - Mapleford International School",
    description:
      "Transparency in excellence and governance - official documents and certificates of Mapleford International School, Hyderabad.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/mandatory-disclosure', fallbackMetadata);
}

export default function DisclosureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

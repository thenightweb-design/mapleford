import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mandatory Disclosure | Transparency & Governance",
  description:
    "Review the mandatory public disclosures for Mapleford International School, Hyderabad, including affiliation documents, society details, certificates, and school committees.",
  openGraph: {
    title: "Mandatory Disclosure - Mapleford International School",
    description:
      "Transparency in excellence and governance - official documents and certificates of Mapleford International School, Hyderabad.",
  },
};

export default function DisclosureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

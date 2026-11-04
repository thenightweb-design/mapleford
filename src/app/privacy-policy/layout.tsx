export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

const fallbackMetadata: Metadata = {
  title: "Privacy Policy | Mapleford International School",
  description:
    "Review our privacy policy to understand how we collect, use, and protect your personal data and information at Mapleford International School.",
};

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/privacy-policy', fallbackMetadata);
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

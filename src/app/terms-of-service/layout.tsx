export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

const fallbackMetadata: Metadata = {
  title: "Terms of Service | Mapleford International School",
  description:
    "Review our terms of service and conditions for using the website and academic services at Mapleford International School.",
};

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/terms-of-service', fallbackMetadata);
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

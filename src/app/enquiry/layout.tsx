export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

const fallbackMetadata: Metadata = {
  title: "Admissions Enquiry | Get in Touch",
  description:
    "Have questions about admissions at Mapleford International School? Submit your enquiry today and our team will be happy to assist you.",
};

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/enquiry', fallbackMetadata);
}

export default function EnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

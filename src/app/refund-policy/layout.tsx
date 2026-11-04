export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

const fallbackMetadata: Metadata = {
  title: "Cancellation & Refund Policy | Mapleford International School",
  description:
    "Review our policy regarding school admission fee cancellations and refunds at Mapleford International School.",
};

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/refund-policy', fallbackMetadata);
}

export default function RefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


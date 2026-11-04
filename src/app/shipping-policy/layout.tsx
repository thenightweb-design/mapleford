export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

const fallbackMetadata: Metadata = {
  title: "Shipping & Exchange Policy | Mapleford International School",
  description:
    "Review our policy regarding uniform and material delivery at Mapleford International School.",
};

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/shipping-policy', fallbackMetadata);
}

export default function ShippingPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


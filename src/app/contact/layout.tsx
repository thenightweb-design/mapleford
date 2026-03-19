import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description:
    "Contact Mapleford International School in Hayathnagar, Hyderabad. Reach out for admissions queries, general inquiries, or to schedule a campus visit. Call +91 93466 48486.",
  openGraph: {
    title: "Contact Mapleford International School",
    description:
      "Reach us at Hayathnagar, Hyderabad or call +91 93466 48486. We're here to guide your child's educational journey.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mapleford International School",
  description:
    "Review our privacy policy to understand how we collect, use, and protect your personal data and information at Mapleford International School.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

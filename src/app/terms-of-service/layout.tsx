import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Mapleford International School",
  description:
    "Review our terms of service and conditions for using the website and academic services at Mapleford International School.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

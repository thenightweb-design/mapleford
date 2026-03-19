import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Our Story, Team & Vision",
  description:
    "Learn about Mapleford International School — a proud legacy of Megacity High School reimagined for a new era. Meet our leadership team including Chairman, Assistant Director, and Principal.",
  openGraph: {
    title: "About Mapleford International School | Our Story & Team",
    description:
      "Discover the story, values, and visionary leadership behind Mapleford International School, Hayathnagar, Hyderabad.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

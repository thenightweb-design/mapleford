import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High School Programme | Grade 9 & Grade 10",
  description:
    "Mapleford's High School programme (Grade 9–10) offers a strong CBSE roadmap enriched with critical thinking frameworks, skill-based projects, and global connect opportunities.",
  openGraph: {
    title: "High School | Mapleford International School",
    description:
      "Grade 9 and Grade 10 — CBSE excellence with global perspectives. Critical thinking, skill-based projects, and the Global Connect program at Mapleford International School.",
  },
};

export default function HighSchoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

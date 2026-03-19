import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elementary School Programme | Grade 1 to Grade 5",
  description:
    "Mapleford's Elementary School programme (Grade 1–5) integrates CBSE learning milestones with Canadian instructional strategies in a concept-driven, bilingual framework.",
  openGraph: {
    title: "Elementary School | Mapleford International School",
    description:
      "Grade 1 to Grade 5 — CBSE aligned with Canadian instructional excellence at Mapleford International School, Hyderabad.",
  },
};

export default function ElementaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

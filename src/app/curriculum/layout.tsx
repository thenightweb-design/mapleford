import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum | CBSE + Canadian Pedagogy",
  description:
    "Mapleford International School offers a unique curriculum blending CBSE academic excellence with Maple Bear Canadian pedagogy. Covering Pre-School, Elementary, Middle School, and High School.",
  openGraph: {
    title: "Curriculum | CBSE & Canadian Pedagogy at Mapleford",
    description:
      "World-class education for Nursery to Grade 10 — CBSE aligned, Canadian inspired. Discover Mapleford's holistic curriculum pathway.",
  },
};

export default function CurriculumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

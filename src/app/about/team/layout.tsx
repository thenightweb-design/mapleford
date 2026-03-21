import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Team | Leadership & Educators",
  description:
    "Meet the visionary leaders and dedicated faculty at Mapleford International School, committed to providing global excellence in education for every student.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

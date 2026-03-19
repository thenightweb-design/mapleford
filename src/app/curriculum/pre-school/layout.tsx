import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-School Programme | Nursery, JKG & UKG",
  description:
    "Mapleford's Pre-School programme (Nursery, JKG, UKG) follows the Maple Bear early learning model — play-based, inquiry-led education that nurtures curiosity, confidence, and early literacy.",
  openGraph: {
    title: "Pre-School | Mapleford International School",
    description:
      "Play-based and inquiry-led early learning for Nursery, JKG, and UKG at Mapleford International School, Hyderabad.",
  },
};

export default function PreSchoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

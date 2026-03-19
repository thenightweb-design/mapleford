import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Enroll Now for 2024–25",
  description:
    "Begin your child's journey at Mapleford International School. Our admissions process includes enquiry, student interaction, documentation, and onboarding. Apply for Nursery to Grade 10 today.",
  openGraph: {
    title: "Admissions at Mapleford International School",
    description:
      "Join Mapleford International School, Hyderabad — where global education meets Indian values. Admissions open for Nursery to Grade 10.",
  },
};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

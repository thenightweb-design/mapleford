import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions Enquiry | Get in Touch",
  description:
    "Have questions about admissions at Mapleford International School? Submit your enquiry today and our team will be happy to assist you.",
};

export default function EnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Mission | Our Educational Philosophy",
  description:
    "Discover the vision, mission, and core pillars that guide Mapleford International School. We empower students with knowledge, integrity, and excellence for a global future.",
  openGraph: {
    title: "Vision & Mission | Mapleford International School",
    description:
      "Our vision: a leading international school recognised for excellence, integrity, and holistic development. Empowering Mapleites to rise with Erudition, Ethos, and Excellence.",
  },
};

export default function VisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

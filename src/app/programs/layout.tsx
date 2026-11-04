export const dynamic = 'force-dynamic';
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

const fallbackMetadata: Metadata = {
  title: "Programs | Holistic Learning & Development",
  description:
    "Explore the unique educational programs at Mapleford International School, including STEAM education, sports, arts, and global connect initiatives, designed for the all-round development of every child.",
  openGraph: {
    title: "Educational Programs - Mapleford International School",
    description:
      "A curriculum beyond books - nurturing talent, creativity, and leadership at Mapleford International School, Hyderabad.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return await getPageMetadata('/programs', fallbackMetadata);
}

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

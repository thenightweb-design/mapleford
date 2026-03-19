import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Education Insights & School News",
  description:
    "Read insights, stories, and educational perspectives from the Mapleford International School community. Stay updated on school events, STEAM education, sports, and more.",
  openGraph: {
    title: "Mapleford International School Blog",
    description:
      "Explore articles on education, school life, STEAM, sports, and culture from Mapleford International School, Hyderabad.",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

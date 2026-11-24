import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the live domain (e.g. https://vouch.edu.jm) so social previews use full links.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vouch.pages.dev"),
  title: { default: "VOUCH Group of Schools | Early Childhood Education in Kingston", template: "%s | VOUCH Group of Schools" },
  description:
    "VOUCH Group of Schools offers Nursery, Preschool and Basic School classes plus a Special Education Unit at 1 National Heroes Circle, Kingston, Jamaica.",
  keywords: ["VOUCH", "VOUCH Basic School", "Sylvia Foote Basic School", "Mary Issa Preschool", "basic school Kingston", "early childhood education Jamaica", "special education Kingston"],
  openGraph: {
    title: "VOUCH Group of Schools",
    description: "Where every child's journey is valued and celebrated. Nursery, Preschool, Basic School and Special Education in Kingston, Jamaica.",
    images: ["/images/group-student.jpeg"],
    type: "website",
  },
  icons: { icon: "/images/vamp-logo.png" },
};

export const viewport: Viewport = { themeColor: "#123F7A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-sun focus:px-4 focus:py-2 focus:font-bold">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

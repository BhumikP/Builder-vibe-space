import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FrameIt - Transform Your Memories Into Stunning Wall Art",
  description:
    "Upload your favorite photos and get them delivered as beautifully framed art. Premium quality, handcrafted frames that turn your memories into masterpieces.",
  keywords: [
    "photo framing",
    "wall art",
    "custom frames",
    "photo printing",
    "home decor",
  ],
  authors: [{ name: "FrameIt" }],
  creator: "FrameIt",
  publisher: "FrameIt",
  openGraph: {
    title: "FrameIt - Transform Your Memories Into Stunning Wall Art",
    description:
      "Upload your favorite photos and get them delivered as beautifully framed art.",
    url: "https://frameit.com",
    siteName: "FrameIt",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FrameIt - Custom Photo Framing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FrameIt - Transform Your Memories Into Stunning Wall Art",
    description:
      "Upload your favorite photos and get them delivered as beautifully framed art.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frame Customizer - Design Your Perfect Photo Frame",
  description: "Upload your photos and customize your perfect frame. Choose from premium materials, sizes, effects, and more. Create stunning wall art with our easy-to-use frame customizer.",
  keywords: [
    "frame customizer",
    "photo frame designer",
    "custom frame builder",
    "frame design tool",
    "photo framing app",
    "frame customization",
    "wall art designer",
  ],
  openGraph: {
    title: "Frame Customizer - Design Your Perfect Photo Frame",
    description: "Upload your photos and customize your perfect frame. Choose from premium materials, sizes, effects, and more.",
    url: "https://frameit.com/dashboard",
  },
  twitter: {
    title: "Frame Customizer - Design Your Perfect Photo Frame",
    description: "Upload your photos and customize your perfect frame. Choose from premium materials, sizes, effects, and more.",
  },
  alternates: {
    canonical: "https://frameit.com/dashboard",
  },
  robots: {
    index: false, // Don't index the dashboard page
    follow: false,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      {children}
    </div>
  );
} 
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Surya JS Journey",
  title: {
    default: "Surya JS Journey",
    template: "%s | Surya JS Journey",
  },
  description:
    "Surya JS Journey is a JavaScript learning platform for studying concepts, running examples, solving challenges, and visualizing async behavior.",
  keywords: [
    "JavaScript",
    "JavaScript learning",
    "JavaScript concepts",
    "JavaScript playground",
    "JavaScript challenges",
    "event loop visualizer",
    "closures",
    "promises",
    "async await",
  ],
  authors: [{ name: "Surya" }],
  creator: "Surya",
  publisher: "Surya JS Journey",
  category: "education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/JavaScript.png",
    shortcut: "/JavaScript.png",
    apple: "/JavaScript.png",
  },
  openGraph: {
    title: "Surya JS Journey",
    description:
      "Learn JavaScript through concept explanations, runnable examples, guided challenges, and a visual event loop simulator.",
    siteName: "Surya JS Journey",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Surya JS Journey",
    description:
      "Learn JavaScript through concepts, code, challenges, and a visual event loop simulator.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

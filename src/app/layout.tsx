import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surya JS Journey",
  description: "A JavaScript learning platform with concepts, playgrounds, and challenges.",
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

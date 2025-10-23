import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Boilerplate - Beautiful Landing Pages",
  description: "A collection of stunning landing pages for your next project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

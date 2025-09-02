import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subhasish",
  description: "Personal Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
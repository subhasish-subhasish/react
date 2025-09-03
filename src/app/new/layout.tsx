

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subhasish",
  description: "Personal Website 2.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}
          <SpeedInsights />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
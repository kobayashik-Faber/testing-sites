import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";

export const metadata: Metadata = {
  title: {
    default: "@testing-sites/next",
    template: "@testing-sites/next | %s",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}

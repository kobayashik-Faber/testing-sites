import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import Script from "next/script";

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
      <Script
        id="mierucaOptimizejs"
        dangerouslySetInnerHTML={{
          __html: `
window.__optimizeid = window.__optimizeid || [];__optimizeid.push([1842686338]);
(function () {var fjs = document.createElement('script');fjs.type = 'text/javascript';
fjs.async = true;fjs.id = "fjssync";var timestamp = new Date;fjs.src = 'https://opt.mieru-ca.com/service/js/mieruca-optimize.js?v=' + timestamp.getTime();
var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(fjs, x);})();
      `,
        }}
      />
      <body>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}

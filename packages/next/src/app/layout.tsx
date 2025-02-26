import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import Script from "next/script";
import { Suspense } from "react";

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
        id="gtm"
        dangerouslySetInnerHTML={{
          __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W6Z5HJBL');
        `,
        }}
      />
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W6Z5HJBL"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
          }}
        ></noscript>
        <Suspense>
          <AppHeader />
        </Suspense>
        {children}
        <AppFooter />
      </body>
    </html>
  );
}

import "./globals.css";

import { Suspense } from "react";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Header } from "@/components/Header";
import { CompanyProviderContainer } from "@/hooks/Company/CompanyProviderContainer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "QikServe Challenge - Front End Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Suspense fallback={<p>loading;</p>}>
          <CompanyProviderContainer>
            <Header />
            <div className="mx-auto max-w-[1440px] px-20 py-1.5">
              {children}
            </div>
          </CompanyProviderContainer>
        </Suspense>
      </body>
    </html>
  );
}

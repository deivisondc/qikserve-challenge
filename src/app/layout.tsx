import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
        {children}
          </CompanyProviderContainer>
        </Suspense>
      </body>
    </html>
  );
}

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
        <nav>
          <ul className="flex flex-row uppercase">
            <li>Menu</li>
            <li>Entrar</li>
            <li>Contato</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}

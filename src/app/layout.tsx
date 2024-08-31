import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/useAuth";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MUSE",
  description: "Gigs, Gears and Talents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className + " text-[12px] text-secondary"}>
          <AuthProvider>
            <Header />
              {children}
          </AuthProvider>
        </body>
    </html>
  );
}

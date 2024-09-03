import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/useAuth";
import StoreContextProvider from "@/context/useStore";
import Footer from "@/components/footer/footer";
import CheckDashboard from "@/components/header/checkHeader";

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
        <body className={inter.className + " text-[12px] text-secondary dark:bg-dark dark:text-gray"}>
          <AuthProvider>
            <StoreContextProvider>
              <CheckDashboard />
              {children}
              <Footer />
            </StoreContextProvider>
          </AuthProvider>
        </body>
    </html>
  );
}

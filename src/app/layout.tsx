import type { Metadata } from "next";
import "./globals.css";
import { Questrial } from "next/font/google";
import AuthProvider from "@/context/useAuth";
import StoreContextProvider from "@/context/useStore";
import Footer from "@/components/footer/footer";
import CheckDashboard from "@/components/header/checkHeader";


const questrial = Questrial({
  variable: "--font-questrial",
  weight: "400",
  subsets: ["latin"],
});

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
    <html lang="en" className="dark">
        <body className={questrial.className + " text-[12px] bg-dark text-foreground"}>
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

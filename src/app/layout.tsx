import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "@/context/useAuth";
import StoreContextProvider from "@/context/useStore";
import Footer from "@/components/footer/footer";
import CheckDashboard from "@/components/header/checkHeader";

const lufga = localFont({
  src: [
    {
      path: "../assets/fonts/lufga/Fontspring-DEMO-lufga-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/lufga/Fontspring-DEMO-lufga-extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/lufga/Fontspring-DEMO-lufga-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/lufga/Fontspring-DEMO-lufga-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/lufga/Fontspring-DEMO-lufga-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/lufga/Fontspring-DEMO-lufga-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/lufga/Fontspring-DEMO-lufga-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/lufga/Fontspring-DEMO-lufga-extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/lufga/Fontspring-DEMO-lufga-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
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
    <html lang="en">
        <body className={lufga.className + " text-[12px] text-secondary dark:bg-dark dark:text-gray"}>
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

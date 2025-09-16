import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { COLORS } from "@/constants/colors";
import Header from "@/components/Header";
import { LocaleProvider } from "@/context/LocaleContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Barista Boss CRM",
  description: "Complete solution for coffee shop management: from orders to analytics. Increase profits and streamline processes with Barista Boss CRM.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased font-montserrat`}
        style={{ backgroundColor: COLORS.graphite, color: COLORS.graphite }}
      >
        <LocaleProvider>
          <Header />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}

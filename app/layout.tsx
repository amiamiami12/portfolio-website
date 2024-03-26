import type { Metadata } from "next";
import "./globals.css";
import { DM_Serif_Display } from "next/font/google";

const DmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={DmSerif.className}>{children}</body>
    </html>
  );
}

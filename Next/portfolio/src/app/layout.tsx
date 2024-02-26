import type { Metadata } from "next";
import { inter, andika } from "../fonts/fonts";
import "./globals.css";

// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Albert Bravo",
  description: "Albert Bravo is a passionate software developer who loves learning new tecnologies and making creative ideas come to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen`}>
        <div className="top">
          <Header></Header>
        </div>
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        {children}
      </body>
    </html>
  );
}

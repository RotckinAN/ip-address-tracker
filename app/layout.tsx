import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import ReduxProvider from "@/app/core/redux/ReduxProvider";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "IP Address Tracker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body
          className={`${rubik.variable} flex h-screen w-screen items-center justify-center`}
        >
          <ToastContainer autoClose={12000} />
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}

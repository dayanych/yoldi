import { Metadata } from "next";
import { Inter } from "next/font/google";

import { AuthProvider } from "@/app";
import { BaseLayout } from "@/widgets";

import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "./global.scss";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "yoldi.agency — тестовое задание",
  description: "yoldi.agency — тестовое задание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interSans.variable}>
        <AuthProvider>
          <BaseLayout>{children}</BaseLayout>
        </AuthProvider>
      </body>
    </html>
  );
}

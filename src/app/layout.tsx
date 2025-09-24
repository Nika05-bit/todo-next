import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
// app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spark Venture - Ignite Innovation Challenge",
  description: "Student project/start-up funding initiative",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="light">
        <body
          className={`${inter.className} transition-all duration-500 bg-gradient-to-br from-purple-100 via-purple-50 to-white dark:from-purple-950 dark:via-purple-900 dark:to-black`}
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}

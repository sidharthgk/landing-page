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
      <head>
        {/* Add any meta tags, links, etc. here */}
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.className} transition-all duration-500 bg-gradient-to-br from-[#F29422] via-[#F27329] to-white dark:from-[#D03260] dark:via-[#D93232] dark:to-black`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

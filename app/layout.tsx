import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Spark Venture - Ignite Innovation Challenge",
  description: "Student project/start-up funding initiative",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="light">
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}

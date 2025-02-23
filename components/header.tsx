'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 w-full bg-opacity-0 dark:bg-opacity-0 backdrop-blur-md text-black dark:text-white shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
          <img
            src={theme === "dark" ? "/sp-logo-white02.svg" : "/sp-logo-black02.svg"}
            alt="Spark Venture Logo"
            className="h-16 w-auto"
          />
        </Link>
        <nav className="flex items-center space-x-8">
          <Link href="/features" className="text-sm font-medium transition-colors hover:text-purple-700">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-purple-700">
            About Us
          </Link>
          <Link href="/portfolio" className="text-sm font-medium transition-colors hover:text-purple-700">
            Gallery
          </Link>
          <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-purple-700">
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:bg-purple-300">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-purple-300"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="outline" className="bg-purple-200 hover:bg-purple-300">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}

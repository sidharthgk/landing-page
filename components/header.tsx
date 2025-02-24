'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render nothing until mounted to avoid hydration mismatches.
  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-md text-black dark:text-white shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
          <img
            src={theme === "dark" ? "/sp-logo-white02.svg" : "/sp-logo-black02.svg"}
            alt="Spark Venture Logo"
            className="h-16 w-auto"
          />
        </Link>
        <nav className="flex items-center space-x-8">
          <Link href="/features" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
            Gallery
          </Link>
          <Link href="/testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact Us 
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:bg-primary/30">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/30"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="outline" className="bg-primary/20 hover:bg-primary/30">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-secondary to-accent text-white hover:from-secondary/90 hover:to-accent/90">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}

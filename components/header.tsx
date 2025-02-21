import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Sun } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Spark Venture</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/features" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/portfolio" className="text-sm font-medium hover:text-primary">
            Portfolio
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Sun className="h-5 w-5" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="outline">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  )
}


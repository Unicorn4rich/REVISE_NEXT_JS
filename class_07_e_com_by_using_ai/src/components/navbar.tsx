"use client"

// src\components\navbar.tsx

import Link from "next/link"
import { Menu, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  // const isMobile = useMobile() // for condional rendering on break points.

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link href="/shop" className="text-sm font-medium transition-colors hover:text-primary">
                  Shop
                </Link>
                <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                  Categories
                </Link>
                <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                  New Arrivals
                </Link>
                <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                  Sale
                </Link>
                <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                  About
                </Link>
                <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">SHOPIFY</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-medium transition-colors hover:text-primary">
            Shop
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Categories
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            New Arrivals
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Sale
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Shopping cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
          <Button variant="ghost" size="icon" aria-label="User account">
            <User className="h-5 w-5" />
            <span className="sr-only">User account</span>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

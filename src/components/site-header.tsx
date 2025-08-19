"use client"

import * as React from "react"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { NavbarSearch } from "@/components/navbar-search"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import { MainNavItem } from "@/lib/types"
import { contactInfo } from "@/data/contact/contact"

interface SiteHeaderProps {
  navItems: MainNavItem[]
}

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const [isVisible, setIsVisible] = React.useState(true)
  const [lastScrollY, setLastScrollY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Top Bar with Contact Info */}
      <div className="border-b bg-muted/50 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex h-10 items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">Contact: </span>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="hover:underline hover:text-primary transition-colors text-xs sm:text-sm"
              >
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <a 
                href={`mailto:${contactInfo.email}`}
                className="hover:underline hover:text-primary transition-colors text-xs sm:text-sm"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden lg:inline text-muted-foreground">
              Delivering Efficient & Durable Filtration & Pumping Solutions
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex h-14 sm:h-16 items-center justify-between">
        <MainNav items={navItems} />
        
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
          {/* Search - Only show on desktop */}
          <div className="hidden md:block">
            <NavbarSearch />
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-1">
            <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
              <Link href="/contact">
                Get Quote
              </Link>
            </Button>
            <Button size="sm" asChild className="hidden xs:inline-flex">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
        </div>
      </div>
    </header>
  )
}
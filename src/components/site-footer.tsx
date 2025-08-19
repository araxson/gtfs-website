import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

interface FooterNavSection {
  title: string
  items: Array<{
    title: string
    href: string
  }>
}

interface SiteFooterProps {
  footerNav: FooterNavSection[]
}

export function SiteFooter({ footerNav }: SiteFooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center space-x-3">
              <Image
                src="/gtfs-logo.png"
                alt="Global Tech Fluid Services Logo"
                width={96}
                height={32}
                className="h-8 w-auto sm:h-10"
              />
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Global Tech Fluid Services
                </h3>
                <p className="text-sm text-muted-foreground">
                  Industrial Filters & Pumps
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Leading provider of industrial filters and pumps. Delivering efficient & durable 
              filtration and pumping solutions with advanced production technology.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">
                  Industrial District, Manufacturing Hub
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <Link 
                  href="mailto:info@gtfservices.ca" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@gtfservices.ca
                </Link>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Globe className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <Link 
                  href="https://www.gtfservices.ca" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  www.gtfservices.ca
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          {footerNav.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />
        
        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Global Tech Fluid Services. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link 
              href="/privacy" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
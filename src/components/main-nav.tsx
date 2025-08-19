"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MainNavItem } from "@/lib/types"
import { NavbarSearch } from "@/components/navbar-search"

interface MainNavProps {
  items: MainNavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="flex items-center justify-between w-full">
      <Link href="/" className="flex items-center space-x-2 rounded-lg p-2 -ml-2 hover:bg-accent transition-colors">
        <Image
          src="/gtfs-logo.png"
          alt="GTFS Logo"
          width={96}
          height={32}
          className="h-8 w-auto sm:h-10"
        />
      </Link>
      
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex mx-auto">
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.title}>
              {item.children ? (
                <>
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px]  md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.children.map((child) => (
                        <ListItem
                          key={child.title}
                          title={child.title}
                          href={child.href}
                        >
                          {child.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink asChild>
                  <Link 
                    href={item.href || "#"}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      pathname === item.href && "bg-accent text-accent-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="px-3 py-2 h-auto hover:bg-accent hover:text-accent-foreground transition-colors">
              <span className="text-sm font-medium">Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 p-1">
            <div className="p-3 pb-2">
              <NavbarSearch />
            </div>
            <DropdownMenuSeparator className="my-1" />
            {items.map((item, index) => (
              <React.Fragment key={item.title}>
                {item.children ? (
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="w-full cursor-pointer data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
                      <span className="font-medium">{item.title}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-56 p-1">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.title} asChild>
                          <Link 
                            href={child.href || "#"} 
                            className="w-full block px-3 py-2 text-sm font-medium cursor-pointer hover:bg-accent hover:text-accent-foreground data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground rounded-sm transition-colors"
                          >
                            {child.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                ) : (
                  <DropdownMenuItem asChild>
                    <Link 
                      href={item.href || "#"} 
                      className="w-full block px-3 py-2 text-sm font-medium cursor-pointer hover:bg-accent hover:text-accent-foreground data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground rounded-sm transition-colors"
                    >
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                )}
                {index < items.length - 1 && <DropdownMenuSeparator className="my-1" />}
              </React.Fragment>
            ))}
            <DropdownMenuSeparator className="my-1" />
            <DropdownMenuItem asChild>
              <Link 
                href="/contact" 
                className="w-full block px-3 py-2 text-sm font-medium cursor-pointer hover:bg-primary hover:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground rounded-sm transition-colors"
              >
                Contact Us
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link 
                href="/contact" 
                className="w-full block px-3 py-2 text-sm font-medium cursor-pointer hover:bg-accent hover:text-accent-foreground data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground rounded-sm transition-colors"
              >
                Get Quote
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
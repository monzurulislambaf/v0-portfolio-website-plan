"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Code2, Home, FolderGit2, User, Settings, Mail, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith("/admin")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const publicLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: FolderGit2 },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav className="border-b border-border/50 glass sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-all duration-300 magnetic-hover"
          >
            <div className="relative">
              <Code2 className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="gradient-text bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {publicLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 magnetic-hover relative",
                    pathname === link.href ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  <div className="relative">
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    {pathname === link.href && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                    )}
                  </div>
                  <span className="relative">
                    {link.label}
                    {pathname === link.href && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                    )}
                  </span>
                </Link>
              )
            })}

            <Link
              href="/admin"
              className={cn(
                "group flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 magnetic-hover relative",
                isAdmin ? "text-foreground" : "text-muted-foreground",
              )}
            >
              <div className="relative">
                <Settings className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
                {isAdmin && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </div>
              <span className="relative">
                Admin
                {isAdmin && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                )}
              </span>
            </Link>

            <div className="ml-2 pl-2 border-l border-border/50">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative p-2 rounded-lg glass hover:bg-primary/10 transition-all duration-300 magnetic-hover"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 animate-fade-in" />
                ) : (
                  <Menu className="h-5 w-5 animate-fade-in" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="glass rounded-xl mt-2 p-4 animate-fade-in-up">
              <div className="flex flex-col space-y-2">
                {publicLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary magnetic-hover relative",
                        pathname === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground",
                      )}
                    >
                      <div className="relative">
                        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        {pathname === link.href && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                        )}
                      </div>
                      <span className="font-medium">
                        {link.label}
                      </span>
                      {pathname === link.href && (
                        <div className="absolute right-4 w-2 h-2 bg-primary rounded-full animate-pulse" />
                      )}
                    </Link>
                  )
                })}

                <div className="border-t border-border/50 my-2 pt-2">
                  <Link
                    href="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary magnetic-hover relative",
                      isAdmin ? "bg-primary/10 text-primary" : "text-muted-foreground",
                    )}
                  >
                    <div className="relative">
                      <Settings className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                      {isAdmin && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                      )}
                    </div>
                    <span className="font-medium">
                      Admin
                    </span>
                    {isAdmin && (
                      <div className="absolute right-4 w-2 h-2 bg-primary rounded-full animate-pulse" />
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

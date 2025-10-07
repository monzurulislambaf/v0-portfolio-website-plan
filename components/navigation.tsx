"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Code2, Home, FolderGit2, User, Settings, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith("/admin")

  const publicLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/projects", label: "Projects", icon: FolderGit2 },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-opacity">
            <Code2 className="h-6 w-6" />
            <span>Portfolio</span>
          </Link>

          <div className="flex items-center gap-6">
            {publicLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-all hover:text-primary hover:scale-105",
                    pathname === link.href ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              )
            })}

            <Link
              href="/admin"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-all hover:text-primary hover:scale-105",
                isAdmin ? "text-foreground" : "text-muted-foreground",
              )}
            >
              <Settings className="h-4 w-4" />
              Admin
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

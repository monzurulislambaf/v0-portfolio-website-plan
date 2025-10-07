import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code2, Palette, Zap, Download, ExternalLink } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left side - Content */}
            <div className="order-1 animate-fade-in-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Full-Stack Developer
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Building modern web applications with cutting-edge technologies. Passionate about creating elegant
                solutions to complex problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="group">
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="group bg-transparent">
                  <Link href="/about">
                    About Me
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild className="group">
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Developer Image */}
            <div className="order-2 animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-slow" />
                <img
                  src="/professional-developer-working-on-laptop-coding.jpg"
                  alt="Developer workspace"
                  className="relative rounded-full shadow-2xl w-full aspect-square object-cover animate-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className="text-muted-foreground text-pretty">
                  Writing maintainable, scalable, and well-documented code following best practices.
                </p>
              </div>

              <div className="text-center group animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Palette className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
                <p className="text-muted-foreground text-pretty">
                  Creating beautiful, responsive interfaces with attention to detail and user experience.
                </p>
              </div>

              <div className="text-center group animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance</h3>
                <p className="text-muted-foreground text-pretty">
                  Optimizing applications for speed, efficiency, and seamless user interactions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

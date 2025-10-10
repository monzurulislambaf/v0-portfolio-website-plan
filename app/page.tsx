import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code2, Palette, Zap, Download, ExternalLink } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="container mx-auto px-4 py-20 md:py-32 relative overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow -z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow -z-10" style={{ animationDelay: "2s" }} />

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative z-10">
            {/* Left side - Content */}
            <div className="order-1 animate-fade-in-left">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Welcome to my portfolio
                </span>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance gradient-text animate-gradient">
                  Full-Stack Developer
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                Building modern web applications with cutting-edge technologies. Passionate about creating elegant
                solutions to complex problems and delivering exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <Button size="lg" asChild className="group magnetic-hover shadow-glow">
                  <Link href="/projects" className="relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="group glass magnetic-hover border-primary/20 hover:border-primary/40">
                  <Link href="/about">
                    <span className="flex items-center">
                      About Me
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    </span>
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild className="group magnetic-hover">
                  <a href="/resume.pdf" download className="relative overflow-hidden">
                    <span className="flex items-center">
                      <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                      Download Resume
                    </span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Developer Image */}
            <div className="order-2 animate-fade-in-right">
              <div className="relative group">
                {/* Enhanced background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse-slow group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl animate-gradient opacity-50" />

                {/* Main image container */}
                <div className="relative glass rounded-full p-1 shadow-glow-lg group-hover:shadow-glow-lg transition-all duration-500 group-hover:scale-105">
                  <img
                    src="/professional-developer-working-on-laptop-coding.jpg"
                    alt="Developer workspace"
                    className="relative rounded-full shadow-2xl w-full aspect-square object-cover animate-float"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: "1s" }} />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: "2s" }} />
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/50 rounded-full animate-float opacity-40" style={{ animationDelay: "3s" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background gradient for features */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/50 -z-10" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Core Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate about delivering exceptional digital experiences through modern development practices
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group relative">
                <div className="glass rounded-2xl p-8 text-center hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-bg text-primary-foreground mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                      <Code2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Clean Code</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">
                      Writing maintainable, scalable, and well-documented code following industry best practices and design patterns.
                    </p>
                  </div>

                  {/* Floating decoration */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <div className="group relative">
                <div className="glass rounded-2xl p-8 text-center hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-bg text-primary-foreground mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                      <Palette className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Modern Design</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">
                      Creating beautiful, responsive interfaces with meticulous attention to detail and exceptional user experiences.
                    </p>
                  </div>

                  {/* Floating decoration */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent/20 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: "1s" }} />
                </div>
              </div>

              <div className="group relative">
                <div className="glass rounded-2xl p-8 text-center hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-bg text-primary-foreground mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                      <Zap className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Performance</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">
                      Optimizing applications for speed, efficiency, and seamless user interactions across all devices and platforms.
                    </p>
                  </div>

                  {/* Floating decoration */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: "2s" }} />
                </div>
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

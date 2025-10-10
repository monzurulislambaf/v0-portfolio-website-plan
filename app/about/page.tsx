import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Briefcase, Linkedin, Star, Code, Database, Globe, Zap, Layers, Cpu, Palette } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h1>
            <p className="text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Learn more about my background, experience, and passion for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="group animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Card className="hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover glass">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl gradient-bg text-primary-foreground group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Experience</p>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors">5+ Years</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="group animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Card className="hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover glass">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl gradient-bg text-primary-foreground group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors">Remote</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="group animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Card className="hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover glass">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl gradient-bg text-primary-foreground group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors">hello@example.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Bio</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with expertise in building modern web applications. My journey
                  in software development started over 5 years ago, and I've been constantly learning and adapting to
                  new technologies ever since.
                </p>
                <p>
                  I specialize in React, Next.js, TypeScript, and Node.js, with a strong focus on creating performant,
                  accessible, and user-friendly applications. I believe in writing clean, maintainable code and
                  following best practices.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open-source projects, writing technical articles,
                  or exploring new technologies and frameworks.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-[#0A66C2] text-white hover:bg-[#004182] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Linkedin className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://teams.microsoft.com/l/chat/0/0?users=youremail@example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-[#6264A7] text-white hover:bg-[#464775] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <svg
                    className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.625 8.127v7.746a1.127 1.127 0 01-1.127 1.127h-7.746a1.127 1.127 0 01-1.127-1.127V8.127A1.127 1.127 0 0111.752 7h7.746a1.127 1.127 0 011.127 1.127zM9.375 9.375H3.75a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h5.625a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375zm5.25 3.75h3v-1.5h-3v1.5z" />
                  </svg>
                  <span className="font-medium">Microsoft Teams</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="glass animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3 gradient-text">Technical Expertise</h2>
                <p className="text-muted-foreground text-lg">
                  Full-stack mastery across modern web technologies and frameworks
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* PHP & Laravel */}
                <div className="group relative">
                  <div className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20 transition-colors">
                        <Code className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-purple-500 transition-colors">PHP</h3>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>Expert in PHP 8+ with deep understanding of OOP, design patterns, and modern PHP practices</p>
                      <div className="flex flex-wrap gap-1">
                        {["Composer", "PSR Standards", "SOLID Principles"].map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laravel */}
                <div className="group relative">
                  <div className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-red-500/10 text-red-500 group-hover:bg-red-500/20 transition-colors">
                        <Layers className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-red-500 transition-colors">Laravel</h3>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>Advanced Laravel development with elegant MVC architecture and powerful ecosystem</p>
                      <div className="flex flex-wrap gap-1">
                        {["Eloquent", "Blade", "Artisan", "Middleware"].map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-full bg-red-500/10 text-red-500 border border-red-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vue.js */}
                <div className="group relative">
                  <div className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-green-500/10 text-green-500 group-hover:bg-green-500/20 transition-colors">
                        <Zap className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-green-500 transition-colors">Vue.js</h3>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>Progressive Vue.js development with reactive components and modern composition API</p>
                      <div className="flex flex-wrap gap-1">
                        {["Vue Router", "Vuex", "Pinia", "Composition API"].map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next.js */}
                <div className="group relative">
                  <div className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gray-900/10 dark:bg-gray-100/10 text-gray-900 dark:text-gray-100 group-hover:bg-gray-900/20 dark:group-hover:bg-gray-100/20 transition-colors">
                        <Globe className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">Next.js</h3>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>Full-stack React framework with SSR, SSG, and optimized performance</p>
                      <div className="flex flex-wrap gap-1">
                        {["App Router", "Server Actions", "ISR", "SEO"].map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-full bg-gray-900/10 dark:bg-gray-100/10 text-gray-900 dark:text-gray-100 border border-gray-900/20 dark:border-gray-100/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alpine.js */}
                <div className="group relative">
                  <div className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 transition-colors">
                        <Cpu className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">Alpine.js</h3>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>Lightweight JavaScript framework for enhancing interactivity in traditional web apps</p>
                      <div className="flex flex-wrap gap-1">
                        {["Reactive", "Declarative", "Minimal", "Turbo"].map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Livewire */}
                <div className="group relative">
                  <div className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20 transition-colors">
                        <Zap className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-orange-500 transition-colors">Livewire</h3>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>Build dynamic interfaces with Laravel without leaving PHP ecosystem</p>
                      <div className="flex flex-wrap gap-1">
                        {["Wire Models", "Actions", "Properties", "Real-time"].map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* FilamentPHP */}
                <div className="group relative">
                  <div className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500/20 transition-colors">
                        <Palette className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-yellow-500 transition-colors">FilamentPHP</h3>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>Beautiful admin panels and forms built on the TALL stack with minimal code</p>
                      <div className="flex flex-wrap gap-1">
                        {["Admin Panels", "Forms", "Tables", "Actions"].map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tailwind CSS */}
                <div className="group relative">
                  <div className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500/20 transition-colors">
                        <Palette className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-cyan-500 transition-colors">Tailwind CSS</h3>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>Utility-first CSS framework for rapid custom UI development</p>
                      <div className="flex flex-wrap gap-1">
                        {["Responsive", "Components", "Dark Mode", "Animation"].map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Database */}
                <div className="group relative">
                  <div className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-500 group-hover:scale-105 magnetic-hover h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500/20 transition-colors">
                        <Database className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-indigo-500 transition-colors">Database</h3>
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>Expert database design and optimization across multiple platforms</p>
                      <div className="flex flex-wrap gap-1">
                        {["MySQL", "PostgreSQL", "Redis", "MongoDB"].map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

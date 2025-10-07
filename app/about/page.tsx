import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Briefcase, Linkedin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-muted-foreground mb-12 text-lg">Learn more about my background and experience.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-semibold">5+ Years</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">Remote</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">hello@example.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"].map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"].map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground">
                        {skill}
                      </span>
                    ))}
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

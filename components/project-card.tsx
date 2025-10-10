import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, Calendar } from "lucide-react"
import type { Project } from "@/lib/projects-store"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="overflow-hidden flex flex-col h-full group hover:shadow-glow-lg transition-all duration-500 glass magnetic-hover border-primary/10">
        {/* Image container with overlay */}
        <div className="relative h-48 w-full bg-muted overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg?height=200&width=400&query=project"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Floating elements on hover */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-float" />
              <div className="w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-balance group-hover:text-primary transition-colors duration-300">
              {project.title}
            </CardTitle>
            {project.liveUrl && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Star className="h-3 w-3 fill-primary text-primary" />
                <span>Live</span>
              </div>
            )}
          </div>
          <CardDescription className="text-pretty line-clamp-3">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 pb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {(Array.isArray(project.technologies)
              ? project.technologies
              : project.technologies.split(",").map((t) => t.trim())
            ).slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
            {(Array.isArray(project.technologies)
              ? project.technologies
              : project.technologies.split(",").map((t) => t.trim())
            ).length > 4 && (
              <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                +{(Array.isArray(project.technologies)
                  ? project.technologies
                  : project.technologies.split(",").map((t) => t.trim())
                ).length - 4}
              </span>
            )}
          </div>

          {/* Date indicator */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>
              {new Date(project.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric'
              })}
            </span>
          </div>
        </CardContent>

        <CardFooter className="gap-2 pt-0">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="group/btn magnetic-hover border-primary/20 hover:border-primary/40 hover:bg-primary/10"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden"
              >
                <span className="flex items-center">
                  <Github className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                  Code
                </span>
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button
              size="sm"
              asChild
              className="group/btn magnetic-hover shadow-glow hover:shadow-glow-lg"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden"
              >
                <span className="flex items-center relative z-10">
                  <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover/btn:translate-x-0.5" />
                  Live Demo
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("[v0] Starting database initialization...")

  // Create some sample projects
  const project1 = await prisma.project.create({
    data: {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with payment integration",
      image: "/ecommerce-platform-concept.png",
      technologies: "Next.js, TypeScript, Stripe, Tailwind CSS",
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://ecommerce-demo.vercel.app",
    },
  })

  const project2 = await prisma.project.create({
    data: {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "/task-management-app-interface.png",
      technologies: "React, Node.js, Socket.io, MongoDB",
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://task-manager-demo.vercel.app",
    },
  })

  console.log("[v0] Created sample projects:", { project1, project2 })
  console.log("[v0] Database initialization complete!")
}

main()
  .catch((e) => {
    console.error("[v0] Error initializing database:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

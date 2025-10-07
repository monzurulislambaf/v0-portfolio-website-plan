import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(projects)
  } catch (error) {
    console.error("[v0] Error fetching projects:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const project = await prisma.project.create({
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
        technologies: body.technologies,
        githubUrl: body.githubUrl || null,
        liveUrl: body.liveUrl || null,
      },
    })
    return NextResponse.json(project)
  } catch (error) {
    console.error("[v0] Error creating project:", error)
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 })
  }
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  createdAt: string
}

const STORAGE_KEY = "portfolio_projects"

export const projectsStore = {
  getAll: (): Project[] => {
    if (typeof window === "undefined") return []
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  },

  getById: (id: string): Project | undefined => {
    return projectsStore.getAll().find((p) => p.id === id)
  },

  create: (project: Omit<Project, "id" | "createdAt">): Project => {
    const newProject: Project = {
      ...project,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    const projects = projectsStore.getAll()
    projects.push(newProject)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
    return newProject
  },

  update: (id: string, updates: Partial<Project>): Project | null => {
    const projects = projectsStore.getAll()
    const index = projects.findIndex((p) => p.id === id)
    if (index === -1) return null

    projects[index] = { ...projects[index], ...updates }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
    return projects[index]
  },

  delete: (id: string): boolean => {
    const projects = projectsStore.getAll()
    const filtered = projects.filter((p) => p.id !== id)
    if (filtered.length === projects.length) return false

    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
    return true
  },
}

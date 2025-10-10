"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import { Plus, Pencil, Trash2, Mail, Phone, Database, Code, FolderGit2, Users, BarChart3, Settings, Calendar, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { ProjectForm } from "@/components/project-form"
import { ContactFormAdmin } from "@/components/contact-form-admin"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

type Project = {
  id: string
  title: string
  description: string
  image: string
  technologies: string
  githubUrl: string | null
  liveUrl: string | null
  createdAt: Date
  updatedAt: Date
}

type Contact = {
  id: string
  name: string
  email: string
  phone: string | null
  description: string
  createdAt: Date
  updatedAt: Date
}

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [editingContact, setEditingContact] = useState<Contact | null>(null)
  const [deletingProjectId, setDeletingProjectId] = useState<string | null>(null)
  const [deletingContactId, setDeletingContactId] = useState<string | null>(null)

  const loadProjects = async () => {
    try {
      const response = await fetch("/api/projects")
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      console.error("[v0] Error loading projects:", error)
    }
  }

  const loadContacts = async () => {
    try {
      const response = await fetch("/api/contacts")
      const data = await response.json()
      setContacts(data)
    } catch (error) {
      console.error("[v0] Error loading contacts:", error)
    }
  }

  useEffect(() => {
    loadProjects()
    loadContacts()
  }, [])

  const handleCreateProject = () => {
    setEditingProject(null)
    setIsProjectFormOpen(true)
  }

  const handleEditProject = (project: Project) => {
    setEditingProject(project)
    setIsProjectFormOpen(true)
  }

  const handleDeleteProject = async (id: string) => {
    try {
      await fetch(`/api/projects/${id}`, { method: "DELETE" })
      loadProjects()
      setDeletingProjectId(null)
    } catch (error) {
      console.error("[v0] Error deleting project:", error)
    }
  }

  const handleCreateContact = () => {
    setEditingContact(null)
    setIsContactFormOpen(true)
  }

  const handleEditContact = (contact: Contact) => {
    setEditingContact(contact)
    setIsContactFormOpen(true)
  }

  const handleDeleteContact = async (id: string) => {
    try {
      await fetch(`/api/contacts/${id}`, { method: "DELETE" })
      loadContacts()
      setDeletingContactId(null)
    } catch (error) {
      console.error("[v0] Error deleting contact:", error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in-up">
              <Settings className="h-4 w-4" />
              Admin Control Panel
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in-up">Admin Dashboard</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Manage your portfolio content, projects, and contact submissions with ease
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="glass rounded-xl p-6 text-center group hover:shadow-glow transition-all duration-500 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-bg text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                <FolderGit2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{projects.length}</h3>
              <p className="text-sm text-muted-foreground">Total Projects</p>
            </div>

            <div className="glass rounded-xl p-6 text-center group hover:shadow-glow transition-all duration-500 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-bg text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{contacts.length}</h3>
              <p className="text-sm text-muted-foreground">Contact Messages</p>
            </div>

            <div className="glass rounded-xl p-6 text-center group hover:shadow-glow transition-all duration-500 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-bg text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-1">
                {projects.reduce((acc, p) => acc + p.technologies.split(',').length, 0)}
              </h3>
              <p className="text-sm text-muted-foreground">Technologies Used</p>
            </div>

            <div className="glass rounded-xl p-6 text-center group hover:shadow-glow transition-all duration-500 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-bg text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-1">
                {projects.filter(p => p.liveUrl).length}
              </h3>
              <p className="text-sm text-muted-foreground">Live Projects</p>
            </div>
          </div>

          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 glass mx-auto">
              <TabsTrigger value="projects" className="group">
                <FolderGit2 className="h-4 w-4 mr-2" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="contacts" className="group">
                <Users className="h-4 w-4 mr-2" />
                Contacts
              </TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="mt-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2 gradient-text">Projects</h2>
                  <p className="text-muted-foreground">Manage your portfolio projects and showcase your work</p>
                </div>
                <Button onClick={handleCreateProject} className="magnetic-hover shadow-glow">
                  <Plus className="h-4 w-4 mr-2" />
                  New Project
                </Button>
              </div>

              {projects.length === 0 ? (
                <Card className="glass border-dashed border-primary/30">
                  <CardContent className="py-20 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                      <FolderGit2 className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No Projects Yet</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Start building your portfolio by adding your first project showcase
                    </p>
                    <Button onClick={handleCreateProject} size="lg" className="magnetic-hover">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Your First Project
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid lg:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <Card key={project.id} className="glass overflow-hidden hover:shadow-glow transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="relative h-48 w-full bg-muted overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg?height=200&width=400&query=project"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Live indicator */}
                        {project.liveUrl && (
                          <div className="absolute top-4 right-4 px-2 py-1 bg-green-500 text-white text-xs rounded-full flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                            Live
                          </div>
                        )}
                      </div>

                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                              {project.title}
                            </CardTitle>
                            <CardDescription className="text-sm line-clamp-2 mb-3">
                              {project.description}
                            </CardDescription>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {project.technologies.split(",").slice(0, 3).map((tech) => (
                                <span
                                  key={tech.trim()}
                                  className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                                >
                                  {tech.trim()}
                                </span>
                              ))}
                              {project.technologies.split(",").length > 3 && (
                                <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                                  +{project.technologies.split(",").length - 3}
                                </span>
                              )}
                            </div>

                            {/* Quick links */}
                            <div className="flex gap-2 text-xs">
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-1 rounded bg-secondary/50 hover:bg-secondary transition-colors"
                                >
                                  <Github className="h-3 w-3" />
                                  Code
                                </a>
                              )}
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  Live Demo
                                </a>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleEditProject(project)}
                              className="magnetic-hover border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => setDeletingProjectId(project.id)}
                              className="magnetic-hover border-destructive/20 hover:border-destructive/40 hover:bg-destructive/10 text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Date indicator */}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          Created {new Date(project.createdAt).toLocaleDateString()}
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="contacts" className="mt-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2 gradient-text">Contact Messages</h2>
                  <p className="text-muted-foreground">Review and manage incoming contact submissions</p>
                </div>
                <Button onClick={handleCreateContact} className="magnetic-hover shadow-glow">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Contact
                </Button>
              </div>

              {contacts.length === 0 ? (
                <Card className="glass border-dashed border-primary/30">
                  <CardContent className="py-20 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                      <Mail className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No Messages Yet</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Contact submissions will appear here when visitors reach out to you
                    </p>
                    <Button onClick={handleCreateContact} size="lg" className="magnetic-hover">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Contact Entry
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid lg:grid-cols-2 gap-6">
                  {contacts.map((contact, index) => (
                    <Card key={contact.id} className="glass hover:shadow-glow transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full gradient-bg text-primary-foreground">
                                <span className="text-lg font-semibold">
                                  {contact.name.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <div>
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                  {contact.name}
                                </CardTitle>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(contact.createdAt).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                  })}
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2 text-sm">
                                <div className="p-1.5 rounded bg-primary/10 text-primary">
                                  <Mail className="h-3 w-3" />
                                </div>
                                <a
                                  href={`mailto:${contact.email}`}
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {contact.email}
                                </a>
                              </div>

                              {contact.phone && (
                                <div className="flex items-center gap-2 text-sm">
                                  <div className="p-1.5 rounded bg-primary/10 text-primary">
                                    <Phone className="h-3 w-3" />
                                  </div>
                                  <a
                                    href={`tel:${contact.phone}`}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                  >
                                    {contact.phone}
                                  </a>
                                </div>
                              )}
                            </div>

                            <CardDescription className="text-sm leading-relaxed line-clamp-4 p-3 bg-muted/30 rounded-lg">
                              {contact.description}
                            </CardDescription>
                          </div>

                          <div className="flex flex-col gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleEditContact(contact)}
                              className="magnetic-hover border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => setDeletingContactId(contact.id)}
                              className="magnetic-hover border-destructive/20 hover:border-destructive/40 hover:bg-destructive/10 text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {isProjectFormOpen && (
        <ProjectForm
          project={editingProject}
          onSuccess={() => {
            setIsProjectFormOpen(false)
            setEditingProject(null)
            loadProjects()
          }}
          onCancel={() => {
            setIsProjectFormOpen(false)
            setEditingProject(null)
          }}
        />
      )}

      {isContactFormOpen && (
        <ContactFormAdmin
          contact={editingContact}
          onSuccess={() => {
            setIsContactFormOpen(false)
            setEditingContact(null)
            loadContacts()
          }}
          onCancel={() => {
            setIsContactFormOpen(false)
            setEditingContact(null)
          }}
        />
      )}

      <AlertDialog open={!!deletingProjectId} onOpenChange={() => setDeletingProjectId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this project? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletingProjectId && handleDeleteProject(deletingProjectId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={!!deletingContactId} onOpenChange={() => setDeletingContactId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Contact</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this contact submission? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletingContactId && handleDeleteContact(deletingContactId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

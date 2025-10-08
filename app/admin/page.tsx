"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import { Plus, Pencil, Trash2, Mail, Phone } from "lucide-react"
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
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your portfolio content</p>
          </div>

          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="mt-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <Button onClick={handleCreateProject}>
                  <Plus className="h-4 w-4 mr-2" />
                  New Project
                </Button>
              </div>

              {projects.length === 0 ? (
                <Card>
                  <CardContent className="py-20 text-center">
                    <p className="text-muted-foreground mb-4">No projects yet</p>
                    <Button onClick={handleCreateProject}>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Your First Project
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {projects.map((project) => (
                    <Card key={project.id} className="overflow-hidden">
                      <div className="relative h-48 w-full bg-muted">
                        <Image
                          src={project.image || "/placeholder.svg?height=200&width=400&query=project"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription className="mt-2">{project.description}</CardDescription>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {project.technologies.split(",").map((tech) => (
                                <span
                                  key={tech.trim()}
                                  className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                                >
                                  {tech.trim()}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="icon" onClick={() => handleEditProject(project)}>
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" onClick={() => setDeletingProjectId(project.id)}>
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

            <TabsContent value="contacts" className="mt-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Contact Submissions</h2>
                <Button onClick={handleCreateContact}>
                  <Plus className="h-4 w-4 mr-2" />
                  New Contact
                </Button>
              </div>

              {contacts.length === 0 ? (
                <Card>
                  <CardContent className="py-20 text-center">
                    <p className="text-muted-foreground mb-4">No contact submissions yet</p>
                    <Button onClick={handleCreateContact}>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Contact Entry
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <Card key={contact.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle>{contact.name}</CardTitle>
                            <div className="flex flex-col gap-2 mt-3">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                <a href={`mailto:${contact.email}`} className="hover:underline">
                                  {contact.email}
                                </a>
                              </div>
                              {contact.phone && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Phone className="h-4 w-4" />
                                  <a href={`tel:${contact.phone}`} className="hover:underline">
                                    {contact.phone}
                                  </a>
                                </div>
                              )}
                            </div>
                            <CardDescription className="mt-3">{contact.description}</CardDescription>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="icon" onClick={() => handleEditContact(contact)}>
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" onClick={() => setDeletingContactId(contact.id)}>
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

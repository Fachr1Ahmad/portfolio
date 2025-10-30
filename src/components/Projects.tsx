import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Figma } from "lucide-react"; // ✅ Tambah Figma di sini

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  figma?: string; // ✅ Optional Figma link
  image: string;
  details: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
      tags: ["React", "Node.js", "PostgreSQL"],
      github: "#",
      demo: "#",
      figma: "#", // ✅ tambahkan link Figma jika ada
      image: "/images/ecommerce.png",
      details:
        "This platform provides a seamless online shopping experience with secure payments, real-time product updates, and admin features.",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team collaboration features.",
      tags: ["Next.js", "TypeScript", "MongoDB"],
      github: "#",
      demo: "#",
      figma: "#",
      image: "/images/taskapp.png",
      details:
        "A productivity web app for teams. Built using Next.js, TypeScript, and MongoDB with real-time synchronization and Kanban board support.",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization dashboard for business intelligence with customizable charts and reports.",
      tags: ["React", "D3.js", "Python"],
      github: "#",
      demo: "#",
      figma: "#",
      image: "/images/analytics.png",
      details:
        "An intuitive analytics platform that visualizes key metrics using dynamic D3.js charts and Python-based data processing.",
    },
    {
      title: "Chat Application",
      description:
        "Real-time messaging app with end-to-end encryption and multimedia support.",
      tags: ["Vue.js", "Socket.io", "Redis"],
      github: "#",
      demo: "#",
      figma: "#",
      image: "/images/chatapp.png",
      details:
        "Fast, secure chat platform using Socket.io for instant messaging and Redis for caching. Includes private rooms and file sharing.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          {/* ==== PROJECT CARDS ==== */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                onClick={() => setSelectedProject(project)}
                className="group p-6 rounded-xl border border-border bg-card cursor-pointer
                  transform transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:scale-[1.02]
                  hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                  hover:border-foreground/20 active:scale-[0.99]"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-secondary/70 text-secondary-foreground rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* ==== MODAL ==== */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-3xl bg-background/95 backdrop-blur-xl border border-border p-0 overflow-hidden rounded-2xl">
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="p-6 space-y-4"
              >
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-lg w-full object-cover"
                />

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {selectedProject.details}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-1" /> Code
                      </a>
                    </Button>
                  )}

                  {selectedProject.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" /> Demo
                      </a>
                    </Button>
                  )}

                  {selectedProject.figma && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={selectedProject.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Figma className="h-4 w-4 mr-1 text-pink-500" /> Figma
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}

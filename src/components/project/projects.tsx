
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,

  GitBranchIcon,

  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Gideon_Roman } from "next/font/google";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Home Nesty",
    category: "Full-Stack Web Application",
    description:
      "A modern property rental platform that connects property providers with customers looking for their ideal home.",
    image: "/projects/home-nesty.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
    ],
    features: [
      "Role-based authentication and authorization",
      "Property listing and management",
      "Property search and filtering",
      "Booking management",
      "Online payment integration",
      "Provider approval and admin dashboard",
    ],
    role: "Full-Stack Developer",
    github: "https://github.com/YOUR_USERNAME/home-nesty",
    live: "https://home-nesty-frontend-housing.vercel.app",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Full-Stack Web Application",
    description:
      "A productivity application for organizing tasks, tracking progress, and managing daily workflows.",
    image: "/projects/task-manager.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
    features: [
      "Create, edit, and delete tasks",
      "Task status and priority management",
      "Search and filtering",
      "Responsive dashboard",
      "User authentication",
    ],
    role: "Full-Stack Developer",
    github: "https://github.com/YOUR_USERNAME/task-manager",
    live: "",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "Full-Stack Web Application",
    description:
      "An online shopping platform with product discovery, shopping cart functionality, and order management.",
    image: "/projects/ecommerce.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Node.js",
      "Prisma",
    ],
    features: [
      "Product catalog and product details",
      "Shopping cart management",
      "Product search and filtering",
      "Order management",
      "Admin product dashboard",
    ],
    role: "Full-Stack Developer",
    github: "https://github.com/YOUR_USERNAME/ecommerce",
    live: "",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            My Work
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Featured{" "}
            <span className="text-primary">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A selection of projects showcasing my skills in
            full-stack development, modern UI design, and
            problem-solving.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden rounded-2xl border-border/70 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl"
            >
              {/* Project preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  width={200}
                  height={250}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <Badge className="absolute left-4 top-4">
                  {project.category}
                </Badge>
              </div>

              <CardContent className="space-y-5 p-6">
                <div>
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* Technology badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies
                    .slice(0, 4)
                    .map((technology) => (
                      <Badge
                        key={technology}
                        variant="secondary"
                        className="text-xs"
                      >
                        {technology}
                      </Badge>
                    ))}

                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-1">
                  <Button
                    className="flex-1"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>

                  {project.github && (
                    <Button
                      variant="outline"
                      size="icon"
                      
                      aria-label={`View ${project.title} source code`}
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitBranchIcon className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project details dialog */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
        >
          <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
            {selectedProject && (
              <>
                <DialogHeader>
                  <Badge
                    variant="outline"
                    className="mb-3 w-fit"
                  >
                    {selectedProject.category}
                  </Badge>

                  <DialogTitle className="text-2xl sm:text-3xl">
                    {selectedProject.title}
                  </DialogTitle>

                  <DialogDescription className="leading-6">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 pt-3">
                  <div>
                    <h4 className="mb-3 font-semibold">
                      Technologies Used
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold">
                      Key Features
                    </h4>

                    <ul className="space-y-2">
                      {selectedProject.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold">
                      My Role
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 border-t pt-5">
                    <Button >
                      <Link
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitBranchIcon className="mr-2 h-4 w-4" />
                        Source Code
                      </Link>
                    </Button>

                    {selectedProject.live && (
                      <Button variant="outline" >
                        <Link
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* All projects link */}
        <div className="mt-12 text-center">
          <Button variant="outline" >
            <Link href="/projects">
              View All Projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

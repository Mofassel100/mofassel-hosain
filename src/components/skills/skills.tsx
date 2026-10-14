
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Cloud,
  Layers,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building modern and responsive user interfaces.",
    icon: Monitor,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend Development",
    description: "Building secure APIs and server-side applications.",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "JWT",
      "Zod",
      "Multer",
    ],
  },
  {
    title: "Database & ORM",
    description: "Managing data, relationships, and queries.",
    icon: Database,
    skills: [
      "PostgreSQL",
      "Prisma ORM",
      "SQL",
      "Redis",
      "Database Design",
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Writing maintainable code and collaborating efficiently.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "npm",
      "TanStack Query",
    ],
  },
  {
    title: "Cloud & Deployment",
    description: "Deploying and maintaining production applications.",
    icon: Cloud,
    skills: [
      "Vercel",
      "Neon",
      "Cloudinary",
      "Environment Variables",
      "CI/CD Basics",
    ],
  },
  {
    title: "Full-Stack Concepts",
    description: "Connecting frontend, backend, and application services.",
    icon: Layers,
    skills: [
      "Full-Stack Development",
      "Responsive Design",
      "API Integration",
      "Form Validation",
      "Role-Based Access",
      "Performance Optimization",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-background px-5 py-5 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
          >
            <Sparkles className="h-4 w-4" />
            My Technical Expertise
          </motion.div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary via-violet-500 to-primary bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            The technologies and tools I use to build modern, scalable,
            and user-friendly web applications.
          </p>
        </motion.div>

        {/* Skill cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm backdrop-blur-xl transition-colors duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Animated top border */}
                <div className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary via-violet-500 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                <div className="mb-5 flex items-start justify-between">
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>

                  <span className="text-xs font-medium text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight">
                  {group.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                  {group.description}
                </p>

                <div className="my-5 h-px bg-border transition-colors group-hover:bg-primary/30" />

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: Math.min(skillIndex * 0.035, 0.2),
                      }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="cursor-default rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-end text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
                  Technologies
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground sm:text-base">
            Always learning, always building, always improving.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Code2,
  Layers3,
  CalendarDays,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    title: "Master of Business Administration",
    subtitle: "MBA in Accounting",
    type: "Academic",
    status: "In Progress",
    date: "Currently Pursuing",
    description:
      "Currently pursuing my MBA in Accounting to deepen my knowledge of financial management, accounting principles, and business strategy.",
    icon: GraduationCap,
  },
  {
    title: "Bachelor of Business Administration",
    subtitle: "BBA in Accounting Honours",
    type: "Academic",
    status: "Completed",
    date: "Passing Year: 2023",
    note: "Examination held in 2025",
    description:
      "Completed my bachelor's degree in Accounting Honours, developing analytical thinking, problem-solving abilities, and a strong understanding of business operations.",
    icon: GraduationCap,
  },
  {
    title: "Full Stack Web Development",
    subtitle: "Frontend & Backend Development",
    type: "Professional Training",
    status: "Completed",
    date: "Course Completed",
    description:
      "Completed full stack development training, gaining practical experience in building responsive interfaces, developing APIs, connecting databases, and creating end-to-end web applications.",
    icon: Layers3,
  },
  {
    title: "Web Development",
    subtitle: "Modern Web Technologies",
    type: "Professional Training",
    status: "Completed",
    date: "Course Completed",
    description:
      "Completed web development training and developed skills in modern web technologies, responsive design, reusable components, and interactive user experiences.",
    icon: Code2,
  },
  {
    title: "Higher Secondary Certificate",
    subtitle: "HSC",
    type: "Academic",
    status: "Completed",
    date: "Completed",
    description:
      "Completed higher secondary education, building a foundation for further academic learning and professional growth.",
    icon: BookOpen,
  },
  {
    title: "Secondary School Certificate",
    subtitle: "SSC",
    type: "Academic",
    status: "Completed",
    date: "Completed",
    description:
      "Completed secondary education and established the foundation for my academic and professional journey.",
    icon: BookOpen,
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Prisma",
  "PostgreSQL",
  "Tailwind CSS",
  "shadcn/ui",
  "REST APIs",
];

export default function Education() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="education"
      className="relative isolate overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Animated background accents */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[100px]"
      />

      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 bottom-32 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-[100px]"
      />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-5 rounded-full border-primary/30 px-4 py-2 text-primary"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            My Journey
          </Badge>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Education{" "}
            <span className="bg-gradient-to-r from-primary via-primary/70 to-primary bg-clip-text text-transparent">
              & Learning
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            My journey combines an academic background in Accounting
            with professional training in web and full stack development.
            I believe in continuous learning and building technology
            that solves real-world problems.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-7 h-1 rounded-full bg-primary"
          />
        </motion.div>

        {/* Summary cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.12,
              },
            },
          }}
          className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            {
              icon: GraduationCap,
              value: "Academic",
              label: "Education in Accounting",
            },
            {
              icon: Code2,
              value: "Web Development",
              label: "Completed Training",
            },
            {
              icon: BriefcaseBusiness,
              value: "Full Stack",
              label: "Frontend & Backend",
            },
          ].map((item) => (
            <motion.div
              key={item.value}
              variants={reveal}
              whileHover={reduceMotion ? undefined : { y: -6 }}
            >
              <Card className="h-full border-border/70 bg-card/60 backdrop-blur transition-colors duration-300 hover:border-primary/40">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">{item.value}</h3>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      {item.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold sm:text-3xl">
            My Journey Timeline
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Academic achievements and professional training.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent sm:left-7" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reduceMotion ? 0 : 0.16,
                },
              },
            }}
            className="space-y-6"
          >
            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={reveal}
                  className="group relative pl-14 sm:pl-16"
                >
                  {/* Timeline icon */}
                  <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-sm transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground sm:left-1 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5" />
                  </div>

                  <Card className="overflow-hidden border-border/70 bg-card/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                    <CardContent className="p-5 sm:p-7">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0 flex-1">
                          <div className="mb-3 flex flex-wrap items-center gap-2">
                            <Badge
                              variant={
                                item.status === "In Progress"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {item.status === "Completed" && (
                                <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                              )}
                              {item.status}
                            </Badge>

                            <Badge variant="outline">
                              {item.type}
                            </Badge>
                          </div>

                          <h4 className="text-lg font-bold leading-snug transition-colors group-hover:text-primary sm:text-xl">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-sm font-medium text-primary">
                            {item.subtitle}
                          </p>
                        </div>

                        <div className="flex w-fit shrink-0 items-center gap-2 rounded-lg border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
                          <CalendarDays className="h-4 w-4 text-primary" />
                          {item.date}
                        </div>
                      </div>

                      {item.note && (
                        <p className="mt-4 text-xs font-medium text-muted-foreground">
                          {item.note}
                        </p>
                      )}

                      <div className="my-5 h-px bg-border/70" />

                      <p className="text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors group-hover:text-primary">
                        <span>
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(education.length).padStart(2, "0")}
                        </span>
                        <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-14 group-hover:bg-primary" />
                        <span>Learning Journey</span>
                        <ArrowUpRight className="ml-auto h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Technical skills */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur sm:p-9"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Technologies I Work With
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Tools and technologies used in my development journey.
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.3,
                  delay: reduceMotion ? 0 : index * 0.045,
                }}
                whileHover={reduceMotion ? undefined : { y: -3, scale: 1.04 }}
              >
                <Badge
                  variant="outline"
                  className="rounded-lg px-3 py-2 text-sm transition-colors hover:border-primary/50 hover:bg-primary/10"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing message */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 text-center"
        >
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            <span className="font-semibold text-foreground">
              Always learning. Always building.
            </span>{" "}
            My goal is to combine business knowledge with technical
            expertise to create meaningful digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Heart,
  Code2,
  Sparkles,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Mofassel100",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mofassel-hosain-ishaq",
    icon: FaLinkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1HcxxbU6bk/",
    icon: FaFacebook,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/01752615522",
    icon: FaWhatsapp,
  },
];

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function PortfolioFooter() {
  // Stable initial value prevents current-time prerender errors.
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      id="footer"
      className="relative isolate mt-24 overflow-hidden border-t border-border/60 bg-background"
    >
      {/* Animated background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 top-10 h-72 w-72 animate-[pulse_7s_ease-in-out_infinite] rounded-full bg-primary/10 blur-[100px]" />

        <div className="absolute -right-32 top-24 h-80 w-80 animate-[pulse_9s_ease-in-out_infinite] rounded-full bg-blue-500/10 blur-[110px]" />

        <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-6 pt-16 sm:px-8 lg:px-10">
        {/* Main footer grid */}
        <div className="grid gap-12 border-b border-border/60 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand section */}
          <div className="space-y-6 lg:col-span-2">
            <Link
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <Code2 size={25} />

                <span className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-emerald-400" />
              </span>

              <span className="text-2xl font-black tracking-tight">
                Mofassel
                <span className="text-primary">.</span>
              </span>
            </Link>

            <p className="max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
              Full Stack Developer crafting modern, responsive, and
              user-friendly digital experiences with Next.js, React,
              TypeScript, Node.js, and modern web technologies.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-emerald-500/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>

              Available for new opportunities
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em]">
              <Sparkles size={15} className="text-primary" />
              Explore
            </h3>

            <ul className="space-y-3.5">
              {navigation.map((item, index) => (
                <li
                  key={item.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-[fadeInUp_0.6s_ease-out_both]"
                >
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 hover:translate-x-2 hover:text-primary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-border transition-all duration-300 group-hover:scale-150 group-hover:bg-primary" />

                    {item.name}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em]">
              Get in Touch
            </h3>

            <p className="mb-5 text-sm leading-6 text-muted-foreground">
              Have a project, an idea, or a collaboration in mind?
              Let&apos;s talk.
            </p>

            <a
              href="/contact"
              className="group inline-flex max-w-full items-center gap-3 rounded-xl border border-border bg-card/60 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <Mail size={19} />
              </span>

              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">
                  Email me
                </span>

                <span className="block break-all text-sm font-medium">
                 mofassel6145@gmail.com
                </span>
              </span>

              <ArrowUpRight
                size={16}
                className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
              />
            </a>

            <a
              href="https://wa.me/01752615522"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-emerald-500"
            >
              <FaWhatsapp size={18} />
              Let&apos;s chat on WhatsApp
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Social media section */}
        <div className="flex flex-col gap-7 py-9 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="mb-2 text-lg font-bold">
              Let&apos;s connect
              <span className="ml-1 text-primary">.</span>
            </h3>

            <p className="text-sm text-muted-foreground">
              Follow my journey and explore my work.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.name} profile`}
                  title={social.name}
                  style={{ animationDelay: `${index * 120}ms` }}
                  className="group relative flex h-12 w-12 animate-[fadeInUp_0.7s_ease-out_both] items-center justify-center overflow-hidden rounded-xl border border-border bg-card/60 text-muted-foreground transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-primary/60 hover:text-primary hover:shadow-xl hover:shadow-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-primary/10 transition-transform duration-300 group-hover:scale-y-100" />

                  <Icon
                    size={21}
                    className="relative z-10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-125"
                  />

                  <span className="absolute inset-x-2 bottom-0 h-0.5 origin-center scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Animated call-to-action */}
        <div className="relative mb-9 overflow-hidden rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                Let&apos;s build something amazing.
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Turning your ideas into real digital experiences.
              </p>
            </div>

            <Link
              href="#contact"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
            >
              Start a Project

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © {year} Mofassel Hosain. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1.5">
            Crafted with
            <Heart
              size={13}
              className="animate-[heartbeat_1.5s_ease-in-out_infinite] fill-red-500 text-red-500"
            />
            using Next.js &amp; shadcn/ui
          </p>

          <Link
            href="#home"
            aria-label="Back to top"
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
          >
            <ArrowUp
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
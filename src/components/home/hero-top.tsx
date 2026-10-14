
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,

  Globe2,
  MapPin,
  Monitor,
  Rocket,
} from "lucide-react";
import { DiGithub } from "react-icons/di";

const technologies = [
  { name: "React", className: "orbit-react" },
  { name: "Next.js", className: "orbit-next" },
  { name: "Node.js", className: "orbit-node" },
  { name: "TypeScript", className: "orbit-ts" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#080d18] text-white"
    >
      {/* Background effects */}
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="hero-glow pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="hero-glow pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />

      {/* Main content */}
      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:py-20">
        {/* LEFT: Introduction */}
        <div className="hero-content relative z-10 order-2 lg:order-1">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs font-medium tracking-wide text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
           FULL-STACK DEVELOPER · OPEN TO WORK
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
            Software Engineer
            <span className="block text-slate-400">
              &amp; Full-Stack Builder
            </span>
            <span className="mt-3 block text-3xl text-cyan-400 sm:text-4xl xl:text-5xl">
              S M Mofassel Hosain
            </span>
          </h1>

          <p className="mt-6 text-sm font-medium leading-7 text-slate-300 sm:text-base">
            Systems Architecture <span className="text-cyan-500">·</span>{" "}
            React <span className="text-cyan-500">·</span> Next.js{" "}
            <span className="text-cyan-500">·</span> Node.js
          </p>

          <h2 className="mt-5 max-w-xl text-xl font-semibold leading-relaxed text-white sm:text-2xl">
            Building digital experiences with code, creativity &amp; technology.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            CSE undergraduate at National University building modern, performant and
            accessible web products. I turn ideas into shipped interfaces —
            clean code, real deployments, measurable results.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              View Projects
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
               download="Mofassel_Hosain_Resume.pdf"
                //  target="_blank"
                //  rel="noopener noreferrer"
                // tabIndex={isOpen ? 0 : -1}  
             href="/resume/resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/5"
            >
              View Resume
              <ArrowUpRight size={16} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-400"
            >
              Contact Me :mofassel6145@gmail.com
              <ArrowDownRight size={16} />
            </a>
          </div>

          {/* Location and social links */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-cyan-400" />
              Brahmanbaria, Bangladesh
            </span>

            <a
              href="https://github.com/Mofassel100/home-nesty-frontend.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-cyan-400"
            >
              <DiGithub size={19} />
            </a>
          </div>
        </div>

        {/* RIGHT: Portrait and technology orbit */}
        <div className="hero-visual relative order-1 mx-auto flex w-full max-w-[470px] items-center justify-center lg:order-2">
          <div className="portrait-stage relative aspect-square w-full">
            {/* Orbital rings */}
            <div className="orbit-ring orbit-ring-outer" />
            <div className="orbit-ring orbit-ring-middle" />
            <div className="orbit-ring orbit-ring-inner" />

            {/* Orbiting technology labels */}
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className={`tech-orbit ${tech.className}`}
              >
                <span>{tech.name}</span>
              </div>
            ))}

            {/* Decorative nodes */}
            <span className="orbit-node-dot orbit-dot-one" />
            <span className="orbit-node-dot orbit-dot-two" />
            <span className="orbit-node-dot orbit-dot-three" />

            {/* Profile portrait */}
            <div className="portrait-halo absolute left-1/2 top-1/2 z-10 aspect-square w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full p-[3px]">
              <div className="relative h-full w-full overflow-hidden rounded-full border border-cyan-300/30 bg-slate-900 shadow-[0_0_70px_rgba(34,211,238,0.20)]">
                <Image
                  src="/images/profile.png"
                  alt="S M Mofassel Hosain — Software Engineer"
                  fill
                  priority
                  sizes="(max-width: 768px) 55vw, 260px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Floating card: Modern stack */}
            <div className="float-card float-card-top absolute left-0 top-[22%] z-20 flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/90 p-3 shadow-xl backdrop-blur-xl sm:left-2">
              <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-400">
                <Code2 size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400">Building with</p>
                <p className="text-sm font-semibold text-white">Modern Stack</p>
              </div>
            </div>

            {/* Floating card: Real projects */}
            <div className="float-card float-card-bottom absolute bottom-[19%] right-0 z-20 flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/90 p-3 shadow-xl backdrop-blur-xl sm:right-1">
              <div className="rounded-lg bg-blue-400/10 p-2 text-blue-400">
                <Rocket size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400">Focused on</p>
                <p className="text-sm font-semibold text-white">Real Projects</p>
              </div>
            </div>

            {/* Floating card: Web technology */}
            <div className="float-card float-card-side absolute right-0 top-[12%] z-20 hidden items-center gap-2 rounded-xl border border-white/10 bg-slate-900/90 p-3 backdrop-blur-xl sm:flex">
              <Globe2 size={18} className="text-emerald-400" />
              <span className="text-xs font-medium">Web Technology</span>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-1 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-slate-900/90 px-4 py-2 text-xs text-slate-300 backdrop-blur-xl">
              <Monitor size={14} className="text-cyan-400" />
              Designing. Building. Shipping.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

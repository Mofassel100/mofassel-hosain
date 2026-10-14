"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Educations", href: "/education" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu when the Escape key is pressed.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isActiveRoute = (href: string) => {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-6">
      <div className="relative mx-auto w-full max-w-7xl">
        {/* MAIN NAVBAR */}
        <nav
          aria-label="Main navigation"
          className="grid min-h-16 w-full grid-cols-[1fr_auto] items-center rounded-2xl border border-border/70 bg-background/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xl transition-colors duration-300 sm:px-6 md:grid-cols-[1fr_auto_1fr]"
        >
          {/* LEFT: BRAND */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group relative w-fit min-w-0 justify-self-start text-sm font-bold tracking-tight sm:text-xl"
            aria-label="Mofassel Hosain home"
          >
            <span className="bg-gradient-to-r from-primary via-violet-500 to-primary bg-[length:200%_auto] bg-clip-text text-transparent transition-[background-position] duration-500 group-hover:bg-right">
              Mofassel Hosain
            </span>

            <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary to-violet-500 transition-all duration-300 ease-out group-hover:w-full" />
          </Link>

          {/* CENTER: DESKTOP NAVIGATION */}
          <div className="hidden items-center justify-center gap-1 md:flex lg:gap-2">
            {navItems.map((item) => {
              const active = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300 lg:px-4 ${
                    active
                      ? "bg-primary/5 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                    {item.name}
                  </span>

                  <span
                    className={`absolute bottom-1 left-3 right-3 h-0.5 origin-center rounded-full bg-primary transition-transform duration-300 ease-out lg:left-4 lg:right-4 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* RIGHT: RESUME + MOBILE MENU BUTTON */}
          <div className="flex items-center justify-self-end gap-2">
            {/* Desktop resume button */}
            <a
              href="/resume/resume.pdf"
              download="Mofassel_Hosain_Resume.pdf"
              className="hidden sm:inline-flex"
              tabIndex={isOpen ? -1 : 0}
            >
              <Button
                variant="outline"
                size="sm"
                className="group gap-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md"
              >
                Resume
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Button>
            </a>

            {/* Mobile menu toggle: always at the right */}
            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background transition-all duration-300 hover:border-primary hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <X className="h-5 w-5 rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300" />
              )}
            </button>
          </div>
        </nav>

        {/* MOBILE DROPDOWN */}
        <div
          id="mobile-navigation"
          aria-hidden={!isOpen}
          className={`absolute right-0 top-full z-50 grid w-full overflow-hidden transition-all duration-300 ease-in-out md:hidden sm:max-w-sm ${
            isOpen
              ? "mt-2 grid-rows-[1fr] opacity-100"
              : "pointer-events-none mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <nav
              aria-label="Mobile navigation"
              className="space-y-1 rounded-2xl border border-border/70 bg-background/95 p-3 shadow-xl backdrop-blur-xl"
            >
              {navItems.map((item, index) => {
                const active = isActiveRoute(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    tabIndex={isOpen ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    style={{
                      transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                    }}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:translate-x-1 hover:bg-accent ${
                      active
                        ? "bg-primary/5 text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}

                    <ArrowRight
                      className={`h-4 w-4 transition-all duration-300 ${
                        active
                          ? "translate-x-0 text-primary opacity-100"
                          : "translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                );
              })}

              {/* Mobile resume download */}
              <a
                href="/resume/resume.pdf"
                download="Mofassel_Hosain_Resume.pdf"
                tabIndex={isOpen ? 0 : -1}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
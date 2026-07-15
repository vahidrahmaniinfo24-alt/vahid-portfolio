"use client";

import React from "react";
import { Menu, X, User, Route, FolderGit } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "about", label: "About Me", icon: User },
  { id: "roadmap", label: "Roadmap", icon: Route },
  { id: "projects", label: "Projects", icon: FolderGit },
];

const FloatingNav = () => {
  const [active, setActive] = React.useState<string>("about");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const sections = navItems
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop floating pill nav */}
      <nav className="fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 md:block">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-portfolio-surface/70 px-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <a
            href="#about"
            className="rounded-full px-3 py-1.5 text-sm font-bold text-white font-display transition hover:text-portfolio-accent"
          >
            VR
          </a>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition",
                  active === item.id
                    ? "bg-portfolio-accent text-portfolio-bg"
                    : "text-portfolio-muted hover:text-white",
                )}
              >
                <Icon size={15} />
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile floating nav */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-portfolio-bg/85 backdrop-blur-md md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#about" className="text-sm font-bold text-white font-display">
            Vahid Rahmani
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-portfolio-muted transition hover:text-portfolio-accent"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div
          className={cn(
            "grid border-t border-white/10 bg-portfolio-surface/95 transition-all duration-300 ease-in-out",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="px-4 py-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 py-2.5 text-sm font-medium text-portfolio-muted transition hover:text-white"
                  >
                    <Icon size={16} className="text-portfolio-accent" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FloatingNav;
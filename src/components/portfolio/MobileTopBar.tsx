"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "about", label: "Über mich" },
  { id: "experience", label: "Werdegang" },
  { id: "roadmap", label: "Roadmap" },
  { id: "projects", label: "Projekte" },
  { id: "skills", label: "Fachkenntnisse" },
  { id: "certificates", label: "Zertifikate" },
  { id: "contact", label: "Kontakt" },
];

const MobileTopBar = () => {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>("about");

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#09090b]/90 backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between px-5 py-4">
        <a href="#about" className="text-base font-semibold tracking-tight text-[#f4f4f5]">
          Vahid Rahmani
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-zinc-400 transition hover:text-[#f4f4f5]"
          aria-label="Menü umschalten"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div
        className={cn(
          "grid border-t border-white/[0.06] bg-[#09090b] transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <nav className="px-5 py-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-2 text-sm transition-colors",
                      active === item.id
                        ? "text-[#f4f4f5]"
                        : "text-zinc-500 hover:text-zinc-300",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MobileTopBar;
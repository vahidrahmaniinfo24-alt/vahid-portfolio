"use client";

import React from "react";
import {
  Github,
  ExternalLink,
  Network,
  Shield,
  Bot,
  Cpu,
  Globe,
  FolderGit,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  tech: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const projects: Project[] = [
  {
    title: "Automated Hybrid Network & Monitoring Dashboard",
    description:
      "Designed a virtualized hybrid network (Windows Server Active Directory & Linux clients) automated via Ansible, monitored by a custom Python-based real-time network dashboard.",
    tech: ["Ansible", "Python", "Active Directory", "Linux", "VirtualBox"],
    icon: Network,
  },
  {
    title: "Hybrid Identity Sync: Local AD to Azure Entra ID",
    description:
      "Configured a local Windows Server Active Directory domain and successfully synced users, groups, and security policies with Azure Active Directory (Entra ID) using Microsoft Entra Connect.",
    tech: ["Windows Server", "Active Directory", "Azure Entra ID", "Azure AD Connect"],
    icon: Shield,
  },
  {
    title: "Serverless Network Sentinel Bot",
    description:
      "Deployed a serverless Python script that continuously monitors server ports and instantly routes real-time network outage or latency alerts to a private Discord/Telegram channel.",
    tech: ["Python", "Serverless", "REST APIs", "Telegram Bot API"],
    icon: Bot,
  },
  {
    title: "Cloud-Connected Hardware & IoT Monitor",
    description:
      "Bridge between my hardware repair/diagnostics background and cloud technology. Connected microcontrollers to cloud IoT Hubs to stream and visualize real-time board temperature and voltage data on a web UI.",
    tech: ["Python/C++", "IoT Hub", "ESP32", "MQTT", "WebSockets"],
    icon: Cpu,
  },
  {
    title: "Global High-Availability Web Hosting with IaC",
    description:
      "Deployed a globally distributed, secure static site architecture using Cloud Storage and CDN networks, automated end-to-end via Terraform Infrastructure as Code.",
    tech: ["Terraform", "Azure Blob / AWS S3", "CloudFront / CDN", "Route 53", "SSL"],
    icon: Globe,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8 flex items-center gap-2">
        <FolderGit className="text-portfolio-accent" size={22} />
        <h2 className="text-2xl font-bold text-white font-display">Projekte</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <div
              key={project.title}
              className="group animate-fade-in-up rounded-2xl border border-white/10 bg-portfolio-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-portfolio-accent/40 hover:shadow-[0_0_28px_rgba(255,107,87,0.25)]"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-portfolio-accent/10 text-portfolio-accent transition-colors group-hover:bg-portfolio-accent/20">
                <Icon size={24} />
              </div>

              <h3 className="mb-2 text-lg font-semibold leading-snug text-white">
                {project.title}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-portfolio-muted">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-portfolio-muted ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:border-portfolio-accent hover:text-portfolio-accent"
                  aria-label="GitHub Repository (Platzhalter)"
                >
                  <Github size={14} /> GitHub
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-1.5 rounded-full bg-portfolio-accent px-4 py-2 text-xs font-semibold text-portfolio-bg transition hover:opacity-90"
                  aria-label="Live Demo (Platzhalter)"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
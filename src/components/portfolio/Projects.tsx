"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Network,
  Shield,
  Bot,
  Cpu,
  Globe,
  FolderGit,
  X,
  CheckCircle2,
  CircleDot,
} from "lucide-react";
import { cn } from "@/lib/utils";

type StepStatus = "completed" | "in-progress" | "planned";

type Step = {
  label: string;
  status: StepStatus;
};

type Project = {
  title: string;
  subtitle: string;
  description: string;
  architecture: string;
  tech: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  steps: Step[];
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "Automated Hybrid Network & Monitoring Dashboard",
    subtitle: "Ansible-automated hybrid lab with live Python telemetry",
    description:
      "Designed a virtualized hybrid network (Windows Server Active Directory & Linux clients) automated via Ansible, monitored by a custom Python-based real-time network dashboard.",
    architecture:
      "Local Virtual Network (Windows Server AD + Linux clients) → Python Agent → Flask/Streamlit Dashboard.",
    tech: ["Ansible", "Python", "Active Directory", "Linux", "VirtualBox"],
    icon: Network,
    githubUrl:
      "https://github.com/vahidrahmaniinfo24-alt/Automated-Hybrid-Network-Monitoring-Dashboard",
    steps: [
      { label: "Step 1: Design network topology and IP planning (VirtualBox).", status: "completed" },
      { label: "Step 2: Configure Windows Server AD & DNS/DHCP services (In Progress).", status: "in-progress" },
      { label: "Step 3: Write Ansible playbooks to automate Linux client provisioning.", status: "planned" },
      { label: "Step 4: Develop Python telemetry agent to collect CPU/Ping metrics.", status: "planned" },
      { label: "Step 5: Build the Streamlit dashboard and link it to the agent.", status: "planned" },
    ],
  },
  {
    title: "Hybrid Identity Sync: Local AD to Azure Entra ID",
    subtitle: "Seamless on-prem-to-cloud identity federation",
    description:
      "Configured a local Windows Server Active Directory domain and successfully synced users, groups, and security policies with Azure Active Directory (Entra ID) using Microsoft Entra Connect.",
    architecture:
      "On-Premises Windows Active Directory → Azure AD Connect → Azure Entra ID.",
    tech: ["Windows Server", "Active Directory", "Azure Entra ID", "Azure AD Connect"],
    icon: Shield,
    githubUrl:
      "https://github.com/vahidrahmaniinfo24-alt/Hybrid-Identity-Sync-Local-AD-to-Azure-Entra-ID",
    steps: [
      { label: "Step 1: Set up Windows Server 2022/2025 domain controller.", status: "completed" },
      { label: "Step 2: Create a free Azure Developer sandbox tenant.", status: "planned" },
      { label: "Step 3: Install and configure Microsoft Entra Connect on-premises.", status: "planned" },
      { label: "Step 4: Implement hybrid user synchronization and password hash sync.", status: "planned" },
      { label: "Step 5: Test and verify Single Sign-On (SSO) and Entra ID login.", status: "planned" },
    ],
  },
  {
    title: "Serverless Network Sentinel Bot",
    subtitle: "Event-driven outage alerts to chat ops",
    description:
      "Deployed a serverless Python script that continuously monitors server ports and instantly routes real-time network outage or latency alerts to a private Discord/Telegram channel.",
    architecture:
      "Cron Job → Serverless Function (Python) → Port/Ping Checker → Webhook → Discord/Telegram.",
    tech: ["Python", "Serverless", "REST APIs", "Telegram Bot API"],
    icon: Bot,
    githubUrl:
      "https://github.com/vahidrahmaniinfo24-alt/Serverless-Network-Sentinel-Bot",
    steps: [
      { label: "Step 1: Write local Python script using sockets to check TCP ports (In Progress).", status: "in-progress" },
      { label: "Step 2: Create Telegram/Discord bot token and set up API webhooks.", status: "planned" },
      { label: "Step 3: Package the script for serverless execution (Azure Functions).", status: "planned" },
      { label: "Step 4: Configure cron-trigger schedule to run every 5 minutes.", status: "planned" },
      { label: "Step 5: Implement failure recovery and alert throttling.", status: "planned" },
    ],
  },
  {
    title: "Cloud-Connected Hardware & IoT Monitor",
    subtitle: "From bench soldering to live cloud telemetry",
    description:
      "This project leverages my professional background in hardware diagnostics and board-level micro-soldering. I designed the physical circuitry, analyzed the schematics, and physically assembled microcontrollers (ESP32) connected to cloud IoT Hubs to stream and monitor real-time hardware telemetry (temperature, voltage).",
    architecture:
      "Physical Circuit Schematics → ESP32 Microcontroller → MQTT Protocol → Azure IoT Hub → Live Chart UI.",
    tech: ["Python/C++", "IoT Hub", "ESP32", "MQTT", "WebSockets"],
    icon: Cpu,
    githubUrl:
      "https://github.com/vahidrahmaniinfo24-alt/Cloud-Connected-Hardware-IoT-Monitor",
    steps: [
      { label: "Step 1: Analyze physical board schematics and trace voltage/temp test points.", status: "completed" },
      { label: "Step 2: Micro-solder wires to ESP32 ADC pins for diagnostic telemetry (In Progress).", status: "in-progress" },
      { label: "Step 3: Write C++/Python code to publish sensor data via MQTT.", status: "planned" },
      { label: "Step 4: Provision Azure IoT Hub and define routing to Azure Stream Analytics.", status: "planned" },
      { label: "Step 5: Render a real-time oscilloscope/telemetry chart on the portfolio page.", status: "planned" },
    ],
  },
  {
    title: "Global High-Availability Web Hosting with IaC",
    subtitle: "Terraform-built zero-downtime static edge",
    description:
      "Deployed a globally distributed, secure static site architecture using Cloud Storage and CDN networks, automated end-to-end via Terraform Infrastructure as Code.",
    architecture: "Terraform Configuration → Azure Blob / AWS S3 → CDN → HTTPS Cert.",
    tech: ["Terraform", "Azure Blob / AWS S3", "CloudFront / CDN", "Route 53", "SSL"],
    icon: Globe,
    githubUrl:
      "https://github.com/vahidrahmaniinfo24-alt/Global-High-Availability-Web-Hosting-with-IaC",
    steps: [
      { label: "Step 1: Design global content delivery architecture.", status: "completed" },
      { label: "Step 2: Write Terraform files for AWS S3 bucket / Azure Storage container.", status: "planned" },
      { label: "Step 3: Configure CloudFront / Azure CDN for edge caching.", status: "planned" },
      { label: "Step 4: Set up automated SSL certificate provisioning via Let's Encrypt / ACM.", status: "planned" },
      { label: "Step 5: Test deployment speeds globally and implement a clean CI/CD destroy/apply pipeline.", status: "planned" },
    ],
  },
];

const StepIcon = ({ status }: { status: StepStatus }) => {
  if (status === "completed") {
    return <CheckCircle2 size={18} className="shrink-0 text-emerald-300" />;
  }
  if (status === "in-progress") {
    return (
      <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-400"></span>
      </span>
    );
  }
  return <CircleDot size={18} className="shrink-0 text-zinc-600" />;
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const Icon = project.icon;
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#09090b] p-6 shadow-2xl sm:p-8"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-teal-400/40 hover:text-teal-400"
          aria-label="Schließen"
        >
          <X size={18} />
        </button>

        <div className="flex items-start gap-4 pr-10">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-400/10 text-teal-400">
            <Icon size={24} />
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-semibold leading-snug text-[#f4f4f5]">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-teal-400">{project.subtitle}</p>
          </div>
        </div>

        <div className="mt-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400"></span>
            </span>
            Konzeptphase
          </span>
        </div>

        <div className="mt-5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Architecture
          </p>
          <p className="text-sm leading-relaxed text-zinc-300">{project.architecture}</p>
        </div>

        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-teal-400">
            Implementation Roadmap
          </h4>
          <ul className="space-y-3">
            {project.steps.map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
              >
                <StepIcon status={step.status} />
                <span
                  className={cn(
                    "text-sm leading-relaxed",
                    step.status === "planned" ? "text-zinc-500" : "text-zinc-300",
                  )}
                >
                  {step.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.githubUrl || "#"}
            onClick={(e) => {
              if (!project.githubUrl) e.preventDefault();
            }}
            target={project.githubUrl ? "_blank" : undefined}
            rel={project.githubUrl ? "noreferrer" : undefined}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:border-teal-400/40 hover:text-teal-400"
            aria-label="GitHub Repository"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#f4f4f5] px-4 py-2 text-xs font-medium text-[#09090b] transition hover:bg-zinc-200"
            aria-label="Live Demo (Platzhalter)"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-24 border-b border-white/[0.06] px-0 py-16">
      <div className="mb-8 flex items-center gap-2">
        <FolderGit className="text-teal-400" size={20} />
        <h2 className="text-xl font-semibold tracking-tight text-[#f4f4f5]">Projekte</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <button
              key={project.title}
              onClick={() => setActiveProject(project)}
              className="group animate-fade-in-up cursor-pointer rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-400/10 text-teal-400">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium leading-snug text-[#f4f4f5]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-teal-400/80">{project.subtitle}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-400 ring-1 ring-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-xs font-medium text-teal-400 opacity-0 transition-opacity group-hover:opacity-100">
                Klicken für Roadmap →
              </p>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
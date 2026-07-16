"use client";

import React from "react";
import {
  Network,
  Code,
  Terminal,
  Shield,
  Cpu,
  ChevronDown,
  CheckCircle2,
  CircleDot,
  Milestone,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "completed" | "in-progress" | "planned";

const phases = [
  {
    id: "phase-0",
    tag: "PHASE 0",
    subtitle: "Network & Systems Engineering Foundation",
    title: "IT Systems & Networking Foundation",
    period: "2011 – 2014",
    status: "completed" as Status,
    icon: Network,
    topics: [
      "Hardware Assembly & Board-level Diagnostics (Schematics, Micro-soldering, Layer 1 Physical Assembly)",
      "CompTIA A+ (Hardware & OS)",
      "CompTIA Network+",
      "Cisco CCNA (Routing & Switching)",
      "MCSA & MCSE (Windows Server, Active Directory, DNS/DHCP, Group Policy)",
    ],
    note: "",
  },
  {
    id: "phase-1",
    tag: "PHASE 1",
    subtitle: "Web Development & Scripting Foundations",
    title: "Programming & Web Basics",
    period: "Juni 2026",
    status: "completed" as Status,
    icon: Code,
    topics: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "Python (Automation & Scripting)",
      "Git Version Control",
    ],
    note: "",
  },
  {
    id: "phase-2",
    tag: "PHASE 2",
    subtitle: "Linux, Containers & CCNA Update",
    title: "Enterprise Linux, Containers & CCNA Update",
    period: "Juli – August 2026",
    status: "in-progress" as Status,
    icon: Terminal,
    topics: [
      "Linux Enterprise Basics",
      "Microsoft Azure Administration",
      "Docker Containerization",
      "CCNA Modern Network Update (Advanced Routing/Switching in modern environments)",
    ],
    note: "",
  },
  {
    id: "phase-3",
    tag: "PHASE 3",
    subtitle: "IaC, CCNP Core & NGFW Security",
    title: "Infrastructure as Code & CCNP Core",
    period: "September – November 2026",
    status: "planned" as Status,
    icon: Shield,
    topics: [
      "Terraform (IaC)",
      "Ansible Automation",
      "CCNP Enterprise Core (ENCOR – Enterprise Network Architecture)",
      "Next-Generation Firewalls (NGFW – Fortinet FortiGate / Palo Alto Security Rules, VPNs, NAT)",
    ],
    note: "",
  },
  {
    id: "phase-4",
    tag: "PHASE 4",
    subtitle: "CI/CD Pipelines, CCNP Routing & Cloud Security",
    title: "CI/CD & Advanced Security Routing",
    period: "Dezember 2026 – Februar 2027",
    status: "planned" as Status,
    icon: Network,
    topics: [
      "Build Tools (Maven package/install)",
      "Code Quality (SonarQube analysis)",
      "Jenkins Pipelines (Checkout, Test, Build, Deploy)",
      "CCNP Enterprise Advanced Routing (ENARSI – Troubleshooting & Security Protocols)",
      "Cloud & Network Security (Firewall rules, DMZ, Azure Bastion, Network Security Groups)",
    ],
    note: "",
  },
  {
    id: "phase-5",
    tag: "PHASE 5",
    subtitle: "Cloud Architecture & Azure Specialization",
    title: "Cloud Architecture & Azure Specialization",
    period: "März – Mai 2027",
    status: "planned" as Status,
    icon: Cpu,
    topics: [
      "Azure Solutions Architecture (Hub-and-Spoke, Landing Zones)",
      "Azure Kubernetes Service (AKS) Grundlagen",
      "Azure DevOps & CI/CD mit Pipelines",
      "Cost Management & Governance in Azure",
    ],
    note: "",
  },
  {
    id: "phase-6",
    tag: "PHASE 6",
    subtitle: "Graduation Project & Job Preparation",
    title: "Graduation Project & Job Preparation",
    period: "Juni – Juli 2027",
    status: "planned" as Status,
    icon: Milestone,
    topics: [
      "Abschlussprojekt: End-to-End Cloud-Infrastruktur mit Terraform & Azure",
      "Bewerbungsunterlagen & Portfolio-Feinschliff",
      "Mock-Interviews & technische Vorbereitung",
      "Übergang in Junior Cloud Engineer / IT-Systemadministrator Rolle",
    ],
    note: "",
  },
];

const StatusBadge = ({ status }: { status: Status }) => {
  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
        <CheckCircle2 size={14} /> Abgeschlossen
      </span>
    );
  }
  if (status === "in-progress") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400"></span>
        </span>
        In Arbeit
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-zinc-500">
      <CircleDot size={14} /> Geplant
    </span>
  );
};

const nodeStyles: Record<Status, string> = {
  completed: "border-emerald-400/50 text-emerald-300",
  "in-progress": "border-teal-400/60 text-teal-400",
  planned: "border-white/15 text-zinc-500",
};

const Roadmap = () => {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  return (
    <section id="roadmap" className="scroll-mt-24 border-b border-white/[0.06] px-0 py-16">
      <div className="mb-4 flex items-center gap-2">
        <Milestone className="text-teal-400" size={20} />
        <h2 className="text-xl font-semibold tracking-tight text-[#f4f4f5]">Karriere- & Lern-Roadmap</h2>
      </div>
      <p className="mb-10 text-sm text-zinc-500">
        Vom klassischen Network & Systems Engineering bis zur modernen
        Cloud-/DevOps- und Security-Welt – mein strukturierter Weg.
      </p>

      <div className="relative">
        <div className="absolute left-[1.05rem] top-4 bottom-4 w-px bg-white/[0.08]"></div>

        <div className="space-y-6">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            const expanded = expandedId === phase.id;
            return (
              <div
                key={phase.id}
                className="relative animate-fade-in-up pl-10"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span
                  className={cn(
                    "absolute left-0 top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-[#09090b]",
                    nodeStyles[phase.status],
                  )}
                >
                  <Icon size={14} />
                </span>

                <div
                  onClick={() => setExpandedId(expanded ? null : phase.id)}
                  className="cursor-pointer rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-white/15"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                        {phase.tag}
                      </p>
                      <h3 className="text-base font-medium text-[#f4f4f5]">{phase.title}</h3>
                      <p className="text-sm text-zinc-500">{phase.subtitle}</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 sm:items-end">
                      <StatusBadge status={phase.status} />
                      <span className="text-xs text-zinc-500">{phase.period}</span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-teal-400">
                    {expanded ? "Tech Cheat Sheet verbergen" : "Tech Cheat Sheet anzeigen"}
                    <ChevronDown
                      size={16}
                      className={cn("transition-transform", expanded && "rotate-180")}
                    />
                  </div>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      expanded ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                          Tech Cheat Sheet
                        </p>
                        <ul className="space-y-2">
                          {phase.topics.map((t) => (
                            <li key={t} className="flex gap-2 text-sm text-zinc-300">
                              <span className="text-teal-400">—</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                        {phase.note && (
                          <p className="mt-3 text-xs italic text-zinc-500">{phase.note}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
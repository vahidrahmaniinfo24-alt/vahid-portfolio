"use client";

import React from "react";
import {
  Sparkles,
  Cloud,
  KeyRound,
  Server,
  Network,
  Users,
  Boxes,
  Container,
  Code,
  Terminal,
  GitBranch,
  Globe,
  Shield,
  Route,
  CircuitBoard,
  Wrench,
  FileCode,
  Scan,
} from "lucide-react";

type Skill = {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const skillGroups: { label: string; items: Skill[] }[] = [
  {
    label: "Cloud-Plattformen",
    items: [
      { name: "Microsoft Azure", icon: Cloud },
      { name: "Azure Active Directory", icon: KeyRound },
      { name: "Azure VMs", icon: Server },
      { name: "Virtual Networks (VNet)", icon: Network },
      { name: "Identity & Access (IAM)", icon: KeyRound },
    ],
  },
  {
    label: "DevOps & Automatisierung",
    items: [
      { name: "Terraform (IaC)", icon: Boxes },
      { name: "Docker", icon: Container },
      { name: "Python (Grundlagen)", icon: Code },
      { name: "Bash & PowerShell", icon: Terminal },
      { name: "Git / GitHub", icon: GitBranch },
    ],
  },
  {
    label: "Systemadministration",
    items: [
      { name: "Windows Server 2025", icon: Server },
      { name: "Active Directory (AD DS)", icon: Users },
      { name: "Linux (Ubuntu/Debian)", icon: Terminal },
    ],
  },
  {
    label: "Netzwerk & Sicherheit",
    items: [
      { name: "TCP/IP", icon: Network },
      { name: "DNS", icon: Globe },
      { name: "DHCP", icon: Network },
      { name: "Firewalls", icon: Shield },
      { name: "Routing & Switching", icon: Route },
    ],
  },
  {
    label: "Hardware & Elektronik",
    items: [
      { name: "Board-Level-Reparatur", icon: CircuitBoard },
      { name: "Mikrolöten", icon: Wrench },
      { name: "Schaltplan-Analyse", icon: FileCode },
      { name: "Hardware-Diagnose", icon: Scan },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-white/[0.06] px-0 py-16">
      <div className="mb-8 flex items-center gap-2">
        <Sparkles className="text-teal-400" size={20} />
        <h2 className="text-xl font-semibold tracking-tight text-[#f4f4f5]">Fachkenntnisse</h2>
      </div>

      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={skill.name}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 px-3.5 text-sm font-normal text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-teal-400/40 hover:bg-teal-400/5 hover:text-teal-400"
                  >
                    <Icon size={14} className="shrink-0" />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
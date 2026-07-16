import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "Weiterbildung zum Cloud Engineer",
    company: "Digital Career Institute (DCI)",
    location: "Hamburg",
    period: "06.2026 – laufend",
    points: [
      "Fokus auf moderne Enterprise-Architekturen, Netzwerksicherheit und Cloud-Migration.",
      "Praktische Implementierung von Automatisierungs-Szenarien mittels Python-Grundlagen.",
    ],
  },
  {
    role: "Kurier / Logistikmitarbeiter & IT-Hardware-Support",
    company: "Smiley Pizza",
    location: "Hamburg",
    period: "10.2023 – 03.2026",
    points: [
      "Sicherstellung und First-Level-Support der internen Mobilgeräte-Hardware der Fahrer.",
      "Logistische Planung und Routenoptimierung über digitale Koordinationsplattformen.",
    ],
  },
  {
    role: "Fahrer / Logistikmitarbeiter & Technischer Support",
    company: "Amazon Logistics",
    location: "Hamburg",
    period: "04.2023 – 09.2023",
    points: [
      "Einsatz und Routen-Anpassung über das digitale Dispatching-System Cortex.",
      "Fehlerbehebung und Hardware-Support bei Störungen an Scannern und mobilen Endgeräten.",
    ],
  },
  {
    role: "Inhaber & Hardware-Spezialist (Selbstständig)",
    company: "Eigenes IT-Fachgeschäft",
    location: "Istanbul, Türkei",
    period: "06.2020 – 12.2022",
    points: [
      "Aufbau und Betrieb eines Reparaturzentrums für anspruchsvolle Mikroelektronik.",
      "Analyse komplexer Platinen-Schaltpläne und präzises Mikrolöten (Board-Level-Reparatur).",
      "Kundenberatung, technischer Support und Systemkonfiguration für Business- und Endkunden.",
    ],
  },
  {
    role: "Network Administrator & IT-Support",
    company: "Jahan Aseman Co.",
    location: "Teheran, Iran",
    period: "2008 – 2010",
    points: [
      "Administration und Wartung der lokalen Netzwerkinfrastruktur.",
      "Benutzer-Support (Helpdesk), Hardware-Installation und Behebung von Systemstörungen.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-white/[0.06] px-0 py-16">
      <div className="mb-8 flex items-center gap-2">
        <Briefcase className="text-teal-400" size={20} />
        <h2 className="text-xl font-semibold tracking-tight text-[#f4f4f5]">Beruflicher Werdegang</h2>
      </div>
      <div className="relative border-l border-white/[0.08] pl-6">
        {experience.map((item, i) => (
          <div key={i} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[1.95rem] top-2 h-2.5 w-2.5 rounded-full border-2 border-teal-400 bg-[#09090b]"></span>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-base font-medium text-[#f4f4f5]">{item.role}</h3>
              <span className="text-xs font-medium text-teal-400">{item.period}</span>
            </div>
            <p className="text-sm text-zinc-500">{item.company} · {item.location}</p>
            <ul className="mt-3 space-y-1.5">
              {item.points.map((p, j) => (
                <li key={j} className="flex gap-2 text-sm text-zinc-400">
                  <span className="text-teal-400">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
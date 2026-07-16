import { useState } from "react";
import { Sparkles, Target, Heart, Zap, FileText } from "lucide-react";

const revealItems = [
  {
    icon: Target,
    title: "Mein Ziel",
    text: "Einstieg als Junior Cloud Engineer oder IT-Systemadministrator im Raum Hamburg, um moderne Cloud-Infrastrukturen mit Azure, Terraform und Docker mitzugestalten.",
  },
  {
    icon: Heart,
    title: "Was mich antreibt",
    text: "Die Brücke zwischen physischer Hardware und moderner Cloud-Welt zu schlagen — vom Mikrolöten bis zur Infrastructure-as-Code.",
  },
  {
    icon: Zap,
    title: "Fun Fact",
    text: "Ich habe über 2 Jahre lang anspruchsvolle Mainboards auf Komponentenebene repariert, bevor ich mich der Cloud zuwandte.",
  },
  {
    icon: FileText,
    title: "Aktuell am Lernen",
    text: "Vertiefung in Azure DevOps, Kubernetes-Grundlagen und automatisierte Cloud-Deployments mit Terraform.",
  },
];

const RevealMore = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="scroll-mt-24 border-b border-white/[0.06] px-0 py-10">
      <div className="text-center">
        <button
          onClick={() => setRevealed((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-teal-400/40 hover:text-teal-400"
        >
          <Sparkles size={16} />
          {revealed ? "Weniger anzeigen" : "Klicke hier für mehr über mich"}
        </button>
      </div>

      {revealed && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {revealItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="animate-fade-in-up rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <Icon className="text-teal-400" size={18} />
                  <h3 className="text-base font-medium text-[#f4f4f5]">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default RevealMore;
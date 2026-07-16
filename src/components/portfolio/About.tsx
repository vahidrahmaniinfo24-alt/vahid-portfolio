import { UserRound } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 border-b border-white/[0.06] px-0 py-16">
      <div className="mb-4 flex items-center gap-2">
        <UserRound className="text-teal-400" size={20} />
        <h2 className="text-xl font-semibold tracking-tight text-[#f4f4f5]">Über mich</h2>
      </div>
      <p className="text-[15px] leading-relaxed text-zinc-400">
        Dank meiner fundierten Erfahrung in der Board-Level-Reparatur, im Mikrolöten
        und im Lesen von komplexen Schaltplänen (Schematics) besitze ich ein tiefes
        Verständnis für die physische Schicht (Layer 1) der IT-Infrastruktur. Dies
        ermöglicht es mir, physische Netzwerkkomponenten, Server-Hardware und
        IoT-Geräte präzise zu assemblieren, zu verkabeln und auf Hardware-Ebene zu
        diagnostizieren. Aktuell bilde ich mich zum Cloud Engineer weiter, um diese
        physische Expertise mit moderner Cloud-Infrastruktur (Azure, Terraform,
        Docker) zu verbinden. Ich suche eine Einstiegsposition als Junior Cloud
        Engineer oder IT-Systemadministrator im Raum Hamburg.
      </p>
    </section>
  );
};

export default About;
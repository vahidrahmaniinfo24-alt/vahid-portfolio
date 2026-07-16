import { Github, Linkedin, Mail, MapPin, ArrowDown, Download } from "lucide-react";
import OpenToWorkBadge from "./OpenToWorkBadge";
import ProfilePhoto from "./ProfilePhoto";
import cvPdf from "../../../img/vahid_cv.pdf";

const Header = () => {
  return (
    <header className="border-b border-white/[0.06] pb-16 pt-4 text-center">
      <div className="mx-auto flex flex-col items-center">
        <ProfilePhoto />
        <div className="mt-6">
          <OpenToWorkBadge />
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#f4f4f5] sm:text-5xl">
          Vahid Rahmani
        </h1>
        <p className="mt-3 text-lg text-zinc-400">
          Cloud Engineer & IT System Administrator
        </p>
        <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-zinc-500">
          <MapPin size={14} className="text-teal-400" /> Hamburg, Deutschland
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-[#f4f4f5] px-5 py-2.5 text-sm font-medium text-[#09090b] transition hover:bg-zinc-200"
          >
            Kontakt aufnehmen
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:text-[#f4f4f5]"
          >
            Werdegang <ArrowDown size={15} />
          </a>
          <a
            href={cvPdf}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-teal-400/40 hover:text-teal-400"
          >
            <Download size={15} /> Lebenslauf
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5 text-zinc-500">
          <a href="https://github.com/vahidrahmaniinfo24-alt" target="_blank" rel="noreferrer" className="transition hover:text-teal-400" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/vahid-rahmani-699944417" target="_blank" rel="noreferrer" className="transition hover:text-teal-400" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:vahidrahmani.info@gmail.com" className="transition hover:text-teal-400" aria-label="E-Mail">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
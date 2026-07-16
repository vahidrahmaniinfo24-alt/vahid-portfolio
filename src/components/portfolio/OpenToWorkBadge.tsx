import { cn } from "@/lib/utils";

const OpenToWorkBadge = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/5 px-3.5 py-1.5 text-xs font-medium text-teal-400",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400"></span>
      </span>
      Open to Work
    </div>
  );
};

export default OpenToWorkBadge;
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CvDownloadDialogProps {
  cvPdf: string;
}

const CvDownloadDialog = ({ cvPdf }: CvDownloadDialogProps) => {
  const { t } = useTranslation();
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const CV_PASSWORD = "vahid2026";

  const handleDownload = () => {
    if (password === CV_PASSWORD) {
      const link = document.createElement("a");
      link.href = cvPdf;
      link.download = "vahid_cv.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsOpen(false);
      setPassword("");
      setError("");
    } else {
      setError(t("cvDialog.error"));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleDownload();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-teal-400/40 hover:text-teal-400">
          <Download size={15} /> {t("header.cvBtn")}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#18181b] border-white/10">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lock size={18} className="text-teal-400" />
            {t("cvDialog.title")}
          </DialogTitle>
          <DialogDescription>
            {t("cvDialog.description")}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-zinc-300">
              {t("cvDialog.passwordLabel")}
            </Label>
            <Input
              id="password"
              type="password"
              placeholder={t("cvDialog.placeholder")}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyDown={handleKeyDown}
              className="bg-[#27272a] border-white/10 text-white"
            />
            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setIsOpen(false);
              setPassword("");
              setError("");
            }}
            className="bg-[#27272a] text-white hover:bg-[#3f3f46]"
          >
            {t("cvDialog.cancel")}
          </Button>
          <Button
            type="button"
            onClick={handleDownload}
            className="bg-teal-500 hover:bg-teal-600 text-white"
          >
            <Download size={15} className="mr-2" />
            {t("cvDialog.download")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CvDownloadDialog;
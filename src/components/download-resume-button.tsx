"use client";

import { Download } from "lucide-react";
import { Button } from "./ui/button";

interface DownloadResumeButtonProps {
  onClick?: () => void;
}

export function DownloadResumeButton({ onClick }: DownloadResumeButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="secondary"
      className="h-8 w-fit cursor-pointer"
    >
      <Download />
      Download CV
    </Button>
  );
}

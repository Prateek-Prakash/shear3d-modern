"use client";
import { useState } from "react";
import { X, Megaphone } from "lucide-react";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="bg-[#c52100] text-white text-sm py-2 px-4 flex items-center justify-center gap-3 relative">
      <Megaphone size={14} className="shrink-0" />
      <span>
        <strong>Software On-Demand now available</strong> — Access structural engineering tools instantly in the cloud.{" "}
        <a href="/solutions#ondemand" className="underline font-semibold hover:text-white/80">Learn more →</a>
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Dismiss"
      >
        <X size={16} />
      </button>
    </div>
  );
}

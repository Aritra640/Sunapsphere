"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function ShareCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="relative cursor-pointer group w-full text-left"
    >
      <div
        className={`
          px-4 py-3 rounded-lg border 
          bg-gray-800/70 text-sm break-all 
          cursor-pointer transition
          ${copied ? "border-green-500" : "border-gray-700 group-hover:border-purple-500"}
        `}
      >
        {code}
      </div>

      <div className="absolute right-3 top-3 opacity-80 group-hover:opacity-100 transition flex items-center gap-1">
        {copied ? (
          <>
            <Check size={18} className="text-green-400" />
            <span className="text-xs text-green-400">Copied</span>
          </>
        ) : (
          <Copy size={18} className="text-gray-300" />
        )}
      </div>
    </button>
  );
}


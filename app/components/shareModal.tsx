"use client";
import { Share2, X, Check } from "lucide-react";
import { useState } from "react";

export function ShareModal() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareLink = "https://brainshare.app/share/ABC123XYZ";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 flex items-center gap-2 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm font-medium transition"
      >
        <Share2 size={16} />
        Share
      </button>

      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-gray-900 rounded-lg shadow-xl p-6 w-96 text-white relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">Share Brain</h2>

            <p className="text-sm text-gray-300 mb-3">Share using this link:</p>
            <div className="bg-gray-800 border border-gray-700 px-3 py-2 rounded-md text-sm break-all">
              {shareLink}
            </div>

            <button
              onClick={handleCopy}
              className={`w-full mt-4 py-2 cursor-pointer rounded-md text-sm transition flex items-center justify-center gap-2 
                ${copied ? "bg-green-600" : "bg-purple-600 hover:bg-purple-700"}`}
            >
              {copied ? <Check size={16} /> : null}
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

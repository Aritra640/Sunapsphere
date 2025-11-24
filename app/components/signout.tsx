"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function Signout() {
  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect("/signin");
        },
      },
    });
  }

  return (
    <button
      onClick={handleLogout}
      type="button"
      className="px-5 py-2 cursor-pointer rounded-full bg-[#1b1b25] border border-white/10 text-gray-300 text-sm hover:bg-[#28183a] hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all"
    >
      Signout
    </button>
  );
}

import React from "react";
import Sidebar from "../components/sidebar";

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-6">{children}</main>
    </div>
  );
}

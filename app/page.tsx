// app/page.tsx
import { ArrowRight, Brain, Youtube, Twitter, FileText } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#070014] via-[#120227] to-black text-white">
      <section className="flex flex-col items-center justify-center text-center pt-36 pb-28 px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
          SynapSphere
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-2xl text-gray-300 leading-relaxed">
          Your AI-powered second brain. Capture knowledge, connect ideas, and ask
          deep questions across everything you’ve stored.
        </p>

        <div className="mt-10">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 px-7 py-3 rounded-full text-lg font-semibold hover:shadow-[0_0_35px_4px_rgba(168,85,247,0.6)] transition-all"
          >
            Enter SynapSphere <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20 grid md:grid-cols-3 gap-10">
        {[
          {
            icon: <Brain className="w-12 h-12 mb-6 text-purple-400" />,
            title: "Store Anything",
            text: "Save ideas, tweets, notes, videos, PDFs, articles — your connected knowledge hub.",
          },
          {
            icon: <FileText className="w-12 h-12 mb-6 text-blue-400" />,
            title: "Structured Notes",
            text: "Organize thoughts with beautiful, minimal, lightning-fast note-taking.",
          },
          {
            icon: <Brain className="w-12 h-12 mb-6 text-green-400" />,
            title: "Ask AI Anything",
            text: "Query your second brain with context-aware intelligence using embeddings + RAG.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#1b1b25]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-purple-500/20 hover:scale-[1.03] transition-all"
          >
            {item.icon}
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="py-28 bg-[#0B0718] px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
          What SynapSphere Understands
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Twitter className="w-12 h-12 mx-auto mb-4 text-sky-400" />,
              title: "Tweets & Threads",
              text: "Save Twitter threads or tweets and ask AI to analyze, summarize, or extract insights.",
            },
            {
              icon: <Youtube className="w-12 h-12 mx-auto mb-4 text-red-500" />,
              title: "YouTube Videos",
              text: "Extract transcripts, insights, and deep understanding from videos — automatically.",
            },
            {
              icon: <FileText className="w-12 h-12 mx-auto mb-4 text-yellow-300" />,
              title: "Notes & Articles",
              text: "Store articles, research papers, notes — and link concepts effortlessly.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-[#1b1b25]/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-purple-500/20 border border-white/10 text-center hover:scale-[1.03] transition-all"
            >
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 md:px-20 text-center">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
          Think in Connections — Not Files
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Your brain doesn’t think in folders — SynapSphere builds a living,
          intelligent graph of your thoughts.
        </p>
        <Link
          href="/dashboard"
          className="px-10 py-4 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-semibold transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
        >
          Start Building Your Second Brain
        </Link>
      </section>
    </main>
  );
}


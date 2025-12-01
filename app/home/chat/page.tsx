"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "👋 Hey! I'm Brainly, your AI Thought Partner and assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    const aiReply = { role: "ai", text: "💡 This feature is upcoming..." };

    setMessages((prev) => [...prev, userMessage, aiReply]);
    setInput("");
  };

  return (
    <div className="flex justify-center">
      <div className="h-screen w-full fixed flex flex-col items-center bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden">
        <div
          className="w-full max-w-3xl sticky top-0 z-10 
        bg-gray-900/80 backdrop-blur-md 
        border-b border-gray-800 
        px-6 py-4 flex justify-center 
        shadow-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">🧠</span>
            <span className="text-base font-medium tracking-wide text-gray-200">
              Brainly
            </span>
          </div>
        </div>

        <div className="w-full max-w-3xl flex-1 overflow-y-auto px-6 pt-16 pb-6 space-y-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`
                px-5 py-3 max-w-[75%] md:max-w-[65%] rounded-2xl text-sm leading-relaxed shadow-lg 
                ${
                  msg.role === "user"
                    ? "bg-purple-600 text-white rounded-br-none"
                    : "bg-gray-800 text-gray-200 rounded-bl-none"
                }
              `}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="w-full max-w-3xl p-4 bg-gray-900 border-t border-gray-800 shadow-lg">
          <div className="flex items-center gap-3 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
            />
            <button
              onClick={handleSend}
              className="p-2 cursor-pointer bg-purple-600 hover:bg-purple-700 rounded-xl transition shadow-md"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Brainly is in preview mode — real AI responses coming soon.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

// src/components/ChatUI.jsx
"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import React, { useState, useRef, useEffect } from "react";
import { Send, Paperclip, Smile } from "lucide-react";
import { useUser } from "@/context/userContext";

// Custom scrollbar CSS (scoped to this component)
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar { width: 6px; }
  .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #5a537b; border-radius: 10px; border: 3px solid transparent;
  }
`;

// Mock initial messages
const initialMessages = [
  {
    id: 1,
    text: "wassup! 🔥 i'm ur personal stylist bot. ask me anything 'bout fits, trends, or what to wear. let's get this drip. what's the vibe today? ✨",
    sender: "bot",
  },
];

const ChatUI = () => {
  const user = useUser();
  console.log(user);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = { id: Date.now(), text: input, sender: "user",images: imageFiles,};

    async function sendMessage() {
      const res = await fetch(
        `http://localhost:3003/aiResponse?gender=${user?.gender}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );
      const data = await res.json();

      const botResponse = {
        id: Date.now() + 1,
        text: data.message, // keep Markdown as-is
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    }

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setImageFiles([]);
    sendMessage();
  };
  const fileInputRef = useRef(null);
  const [imageFiles, setImageFiles] = useState([]);

  return (
    <div className="flex flex-col h-full w-full bg-[#292440] rounded-2xl shadow-lg">
      <style>{scrollbarStyles}</style>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        multiple // ✅ allow multiple files
        onChange={(e) => setImageFiles([...e.target.files])} // array of selected files
      />
      {/* Header */}
      <div className="p-6">
        <h1 className="text-xl font-bold text-white">Ootdify Stylist</h1>
      </div>

      {/* Messages */}
      <div className="flex-1 px-6 pb-4 overflow-y-auto space-y-6 custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-4 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="flex-shrink-0 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center font-bold text-white">
                O
              </div>
            )}

            <div
              className={`max-w-md p-4 rounded-2xl text-white ${
                msg.sender === "user"
                  ? "bg-blue-600 rounded-br-none"
                  : "bg-[#413a63] rounded-bl-none"
              }`}
            >
              {/* ✅ FIX: ReactMarkdown wrapper for styling */}
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                components={{
                  // wrap markdown root with div and apply styles
                  root: ({ node, ...props }) => (
                    <div
                      className="whitespace-pre-wrap break-words leading-relaxed"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="mb-2 last:mb-0" {...props} />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-semibold" {...props} />
                  ),
                  em: ({ node, ...props }) => (
                    <em className="italic" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc pl-5 space-y-1" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal pl-5 space-y-1" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="leading-relaxed" {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                      {...props}
                    />
                  ),
                  code: ({ inline, ...props }) =>
                    inline ? (
                      <code
                        className="px-1 py-0.5 rounded bg-black/30"
                        {...props}
                      />
                    ) : (
                      <pre className="p-3 rounded bg-black/30 overflow-x-auto">
                        <code {...props} />
                      </pre>
                    ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-4 border-white/30 pl-3 italic"
                      {...props}
                    />
                  ),
                }}
              >
                {msg.text}
              </ReactMarkdown>
              {msg.sender === "user" && msg.images && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {msg.images.map((imgFile, i) => {
                    const url = URL.createObjectURL(imgFile);
                    return (
                      <img
                        key={i}
                        src={url}
                        alt="uploaded"
                        className="w-24 h-24 object-cover rounded-md"
                      />
                    );
                  })}
                </div>
              )}
            </div>
            {msg.sender === "user" && (
              <div className="flex-shrink-0 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center font-bold text-white">
                {user?.name.charAt(0).toUpperCase() || "U"}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-6">
        <form
          onSubmit={handleSendMessage}
          className="flex items-center bg-[#413a63] rounded-full px-4 py-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="spill the tea... type your message"
            className="flex-1 bg-transparent focus:outline-none text-white placeholder-gray-400"
          />
          <button type="button" className="p-2 text-gray-400 hover:text-white">
            <Smile size={22} />
          </button>
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-white"
            onClick={() => fileInputRef.current.click()}
          >
            <Paperclip size={22} />
          </button>
          <button
            type="submit"
            className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full text-white ml-2 transition-transform duration-200 hover:scale-110"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatUI;

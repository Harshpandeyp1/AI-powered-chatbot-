import React, { useState } from 'react'
import { SendHorizonal } from 'lucide-react' // Sci-fi style forward send icon

const Input = ({ messages, setMessages }) => {
  const [input, setInput] = useState('');

 const handleSend = async () => {
  if (!input.trim()) return;

  const userText = input.trim();

  const newMessage = {
    role: "user",
    content: userText
  };

  setMessages(prev => [...prev, newMessage]);

  setInput("");

  const response = await fetch(
    "http://localhost:3000/chat",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: userText
      })
    }
  );

  const data = await response.json();

  const aiMessage = {
    role: "ai",
    content: data.reply
  };

  setMessages(prev => [
    ...prev,
    aiMessage
  ]);
};

  // Allows pressing 'Enter' to fire the message instantly
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };
 
  return (
    <div className="w-full bg-[#030712]/90 border-t border-cyan-500/20 px-6 py-4 flex items-center gap-4 relative">
      
      {/* Corner micro-lines for HUD look */}
      <div className="absolute top-0 left-6 w-8 h-[1px] bg-cyan-400/40" />
      
      {/* Interactive Command Field */}
      <div className="flex-1 relative flex items-center">
        <span className="absolute left-4 font-mono text-xs text-cyan-400/60 select-none">
          &gt;_
        </span>
        <input 
          type="text" 
          placeholder="Input terminal command or request..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-slate-950/60 border border-cyan-500/10 focus:border-cyan-400/40 text-slate-100 placeholder-slate-600 font-mono text-sm pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
        />
      </div>

      {/* Sci-Fi Execute Button */}
      <button 
        onClick={handleSend}
        disabled={!input.trim()}
        className="bg-transparent border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/10 active:scale-95 text-cyan-400 disabled:opacity-30 disabled:pointer-events-none p-3 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.05)]"
      >
        <SendHorizonal className="w-4 h-4" />
      </button>

    </div>
  )
}

export default Input
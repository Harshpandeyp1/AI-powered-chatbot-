import React, { useEffect, useRef } from 'react'

const Chatwindow = ({ messages }) => {
  const bottomRef = useRef(null)

  // Smoothly scroll to the latest command line message whenever a new one arrives
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex-1 bg-[#030712]/40 backdrop-blur-sm p-6 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-cyan-500/20 max-h-[calc(100vh-140px)]">
      
      {messages.map((message, index) => {
        const isUser = message.role === "user";
        
        return (
          // Outer row wrapper handles pushing the message to the left or right side
          <div 
            key={index} 
            className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}
          >
            {/* The actual message bubble frame */}
            <div 
              className={`max-w-[75%] px-5 py-3.5 rounded-2xl font-mono text-sm shadow-md transition-all relative group border ${
                isUser
                  ? "bg-cyan-950/40 border-cyan-500/30 text-cyan-100 rounded-tr-none shadow-[0_0_15px_rgba(6,182,212,0.05)]"
                  : "bg-slate-900/60 border-slate-700/30 text-slate-200 rounded-tl-none"
              }`}
            >
              {/* Micro terminal metadata tag on hover */}
              <div className={`absolute -top-4 text-[9px] uppercase tracking-widest text-slate-500 font-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${
                isUser ? "right-0" : "left-0"
              }`}>
                {isUser ? "SOURCE // USER_INPUT" : "OUTPUT // JARVIS_CORE"}
              </div>

              {/* Message Content Body (Matches your input key structure) */}
              <p className="leading-relaxed whitespace-pre-wrap">
                {message.content}
              </p>
            </div>
          </div>
        )
      })}

      {/* Empty anchor point that keeps our viewer automatically pinned to the bottom */}
      <div ref={bottomRef} />
    </div>
  )
}

export default Chatwindow
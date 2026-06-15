import React from 'react'
import { Terminal } from 'lucide-react' // Clean sci-fi icon

const Navbar = ({setMessages}) => {
 

  // State to hold chat messages
  return (
    <nav className="w-full bg-[#030712]/80 backdrop-blur-md border-b border-cyan-500/30 px-8 py-4 flex items-center justify-between text-white sticky top-0 z-50 shadow-[0_4px_30px_rgba(6,182,212,0.05)] bg-[linear-gradient(to_right,#06b6d405_1px,transparent_1px),linear-gradient(to_bottom,#06b6d405_1px,transparent_1px)] bg-[size:14px_24px]">
      
      {/* JARVIS System Status (Left) */}
      <div className="flex flex-col relative">
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-cyan-400/70 leading-none mb-1 animate-pulse">
          SYSTEM // ACTIVE
        </span>
        <h1 className="text-sm font-light tracking-[0.2em] uppercase text-slate-100 font-mono">
          H.Pandey <span className="font-bold text-cyan-400">OS</span>
        </h1>
      </div>

      {/* Main Core Identity (Center) */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2.5 bg-cyan-950/30 border border-cyan-500/20 px-6 py-1.5 rounded-full backdrop-blur-sm">
        {/* Arc Reactor Core Pulsing Indicator */}
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></span>
        </div>
        <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-cyan-300 font-mono">
        FRIDAY
        </h2>
      </div>

      {/* Initialize Vector Action (Right) */}
      <button onClick={()=>setMessages([])} className="group flex items-center gap-2 bg-transparent border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/10 active:scale-95 text-cyan-400 text-xs font-bold uppercase tracking-widest font-mono px-4 py-2.5 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
        <Terminal className="w-3.5 h-3.5 text-cyan-400 transition-transform group-hover:translate-x-0.5" />
        <span>New Session</span>
      </button>

    </nav>
  )
}

export default Navbar
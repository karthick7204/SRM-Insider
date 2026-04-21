import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-16 border-b border-white/5 bg-[#0b1416]/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <Link href="/home" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF4500] rounded-lg flex items-center justify-center font-bold text-xl text-white">S</div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">SRM Insider</span>
        </Link>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notification Icon */}
        <button className="p-2 text-zinc-400 hover:text-[#FF4500] hover:bg-white/5 rounded-full transition-all relative group">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF4500] rounded-full border-2 border-[#0b1416]"></span>
          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Notifications</span>
        </button>

        {/* Message Icon */}
        <button className="p-2 text-zinc-400 hover:text-[#FF4500] hover:bg-white/5 rounded-full transition-all group relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Messages</span>
        </button>

        {/* Profile Icon */}
        <button className="flex items-center gap-2 p-1 pl-1 pr-2 sm:pr-3 text-zinc-400 hover:bg-white/5 rounded-full transition-all border border-transparent hover:border-white/10 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF4500] to-orange-400 flex items-center justify-center text-white text-xs font-bold">
            JD
          </div>
          <span className="text-sm font-medium text-zinc-300 group-hover:text-white hidden sm:block">John Doe</span>
        </button>
      </div>
    </header>
  );
}

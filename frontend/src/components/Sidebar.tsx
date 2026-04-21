"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Home",
    path: "/home",
    icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    )
  },
  {
    name: "Confessions",
    path: "/confessions",
    icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 7a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1zm0 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
    )
  },
  {
    name: "Project Ideas",
    path: "/project-ideas",
    icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
    )
  },
  {
    name: "Saved Posts",
    path: "/saved-posts",
    icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
    )
  },
  {
    name: "Predictions",
    path: "/predictions",
    icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
    )
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-white/5 bg-[#0b1416] h-[calc(100vh-64px)] fixed top-16 left-0 overflow-y-auto hidden md:block">
      <div className="p-4 space-y-2">
        <p className="px-4 py-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Navigation</p>
        {menuItems.map((item) => {
          const active = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                active 
                  ? "bg-[#FF4500]/10 text-[#FF4500] font-semibold" 
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className={active ? "text-[#FF4500]" : "text-zinc-500 group-hover:text-white"}>
                {item.icon(active)}
              </div>
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

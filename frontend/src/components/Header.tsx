"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Clear any local storage/session data if needed
    // localStorage.removeItem("token");
    setIsDropdownOpen(false);
    router.push("/");
  };

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

        {/* Profile Icon with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 p-1 pl-1 pr-2 sm:pr-3 text-zinc-400 hover:bg-white/5 rounded-full transition-all border border-transparent hover:border-white/10 group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF4500] to-orange-400 flex items-center justify-center text-white text-xs font-bold">
              JD
            </div>
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white hidden sm:block">John Doe</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#0b1416] border border-white/10 rounded-xl shadow-2xl py-1 z-50 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-right">
              <Link 
                href="/profile" 
                className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Account
              </Link>
              <div className="h-px bg-white/5 mx-2 my-1"></div>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

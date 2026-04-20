import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF4500] rounded-lg flex items-center justify-center font-bold text-xl text-white">S</div>
          <span className="text-xl font-bold tracking-tight">SRM Insider</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/auth/login" className="text-sm font-medium hover:text-[#FF4500] transition-colors">
            Login
          </Link>
          <Link 
            href="/auth/signup" 
            className="bg-[#FF4500] hover:bg-[#ff5722] text-white text-sm font-semibold px-5 py-2 rounded-full transition-all active:scale-95 shadow-lg shadow-[#FF4500]/20"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center">
        {/* Background Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF4500]/10 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-40 left-1/4 w-[300px] h-[300px] bg-red-600/10 blur-[100px] rounded-full -z-10"></div>

        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/20 text-[#FF4500] text-xs font-semibold tracking-wider uppercase">
          Exclusive for SRM Students
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">
          The Ultimate Portal for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-orange-500">
            SRM Insiders
          </span>
        </h1>
        
        <p className="max-w-2xl text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
          Access course materials, campus updates, and exclusive resources. 
          Everything you need to excel at SRM, all in one premium platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link 
            href="/auth/signup" 
            className="w-full sm:w-auto bg-[#FF4500] hover:bg-[#ff5722] text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all active:scale-95 shadow-xl shadow-[#FF4500]/20"
          >
            Create Your Account
          </Link>
          <Link 
            href="/auth/login" 
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-2xl text-lg transition-all border border-white/10"
          >
            Login to Portal
          </Link>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="mt-20 w-full max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-2xl relative">
            <div className="aspect-[16/9] bg-[#0f172a] rounded-2xl overflow-hidden relative border border-white/5">
                {/* Simulated UI components */}
                <div className="absolute top-4 left-4 right-4 flex gap-4">
                    <div className="w-1/3 h-32 bg-white/5 rounded-xl animate-pulse"></div>
                    <div className="w-1/3 h-32 bg-white/5 rounded-xl animate-pulse delay-75"></div>
                    <div className="w-1/3 h-32 bg-white/5 rounded-xl animate-pulse delay-150"></div>
                </div>
                <div className="absolute top-40 left-4 right-4 bottom-4 bg-white/5 rounded-xl animate-pulse delay-200"></div>
            </div>
            {/* Gloss reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none rounded-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why SRM Insider?</h2>
          <p className="text-zinc-400">Designed by students, for students.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Unified Resources",
              desc: "Get all your notes, PYQs, and study materials in a single, searchable database.",
              icon: "📚"
            },
            {
              title: "Campus Updates",
              desc: "Stay informed with real-time notifications about events, holidays, and announcements.",
              icon: "🔔"
            },
            {
              title: "Secure Access",
              desc: "Built with modern security standards to keep your data and privacy protected.",
              icon: "🛡️"
            }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FF4500]/30 transition-all hover:-translate-y-1">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-zinc-500 text-sm">
        <p>© 2026 SRM Insider. Not affiliated with SRM Institute of Science and Technology.</p>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition-colors">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
}

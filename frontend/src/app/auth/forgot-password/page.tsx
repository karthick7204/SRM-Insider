"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1416] relative overflow-hidden px-4">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-[#FF4500]/10 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Reset Password</h1>
          <p className="text-zinc-400">
            {submitted 
              ? "Check your email for reset instructions" 
              : "Enter your email to receive a reset link"}
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300 ml-1" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF4500]/50 transition-all"
                placeholder="alex@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF4500] hover:bg-[#ff5722] text-white font-semibold py-3 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-[#FF4500]/20"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="bg-[#FF4500]/10 border border-[#FF4500]/20 p-4 rounded-xl text-orange-200 text-sm">
              An email has been sent to <strong>{email}</strong>. Please follow the instructions to reset your password.
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full bg-white/5 hover:bg-white/10 text-white font-semibold py-3 rounded-xl transition-all border border-white/10"
            >
              Try another email
            </button>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-zinc-400 text-sm">
            Remember your password?{" "}
            <Link href="/auth/login" className="text-[#FF4500] font-semibold hover:text-[#ff5722] transition-colors">
              Back to Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

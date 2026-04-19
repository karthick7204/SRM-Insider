"use client";

import React, { useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [selectedTag, setSelectedTag] = useState("Confession");
  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Main Feed Column */}
      <div className="flex-1 space-y-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold tracking-tight">Home Feed</h1>
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs font-semibold border border-white/10 transition-all">New</button>
              <button className="px-4 py-2 bg-[#FF4500]/10 text-[#FF4500] rounded-full text-xs font-semibold border border-[#FF4500]/20 transition-all">Trending</button>
            </div>
            <div className="w-[1px] h-6 bg-white/10 mx-1"></div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2 bg-[#FF4500] hover:bg-[#ff5722] text-white rounded-full text-xs font-bold transition-all shadow-lg shadow-[#FF4500]/20 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              Create Post
            </button>
          </div>
        </div>

        {/* Feed Items */}
        {[
          {
            id: 1,
            author: "Anonymous",
            time: "2h ago",
            title: "The canteen prices are getting out of hand again...",
            content: "Has anyone noticed the sudden 10 rupee hike on the regular meal? It's literally the same food. We need to talk about this.",
            upvotes: 42,
            comments: 12,
            tag: "Confession"
          },
          {
            id: 2,
            author: "Vikas_SRM",
            time: "4h ago",
            title: "Looking for team members for the Smart India Hackathon!",
            content: "Working on an AI project for campus security. Need a backend dev (Node.js) and a UI designer. DMs are open!",
            upvotes: 85,
            comments: 24,
            tag: "Project Idea"
          },
          {
            id: 3,
            author: "CampusExplorer",
            time: "6h ago",
            title: "The library's new study pods are amazing!",
            content: "Just tried them today. Super quiet and the AC is perfect. Great for exam prep.",
            upvotes: 120,
            comments: 8,
            tag: "Update"
          }
        ].map((post) => (
          <div key={post.id} className="bg-[#1a1a1b] border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-all group cursor-pointer">
            <div className="flex">
              {/* Voting Bar */}
              <div className="w-12 bg-black/10 flex flex-col items-center py-4 gap-2 border-r border-white/5">
                <button className="text-zinc-500 hover:text-[#FF4500] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
                </button>
                <span className="text-xs font-bold text-zinc-300">{post.upvotes}</span>
                <button className="text-zinc-500 hover:text-[#7193ff] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-1 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] font-bold">S</div>
                  <span className="text-[10px] font-bold text-zinc-300">srm/{post.tag.toLowerCase()}</span>
                  <span className="text-zinc-500 text-[10px]">• Posted by u/{post.author}</span>
                  <span className="text-zinc-500 text-[10px]">• {post.time}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">{post.content}</p>

                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-zinc-500 hover:bg-white/5 px-2 py-1 rounded transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <span className="text-xs font-medium">{post.comments} Comments</span>
                  </button>
                  <button className="flex items-center gap-2 text-zinc-500 hover:bg-white/5 px-2 py-1 rounded transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                    <span className="text-xs font-medium">Share</span>
                  </button>
                  <button className="flex items-center gap-2 text-zinc-500 hover:bg-white/5 px-2 py-1 rounded transition-all ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column - Trending Confessions */}
      <div className="w-full lg:w-80 space-y-6">
        <div className="bg-[#1a1a1b] border border-white/5 rounded-xl p-4">
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Trending Confessions</h2>
          <div className="space-y-4">
            {[
              { id: 1, text: "I actually like the 8 AM classes...", upvotes: "1.2k" },
              { id: 2, text: "Wait, people actually study in the library?", upvotes: "850" },
              { id: 3, text: "The Java prof is secretly a rockstar.", upvotes: "2.1k" },
              { id: 4, text: "I've been using the wrong lab manual for 3 years.", upvotes: "500" },
              { id: 5, text: "Someone left a pizza in the CS lab. It's still there.", upvotes: "1.5k" },
            ].map((confession) => (
              <div key={confession.id} className="group cursor-pointer">
                <p className="text-sm text-zinc-300 group-hover:text-[#FF4500] transition-colors line-clamp-2 mb-1">
                  "{confession.text}"
                </p>
                <div className="flex items-center justify-between text-[10px] text-zinc-500 font-bold">
                  <span>u/anonymous</span>
                  <span className="text-[#FF4500]">{confession.upvotes} upvotes</span>
                </div>
                <div className="h-[1px] bg-white/5 mt-4 group-last:hidden"></div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-bold rounded-lg transition-all border border-white/5">
            View All Confessions
          </button>
        </div>

        {/* Community Guidelines Card */}
        <div className="bg-[#1a1a1b] border border-white/5 rounded-xl p-4">
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">About SRM Insider</h2>
          <p className="text-xs text-zinc-400 leading-relaxed mb-4">
            A premium community for SRMites to share, connect, and collaborate anonymously.
          </p>
          <div className="flex justify-between text-[10px] text-zinc-500 font-bold">
            <div>
              <p className="text-white">12.5k</p>
              <p>Members</p>
            </div>
            <div>
              <p className="text-white">450</p>
              <p>Online</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Create Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1a1b] border border-white/10 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-4 border-b border-white/5">
              <h2 className="text-lg font-bold">Create a post</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-all text-zinc-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Tag Selection */}
              <div className="flex gap-2 mb-2">
                {["Question"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all ${
                      selectedTag === tag 
                        ? "bg-[#FF4500]/20 border-[#FF4500] text-[#FF4500]" 
                        : "bg-white/5 border-white/10 text-zinc-400 hover:border-white/30"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder="Title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                className="w-full bg-[#272729] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#FF4500]/50"
              />
              
              <textarea
                placeholder="Text (optional)"
                rows={6}
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                className="w-full bg-[#272729] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#FF4500]/50 resize-none"
              ></textarea>
            </div>

            <div className="p-4 bg-white/5 flex justify-end gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 text-sm font-bold text-zinc-400 hover:text-white transition-all"
              >
                Cancel
              </button>
              <button 
                disabled={!postTitle.trim()}
                onClick={() => {
                  console.log("Post Created:", { postTitle, postContent, selectedTag });
                  setIsModalOpen(false);
                  setPostTitle("");
                  setPostContent("");
                }}
                className="px-8 py-2 bg-[#FF4500] hover:bg-[#ff5722] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-bold rounded-full transition-all"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



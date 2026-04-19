"use client";

import React, { useState } from "react";

const initialPredictions = [
  {
    id: 1,
    title: "CT-1 Results Date",
    description: "When will the results for Cycle Test 1 be released?",
    options: [
      { id: "a", label: "This Friday", votes: 65 },
      { id: "b", label: "Next Monday", votes: 25 },
      { id: "c", label: "Later", votes: 10 }
    ],
    endsIn: "2 days"
  },
  {
    id: 2,
    title: "Milan '26 Dates",
    description: "Community prediction for the annual cultural fest.",
    options: [
      { id: "x", label: "March 1st Week", votes: 45 },
      { id: "y", label: "March 2nd Week", votes: 40 },
      { id: "z", label: "February End", votes: 15 }
    ],
    endsIn: "1 week"
  }
];

export default function PredictionsPage() {
  const [predictions, setPredictions] = useState(initialPredictions);
  const [votedIds, setVotedIds] = useState<Record<number, string>>({});

  const handleVote = (predictionId: number, optionId: string) => {
    if (votedIds[predictionId]) return;

    setVotedIds(prev => ({ ...prev, [predictionId]: optionId }));
    
    // Simulate updating votes locally
    setPredictions(prev => prev.map(p => {
      if (p.id === predictionId) {
        return {
          ...p,
          options: p.options.map(o => 
            o.id === optionId ? { ...o, votes: o.votes + 1 } : o
          )
        };
      }
      return p;
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">Student Predictions</h1>
        <p className="text-zinc-400">Cast your vote to see what the community thinks is coming next.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {predictions.map((prediction) => {
          const hasVoted = !!votedIds[prediction.id];
          const totalVotes = prediction.options.reduce((acc, curr) => acc + curr.votes, 0);

          return (
            <div key={prediction.id} className="bg-[#1a1a1b] border border-white/5 rounded-2xl p-6 hover:border-[#FF4500]/30 transition-all shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-white">{prediction.title}</h3>
                <span className="text-[10px] font-bold text-zinc-500 bg-white/5 px-2 py-1 rounded-full uppercase tracking-wider">
                  Ends in {prediction.endsIn}
                </span>
              </div>
              <p className="text-sm text-zinc-400 mb-6">{prediction.description}</p>
              
              <div className="space-y-3">
                {prediction.options.map((opt) => {
                  const percentage = totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0;
                  const isUserChoice = votedIds[prediction.id] === opt.id;

                  return (
                    <div key={opt.id} className="relative">
                      {!hasVoted ? (
                        <button 
                          onClick={() => handleVote(prediction.id, opt.id)}
                          className="w-full text-left px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-zinc-300 hover:bg-white/10 hover:border-[#FF4500]/50 transition-all hover:translate-x-1"
                        >
                          {opt.label}
                        </button>
                      ) : (
                        <div className="space-y-1 animate-in fade-in slide-in-from-left-2 duration-300">
                          <div className="flex justify-between text-xs font-bold px-1">
                            <span className={`${isUserChoice ? "text-[#FF4500]" : "text-zinc-400"} flex items-center gap-1`}>
                              {opt.label}
                              {isUserChoice && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                              )}
                            </span>
                            <span className="text-[#FF4500]">{percentage}%</span>
                          </div>
                          <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-1000 ease-out ${isUserChoice ? "bg-[#FF4500]" : "bg-zinc-600"}`}
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {hasVoted && (
                <p className="mt-4 text-[10px] text-zinc-500 text-center font-medium uppercase tracking-widest animate-pulse">
                  Total community votes: {totalVotes}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

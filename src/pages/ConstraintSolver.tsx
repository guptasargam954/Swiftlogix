import React, { useState } from 'react';
import { 
  Zap, 
  DollarSign, 
  Clock, 
  Filter, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Package,
  Settings
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ConstraintSolver() {
  const [maxBudget, setMaxBudget] = useState(6000);
  const [maxTime, setMaxTime] = useState(48);

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
            <Settings className="w-4 h-4" />
            Solver: 14
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Constraint Solver</h1>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Constraints */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-12 text-black">
            <h3 className="text-2xl font-display font-bold mb-8">Set Your Hard Limits</h3>
            
            <div className="space-y-6">
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm font-bold mb-4 uppercase tracking-widest text-gray-400">
                    <span className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-primary" /> Max Budget</span>
                    <span className="text-dark font-display text-2xl">${maxBudget}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="15000" 
                    step="500"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm font-bold mb-4 uppercase tracking-widest text-gray-400">
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Max Time</span>
                    <span className="text-dark font-display text-2xl">{maxTime} Hours</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="168" 
                    step="1"
                    value={maxTime}
                    onChange={(e) => setMaxTime(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
               </div>
            </div>

            <div className="pt-8 border-t border-gray-50 flex items-center justify-center">
               <button className="flex items-center gap-3 px-12 py-5 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                 Run Constraint Analysis
                 <Zap className="w-5 h-5 fill-current" />
               </button>
            </div>
          </div>

          <div className="bg-dark text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]"></div>
             <h4 className="text-xl font-display font-bold mb-8 flex items-center gap-2 relative z-10 text-white">
               <CheckCircle2 className="w-5 h-5 text-primary" />
               Feasible Solution Found
             </h4>
             <div className="flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
                <div className="space-y-2">
                   <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Optimized Mode</p>
                   <p className="text-4xl font-display font-bold">Land Transport</p>
                </div>
                <div className="space-y-2 text-right">
                   <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Confidence Rating</p>
                   <p className="text-4xl font-display font-bold text-primary">96.4%</p>
                </div>
             </div>
          </div>
        </div>

        <aside className="space-y-6">
           <div className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10">
              <ShieldCheck className="w-8 h-8 mb-6 text-primary" />
              <h4 className="font-bold text-dark mb-4 uppercase tracking-[0.1em]">Constraint Logic</h4>
              <p className="text-xs text-gray-500 font-medium leading-relaxed italic mb-8">
                "System filtered out <span className="text-dark font-bold">Air transport</span> as it violates the $6,000 budget cap by 12%."
              </p>
              <div className="space-y-3">
                 <div className="flex items-center gap-3 text-xs font-bold text-red-500 line-through">Air: $12.4k (Violation)</div>
                 <div className="flex items-center gap-3 text-xs font-bold text-green-600">Land: $4.2k (Passed)</div>
                 <div className="flex items-center gap-3 text-xs font-bold text-green-600">Water: $2.1k (Passed)</div>
              </div>
           </div>

           <div className="p-8 bg-gray-50 border border-gray-100 rounded-[2.5rem]">
              <Package className="w-6 h-6 mb-4 text-gray-400" />
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Next Best Option</p>
              <p className="text-sm font-bold text-dark">Multi-modal (Rail-Truck)</p>
              <p className="text-xs text-gray-500 font-medium mt-1">Cost: $3,200 | Time: 32h</p>
           </div>
        </aside>
      </div>
    </div>
  );
}

import React from 'react';
import { 
  RotateCcw, 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  Clock, 
  DollarSign, 
  ShieldCheck,
  AlertTriangle,
  Plane,
  Truck
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ModeSwitchEngine() {
  const switchOptions = [
    { from: 'Land', to: 'Air', save: '2.1 Days', cost: '+$4,200', reason: 'High congestion on A10 highway route. Delay risk > 45%.' },
    { from: 'Air', to: 'Rail-Express', save: '- $6,100', cost: '+1.5 Days', reason: 'Current budget constraint (Under $5k) makes Air transport inefficient.' },
  ];

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      <header>
        <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
          <RotateCcw className="w-4 h-4" />
          Optimization: 11
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold">Mode Switch Engine</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-display font-bold mb-8">Active Switching Logic</h3>
            <div className="space-y-6">
               {switchOptions.map((option, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className="p-8 bg-gray-50 rounded-[2.5rem] border border-transparent hover:border-primary/20 transition-all group"
                 >
                   <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-6">
                      <div className="flex items-center gap-6">
                        <div className="flex flex-col items-center">
                           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">From</span>
                           <div className="p-4 bg-white rounded-2xl shadow-sm"><Truck className="w-6 h-6 text-dark" /></div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
                        <div className="flex flex-col items-center">
                           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">To</span>
                           <div className="p-4 bg-primary rounded-2xl shadow-lg shadow-primary/20"><Plane className="w-6 h-6 text-white" /></div>
                        </div>
                      </div>
                      <div className="flex gap-12">
                         <div className="text-center">
                           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Time Saved</span>
                           <p className="text-xl font-display font-bold text-green-500">{option.save}</p>
                         </div>
                         <div className="text-center">
                           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Cost Impact</span>
                           <p className="text-xl font-display font-bold text-red-500">{option.cost}</p>
                         </div>
                      </div>
                   </div>
                   <p className="text-sm font-medium text-gray-500 italic bg-white p-4 rounded-2xl border border-gray-100">
                     "{option.reason}"
                   </p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
           <div className="bg-dark text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]"></div>
             <Zap className="w-6 h-6 mb-6 text-primary fill-current relative z-10" />
             <h4 className="text-xl font-display font-bold mb-4 relative z-10 text-white">Dynamic Re-routing</h4>
             <p className="text-sm font-medium text-gray-400 leading-relaxed mb-8 relative z-10">
               "System is monitoring <span className="text-white">Active Flights</span>. If delay exceeds 2 hours, auto-switch to alternate cargo hub in Munich is available."
             </p>
             <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-sm shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all">
               Enable Auto-Switch
             </button>
           </div>

           <div className="p-8 bg-amber-50 border border-amber-100 rounded-[2.5rem]">
              <div className="flex items-center gap-2 text-amber-600 mb-4 font-bold uppercase tracking-widest text-[10px]">
                <AlertTriangle className="w-4 h-4" />
                Wait-Time Advisory
              </div>
              <p className="text-xs text-amber-700/80 font-semibold leading-relaxed">
                Switching to Land Transport now will bypass the 4-hour takeoff queue detected at BER airport.
              </p>
           </div>
        </aside>
      </div>
    </div>
  );
}

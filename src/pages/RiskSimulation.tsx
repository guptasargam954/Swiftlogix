import React, { useState } from 'react';
import { 
  Zap, 
  ShieldAlert, 
  TrendingUp, 
  Wind, 
  Truck, 
  AlertTriangle,
  RotateCcw,
  BarChart3,
  Dna
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function RiskSimulation() {
  const [traffic, setTraffic] = useState(30);
  const [weather, setWeather] = useState(20);
  const [congestion, setCongestion] = useState(15);

  const calculateRisk = () => {
    return Math.min(100, Math.round((traffic * 0.5) + (weather * 0.8) + (congestion * 0.4)));
  };

  const riskScore = calculateRisk();

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
            <Dna className="w-4 h-4" />
            Intel Module: 06
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Risk Simulation</h1>
        </div>
        <button 
          onClick={() => { setTraffic(30); setWeather(20); setCongestion(15); }}
          className="px-6 py-4 bg-gray-100 text-dark rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-200 transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          Reset Parameters
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Simulation Controls */}
        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10 lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { label: 'Traffic Density', val: traffic, set: setTraffic, icon: Truck },
              { label: 'Weather Severity', val: weather, set: setWeather, icon: Wind },
              { label: 'Port Congestion', val: congestion, set: setCongestion, icon: ShieldAlert },
            ].map((slider) => (
              <div key={slider.label} className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
                    <slider.icon className="w-4 h-4 text-primary" />
                    {slider.label}
                  </span>
                  <span className={`text-lg font-display font-bold ${slider.val > 60 ? 'text-red-500' : 'text-primary'}`}>{slider.val}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={slider.val}
                  onChange={(e) => slider.set(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-[2.5rem] space-y-6">
            <h3 className="text-xl font-display font-bold text-dark flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Live Impact Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="space-y-1">
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ETA Accuracy</span>
                 <p className={`text-2xl font-display font-bold ${riskScore > 50 ? 'text-amber-500' : 'text-green-500'}`}>
                   {100 - Math.round(riskScore * 0.7)}%
                 </p>
               </div>
               <div className="space-y-1">
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cost Sensitivity</span>
                 <p className="text-2xl font-display font-bold text-dark">+${Math.round(riskScore * 12.5)}</p>
               </div>
               <div className="space-y-1">
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Reliability Tier</span>
                 <p className="text-2xl font-display font-bold text-dark">{riskScore > 70 ? 'C (Poor)' : riskScore > 40 ? 'B (Stable)' : 'A (Excellent)'}</p>
               </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <aside className="space-y-8">
           <div className="bg-dark text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent"></div>
              
              <div className="relative z-10 space-y-4">
                 <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Current Risk Score</div>
                 <div className="text-8xl font-display font-bold text-primary tabular-nums">{riskScore}</div>
                 <div className={`text-lg font-bold uppercase tracking-widest ${riskScore > 70 ? 'text-red-500' : riskScore > 40 ? 'text-amber-500' : 'text-green-500'}`}>
                   {riskScore > 70 ? 'Critical' : riskScore > 40 ? 'Warning' : 'Minimal'}
                 </div>
              </div>

              <div className="w-full mt-10 pt-10 border-t border-white/5 space-y-6 relative z-10">
                 <p className="text-gray-400 text-sm font-medium leading-relaxed italic">
                   {riskScore > 50 
                     ? "Recommendation: Consider switching to Air or Rail to bypass current simulation constraints." 
                     : "Current parameters are within optimal operational bounds."
                   }
                 </p>
              </div>
           </div>

           <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
              <BarChart3 className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Sensitivity analysis</p>
              <p className="text-sm font-medium text-gray-500">
                Weather patterns contribute to <span className="text-dark font-bold">80%</span> of total risk volatility in this scenario.
              </p>
           </div>
        </aside>
      </div>
    </div>
  );
}

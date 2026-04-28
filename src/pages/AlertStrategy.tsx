import React, { useState } from 'react';
import { 
  Bell, 
  Settings, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';

export default function AlertStrategy() {
  const [riskThreshold, setRiskThreshold] = useState(40);
  const [delayThreshold, setDelayThreshold] = useState(2);

  const activeRules = [
    { title: 'Weather Guard', desc: 'Alert if storm probability > 20% on route.', status: 'Active' },
    { title: 'Congestion Monitor', desc: 'Alert if port wait time > 4 hours.', status: 'Active' },
    { title: 'Budget Protection', desc: 'Alert if fuel surcharge increases > 5%.', status: 'Paused' },
  ];

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
            <Bell className="w-4 h-4" />
            Alerts: 16
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Alert Strategy</h1>
        </div>
        <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group text-black">
          Apply All Rules
          <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-black">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-12">
              <h3 className="text-2xl font-display font-bold mb-8">Define Sensitivity Thresholds</h3>
              
              <div className="space-y-10">
                 <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <span className="flex items-center gap-3 text-sm font-bold text-gray-400 uppercase tracking-widest">
                         <ShieldAlert className="w-5 h-5 text-red-400" />
                         Risk Tolerance
                       </span>
                       <span className={`text-2xl font-display font-bold ${riskThreshold > 60 ? 'text-red-500' : 'text-primary'}`}>{riskThreshold}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={riskThreshold}
                      onChange={(e) => setRiskThreshold(Number(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Alert me if overall shipment risk exceeds this value.</p>
                 </div>

                 <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <span className="flex items-center gap-3 text-sm font-bold text-gray-400 uppercase tracking-widest">
                         <Clock className="w-5 h-5 text-amber-400" />
                         Delay Tolerance
                       </span>
                       <span className="text-2xl font-display font-bold text-primary">{delayThreshold} Hours</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="24" 
                      step="0.5"
                      value={delayThreshold}
                      onChange={(e) => setDelayThreshold(Number(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Alert me if predicted delay exceeds this window.</p>
                 </div>
              </div>
           </div>

           <div className="space-y-6">
              <h3 className="text-xl font-display font-bold px-4">Active Strategy Rules</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {activeRules.map((rule) => (
                   <div key={rule.title} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:border-primary/20 transition-all group relative">
                      <div className="flex justify-between items-center mb-4">
                         <div className={`w-3 h-3 rounded-full ${rule.status === 'Active' ? 'bg-green-500 shadow-lg shadow-green-500/20' : 'bg-gray-200'}`}></div>
                         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{rule.status}</span>
                      </div>
                      <h4 className="text-lg font-display font-bold mb-2">{rule.title}</h4>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed italic">"{rule.desc}"</p>
                      <button className="mt-6 text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                        Configure
                        <Settings className="w-3 h-3" />
                      </button>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <aside className="space-y-8">
           <div className="bg-dark text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]"></div>
              <Zap className="w-6 h-6 mb-6 text-primary fill-current relative z-10" />
              <h4 className="text-xl font-display font-bold mb-4 relative z-10 text-white">Smart Notification</h4>
              <p className="text-sm font-medium text-gray-400 leading-relaxed mb-8 relative z-10">
                "Based on your 2-hour delay threshold, system will auto-notify the <span className="text-white">Hamburg Ground Crew</span> via Mobile Alert."
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4">
                 <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                   <span className="text-gray-500">Alert Priority</span>
                   <span className="text-primary">Critical-1</span>
                 </div>
              </div>
           </div>

           <div className="p-8 bg-blue-50 border border-blue-100 rounded-[2.5rem]">
              <ShieldCheck className="w-8 h-8 mb-4 text-blue-500" />
              <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Multi-Channel Sync</h4>
              <p className="text-xs text-blue-800/80 font-semibold leading-relaxed">
                Alerts are synchronized across Email, SMS, and LogiSmart Dashboard.
              </p>
           </div>
        </aside>
      </div>
    </div>
  );
}

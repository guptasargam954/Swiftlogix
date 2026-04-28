import React from 'react';
import { 
  DollarSign, 
  TrendingDown, 
  TrendingUp, 
  Clock, 
  AlertCircle,
  BarChart3,
  ArrowRight,
  Info,
  ShieldCheck,
  Zap,
  Briefcase
} from 'lucide-react';
import { motion } from 'motion/react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

export default function CostLossAnalysis() {
  const costBreakdown = [
    { name: 'Transport', cost: 8400, color: '#3B82F6' },
    { name: 'Delay Loss', cost: 2100, color: '#EF4444' },
    { name: 'Insurance', cost: 850, color: '#10B981' },
    { name: 'Fuel Surcharge', cost: 1200, color: '#F59E0B' },
  ];

  const totalImpact = costBreakdown.reduce((sum, item) => sum + item.cost, 0);

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
            <DollarSign className="w-4 h-4" />
            Financials: 09
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Cost & Loss Engine</h1>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6">
          <div className="text-right">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Total Estimated Impact</span>
             <span className="text-2xl font-display font-bold text-dark">${totalImpact.toLocaleString()}</span>
          </div>
          <div className="w-px h-10 bg-gray-100"></div>
          <ShieldCheck className="w-8 h-8 text-green-500" />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Cost Allocation Chart */}
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-8">
             <div className="flex justify-between items-center">
               <h3 className="text-xl font-display font-bold">Financial Footprint</h3>
               <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                 <TrendingUp className="w-4 h-4" />
                 Market Weighted
               </div>
             </div>

             <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={costBreakdown} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                    <Tooltip cursor={{fill: '#f9fafb'}} />
                    <Bar dataKey="cost" radius={[0, 10, 10, 0]} barSize={24}>
                       {costBreakdown.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={entry.color} />
                       ))}
                    </Bar>
                 </BarChart>
               </ResponsiveContainer>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[60px]"></div>
               <div className="relative z-10 space-y-6">
                 <h4 className="text-lg font-display font-bold flex items-center gap-2">
                   <AlertCircle className="w-5 h-5 text-red-500" />
                   Delay Loss Estimation
                 </h4>
                 <p className="text-sm text-gray-400 leading-relaxed italic">
                   "Every hour of delay on this route costs approximately <span className="text-white font-bold">$145</span> in downstream logistics penalties."
                 </p>
                 <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                    <div>
                       <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Max Potential Loss</span>
                       <span className="text-4xl font-display font-bold text-red-500">$4,200</span>
                    </div>
                    <TrendingUp className="w-8 h-8 text-red-500" />
                 </div>
               </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 p-10 rounded-[3rem] space-y-6">
               <h4 className="text-lg font-display font-bold flex items-center gap-2 text-dark">
                 <Zap className="w-5 h-5 text-primary" />
                 Smart Comparison
               </h4>
               <p className="text-sm text-gray-500 leading-relaxed">
                 By opting for Land transport instead of Air, you are saving <span className="text-dark font-bold underline">$8,200</span> in freight cost, but risking <span className="text-red-500 font-bold">$2,100</span> in potential delay penalties.
               </p>
               <div className="bg-white p-6 rounded-3xl border border-primary/10">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    <span>Net Saving Potential</span>
                    <span>$6,100</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '75%' }}></div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <aside className="space-y-8">
           <div className="bg-white p-8 border border-gray-100 rounded-[2.5rem] shadow-sm space-y-8">
             <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Trade-off Insight</h4>
             
             <div className="space-y-6">
                {[
                  { label: 'Air (Fastest)', cost: '$12,400', risk: 'Low Delay Loss', benefit: 'True', color: 'blue' },
                  { label: 'Land (Balanced)', cost: '$4,200', risk: 'Mid Delay Loss', benefit: 'True', color: 'amber' },
                  { label: 'Water (Economy)', cost: '$2,100', risk: 'High Delay Loss', benefit: 'False', color: 'gray' },
                ].map((mode) => (
                  <div key={mode.label} className="p-5 rounded-3xl bg-gray-50 border border-transparent hover:border-primary/20 transition-all group">
                     <div className="flex justify-between items-center mb-2">
                       <span className="font-bold text-sm text-dark">{mode.label}</span>
                       <span className="text-xs font-bold text-primary">{mode.cost}</span>
                     </div>
                     <p className="text-[10px] text-gray-500 font-medium italic">{mode.risk}</p>
                  </div>
                ))}
             </div>

             <button className="w-full py-5 bg-dark text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-dark/90 transition-all group">
               Detailed Financial Report
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
           </div>

           <div className="p-8 bg-gray-900 rounded-[2.5rem] text-white">
              <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">Market Outlook</h4>
              <p className="text-xs font-medium text-gray-400 leading-relaxed mb-6">
                Fuel surcharges for trans-continental flights are expected to rise <span className="text-white font-bold">4.2%</span> next week. Locking current rates is advised.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-primary group cursor-pointer">
                Lock rates now
                <TrendingDown className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
}

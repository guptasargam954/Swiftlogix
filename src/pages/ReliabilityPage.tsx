import React from 'react';
import { 
  ShieldCheck, 
  BarChart3, 
  History, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  Zap,
  ArrowUpRight,
  Plane,
  Truck,
  Ship
} from 'lucide-react';
import { motion } from 'motion/react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Legend } from 'recharts';

export default function ReliabilityPage() {
  const performanceData = [
    { mode: 'Air', onTime: 98, total: 100 },
    { mode: 'Land', onTime: 82, total: 100 },
    { mode: 'Water', onTime: 65, total: 100 },
  ];

  const historicalTrends = [
    { month: 'Jun', reliability: 92 },
    { month: 'Jul', reliability: 88 },
    { month: 'Aug', reliability: 95 },
    { month: 'Sep', reliability: 91 },
    { month: 'Oct', reliability: 94 },
  ];

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      <header>
        <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
          <ShieldCheck className="w-4 h-4" />
          Trust Module: 12
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold">Reliability Index</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
              <div className="flex justify-between items-center">
                 <h3 className="text-xl font-display font-bold text-dark">On-Time Distribution</h3>
                 <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                    <History className="w-4 h-4" />
                    Last 1,000 Shipments
                 </div>
              </div>
              <div className="h-64 w-full">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={performanceData}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                     <XAxis dataKey="mode" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                     <YAxis hide />
                     <Tooltip cursor={{fill: '#f9fafb'}} />
                     <Bar dataKey="onTime" radius={[10, 10, 0, 0]} barSize={40}>
                        {performanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={['#3B82F6', '#10B981', '#6366F1'][index % 3]} />
                        ))}
                     </Bar>
                   </BarChart>
                 </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-50">
                 {performanceData.map((p) => (
                   <div key={p.mode} className="text-center">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">{p.mode} Score</span>
                      <p className="text-2xl font-display font-bold text-dark">{p.onTime}%</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <aside className="space-y-6">
           <div className="bg-dark text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent"></div>
              <div className="relative z-10">
                 <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-6" />
                 <h4 className="text-xl font-display font-bold mb-2">Overall Reliability</h4>
                 <p className="text-5xl font-display font-bold text-white mb-4">94.8%</p>
                 <div className="flex items-center justify-center gap-2 text-green-400 text-sm font-bold uppercase tracking-widest">
                    <TrendingUp className="w-4 h-4" />
                    +1.2% this month
                 </div>
              </div>
           </div>

           <div className="bg-primary/5 border border-primary/10 p-8 rounded-[2.5rem]">
              <Zap className="w-6 h-6 mb-4 text-primary fill-primary/10" />
              <h4 className="font-bold text-dark mb-2">Route Insight</h4>
              <p className="text-xs text-gray-500 font-medium leading-relaxed italic">
                "Berlin → Hamburg is currently categorized as <span className="text-primary font-bold">Ultra-Reliable</span> (99.2% success) for Land transport."
              </p>
           </div>
        </aside>
      </div>
    </div>
  );
}

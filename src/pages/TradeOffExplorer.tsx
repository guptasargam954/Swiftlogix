import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  ArrowRight, 
  DollarSign, 
  Clock, 
  Zap, 
  Info,
  Package,
  History
} from 'lucide-react';
import { motion } from 'motion/react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function TradeOffExplorer() {
  const data = [
    { x: 5, y: 12400, name: 'Air-Priority', risk: 2 },
    { x: 12, y: 9200, name: 'Air-Economy', risk: 5 },
    { x: 20, y: 4200, name: 'Road-Direct', risk: 4 },
    { x: 45, y: 3200, name: 'Multi-Modal', risk: 6 },
    { x: 144, y: 2100, name: 'Water-Direct', risk: 8 },
  ];

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      <header>
        <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
          <TrendingUp className="w-4 h-4" />
          Analytics: 15
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold">Trade-off Explorer</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-black">
        <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
           <div className="flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Cost vs. Delivery Time</h3>
              <div className="p-3 bg-gray-50 rounded-2xl">
                 <BarChart3 className="w-5 h-5 text-gray-400" />
              </div>
           </div>

           <div className="h-96 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis type="number" dataKey="x" name="Time" unit="h" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                  <YAxis type="number" dataKey="y" name="Cost" unit="$" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                  <ZAxis type="number" dataKey="risk" range={[100, 1000]} name="Risk" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                  <Scatter name="Transport Modes" data={data} fill="#3B82F6">
                     {data.map((entry, index) => (
                       <motion.circle 
                          key={`cell-${index}`} 
                          fill={['#3B82F6', '#6366F1', '#10B981', '#F59E0B', '#EF4444'][index % 5]} 
                       />
                     ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
           </div>

           <div className="pt-10 border-t border-gray-50 text-center">
              <p className="text-sm font-medium text-gray-500 italic">
                "The 'Road-Direct' option is currently in the <span className="text-primary font-bold">Efficiency Sweet Spot</span> for your specific cargo volume."
              </p>
           </div>
        </div>

        <aside className="space-y-6">
           <div className="bg-dark text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]"></div>
              <Zap className="w-6 h-6 mb-6 text-primary fill-current relative z-10" />
              <h4 className="text-xl font-display font-bold mb-4 text-white relative z-10">Smart Pareto Scan</h4>
              <p className="text-sm font-medium text-gray-400 leading-relaxed relative z-10">
                System identified that paying <span className="text-white font-bold">$1,200</span> more for 'Air-Economy' reduces your delivery time by <span className="text-primary font-bold">38%</span>.
              </p>
           </div>

           <div className="bg-white p-8 border border-gray-100 rounded-[2.5rem] shadow-sm space-y-6">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Decision Nodes</h4>
              <div className="space-y-4">
                 {[
                   { label: 'Time Advantage', val: 'High', color: 'blue' },
                   { label: 'Budget Efficiency', val: 'Optimal', color: 'green' },
                   { label: 'Risk Protection', val: 'Balanced', color: 'amber' },
                 ].map((node) => (
                   <div key={node.label} className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                      <span className="text-xs font-bold text-dark">{node.label}</span>
                      <span className={`text-[10px] font-bold text-${node.color}-500 uppercase tracking-widest`}>{node.val}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10">
              <Info className="w-6 h-6 mb-4 text-primary" />
              <p className="text-xs text-gray-500 font-medium leading-relaxed italic">
                The explorer uses <span className="text-dark font-bold font-display">Monte Carlo</span> simulations to project risk-cost variability.
              </p>
           </div>
        </aside>
      </div>
    </div>
  );
}

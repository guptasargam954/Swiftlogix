import React from 'react';
import { 
  History, 
  Search, 
  Filter, 
  ArrowRight, 
  CheckCircle2, 
  Package, 
  MapPin, 
  Calendar,
  Zap,
  TrendingDown,
  LayoutDashboard
} from 'lucide-react';
import { motion } from 'motion/react';

export default function LearningHistory() {
  const pastShipments = [
    { id: 'SL-8842', date: 'Oct 12, 2024', route: 'Berlin → Paris', mode: 'Air', status: 'Optimal', cost: '$3,800' },
    { id: 'SL-7712', date: 'Oct 08, 2024', route: 'Munich → London', mode: 'Land', status: 'Delay Risk Hit', cost: '$1,200' },
    { id: 'SL-6651', date: 'Oct 02, 2024', route: 'Berlin → Tokyo', mode: 'Air', status: 'Optimal', cost: '$12,400' },
  ];

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
            <History className="w-4 h-4" />
            Learning: 13
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Logistics Memory</h1>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
           <Zap className="w-5 h-5 text-primary fill-primary/10" />
           <span className="text-sm font-bold text-dark uppercase tracking-widest">System is Learning...</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
           <div className="bg-white rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                 <h3 className="text-xl font-display font-bold text-dark">Shipment Archive</h3>
                 <div className="relative">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                   <input type="text" placeholder="Search history..." className="pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl text-xs focus:ring-1 focus:ring-primary outline-none" />
                 </div>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead className="bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                     <tr>
                       <th className="px-8 py-6">ID & Date</th>
                       <th className="px-8 py-6">Route & Mode</th>
                       <th className="px-8 py-6">Performance</th>
                       <th className="px-8 py-6 text-right">Impact</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-50">
                     {pastShipments.map((shipment) => (
                       <tr key={shipment.id} className="group hover:bg-gray-50 transition-all">
                         <td className="px-8 py-8">
                           <p className="font-bold text-dark text-sm">{shipment.id}</p>
                           <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">{shipment.date}</p>
                         </td>
                         <td className="px-8 py-8">
                           <p className="text-sm font-medium text-dark flex items-center gap-2">
                             {shipment.route}
                             <span className="text-[10px] font-bold px-2 py-0.5 bg-primary/10 text-primary rounded">{shipment.mode}</span>
                           </p>
                         </td>
                         <td className="px-8 py-8">
                           <div className={`flex items-center gap-2 text-xs font-bold ${shipment.status.includes('Risk') ? 'text-amber-500' : 'text-green-600'}`}>
                              <CheckCircle2 className="w-4 h-4" />
                              {shipment.status}
                           </div>
                         </td>
                         <td className="px-8 py-8 text-right font-display font-bold text-dark">
                           {shipment.cost}
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
              </div>
           </div>
        </div>

        <aside className="space-y-6">
           <div className="bg-dark text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
              <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-2 relative z-10">
                <LayoutDashboard className="w-5 h-5 text-primary" />
                Pattern Analysis
              </h4>
              <p className="text-sm font-medium text-gray-400 leading-relaxed mb-6 relative z-10 italic">
                "System identified <span className="text-white">Seasonal Congestion</span> recurring every Oct 24th - 28th at London hubs. Auto-advisory active."
              </p>
              <div className="flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-widest relative z-10">
                View Pattern Details
                <ArrowRight className="w-4 h-4" />
              </div>
           </div>

           <div className="p-8 bg-gray-50 border border-gray-200 rounded-[2.5rem] text-center">
              <TrendingDown className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Learning impact</h4>
              <p className="text-xl font-display font-bold text-dark">-8% Costs</p>
              <p className="text-[10px] text-gray-400 font-medium mt-2 leading-relaxed">
                Optimization based on past data has lowered average logistics spend by 8%.
              </p>
           </div>
        </aside>
      </div>
    </div>
  );
}

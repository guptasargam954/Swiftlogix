import React from 'react';
import { 
  History, 
  MapPin, 
  ArrowRight, 
  Clock, 
  Zap,
  Truck,
  Ship,
  Plane,
  Box,
  LayoutDashboard
} from 'lucide-react';
import { motion } from 'motion/react';

export default function MultiModalJourney() {
  const segments = [
    { type: 'Road', mode: Truck, from: 'Factory A (Berlin)', to: 'Port of Hamburg', time: '3.2h', cost: '$450', status: 'Completed' },
    { type: 'Water', mode: Ship, from: 'Port of Hamburg', to: 'New York Container Term.', time: '142h', cost: '$1,800', status: 'Active' },
    { type: 'Road', mode: Truck, from: 'N.Y. Terminal', to: 'Warehouse 9 (Jersey)', time: '1.5h', cost: '$210', status: 'Pending' },
  ];

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      <header>
        <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
          <LayoutDashboard className="w-4 h-4" />
          Logistics Design: 10
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold">Multi-Modal Flow</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-12">
          {/* Visual Journey Bar */}
          <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              {/* Connector Lines */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block"></div>
              
              {segments.map((segment, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center gap-6 group mb-12 md:mb-0">
                  <div className={`p-6 rounded-[2rem] shadow-xl transition-all ${
                    segment.status === 'Active' ? 'bg-primary text-white scale-110 shadow-primary/30 ring-8 ring-primary/5' : 
                    segment.status === 'Completed' ? 'bg-dark text-white opacity-60' : 
                    'bg-white text-gray-400 border border-gray-100'
                  }`}>
                    <segment.mode className="w-8 h-8" />
                  </div>
                  <div className="text-center">
                    <p className="font-display font-bold text-dark">{segment.type}</p>
                    <p className={`text-[10px] font-bold uppercase tracking-widest ${
                      segment.status === 'Active' ? 'text-primary' : 
                      segment.status === 'Completed' ? 'text-gray-400' : 
                      'text-gray-300'
                    }`}>{segment.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold px-4">Segment Breakdown</h3>
            <div className="space-y-4">
               {segments.map((segment, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className={`p-8 rounded-[2.5rem] border flex flex-col md:flex-row items-center justify-between gap-8 transition-all ${
                     segment.status === 'Active' ? 'bg-white border-primary/20 shadow-lg' : 'bg-gray-50/50 border-gray-100'
                   }`}
                 >
                   <div className="flex items-center gap-6 flex-grow min-w-0">
                      <div className={`p-4 rounded-2xl ${segment.status === 'Active' ? 'bg-primary/10 text-primary' : 'bg-gray-200 text-gray-500'}`}>
                        <segment.mode className="w-6 h-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-bold text-dark truncate">{segment.from}</span>
                          <ArrowRight className="w-4 h-4 text-gray-300 shrink-0" />
                          <span className="font-bold text-dark truncate">{segment.to}</span>
                        </div>
                        <p className="text-xs text-gray-400 font-medium">Segment {idx + 1} | {segment.type} Freight</p>
                      </div>
                   </div>

                   <div className="flex gap-12 items-center shrink-0">
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Cost</span>
                        <span className="text-lg font-display font-bold text-dark">{segment.cost}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Time</span>
                        <span className="text-lg font-display font-bold text-dark">{segment.time}</span>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${segment.status === 'Active' ? 'bg-primary' : segment.status === 'Completed' ? 'bg-gray-300' : 'bg-white border border-gray-200'}`}></div>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
           <div className="bg-dark text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]"></div>
              <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-2 relative z-10">
                <Box className="w-5 h-5 text-primary" />
                Inter-modal Sync
              </h4>
              <p className="text-sm font-medium text-gray-400 leading-relaxed mb-8 relative z-10">
                "System optimized the <span className="text-white">Hamburg-to-Sea</span> transition to align with the next departure window, saving <span className="text-primary font-bold">12 hours</span> of idle yard time."
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4">
                 <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                   <span className="text-gray-500">Wait Time at Hub</span>
                   <span className="text-green-400">Low (2.1h)</span>
                 </div>
                 <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '30%' }}></div>
                 </div>
              </div>
           </div>

           <div className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10">
              <Zap className="w-6 h-6 mb-4 text-primary fill-primary/20" />
              <h4 className="font-bold text-dark mb-2">Efficiency Rating</h4>
              <p className="text-xs text-gray-500 font-medium leading-relaxed italic">
                "Multi-modal chaining is 24% more cost-effective for this specific volume (1,200kg) compared to direct air delivery."
              </p>
           </div>
        </aside>
      </div>
    </div>
  );
}

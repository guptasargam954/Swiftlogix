import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  History, 
  Package, 
  MapPin, 
  Clock, 
  DollarSign, 
  ShieldCheck,
  Plane,
  Truck,
  Ship,
  Inbox
} from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function FinalSummary() {
  const navigate = useNavigate();

  const summary = {
    id: 'SL-9823-X',
    mode: 'Road Transport (Direct)',
    icon: Truck,
    origin: 'Berlin Hub-01',
    dest: 'Hamburg Terminal',
    eta: 'Oct 28, 2024 | 14:30',
    cost: '$4,206.50',
    risk: 'Low (Safe)',
    actionsTaken: [
      'Route Optimized (A10 Bypass)',
      'Handling Buffers Applied',
      'Cost-Locking Initialized'
    ]
  };

  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto space-y-12">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 p-3 bg-green-50 text-green-600 rounded-full text-xs font-bold uppercase tracking-widest border border-green-100 mb-4">
          <CheckCircle2 className="w-4 h-4" />
          Plan Finalized
        </div>
        <h1 className="text-5xl md:text-6xl font-display font-bold">Execution Summary</h1>
        <p className="text-gray-400 font-medium max-w-xl mx-auto">Review your final shipment architecture before execution. System is ready to lock rates.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-2xl relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 p-12">
                 <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10">
                    <summary.icon className="w-12 h-12 text-primary" />
                 </div>
              </div>

              <div className="space-y-10 relative z-10">
                 <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Shipment Identifier</span>
                    <h3 className="text-3xl font-display font-bold text-dark">{summary.id}</h3>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                       <div className="flex items-start gap-4">
                          <MapPin className="w-5 h-5 text-primary mt-1" />
                          <div>
                             <span className="text-[10px] font-bold text-gray-400 uppercase block">Route</span>
                             <p className="font-bold text-dark">{summary.origin} → {summary.dest}</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-4">
                          <Clock className="w-5 h-5 text-amber-500 mt-1" />
                          <div>
                             <span className="text-[10px] font-bold text-gray-400 uppercase block">Estimated Delivery</span>
                             <p className="font-bold text-dark">{summary.eta}</p>
                          </div>
                       </div>
                    </div>
                    <div className="space-y-6">
                       <div className="flex items-start gap-4">
                          <DollarSign className="w-5 h-5 text-green-500 mt-1" />
                          <div>
                             <span className="text-[10px] font-bold text-gray-400 uppercase block">Total Cost (Locked)</span>
                             <p className="font-bold text-dark">{summary.cost}</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-4">
                          <ShieldCheck className="w-5 h-5 text-blue-500 mt-1" />
                          <div>
                             <span className="text-[10px] font-bold text-gray-400 uppercase block">Risk Profile</span>
                             <p className="font-bold text-dark">{summary.risk}</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="pt-10 border-t border-gray-50">
                    <h4 className="text-xs font-bold text-dark uppercase tracking-widest mb-6">Optimization Actions Taken</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {summary.actionsTaken.map((action, i) => (
                         <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl text-xs font-bold text-gray-500 border border-transparent hover:border-primary/20 transition-all cursor-default">
                            <Zap className="w-4 h-4 text-primary fill-primary/10" />
                            {action}
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>

        <aside className="space-y-8">
           <div className="bg-dark text-white p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent"></div>
              
              <div className="relative z-10">
                 <Package className="w-12 h-12 text-primary mb-8" />
                 <h4 className="text-3xl font-display font-bold mb-4">Execute Shipment</h4>
                 <p className="text-gray-400 text-sm font-medium leading-relaxed">
                   Confirm and dispatch your logistics plan. Real-time monitoring will begin immediately upon execution.
                 </p>
              </div>

              <div className="space-y-4 relative z-10">
                 <button className="w-full py-6 bg-primary text-white rounded-3xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-4 group">
                   Confirm & Dispatch
                   <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                 </button>
                 <button className="w-full py-4 text-gray-500 text-sm font-bold hover:text-white transition-colors">
                   Save Plan to Drafts
                 </button>
              </div>
           </div>

           <div className="p-8 bg-white border border-gray-100 rounded-[2.5rem] text-center shadow-sm">
              <History className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <p className="text-xs font-medium text-gray-400 leading-relaxed italic">
                 "This plan has a <span className="text-dark font-bold underline">12.5%</span> better efficiency rating than your average October shipments."
              </p>
           </div>
        </aside>
      </div>
    </div>
  );
}

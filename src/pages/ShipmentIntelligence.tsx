import React from 'react';
import { 
  Package, 
  ShieldCheck, 
  Thermometer, 
  AlertTriangle, 
  Scale, 
  Info,
  ArrowRight,
  Zap,
  Truck,
  Plane,
  Inbox
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ShipmentIntelligence() {
  const handlingRules = [
    { title: 'Temperature Control', detail: 'Maintain 2°C - 8°C throughout journey.', icon: Thermometer, status: 'Active' },
    { title: 'Shock Prevention', detail: 'G-force threshold < 1.5G. Use air-ride suspension.', icon: Zap, status: 'Advisory' },
    { title: 'Weight distribution', detail: 'Center-loading required for heavy stability.', icon: Scale, status: 'Active' },
  ];

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      <header>
        <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
          <Package className="w-4 h-4" />
          Intelligence: 08
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold">Shipment DNA</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                    <Inbox className="w-8 h-8" />
                 </div>
                 <div>
                   <h2 className="text-2xl font-display font-bold">Perishable Fragile Load</h2>
                   <p className="text-sm font-medium text-gray-400">Custom handling profile applied</p>
                 </div>
              </div>
              <div className="px-5 py-2 bg-dark text-white rounded-full text-xs font-bold uppercase tracking-widest">
                High Priority
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="p-6 bg-gray-50 rounded-3xl space-y-3">
                 <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Handling Mode</h4>
                 <div className="flex items-center gap-2 font-bold text-dark">
                   <Plane className="w-4 h-4 text-primary" />
                   Air Preferred
                 </div>
               </div>
               <div className="p-6 bg-gray-50 rounded-3xl space-y-3">
                 <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Risk Factor</h4>
                 <div className="flex items-center gap-2 font-bold text-amber-500">
                   <AlertTriangle className="w-4 h-4" />
                   Bio-Hazard L1
                 </div>
               </div>
               <div className="p-6 bg-gray-50 rounded-3xl space-y-3">
                 <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Insurance Tier</h4>
                 <div className="flex items-center gap-2 font-bold text-green-600">
                   <ShieldCheck className="w-4 h-4" />
                   Premium Plus
                 </div>
               </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-lg font-display font-bold text-dark">Required Handling Protocol</h3>
               <div className="space-y-3">
                 {handlingRules.map((rule) => (
                   <div key={rule.title} className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl hover:border-primary/20 transition-all group">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-primary/10 transition-colors">
                          <rule.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-dark text-sm">{rule.title}</p>
                          <p className="text-xs text-gray-400">{rule.detail}</p>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${rule.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                        {rule.status}
                      </span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-dark text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]"></div>
            <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-2 relative z-10">
              <Zap className="w-5 h-5 text-primary" />
              Smart Logic
            </h4>
            <p className="text-sm font-medium text-gray-400 leading-relaxed mb-6 relative z-10">
              "System detected <span className="text-white font-bold">Fragile Components</span>. Auto-routing to avoid high-vibration segments in Central European hub transfers."
            </p>
            <div className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest group cursor-pointer relative z-10">
              Apply extra padding rules
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="p-8 bg-gray-50 border border-gray-100 rounded-[2.5rem]">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Compatibility Scan</h4>
            <div className="space-y-4">
               {[
                 { mode: 'Air', status: 'Perfect Fit', color: 'green' },
                 { mode: 'Land', status: 'Buffered Hubs', color: 'blue' },
                 { mode: 'Water', status: 'Avoid (Slow)', color: 'red' },
               ].map((item) => (
                 <div key={item.mode} className="flex justify-between items-center bg-white p-4 rounded-2xl border border-gray-100">
                    <span className="font-bold text-sm">{item.mode}</span>
                    <span className={`text-[10px] font-bold text-${item.color}-500 uppercase tracking-widest`}>{item.status}</span>
                 </div>
               ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

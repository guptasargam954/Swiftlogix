import React from 'react';
import { 
  History, 
  MapPin, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Search,
  Filter,
  ArrowUpRight,
  Plane,
  Truck,
  Zap,
  MoreVertical
} from 'lucide-react';
import { motion } from 'motion/react';

export default function RealTimeMonitoring() {
  const activeShipments = [
    { id: 'SL-9823', mode: 'Air', origin: 'Berlin', dest: 'London', status: 'In Transit', risk: 'Low', progress: 65, eta: '14:20' },
    { id: 'SL-1245', mode: 'Land', origin: 'Paris', dest: 'Madrid', status: 'In Transit', risk: 'High', progress: 32, eta: '21:00' },
    { id: 'SL-5567', mode: 'Air', origin: 'New York', dest: 'Tokyo', status: 'Delayed', risk: 'Critical', progress: 45, eta: '08:00 (Next Day)' },
  ];

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2 text-black">
            <Zap className="w-4 h-4 fill-current text-primary" />
            Execution: 07
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Live Monitoring</h1>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
             <input type="text" placeholder="Search shipments..." className="w-full md:w-64 pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl text-sm focus:ring-2 focus:ring-primary outline-none transition-all shadow-sm" />
          </div>
          <button className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:bg-gray-50 transition-all">
            <Filter className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Status Overview Cards */}
        {[
          { label: 'Active Shipments', val: '12', color: 'blue' },
          { label: 'Delays Detected', val: '03', color: 'red' },
          { label: 'On Time Rate', val: '94%', color: 'green' },
          { label: 'Avg Transit Time', val: '18.4h', color: 'amber' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4">{stat.label}</span>
            <p className="text-3xl font-display font-bold text-dark">{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center">
           <h3 className="text-xl font-display font-bold">Active Inventory Flow</h3>
           <div className="flex gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">System Live</span>
           </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
             <thead className="bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
               <tr>
                 <th className="px-8 py-6">ID & Mode</th>
                 <th className="px-8 py-6">Route Details</th>
                 <th className="px-8 py-6">Status & Risk</th>
                 <th className="px-8 py-6">ETA Tracking</th>
                 <th className="px-8 py-6 text-right">Actions</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-50">
               {activeShipments.map((shipment) => (
                 <tr key={shipment.id} className="group hover:bg-gray-50 transition-all">
                   <td className="px-8 py-8">
                     <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl ${shipment.mode === 'Air' ? 'bg-blue-50 text-blue-500' : 'bg-amber-50 text-amber-500'}`}>
                           {shipment.mode === 'Air' ? <Plane className="w-5 h-5" /> : <Truck className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="font-bold text-dark">{shipment.id}</p>
                          <p className="text-xs text-gray-400 font-medium">{shipment.mode} Freight</p>
                        </div>
                     </div>
                   </td>
                   <td className="px-8 py-8">
                     <div className="flex items-center gap-3">
                        <span className="font-bold text-sm">{shipment.origin}</span>
                        <div className="flex-grow h-[1px] w-8 bg-gray-200"></div>
                        <span className="font-bold text-sm">{shipment.dest}</span>
                     </div>
                   </td>
                   <td className="px-8 py-8">
                     <div className="space-y-2">
                        <div className={`flex items-center gap-2 text-xs font-bold ${shipment.status === 'Delayed' ? 'text-red-500' : 'text-green-500'}`}>
                           {shipment.status === 'Delayed' ? <AlertCircle className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                           {shipment.status}
                        </div>
                        <div className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest inline-block ${
                          shipment.risk === 'Critical' ? 'bg-red-100 text-red-600' : 
                          shipment.risk === 'High' ? 'bg-amber-100 text-amber-600' : 
                          'bg-green-100 text-green-600'
                        }`}>
                           {shipment.risk} Risk
                        </div>
                     </div>
                   </td>
                   <td className="px-8 py-8">
                     <div className="space-y-2 max-w-[140px]">
                        <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-1">
                          <span>Progress</span>
                          <span>{shipment.progress}%</span>
                        </div>
                        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                           <div className="h-full bg-primary" style={{ width: `${shipment.progress}%` }}></div>
                        </div>
                        <p className="text-xs font-bold text-dark flex items-center gap-1 mt-2">
                          <Clock className="w-3 h-3" />
                          {shipment.eta}
                        </p>
                     </div>
                   </td>
                   <td className="px-8 py-8 text-right">
                     <button className="p-3 hover:bg-white rounded-xl transition-all">
                        <MoreVertical className="w-5 h-5 text-gray-400" />
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
          </table>
        </div>
        
        <div className="p-8 bg-gray-50 border-t border-gray-100 flex flex-col md:row justify-between items-center gap-4">
           <p className="text-xs font-medium text-gray-400 italic">
             "Smart Alert: Multi-modal connection in Singapore for SL-5567 is at risk due to berth congestion."
           </p>
           <button className="px-6 py-3 bg-dark text-white rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-dark/90 transition-all">
             Initialize Re-Planning Engine
             <Zap className="w-4 h-4 text-primary fill-current" />
           </button>
        </div>
      </div>
    </div>
  );
}

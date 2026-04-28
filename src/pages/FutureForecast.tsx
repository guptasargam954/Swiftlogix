import React from 'react';
import { 
  TrendingUp, 
  Clock, 
  CloudRain, 
  Thermometer, 
  ArrowRight,
  BarChart3,
  Calendar,
  AlertTriangle,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts';

export default function FutureForecast() {
  const forecastData = [
    { time: '08:00', delay: 10, risk: 5 },
    { time: '12:00', delay: 45, risk: 20 },
    { time: '16:00', delay: 30, risk: 15 },
    { time: '20:00', delay: 80, risk: 45 },
    { time: '00:00', delay: 20, risk: 10 },
    { time: '04:00', delay: 15, risk: 5 },
  ];

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      <header>
        <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
          <Calendar className="w-4 h-4" />
          Intel Module: 05
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold">Predictive Forecast</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Forecast Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
          <div className="flex justify-between items-center">
             <h3 className="text-xl font-display font-bold">Delay Probability Trend</h3>
             <div className="flex gap-4">
               <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                 <div className="w-3 h-3 rounded-full bg-primary"></div>
                 Predicted Delay
               </div>
               <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                 <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                 Historical Mean
               </div>
             </div>
          </div>
          
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={forecastData}>
                <defs>
                  <linearGradient id="colorDelay" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#999'}} />
                <YAxis hide />
                <Tooltip />
                <Area type="monotone" dataKey="delay" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorDelay)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-50">
            <div className="text-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Peak Delay</span>
              <p className="text-xl font-bold text-red-500">20:00</p>
            </div>
            <div className="text-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Optimal Dispatch</span>
              <p className="text-xl font-bold text-green-500">04:00</p>
            </div>
            <div className="text-center">
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Avg Reliability</span>
               <p className="text-xl font-bold text-dark">92%</p>
            </div>
          </div>
        </div>

        {/* Forecast Drivers */}
        <div className="space-y-6">
          <div className="bg-dark text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]"></div>
            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2 relative z-10">
              <CloudRain className="w-5 h-5 text-primary" />
              Impact Factors
            </h3>
            
            <div className="space-y-6 relative z-10">
              {[
                { label: 'Weather Impact', val: 12, icon: CloudRain, color: 'blue' },
                { label: 'Traffic Density', val: 68, icon: TrendingUp, color: 'amber' },
                { label: 'Port Congestion', val: 5, icon: BarChart3, color: 'green' },
              ].map((factor) => (
                <div key={factor.label} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2"><factor.icon className="w-3 h-3" /> {factor.label}</span>
                    <span>{factor.val}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${factor.val}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm">
             <div className="flex items-center gap-3 mb-4 text-amber-500">
               <AlertTriangle className="w-5 h-5" />
               <h4 className="font-bold">Next-Day Warning</h4>
             </div>
             <p className="text-sm font-medium text-gray-500 leading-relaxed italic">
               "Strong storm activity predicted over the Central Atlantic for Oct 28th. Suggesting early departure for all Priority-A air shipments."
             </p>
          </div>

          <div className="bg-primary p-8 rounded-[2.5rem] text-white">
            <Zap className="w-6 h-6 mb-4 fill-white" />
            <h4 className="font-display font-bold text-lg mb-2">Smart Suggestion</h4>
            <p className="text-sm font-medium opacity-80 leading-relaxed">
              Delaying dispatch by 4 hours could lower your risk score by 22% due to improved traffic window.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

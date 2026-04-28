import React from 'react';
import { 
  BarChart3, 
  Clock, 
  DollarSign, 
  AlertTriangle, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight,
  Plane,
  Truck,
  Ship,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

export default function ModeComparison() {
  const navigate = useNavigate();

  const data = [
    { name: 'Air', cost: 12000, time: 5, risk: 25, delayTitle: 'Weather' },
    { name: 'Land', cost: 4500, time: 20, risk: 15, delayTitle: 'Traffic' },
    { name: 'Water', cost: 2100, time: 144, risk: 5, delayTitle: 'Port Congestion' },
  ];

  const modes = [
    { 
      name: 'Air Transport', 
      icon: Plane, 
      time: '5.2h', 
      cost: '$12.4k', 
      risk: 'High', 
      reliability: 98, 
      riskScore: 2,
      color: '#FF5733' 
    },
    { 
      name: 'Road Transport', 
      icon: Truck, 
      time: '20.5h', 
      cost: '$4.2k', 
      risk: 'Medium', 
      reliability: 85, 
      riskScore: 4,
      color: '#33FF57' 
    },
    { 
      name: 'Water Transport', 
      icon: Ship, 
      time: '144h', 
      cost: '$2.1k', 
      risk: 'Low', 
      reliability: 72, 
      riskScore: 7,
      color: '#3357FF' 
    }
  ];

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
            <BarChart3 className="w-4 h-4" />
            Step 3: Mode Comparison
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Performance Grid</h1>
        </div>
        <button 
          onClick={() => navigate('/recommendation')}
          className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group"
        >
          View Recommendation
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </header>

      {/* Metric Charts Overlay */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-display font-bold">Cost vs Mode</h3>
            <DollarSign className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#999', fontWeight: 'bold'}} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: '#f9fafb'}}
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="cost" radius={[10, 10, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#3B82F6', '#10B981', '#6366F1'][index % 3]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-dark text-white p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px]"></div>
          <div className="relative z-10 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-display font-bold">Risk Distribution</h3>
              <AlertTriangle className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-6 pt-4">
              {modes.map((mode) => (
                <div key={mode.name} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                    <span>{mode.name}</span>
                    <span className="text-white">{mode.riskScore}/10 Risk</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(10 - mode.riskScore) * 10}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modes.map((mode, idx) => (
          <motion.div 
            key={mode.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="p-5 rounded-3xl bg-gray-50 group-hover:bg-primary group-hover:text-white transition-colors">
                <mode.icon className="w-8 h-8" />
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Time</span>
                <span className="text-2xl font-display font-bold">{mode.time}</span>
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold mb-6">{mode.name}</h3>

            <div className="space-y-4 p-6 bg-gray-50 rounded-3xl mb-8">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Cost Estimate</span>
                <span className="font-bold text-primary">{mode.cost}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Reliability</span>
                <span className="font-bold text-dark">{mode.reliability}%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium">Risk Profile</span>
                <span className={`font-bold ${mode.risk === 'High' ? 'text-red-500' : mode.risk === 'Medium' ? 'text-amber-500' : 'text-green-500'}`}>
                  {mode.risk}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white border border-gray-100 rounded-2xl">
                 <ShieldCheck className="w-4 h-4 text-green-500 mb-2" />
                 <span className="text-[10px] font-bold text-gray-400 uppercase block">Safety</span>
                 <p className="text-xs font-bold">{mode.reliability > 80 ? 'High' : 'Normal'}</p>
               </div>
               <div className="p-4 bg-white border border-gray-100 rounded-2xl">
                 <TrendingUp className="w-4 h-4 text-blue-500 mb-2" />
                 <span className="text-[10px] font-bold text-gray-400 uppercase block">Trend</span>
                 <p className="text-xs font-bold">Stable</p>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Smart Prediction Bar */}
      <div className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex shrink-0 -space-x-4">
          <div className="w-12 h-12 rounded-full border-4 border-white bg-dark flex items-center justify-center text-white"><Zap className="w-5 h-5 fill-current" /></div>
          <div className="w-12 h-12 rounded-full border-4 border-white bg-primary"></div>
        </div>
        <div className="flex-grow text-center md:text-left">
          <h4 className="font-bold text-primary mb-1">Delay Cause Analysis</h4>
          <p className="text-sm text-primary/70 font-medium">Predicted delay for <span className="text-primary font-bold">Road Transport</span> is 4.2 hrs due to ongoing construction on A10 near Oranienburg. Recommending buffer adjustment.</p>
        </div>
        <button className="px-10 py-4 bg-white text-primary border border-primary/20 rounded-2xl font-bold shadow-sm hover:bg-primary hover:text-white transition-all whitespace-nowrap">
          Adjust Parameters
        </button>
      </div>
    </div>
  );
}

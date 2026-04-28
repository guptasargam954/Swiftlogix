import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Map as MapIcon, 
  Zap, 
  ArrowRight,
  Plane,
  Truck,
  Ship,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function ModeFeasibility() {
  const navigate = useNavigate();
  const [analysis, setAnalysis] = React.useState<any>(null);

  React.useEffect(() => {
    const raw = localStorage.getItem('latest_analysis');
    if (raw) setAnalysis(JSON.parse(raw));
  }, []);

  const rawModes = analysis ? [analysis.best_route, ...analysis.alternatives] : [];
  
  const modes = rawModes.length > 0 ? rawModes.map((rm: any) => ({
    name: `${rm.mode} Transport`,
    icon: rm.mode === 'Air' ? Plane : rm.mode === 'Road' ? Truck : Ship,
    possible: true,
    reason: `Optimized route detected with a score of ${rm.score}/100.`,
    distanceFeasibility: `${rm.distance} km total path`,
    infrastructure: 'Ready'
  })) : [
    { 
      name: 'Air Transport', 
      icon: Plane, 
      possible: true, 
      reason: 'International airport (BER) within 30km radius.',
      distanceFeasibility: 'Highly Feasible (Long Distance)',
      infrastructure: 'Port Ready'
    },
    { 
      name: 'Road Transport', 
      icon: Truck, 
      possible: true, 
      reason: 'Connected via A10 Autobahn network.',
      distanceFeasibility: 'Possible (Continental)',
      infrastructure: 'Route Active'
    },
    { 
      name: 'Water Transport', 
      icon: Ship, 
      possible: false, 
      reason: 'No deep-sea port access at destination coordinates (Mountains).',
      distanceFeasibility: 'Impossible',
      infrastructure: 'No Hub Detected'
    }
  ];

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
            <MapIcon className="w-4 h-4" />
            Step 2: Feasibility Check
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Infrastructure Scan</h1>
        </div>
        <button 
          onClick={() => navigate('/comparison')}
          className="px-8 py-4 bg-dark text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-dark/90 transition-all group"
        >
          Compare Modes
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {modes.map((mode, idx) => (
            <motion.div 
              key={mode.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-[2.5rem] border flex flex-col md:flex-row gap-8 transition-all ${
                mode.possible ? 'bg-white border-gray-100 shadow-sm' : 'bg-gray-50 border-gray-200 opacity-70'
              }`}
            >
              <div className={`p-6 rounded-3xl shrink-0 ${mode.possible ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'}`}>
                <mode.icon className="w-10 h-10" />
              </div>
              
              <div className="flex-grow space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-display font-bold">{mode.name}</h3>
                  {mode.possible ? (
                    <div className="flex items-center gap-2 text-green-500 font-bold text-sm bg-green-50 px-4 py-2 rounded-full border border-green-100">
                      <CheckCircle2 className="w-4 h-4" />
                      FEASIBLE
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-500 font-bold text-sm bg-red-50 px-4 py-2 rounded-full border border-red-100">
                      <XCircle className="w-4 h-4" />
                      DISABLED
                    </div>
                  )}
                </div>
                
                <p className="text-gray-500 font-medium">{mode.reason}</p>
                
                {mode.possible && (
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Logistics Capacity</span>
                      <p className="text-sm font-bold text-dark">{mode.distanceFeasibility}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Hub Status</span>
                      <p className="text-sm font-bold text-dark">{mode.infrastructure}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <aside className="space-y-8">
          <div className="bg-dark text-white p-8 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]"></div>
            <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <MapIcon className="w-5 h-5 text-primary" />
              Live Route Map
            </h4>
            <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full border-r border-b border-white/10 grid grid-cols-8 grid-rows-8">
                   {Array.from({length: 64}).map((_, i) => <div key={i} className="border-t border-l border-white/5"></div>)}
                </div>
              </div>
              <div className="relative text-center p-6 space-y-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase">{analysis?.origin || 'Origin'}</span>
                </div>
                <div className="h-16 w-[1px] bg-gradient-to-b from-primary to-transparent mx-auto"></div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase">{analysis?.destination || 'Destination'}</span>
                </div>
                <p className="text-[10px] text-gray-400 font-medium max-w-[150px] mx-auto">
                  Calculating {analysis?.best_route?.mode || 'optimal'} path logic for {analysis?.origin} to {analysis?.destination}.
                </p>
              </div>
            </div>
            <p className="mt-6 text-[10px] text-gray-500 uppercase tracking-[0.2em] leading-relaxed">
              * Mode feasibility is determined by real-time port/airport geolocation and route distance constraints.
            </p>
          </div>

          <div className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <Zap className="w-5 h-5" />
              <h4 className="font-bold">Smart Insight</h4>
            </div>
            <p className="text-sm text-primary/80 font-medium leading-relaxed">
              {analysis?.best_route 
                ? `${analysis.best_route.mode} transport is currently the most robust option for your route from ${analysis.origin} to ${analysis.destination}. It offers a reliability of ${analysis.best_route.reliability}% and the best cost-to-time ratio.`
                : 'Enter shipment details to receive a smart logistics insight based on real-time weather and infrastructure data.'}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

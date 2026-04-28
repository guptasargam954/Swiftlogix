import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Package, 
  Weight, 
  DollarSign, 
  Calendar, 
  Zap, 
  Truck, 
  Plane, 
  Ship, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  ArrowRight,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

type ShipmentType = 'Normal' | 'Perishable' | 'Fragile' | 'Heavy';
type PrioritySimple = 'Fastest' | 'Cheapest' | 'Safest' | 'Balanced';

export default function NewShipment() {
  const navigate = useNavigate();
  // Form State
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [shipmentType, setShipmentType] = useState<ShipmentType>('Normal');
  const [weight, setWeight] = useState<number>(0);
  const [budget, setBudget] = useState<number>(5000);
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState<PrioritySimple>('Balanced');
  
  // Advanced Priority Sliders
  const [timeImportance, setTimeImportance] = useState(50);
  const [costImportance, setCostImportance] = useState(50);
  const [riskImportance, setRiskImportance] = useState(50);

  // Derived Values (Smart Logic)
  const distance = origin && destination ? 1200 : 0; // Mock distance
  const isUnrealisticDeadline = deadline && new Date(deadline).getTime() < Date.now() + 86400000;
  
  // Right Panel State (Calculated)
  const [estimates, setEstimates] = useState({
    air: { available: true, time: '5 hrs', cost: 'High', reason: '' },
    land: { available: true, time: '20 hrs', cost: 'Medium', reason: '' },
    water: { available: false, time: 'N/A', cost: 'N/A', reason: 'Water not available (no port access)' }
  });

  useEffect(() => {
    // Dynamic logic for estimates based on inputs
    const newEstimates = { ...estimates };
    
    if (shipmentType === 'Heavy') {
      newEstimates.air.cost = 'Very High';
    } else {
      newEstimates.air.cost = 'High';
    }

    if (weight > 1000) {
      newEstimates.air.cost = 'Expensive';
    }

    setEstimates(newEstimates);
  }, [shipmentType, weight]);

  return (
    <div className="p-4 md:p-8 lg:p-12 overflow-y-auto">
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-8">
        
        {/* INPUT SECTION (LEFT) */}
        <div className="flex-grow space-y-8 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div>
              <h1 className="text-3xl font-display font-bold mb-2">Create New Shipment</h1>
              <p className="text-gray-500">Enter your logistics details for a smart analysis.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. Route Input */}
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-400">Route Details</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Origin (e.g. Berlin)" 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Destination (e.g. New York)" 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                {distance > 0 && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-medium text-primary bg-primary/5 p-3 rounded-xl inline-block"
                  >
                    Estimated base distance: {distance} km
                  </motion.p>
                )}
              </div>

              {/* 2. Shipment Type */}
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-400">Shipment Characteristics</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['Normal', 'Perishable', 'Fragile', 'Heavy'] as ShipmentType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setShipmentType(type)}
                      className={`py-3 px-4 rounded-2xl text-sm font-bold transition-all border-2 ${
                        shipmentType === type 
                        ? 'border-primary bg-primary/5 text-primary' 
                        : 'border-transparent bg-gray-50 text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {shipmentType === 'Perishable' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-xl text-xs font-bold"
                  >
                    <AlertTriangle className="w-4 h-4" />
                    Water transport may cause delays
                  </motion.div>
                )}
              </div>

              {/* 3. Weight */}
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-400">Weight / Quantity</label>
                <div className="relative">
                  <Weight className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="number" 
                    placeholder="Weight" 
                    className="w-full pl-12 pr-12 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all"
                    value={weight || ''}
                    onChange={(e) => setWeight(Number(e.target.value))}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">kg</span>
                </div>
                {weight > 500 && (
                  <p className="text-xs font-bold text-amber-600 bg-amber-50 p-3 rounded-xl flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3" />
                    Air transport may be expensive
                  </p>
                )}
              </div>

              {/* 4. Budget */}
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-400">Budget (Optional)</label>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold mb-2 text-gray-600">
                    <span>${budget}</span>
                    <span>$20,000</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="20000" 
                    step="500"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
                {budget < 2000 && (
                  <p className="text-xs italic text-gray-500">“Lower budget may increase delivery time”</p>
                )}
              </div>

              {/* 5. Deadline */}
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-400">Deadline (Optional)</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="datetime-local" 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                  />
                </div>
                {isUnrealisticDeadline && (
                  <p className="text-xs font-bold text-red-600 bg-red-50 p-3 rounded-xl flex items-center gap-2">
                    <XCircle className="w-3 h-3" />
                    Selected deadline is difficult to meet
                  </p>
                )}
              </div>

              {/* 6. Priority */}
              <div className="space-y-4 md:col-span-2">
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-400 text-center">Shipping Priority</label>
                
                <div className="flex flex-wrap justify-center gap-4 py-4">
                  {(['Fastest', 'Cheapest', 'Safest', 'Balanced'] as PrioritySimple[]).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPriority(p)}
                      className={`px-8 py-3 rounded-full text-sm font-bold transition-all border-2 ${
                        priority === p 
                        ? 'border-dark bg-dark text-white' 
                        : 'border-gray-200 text-gray-500 hover:border-gray-300'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                <div className="bg-gray-50 p-8 rounded-3xl space-y-6 mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Advanced Optimization (USP)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { label: 'Time Importance', val: timeImportance, set: setTimeImportance },
                      { label: 'Cost Importance', val: costImportance, set: setCostImportance },
                      { label: 'Risk Importance', val: riskImportance, set: setRiskImportance },
                    ].map((slider) => (
                      <div key={slider.label} className="space-y-3">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-gray-500">{slider.label}</span>
                          <span className="text-primary">{slider.val}%</span>
                        </div>
                        <input 
                          type="range" 
                          value={slider.val}
                          onChange={(e) => slider.set(Number(e.target.value))}
                          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/mode-feasibility')}
                className="flex-grow py-5 px-8 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group"
              >
                <Zap className="w-5 h-5 fill-current" />
                Analyze Shipment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="py-5 px-8 bg-gray-100 text-dark rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all">
                <BarChart3 className="w-5 h-5" />
                Detailed Comparison
              </button>
            </div>
          </div>

          {/* RIGHT SIDE PANEL (SMART PREVIEW) */}
          <aside className="w-full xl:w-96 space-y-6">
            <div className="sticky top-8 space-y-6">
              
              <div className="bg-dark text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]"></div>
                <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2 relative z-10">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Live Smart Analysis
                </h3>

                <div className="space-y-6 relative z-10">
                  {/* Possible Modes */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Possible Modes</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Air', icon: Plane, ...estimates.air },
                        { name: 'Land', icon: Truck, ...estimates.land },
                        { name: 'Water', icon: Ship, ...estimates.water },
                      ].map((mode) => (
                        <div key={mode.name} className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${mode.available ? 'bg-primary/20 text-primary' : 'bg-white/10 text-gray-500'}`}>
                                <mode.icon className="w-4 h-4" />
                              </div>
                              <span className="font-bold">{mode.name}</span>
                            </div>
                            {mode.available ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
                          </div>
                          {mode.available ? (
                            <div className="flex justify-between text-xs font-medium text-gray-400">
                              <span>{mode.time}</span>
                              <span className="text-primary">{mode.cost} Cost</span>
                            </div>
                          ) : (
                            <p className="text-[10px] text-red-400/80 italic">{mode.reason}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="border-white/10" />

                  {/* Early Warning System */}
                  <div className="space-y-3">
                     <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Early Warning</h4>
                     <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
                       <p className="text-xs text-amber-500 font-bold flex items-start gap-2 leading-relaxed">
                         <AlertTriangle className="w-4 h-4 shrink-0" />
                         High delay risk due to weather patterns on North-Atlantic routes.
                       </p>
                     </div>
                  </div>

                  {/* Smart Suggestion */}
                  <div className="bg-primary p-6 rounded-3xl text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 fill-white" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Smart Suggestion</span>
                    </div>
                    <p className="text-sm font-bold leading-tight">
                      Based on your {shipmentType === 'Heavy' ? 'heavy load' : 'inputs'} and urgency, AIR transport is preferred for efficiency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tip Card */}
              <div className="bg-white border border-gray-100 p-6 rounded-[2rem]">
                <p className="text-xs text-gray-500 leading-relaxed italic text-center">
                  "Optimization Tip: Bulk shipments between Tuesdays and Thursdays typically see 12% lower fuel surcharges."
                </p>
              </div>

            </div>
          </aside>

        </div>
      </div>
  );
}

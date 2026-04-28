import React from 'react';
import { 
  Zap, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw,
  Star,
  Info,
  Clock,
  DollarSign,
  ShieldAlert,
  Plane,
  Truck,
  Ship,
  TrendingDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function RecommendationEngine() {
  const navigate = useNavigate();

  const recommendation = {
    mode: 'Road Transport',
    icon: Truck,
    score: 94,
    reasoning: "Based on your 'Balanced' priority and continental route (Berlin → Hamburg), Land Transport offers the best intersection of cost and speed while maintaining a risk-controlled profile.",
    pros: [
      "Lowest cost-to-time ratio for this route",
      "Door-to-door delivery without transshipment",
      "Lower carbon footprint than air for heavy loads"
    ],
    cons: [
      "Moderate traffic variability risk",
      "Slower than air by 15 hours"
    ],
    tradeOffs: "Choosing Land over Air saves $8,200 but increases ETA by 15.3 hours. Security risk is 12% lower on this specific route due to reduced handling nodes."
  };

  const alternates = [
    { mode: 'Air', impact: '+ $8.2k cost', benefit: '- 15h time', color: 'blue' },
    { mode: 'Multi-modal', impact: '- $1.1k cost', benefit: 'Optimized risk', color: 'purple' }
  ];

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2">
            <Zap className="w-4 h-4 fill-current" />
            Step 4: AI Recommendation
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold">Optimal Decision</h1>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => navigate('/new-shipment')}
            className="px-6 py-4 bg-gray-100 text-dark rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-200 transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Re-calculate
          </button>
          <button 
            onClick={() => navigate('/summary')}
            className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group"
          >
            Confirm Decision
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* Main Recommendation Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[3.5rem] border border-gray-100 shadow-2xl p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-12">
          <div className="w-32 h-32 rounded-full border-[10px] border-primary/5 flex items-center justify-center relative">
            <div className="text-center">
               <span className="text-4xl font-display font-bold text-primary">{recommendation.score}</span>
               <span className="text-[10px] font-bold text-gray-400 block uppercase">Match</span>
            </div>
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle 
                cx="64" cy="64" r="58" 
                fill="none" strokeWidth="10" 
                stroke="#3B82F6" 
                strokeDasharray="364.4" 
                strokeDashoffset={364.4 - (364.4 * recommendation.score / 100)} 
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
          <div className="p-8 rounded-[2.5rem] bg-primary text-white shadow-xl shadow-primary/30">
            <recommendation.icon className="w-16 h-16" />
          </div>
          
          <div className="flex-grow space-y-6">
            <div>
              <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-4 border border-green-100">
                Highly Recommended
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark">{recommendation.mode}</h2>
            </div>
            
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
              {recommendation.reasoning}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-50">
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 font-bold text-dark mb-4 uppercase tracking-tighter">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Key Advantages
                </h4>
                <ul className="space-y-3">
                  {recommendation.pros.map((pro, i) => (
                    <li key={i} className="flex gap-3 text-sm font-medium text-gray-500 italic">
                      <Star className="w-4 h-4 text-amber-500 shrink-0 fill-amber-500" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 font-bold text-dark mb-4 uppercase tracking-tighter">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  Acknowledged Risks
                </h4>
                <ul className="space-y-3">
                  {recommendation.cons.map((con, i) => (
                    <li key={i} className="flex gap-3 text-sm font-medium text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5"></div>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trade-off Explorer */}
        <div className="lg:col-span-2 bg-dark text-white p-12 rounded-[3.5rem] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="space-y-6 flex-grow">
              <h3 className="text-3xl font-display font-bold flex items-center gap-3">
                 <ShieldAlert className="w-8 h-8 text-primary" />
                 Trade-off Analysis
              </h3>
              <p className="text-gray-400 italic font-medium text-lg leading-relaxed">
                "{recommendation.tradeOffs}"
              </p>
              <div className="flex gap-6">
                <div className="flex flex-col">
                   <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Cost Delta</span>
                   <span className="text-2xl font-display font-bold text-green-400">-$8,206</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Time Delta</span>
                   <span className="text-2xl font-display font-bold text-amber-400">+15.3h</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-64 aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center p-6 text-center">
              <div>
                <TrendingDown className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Efficiency Trend</p>
                <p className="text-xl font-bold">+12% Optimal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alternate Engine */}
        <div className="bg-gray-50 p-10 rounded-[3.5rem] border border-gray-100 flex flex-col gap-6">
          <h4 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 text-gray-400">
            <RotateCcw className="w-4 h-4" />
            Switch Engine Alerts
          </h4>
          <div className="space-y-4">
            {alternates.map((alt) => (
              <div key={alt.mode} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-primary transition-all group flex flex-col gap-3">
                 <div className="flex items-center justify-between">
                   <span className="font-bold text-dark">{alt.mode} Transport</span>
                   <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                     <ArrowRight className="w-4 h-4" />
                   </div>
                 </div>
                 <div className="flex flex-col gap-1">
                   <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{alt.impact}</span>
                   <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">{alt.benefit}</span>
                 </div>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-6 border-t border-gray-200">
            <p className="text-[10px] text-gray-400 font-medium leading-relaxed italic">
              "Suggestion: Diversifying via Multi-modal (Truck-Rail) could lower carbon taxes by 8%."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { CheckCircle2, ChevronDown, User, Globe, Activity, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Solution() {
  const stats = [
    { label: "Offices", value: "42" },
    { label: "Employees", value: "1,800+" },
    { label: "Shipments/yr", value: "2.4M" },
    { label: "On-Time Rate", value: "98%" },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-dark text-white p-12 md:p-24 flex flex-col justify-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-8xl md:text-9xl font-display font-black tracking-tighter leading-none mb-12 uppercase">
            Trade <br />
            Forward
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-md">
            Our platform transforms logistics from passive tracking into an active decision engine. Predict delays before they occur and take the best action.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
             {["ISO 9001 Certified", "IATA Member", "WCA Registered", "FIATA Affiliate"].map((tag) => (
               <div key={tag} className="px-4 py-2 border border-white/20 rounded-full text-xs font-bold text-gray-400 text-center uppercase tracking-widest">
                  {tag}
               </div>
             ))}
          </div>
        </motion.div>
      </div>

      <div className="bg-primary text-white p-12 md:p-24 flex flex-col justify-center relative">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <div className="flex items-end gap-4 mb-12">
             <span className="text-8xl md:text-[10rem] font-display font-bold leading-none opacity-20">20</span>
             <div className="pb-4">
                <p className="text-sm font-bold uppercase tracking-widest whitespace-nowrap">Years of Global Logistics Excellence</p>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/20">
             {stats.map((stat) => (
               <div key={stat.label} className="bg-primary p-8 text-center flex flex-col justify-center min-h-[200px]">
                  <p className="text-5xl font-display font-bold mb-2">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest opacity-70">{stat.label}</p>
               </div>
             ))}
          </div>
        </motion.div>
        
        <div className="absolute bottom-10 right-1/2 translate-x-1/2">
           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark shadow-xl hover:bg-dark hover:text-white transition-colors cursor-pointer">
              <ChevronDown className="w-6 h-6" />
           </div>
        </div>
      </div>
    </section>
  );
}

import { Brain, Zap, Target, Layers, Layout, FlaskConical } from 'lucide-react';
import { motion } from 'motion/react';

export default function Features() {
  const features = [
    { title: "Predictive Intelligence", desc: "Know delays before they happen with real-time analysis.", icon: Brain },
    { title: "Multi-Modal Comparison", desc: "Compare air, water, and land across cost, time, and risk.", icon: Zap },
    { title: "Smart Recommendations", desc: "Get the best action—not just data.", icon: Target },
    { title: "Trade-off Visualization", desc: "Understand cost vs time vs risk instantly.", icon: Layers },
    { title: "Future Forecasting", desc: "Choose the best time to dispatch shipments.", icon: Layout },
    { title: "Scenario Simulation", desc: "Test “what-if” situations before making decisions.", icon: FlaskConical },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <div className="flex items-center justify-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-6">
           <span className="w-8 h-[2px] bg-primary"></span>
           How It Works
        </div>
        <h2 className="text-4xl md:text-5xl font-display mb-6">
          Affordable, Streamlined <br /> Shipping - Made Simple
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Get the best shipping rates while streamlining your logistics process for faster, easier, and more cost-effective deliveries.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-10 rounded-3xl border border-gray-100 h-full ${i === 3 ? 'bg-dark text-white' : 'bg-offwhite hover:bg-white hover:shadow-xl transition-all'}`}
          >
            <div className={`p-4 rounded-2xl w-fit mb-8 ${i === 3 ? 'bg-white/10' : 'bg-dark'}`}>
               <feature.icon className={`w-8 h-8 ${i === 3 ? 'text-white' : 'text-white'}`} />
            </div>
            <h3 className="text-xl font-display font-bold mb-4">{feature.title}</h3>
            <p className={`${i === 3 ? 'text-gray-400' : 'text-gray-500'} leading-relaxed`}>
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { AlertCircle, TrendingDown, Clock, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export default function Problem() {
  return (
    <section className="py-24 bg-white text-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-6">
            <span className="w-12 h-[1px] bg-primary"></span>
            About Quietey
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-medium max-w-4xl leading-tight">
            Quitey As trailblazers in the world of <span className="text-primary">Transportation Solutions</span>, we embarked on this odyssey with a clear vision: to create a seamless, efficient, reliable <span className="text-primary italic font-semibold">network that transcends</span> traditional boundaries. Our journey reflects a transformative moment.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
             <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                alt="Logistics network collage" 
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
             />
          </motion.div>

          <div className="flex flex-col gap-12 pt-8">
            <div>
              <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Queity Numbers</p>
              <div className="flex flex-col">
                <span className="text-8xl font-display font-black tracking-tighter">48K</span>
                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-2 pl-2">Clients Worldwide</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-white flex-shrink-0">
                 <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400" 
                    alt="Experience" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                 />
              </div>
              <div>
                <span className="text-6xl font-display font-black tracking-tighter flex items-center">
                  12<span className="text-primary">+</span>
                </span>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">Year's Experience</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100 italic font-medium text-gray-500 text-sm max-w-xs text-center md:text-left">
              <span className="text-primary font-bold">150,000+ Trusted worldwide</span> for comprehensive freight solutions across the globe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-20 bg-offwhite px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-12 md:p-24 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 uppercase leading-[0.8]">
              Ready to ship <br /> with SwiftLogix?
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-80">Get your instant quote in under 2 minutes.</p>
            
            <button className="px-10 py-5 bg-transparent border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all flex items-center gap-4 group">
               Get a Free Quote <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="absolute -bottom-10 right-1/2 translate-x-1/2 z-10">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-dark cursor-pointer shadow-2xl">
                <ChevronDown className="w-8 h-8" />
             </div>
          </div>
       </motion.div>
      </div>
    </section>
  );
}

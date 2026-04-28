import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Benefits() {
  const testimonials = [
    { name: "Emily Rajani", role: "Head of Sourcing", text: "Working with SwiftLogix was a game changer for our brand. Their attention to detail and seamless communication made our production stress-free." },
    { name: "Emily Rajani", role: "Head of Sourcing", text: "Working with SwiftLogix was a game changer for our brand. Their attention to detail and seamless communication made our production stress-free." },
    { name: "Emily Rajani", role: "Head of Sourcing", text: "Working with SwiftLogix was a game changer for our brand. Their attention to detail and seamless communication made our production stress-free." },
  ];

  return (
    <section className="py-24 bg-offwhite text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-display font-bold mb-4">Hear Their Stories</h2>
        <p className="text-gray-500 mb-20 max-w-md mx-auto">We're here to provide you with a comprehensive quote that aligns with your unique requirements.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {testimonials.map((t, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-10 rounded-3xl text-left border border-gray-100"
             >
                <div className="flex gap-1 mb-6">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 mb-10 leading-relaxed font-medium italic">"{t.text}"</p>
                <div>
                   <h4 className="font-display font-bold">{t.name}</h4>
                   <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">{t.role}</p>
                </div>
             </motion.div>
           ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
           <div className="w-10 h-1 bg-primary rounded-full"></div>
           <div className="w-4 h-1 bg-gray-200 rounded-full"></div>
           <div className="w-4 h-1 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

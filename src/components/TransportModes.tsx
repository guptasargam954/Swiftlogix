import { motion } from 'motion/react';
import { Plane, Ship, Truck } from 'lucide-react';

export default function TransportModes() {
  const modes = [
    {
      title: "Air Freight",
      image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80&w=800",
      icon: Plane,
      desc: "Rapid global delivery via our extensive air network for time-sensitive cargo."
    },
    {
      title: "Sea Freight",
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=800",
      icon: Ship,
      desc: "Cost-effective international shipping through major global ship ports."
    },
    {
      title: "Road Transport",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
      icon: Truck,
      desc: "Reliable land transport by trucks across continental networks."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Our Operations</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Global Multi-Modal Network</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[3/4] relative">
                <img 
                  src={mode.image} 
                  alt={mode.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <div className="bg-primary w-fit p-3 rounded-2xl mb-4 group-hover:rotate-12 transition-transform shadow-lg">
                  <mode.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">{mode.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {mode.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

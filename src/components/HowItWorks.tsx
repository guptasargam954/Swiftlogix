import { motion } from 'motion/react';

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Get a Quote", desc: "Fill in your shipment details and receive an instant, competitive freight quote." },
    { num: "02", title: "Book & Confirm", desc: "Choose your preferred service and confirm your booking with our team." },
    { num: "03", title: "We Handle It", desc: "Our network picks up, transports, and clears your cargo end-to-end." },
    { num: "04", title: "Track Live", desc: "Monitor every milestone in real-time through our dashboard or mobile app." },
    { num: "05", title: "Delivered", desc: "Safe, on-time delivery with proof of receipt and automated notifications." },
  ];

  return (
    <section className="py-24 bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-8 h-[2px] bg-primary"></span>
            How It Works
          </div>
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight">The SwiftLogix Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 border-l border-gray-200">
           {steps.map((step, i) => (
             <motion.div 
               key={step.num}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-8 border-r border-b border-gray-200 group hover:bg-white transition-colors min-h-[400px] flex flex-col"
             >
                <div className="text-7xl font-display font-medium text-gray-100 group-hover:text-gray-200 transition-colors mb-12">{step.num}</div>
                <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Plane, Truck, Ship, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end bg-white overflow-hidden pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
          <div className="max-w-3xl">
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="text-6xl md:text-8xl font-display font-medium leading-[0.9] tracking-tighter"
             >
              Delivering Your Cargo <br />
              <span className="text-gray-400 font-normal italic">Across The Globe,</span> <br />
              On Time — Every Time
            </motion.h1>
          </div>
          
          <div className="max-w-md pb-4">
             <p className="text-lg text-gray-600 mb-8">
              International freight and cargo transport solutions by land, sea, and air. Safe, tracked, and cost-efficient logistics you can count on.
             </p>
             <div className="flex flex-wrap items-center gap-4">
               <Link 
                 to="/login"
                 className="flex items-center gap-2 px-8 py-4 bg-dark text-white rounded-full font-bold hover:bg-primary transition-all group"
               >
                  Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </Link>
               <Link 
                 to="/dashboard"
                 className="flex items-center gap-2 px-8 py-4 bg-gray-100 text-dark rounded-full font-bold hover:bg-gray-200 transition-all group"
               >
                  View Dashboard <Play className="w-4 h-4 fill-current" />
               </Link>
             </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[50vh] relative">
         <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000" 
            alt="Cargo plane and logistics hub" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
         />
         <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      </div>

      <div className="bg-white py-10 border-b border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-8 opacity-40 grayscale">
               <span className="font-display font-bold text-xl tracking-tighter">Spherule</span>
               <span className="font-display font-bold text-xl tracking-tighter">Nietzsche</span>
               <span className="font-display font-bold text-xl tracking-tighter">Mindwell Clinic</span>
               <span className="font-display font-bold text-xl tracking-tighter">Elevate Psychiatry</span>
               <span className="font-display font-bold text-xl tracking-tighter">Behavioral</span>
            </div>
         </div>
      </div>
    </section>
  );
}

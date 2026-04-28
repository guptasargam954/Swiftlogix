import { motion } from 'motion/react';
import { User, Package, Clock, MapPin, Settings, LogOut, Bell, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  const recentShipments = [
    { id: 'SL-9823', status: 'In Transit', origin: 'Berlin', dest: 'New York', date: 'Oct 24, 2024' },
    { id: 'SL-1245', status: 'Delivered', origin: 'Tokyo', dest: 'London', date: 'Oct 20, 2024' },
    { id: 'SL-5567', status: 'Pending', origin: 'Mumbai', dest: 'Singapore', date: 'Oct 26, 2024' },
  ];

  return (
    <div className="p-4 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Top Bar */}
          <header className="flex justify-between items-center mb-12">
            <div className="relative hidden md:block">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
               <input 
                 type="text" 
                 placeholder="Search shipments..."
                 className="pl-12 pr-6 py-3 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all w-80 text-sm"
               />
            </div>
            <div className="flex items-center gap-6">
               <button className="p-3 bg-white rounded-2xl border border-gray-100 relative">
                  <Bell className="w-5 h-5 text-gray-500" />
                  <span className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
               </button>
               <div className="flex items-center gap-4 bg-white p-2 pr-6 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                     <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                     <p className="text-sm font-bold">John Doe</p>
                     <p className="text-xs text-gray-400">Enterprise Plan</p>
                  </div>
               </div>
            </div>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-display font-bold mb-8">Service Overview</h2>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
               {[
                 { label: 'Active Shipments', value: '12', trend: '+2 this week' },
                 { label: 'Avg. Delivery Time', value: '3.2 Days', trend: '-14% vs last month' },
                 { label: 'Monthly Spend', value: '$12,450', trend: '+5% vs budget' },
               ].map((stat, i) => (
                 <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{stat.label}</p>
                    <p className="text-3xl font-display font-bold mb-4">{stat.value}</p>
                    <p className="text-xs text-green-500 font-bold">{stat.trend}</p>
                 </div>
               ))}
            </div>

            {/* Recent Shipments */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
               <div className="p-8 border-b border-gray-50 flex justify-between items-center">
                  <h3 className="text-xl font-display font-bold">Recent Shipments</h3>
                  <button className="text-sm font-bold text-primary hover:underline">View All</button>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full">
                     <thead className="bg-offwhite border-b border-gray-50 text-left">
                        <tr>
                           <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Shipment ID</th>
                           <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Status</th>
                           <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Route</th>
                           <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Est. Date</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-50">
                        {recentShipments.map((ship) => (
                          <tr key={ship.id} className="hover:bg-offwhite transition-colors cursor-pointer">
                             <td className="px-8 py-6 font-bold text-sm">{ship.id}</td>
                             <td className="px-8 py-6">
                                <span className={`px-4 py-1 rounded-full text-xs font-bold ${ship.status === 'Delivered' ? 'bg-green-100 text-green-600' : ship.status === 'In Transit' ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'}`}>
                                   {ship.status}
                                </span>
                             </td>
                             <td className="px-8 py-6 text-sm text-gray-500">{ship.origin} &rarr; {ship.dest}</td>
                             <td className="px-8 py-6 text-sm font-medium">{ship.date}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
  );
}

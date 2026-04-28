import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Package, 
  AlertTriangle, 
  CheckCircle2, 
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

import { useNavigate } from 'react-router-dom';

const data = [
  { name: 'Mon', shipments: 40, cost: 2400 },
  { name: 'Tue', shipments: 30, cost: 1398 },
  { name: 'Wed', shipments: 20, cost: 9800 },
  { name: 'Thu', shipments: 27, cost: 3908 },
  { name: 'Fri', shipments: 18, cost: 4800 },
  { name: 'Sat', shipments: 23, cost: 3800 },
  { name: 'Sun', shipments: 34, cost: 4300 },
];

export default function DashboardHome() {
  const navigate = useNavigate();
  const [shipments, setShipments] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:8000' : '');

  React.useEffect(() => {
    fetch(`${API_BASE_URL}/api/shipments`)
      .then(res => res.json())
      .then(result => {
        if (result.status === 'success' && result.data.length > 0) {
          setShipments(result.data);
        }
      })
      .catch(err => console.error("Dashboard Fetch Error:", err))
      .finally(() => setLoading(false));
  }, []);

  const stats = [
    { label: 'Active Shipments', value: '1,284', change: '+12.5%', icon: Package, trend: 'up' },
    { label: 'Delayed Shipments', value: '14', change: '-2.4%', icon: AlertTriangle, trend: 'down', color: 'text-amber-500' },
    { label: 'Completed Today', value: '452', change: '+8.1%', icon: CheckCircle2, trend: 'up', color: 'text-green-500' },
    { label: 'Avg. Delivery Time', value: '2.4 Days', change: '-4.2%', icon: Clock, trend: 'down' },
  ];

  const displayShipments = shipments.length > 0 ? shipments : [
    { id: 'SW-9821', origin: 'Berlin', destination: 'Amazon Wh', status: 'In Transit', best_mode: 'Land', estimated_cost: '$4,290' },
    { id: 'SW-9822', origin: 'Hamburg', destination: 'LogiLink', status: 'Delivered', best_mode: 'Air', estimated_cost: '$12,400' },
    { id: 'SW-9823', origin: 'Munich', destination: 'Berlin Ex', status: 'Processing', best_mode: 'Rail', estimated_cost: '$850' },
    { id: 'SW-9824', origin: 'Cologne', destination: 'TechPort', status: 'In Transit', best_mode: 'Land', estimated_cost: '$3,100' },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Dashboard Overview</h1>
          <p className="text-gray-500">Welcome back, John. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => alert("Generating supply chain report... Your PDF will be ready in a moment.")}
            className="px-6 py-3 bg-white border border-gray-100 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all"
          >
            Export Report
          </button>
          <button 
            onClick={() => navigate('/new-shipment')}
            className="px-6 py-3 bg-primary text-white rounded-2xl font-bold text-sm hover:bg-primary/90 transition-all"
          >
            New Shipment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white rounded-3xl border border-gray-50 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl bg-gray-50 ${stat.color || 'text-primary'}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              </div>
            </div>
            <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
            <p className="text-3xl font-display font-bold mt-1 tracking-tight">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-50 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Shipment Volume</h3>
            <select className="bg-gray-50 border-none rounded-xl text-xs font-bold px-4 py-2 focus:ring-2 focus:ring-primary">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#9ca3af' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#9ca3af' }}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar 
                  dataKey="shipments" 
                  fill="#6366f1" 
                  radius={[8, 8, 8, 8]} 
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-50 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Cost Trends</h3>
            <div className="flex items-center gap-4 text-xs font-bold">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>USD</span>
              </div>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#9ca3af' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#9ca3af' }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="cost" 
                  stroke="#6366f1" 
                  strokeWidth={4} 
                  dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-50 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-50">
          <h3 className="text-xl font-bold">Recent Shipments</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Tracking ID</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Recipient</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">ETA</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {displayShipments.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-6 font-bold">{typeof row.id === 'number' ? `SL-${1000 + row.id}` : row.id}</td>
                  <td className="px-8 py-6 text-gray-600">{row.origin} → {row.destination}</td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                      row.status === 'Delivered' 
                      ? 'bg-green-100 text-green-600' 
                      : row.status === 'In Transit' 
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-amber-100 text-amber-600'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-gray-500">{row.best_mode || 'N/A'}</td>
                  <td className="px-8 py-6 font-bold opacity-70">${row.estimated_cost || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

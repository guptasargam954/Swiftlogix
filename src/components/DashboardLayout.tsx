import React, { useState } from 'react';
import { 
  Package, 
  LayoutDashboard, 
  History, 
  Settings, 
  LogOut, 
  User, 
  Menu, 
  X,
  Zap,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Search,
  Truck,
  RefreshCw,
  DollarSign,
  FileCheck,
  ShieldCheck,
  GraduationCap,
  Hammer,
  Scale,
  Bell
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { group: 'Overview', items: [
      { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    ]},
    { group: 'Analysis', items: [
      { name: 'New Shipment', icon: Package, path: '/new-shipment' },
      { name: 'Mode Feasibility', icon: Zap, path: '/mode-feasibility' },
      { name: 'Comparison', icon: BarChart3, path: '/comparison' },
      { name: 'Recommendation', icon: StarIcon, path: '/recommendation' },
    ]},
    { group: 'Intelligence', items: [
      { name: 'Future Forecast', icon: TrendingUp, path: '/forecast' },
      { name: 'Risk Simulation', icon: AlertTriangle, path: '/simulation' },
      { name: 'Shipment Intelligence', icon: Search, path: '/intelligence' },
      { name: 'Multi-Modal', icon: Truck, path: '/multimodal' },
    ]},
    { group: 'Execution', items: [
      { name: 'Monitoring', icon: History, path: '/monitoring' },
      { name: 'Mode Switch', icon: RefreshCw, path: '/switch-engine' },
      { name: 'Cost & Loss', icon: DollarSign, path: '/cost-loss' },
      { name: 'Final Summary', icon: FileCheck, path: '/summary' },
    ]},
    { group: 'Insights', items: [
      { name: 'Reliability', icon: ShieldCheck, path: '/reliability' },
      { name: 'Learning & History', icon: GraduationCap, path: '/history' },
      { name: 'Constraint Solver', icon: Hammer, path: '/constraints' },
      { name: 'Trade-off Explorer', icon: Scale, path: '/trade-off' },
      { name: 'Alert Strategy', icon: Bell, path: '/alerts' },
    ]}
  ];

  // Helper for recommendation icon
  function StarIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-dark text-white rounded-xl shadow-lg border border-white/10"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:relative inset-y-0 left-0 w-72 bg-dark text-white flex flex-col shrink-0 z-40 transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-8 border-b border-white/5">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl">
              <Package className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tighter uppercase">SwiftLogix</span>
          </Link>
        </div>

        <nav className="flex-grow p-6 space-y-8 overflow-y-auto custom-scrollbar">
          {navItems.map((group) => (
            <div key={group.group} className="space-y-2">
              <h4 className="px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">{group.group}</h4>
              {group.items.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-4 p-3 rounded-xl font-bold text-sm transition-all ${
                      isActive 
                      ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5 space-y-4">
          <Link to="/profile" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group">
            <div className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
              <User className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </div>
            <div className="flex-grow min-w-0">
              <p className="font-bold text-sm truncate">John Doe</p>
              <p className="text-xs text-gray-400 truncate group-hover:text-gray-300">john@swiftlogix.com</p>
            </div>
          </Link>
          <button className="w-full flex items-center gap-4 p-4 rounded-2xl font-bold text-red-400 hover:bg-red-400/10 transition-all">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto">
        <div className="min-h-full">
          {children}
        </div>
      </main>
    </div>
  );
}

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Box, ArrowRight, Github, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-3xl p-10 shadow-2xl border border-gray-100"
      >
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="bg-dark p-2 rounded">
               <Box className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter uppercase">SwiftLogix</span>
          </Link>
          <h2 className="text-3xl font-display font-bold">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-500 mt-2">
            {isLogin ? 'Enter your details to access your dashboard' : 'Start your logistics journey with us'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-5 py-4 bg-offwhite border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="john@example.com"
              className="w-full px-5 py-4 bg-offwhite border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-5 py-4 bg-offwhite border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full py-5 bg-dark text-white rounded-2xl font-bold hover:bg-primary transition-all flex items-center justify-center gap-4 group"
          >
            {isLogin ? 'Sign In' : 'Sign Up'} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest">
            <span className="bg-white px-4 text-gray-400 font-bold">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <button className="flex items-center justify-center gap-2 py-4 bg-offwhite hover:bg-gray-100 rounded-2xl transition-colors">
              <Github className="w-5 h-5" />
              <span className="text-sm font-bold">Github</span>
           </button>
           <button className="flex items-center justify-center gap-2 py-4 bg-offwhite hover:bg-gray-100 rounded-2xl transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-sm font-bold">Google</span>
           </button>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-bold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

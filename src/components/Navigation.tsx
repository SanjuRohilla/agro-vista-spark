import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Map, 
  Activity, 
  BarChart3, 
  Award,
  Menu,
  X
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Smart Solutions', href: '/features', icon: Activity },
  { name: 'Farm Map', href: '/map', icon: Map },
  { name: 'IoT Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'Impact', href: '/impact', icon: Award },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card m-4 mx-8"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-heading font-bold text-gradient">
              AgroSmart
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-smooth"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon size={18} />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
            
            <Button variant="default" className="gradient-primary text-primary-foreground hover:opacity-90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-glass-strong transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            <Button variant="default" className="w-full gradient-primary text-primary-foreground">
              Get Started
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin,
  ArrowUp
} from 'lucide-react';

const footerLinks = {
  'Products': [
    'Smart Solutions',
    'IoT Dashboard', 
    'Farm Mapping',
    'Biosecurity Hub',
    'API Documentation'
  ],
  'Company': [
    'About Us',
    'Careers',
    'Partners',
    'News & Events',
    'Contact'
  ],
  'Support': [
    'Help Center',
    'Documentation',
    'Community Forum',
    'Training',
    'Status Page'
  ],
  'Legal': [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Compliance',
    'Security'
  ]
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-6 mt-24">
      <div className="absolute inset-0 glass-card" />
      
      <div className="relative z-10 container mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">A</span>
              </div>
              <span className="text-3xl font-heading font-bold text-gradient">
                AgroSmart
              </span>
            </motion.div>
            
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              Revolutionizing agriculture with intelligent farm management solutions. 
              Empowering farmers with AI, IoT, and smart biosecurity for sustainable farming.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span>contact@agrosmart.com</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              {[
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category}>
              <h3 className="font-heading font-semibold mb-6 text-foreground">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="mt-16 p-8 glass-strong rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                Stay Updated with AgroSmart
              </h3>
              <p className="text-muted-foreground">
                Get the latest insights, features, and agricultural technology news 
                delivered to your inbox.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass-card border border-glass-border rounded-xl bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="gradient-primary text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-glass-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 AgroSmart. All rights reserved.
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </Button>
        </div>
      </div>
    </footer>
  );
};
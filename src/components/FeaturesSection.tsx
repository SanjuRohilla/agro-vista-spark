import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Brain, 
  Satellite, 
  Database, 
  Bell,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Biosecurity Awareness Hub',
    description: 'Interactive protocols and awareness training for comprehensive farm protection.',
    color: 'text-destructive',
    bgColor: 'bg-destructive/10',
    items: ['Protocol Guidelines', 'Interactive Quizzes', 'Risk Assessment']
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Smart predictions and personalized recommendations for optimal farm management.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    items: ['Disease Prediction', 'Yield Optimization', 'Resource Planning']
  },
  {
    icon: Satellite,
    title: 'IoT Monitoring Network',
    description: 'Real-time sensor data collection and automated environmental monitoring.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    items: ['Soil Sensors', 'Weather Stations', 'Livestock Tracking']
  },
  {
    icon: Database,
    title: 'Digital Record Keeping',
    description: 'Comprehensive data management with cloud synchronization and compliance.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    items: ['Health Records', 'Vaccination History', 'Compliance Reports']
  },
  {
    icon: Bell,
    title: 'Smart Alert System',
    description: 'Instant notifications for critical events and automated response protocols.',
    color: 'text-warning',
    bgColor: 'bg-warning/10',
    items: ['Disease Alerts', 'Weather Warnings', 'System Monitoring']
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-heading font-bold mb-6">
            Smart <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive farm management tools powered by cutting-edge technology 
            to optimize your agricultural operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass-strong p-8 h-full hover:shadow-[var(--shadow-glow)] transition-all duration-500">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>

                <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-3 mb-6">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-glass-strong"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass-strong p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-heading font-bold mb-4">
                  Ready to Transform Your Farm?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of farmers already using AgroSmart to optimize 
                  their operations and increase productivity.
                </p>
                <div className="flex space-x-4">
                  <Button size="lg" className="gradient-primary text-primary-foreground">
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="border-glass-border">
                    Schedule Demo
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '450K+', label: 'Farmers' },
                  { number: '5.3M+', label: 'Records' },
                  { number: '98%', label: 'Uptime' },
                  { number: '24/7', label: 'Support' }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center p-4 glass-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
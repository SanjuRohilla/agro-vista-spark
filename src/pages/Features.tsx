import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ParticleSystem } from '@/components/ParticleSystem';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Brain, 
  FileText, 
  Bell, 
  CheckCircle, 
  AlertTriangle,
  Users,
  BookOpen,
  MessageSquare,
  Download,
  Cloud,
  Smartphone
} from 'lucide-react';

const Features = () => {
  const biosecurityFeatures = [
    {
      icon: Shield,
      title: "Disease Prevention Protocols",
      description: "AI-powered biosecurity protocols tailored for your farm type and region",
      status: "Active",
      progress: 95
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment Tools",
      description: "Real-time risk analysis for livestock and crop diseases",
      status: "Monitoring",
      progress: 78
    },
    {
      icon: Users,
      title: "Community Alerts",
      description: "Network-based disease outbreak notifications from nearby farms",
      status: "Connected",
      progress: 87
    },
    {
      icon: BookOpen,
      title: "Training Modules",
      description: "Interactive biosecurity training with certification programs",
      status: "Learning",
      progress: 65
    }
  ];

  const smartSolutions = [
    {
      icon: Brain,
      title: "AI Farm Assistant",
      description: "24/7 AI chatbot for instant farming advice and problem solving",
      features: ["Crop disease diagnosis", "Weather predictions", "Market price alerts", "Best practices guidance"]
    },
    {
      icon: FileText,
      title: "Digital Record Keeping",
      description: "Comprehensive farm management with automated compliance tracking",
      features: ["Vaccination records", "Feed consumption logs", "Production tracking", "Financial analytics"]
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Intelligent alerts for critical farm events and opportunities",
      features: ["Disease outbreak warnings", "Market opportunities", "Weather alerts", "Equipment maintenance"]
    },
    {
      icon: Cloud,
      title: "Cloud Sync & Backup",
      description: "Secure cloud storage with real-time synchronization across devices",
      features: ["Automatic backups", "Multi-device access", "Offline capability", "Data security"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      <ParticleSystem />
      <Navigation />
      
      <main className="relative z-10">
        {/* Header Section */}
        <motion.section 
          className="pt-20 pb-16 px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Smart Farming Solutions{' '}
              <span className="inline-block animate-bounce">🚀</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI-powered tools and biosecurity solutions to transform your farming operations
            </p>
          </div>
        </motion.section>

        {/* Biosecurity Hub */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Biosecurity Awareness Hub
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive disease prevention and farm health monitoring system
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {biosecurityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card h-full hover:glass-strong transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 gradient-primary rounded-xl flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <Badge variant="secondary" className="w-fit mx-auto">
                        {feature.status}
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="mb-4">
                        {feature.description}
                      </CardDescription>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{feature.progress}%</span>
                        </div>
                        <Progress value={feature.progress} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Smart Solutions */}
        <motion.section 
          className="py-16 px-4 bg-glass/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                AI-Powered Smart Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge technology to optimize your farm operations and maximize productivity
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {smartSolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card h-full hover:glass-strong transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                          <solution.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{solution.title}</CardTitle>
                          <CardDescription>{solution.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-6 gradient-primary text-primary-foreground">
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Interactive Quiz Section */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Test Your Biosecurity Knowledge
            </h2>
            <p className="text-muted-foreground mb-8">
              Take our interactive quiz to assess your farm's biosecurity readiness
            </p>
            
            <Card className="glass-card p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  <span className="text-lg font-medium">Interactive Assessment</span>
                </div>
                <p className="text-muted-foreground">
                  Complete a 10-minute assessment to receive personalized biosecurity recommendations
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="gradient-primary text-primary-foreground">
                    Start Quiz
                  </Button>
                  <Button variant="outline" className="glass-border">
                    <Download className="w-4 h-4 mr-2" />
                    Download Guidelines
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Mobile App Promotion */}
        <motion.section 
          className="py-16 px-4 bg-glass/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Take AgroSmart Everywhere
            </h2>
            <p className="text-muted-foreground mb-8">
              Access all features on your mobile device with our progressive web app
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-8">
              <Smartphone className="w-16 h-16 text-primary" />
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Mobile Optimized</h3>
                <p className="text-muted-foreground">Works offline and syncs when connected</p>
              </div>
            </div>
            
            <Button className="gradient-primary text-primary-foreground text-lg px-8 py-3">
              Install App
            </Button>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
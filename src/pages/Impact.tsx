import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ParticleSystem } from '@/components/ParticleSystem';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  FileText, 
  Bell, 
  TrendingUp,
  Globe,
  Shield,
  Leaf,
  Award,
  Heart,
  DollarSign,
  BarChart3,
  MapPin,
  Clock,
  CheckCircle,
  Target
} from 'lucide-react';

const Impact = () => {
  const [counters, setCounters] = useState({
    digitalRecords: 0,
    farmersSupported: 0,
    alertsSent: 0,
    diseasesPrevented: 0
  });

  // Animated counters
  useEffect(() => {
    const targets = {
      digitalRecords: 450000,
      farmersSupported: 5300000,
      alertsSent: 450000,
      diseasesPrevented: 28000
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        digitalRecords: Math.min(prev.digitalRecords + targets.digitalRecords / steps, targets.digitalRecords),
        farmersSupported: Math.min(prev.farmersSupported + targets.farmersSupported / steps, targets.farmersSupported),
        alertsSent: Math.min(prev.alertsSent + targets.alertsSent / steps, targets.alertsSent),
        diseasesPrevented: Math.min(prev.diseasesPrevented + targets.diseasesPrevented / steps, targets.diseasesPrevented)
      }));
    }, interval);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return Math.floor(num).toLocaleString();
  };

  const impactMetrics = [
    {
      icon: FileText,
      title: "Digital Records Processed",
      value: counters.digitalRecords,
      suffix: "T",
      description: "Farm health records digitized and analyzed",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Users,
      title: "Farmers Supported",
      value: counters.farmersSupported,
      suffix: "",
      description: "Agricultural professionals using our platform",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Bell,
      title: "Alerts Sent",
      value: counters.alertsSent,
      suffix: "K",
      description: "Disease outbreak and risk notifications",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Shield,
      title: "Diseases Prevented",
      value: counters.diseasesPrevented,
      suffix: "K",
      description: "Potential outbreaks prevented through early detection",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const timelineEvents = [
    {
      year: "2020",
      title: "Platform Launch",
      description: "AgroSmart launched with basic IoT monitoring for 100 pilot farms",
      metrics: { farms: 100, sensors: 500, alerts: 50 },
      status: "completed"
    },
    {
      year: "2021",
      title: "AI Integration",
      description: "Machine learning algorithms deployed for disease prediction",
      metrics: { farms: 1200, sensors: 8500, alerts: 2800 },
      status: "completed"
    },
    {
      year: "2022",
      title: "National Expansion",
      description: "Expanded to cover all major agricultural states in India",
      metrics: { farms: 15000, sensors: 85000, alerts: 125000 },
      status: "completed"
    },
    {
      year: "2023",
      title: "Government Partnership",
      description: "Official partnership with Ministry of Agriculture & Farmers Welfare",
      metrics: { farms: 45000, sensors: 280000, alerts: 350000 },
      status: "completed"
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Recognized by UN FAO as innovative agricultural technology solution",
      metrics: { farms: 85000, sensors: 500000, alerts: 450000 },
      status: "current"
    },
    {
      year: "2025",
      title: "Expansion Goals",
      description: "Target: 200K farms, international expansion to South Asia",
      metrics: { farms: 200000, sensors: 1200000, alerts: 800000 },
      status: "planned"
    }
  ];

  const benefitAreas = [
    {
      icon: DollarSign,
      title: "Economic Impact",
      description: "₹2.4 billion saved in prevented livestock losses",
      achievements: [
        "Average 23% increase in farm productivity",
        "15% reduction in veterinary costs",
        "30% faster disease detection",
        "18% improvement in crop yields"
      ]
    },
    {
      icon: Leaf,
      title: "Environmental Benefits",
      description: "Sustainable farming practices promoted across India",
      achievements: [
        "40% reduction in unnecessary antibiotic use",
        "25% decrease in chemical fertilizer overuse",
        "30% improvement in water usage efficiency",
        "Carbon footprint reduced by 18%"
      ]
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Improving livelihoods of farming communities",
      achievements: [
        "85% farmer satisfaction rate",
        "60% improvement in animal welfare scores",
        "Training provided to 50K+ farmers",
        "Women farmers participation increased by 35%"
      ]
    },
    {
      icon: Globe,
      title: "Policy Influence",
      description: "Shaping national agricultural policies and standards",
      achievements: [
        "3 national policies influenced",
        "15 state-level implementations",
        "International best practice recognition",
        "WHO collaboration on One Health initiative"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success text-success-foreground';
      case 'current': return 'bg-primary text-primary-foreground';
      case 'planned': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'current': return Target;
      case 'planned': return Clock;
      default: return Clock;
    }
  };

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
              Our Impact{' '}
              <span className="inline-block animate-bounce">🌟</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming agriculture through technology, empowering farmers, and building a sustainable future
            </p>
          </div>
        </motion.section>

        {/* Impact Metrics */}
        <motion.section 
          className="px-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card text-center p-6 hover:glass-strong transition-all duration-300">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${metric.bgColor}`}>
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {formatNumber(metric.value)}{metric.suffix}
                    </div>
                    <h3 className="font-semibold mb-2">{metric.title}</h3>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section 
          className="py-16 px-4 bg-glass/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From a small pilot project to transforming agriculture across India
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/30"></div>

              <div className="space-y-8">
                {timelineEvents.map((event, index) => {
                  const StatusIcon = getStatusIcon(event.status);
                  return (
                    <motion.div
                      key={event.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      {/* Content */}
                      <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                        <Card className="glass-card">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <Badge className={getStatusColor(event.status)}>
                                {event.year}
                              </Badge>
                              <StatusIcon className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <CardTitle>{event.title}</CardTitle>
                            <CardDescription>{event.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div>
                                <div className="font-bold text-primary">{event.metrics.farms.toLocaleString()}</div>
                                <div className="text-xs text-muted-foreground">Farms</div>
                              </div>
                              <div>
                                <div className="font-bold text-primary">{event.metrics.sensors.toLocaleString()}</div>
                                <div className="text-xs text-muted-foreground">Sensors</div>
                              </div>
                              <div>
                                <div className="font-bold text-primary">{event.metrics.alerts.toLocaleString()}</div>
                                <div className="text-xs text-muted-foreground">Alerts</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Timeline dot */}
                      <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Benefit Areas */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Impact Areas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Measuring our success across economic, environmental, social, and policy dimensions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {benefitAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card h-full hover:glass-strong transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                          <area.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{area.title}</CardTitle>
                          <CardDescription>{area.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {area.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Recognition & Awards */}
        <motion.section 
          className="py-16 px-4 bg-glass/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Recognition & Awards
              </h2>
              <p className="text-muted-foreground">
                Honored by leading organizations for innovation in agriculture technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card text-center p-6">
                <Award className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <h3 className="font-semibold mb-2">UN FAO Innovation Award</h3>
                <p className="text-sm text-muted-foreground">Recognized for transformative agricultural technology</p>
              </Card>
              
              <Card className="glass-card text-center p-6">
                <Award className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="font-semibold mb-2">Digital India Excellence</h3>
                <p className="text-sm text-muted-foreground">Outstanding contribution to digital transformation</p>
              </Card>
              
              <Card className="glass-card text-center p-6">
                <Award className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <h3 className="font-semibold mb-2">Sustainable Tech Award</h3>
                <p className="text-sm text-muted-foreground">Environmental impact and sustainability leadership</p>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="py-16 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of the agricultural revolution. Together, we can create a more sustainable and prosperous future for farming communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary text-primary-foreground text-lg px-8 py-3">
                <Users className="w-5 h-5 mr-2" />
                Partner with Us
              </Button>
              <Button variant="outline" className="glass-border text-lg px-8 py-3">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Full Report
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Impact;
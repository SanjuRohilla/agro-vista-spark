import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ParticleSystem } from '@/components/ParticleSystem';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Activity, 
  Thermometer, 
  Droplets, 
  Wind, 
  Sun,
  Zap,
  Wifi,
  Battery,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Bell,
  Settings,
  Download,
  RefreshCw,
  MapPin,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sensorData = [
    {
      id: 1,
      name: "Soil Temperature",
      value: 24.5,
      unit: "°C",
      status: "normal",
      trend: "up",
      change: "+2.1",
      icon: Thermometer,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 2,
      name: "Soil Moisture",
      value: 68,
      unit: "%",
      status: "optimal",
      trend: "down",
      change: "-3.2",
      icon: Droplets,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10"
    },
    {
      id: 3,
      name: "Air Humidity",
      value: 72,
      unit: "%",
      status: "high",
      trend: "up",
      change: "+5.7",
      icon: Wind,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      id: 4,
      name: "UV Index",
      value: 8.2,
      unit: "",
      status: "high",
      trend: "up",
      change: "+1.3",
      icon: Sun,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    }
  ];

  const deviceStatus = [
    { id: 1, name: "Field Sensor A1", status: "online", battery: 87, signal: 95, location: "North Field" },
    { id: 2, name: "Weather Station", status: "online", battery: 92, signal: 88, location: "Central Area" },
    { id: 3, name: "Irrigation Sensor", status: "maintenance", battery: 45, signal: 78, location: "East Field" },
    { id: 4, name: "Livestock Monitor", status: "online", battery: 73, signal: 92, location: "Barn Area" }
  ];

  const aiPredictions = [
    {
      id: 1,
      title: "Disease Risk Assessment",
      prediction: "Low risk for next 7 days",
      confidence: 94,
      action: "Continue monitoring",
      priority: "low",
      icon: Activity
    },
    {
      id: 2,
      title: "Irrigation Recommendation",
      prediction: "Increase watering by 15%",
      confidence: 87,
      action: "Adjust schedule",
      priority: "medium",
      icon: Droplets
    },
    {
      id: 3,
      title: "Weather Impact",
      prediction: "Rain expected in 48hrs",
      confidence: 91,
      action: "Prepare drainage",
      priority: "high",
      icon: Sun
    }
  ];

  const farmMetrics = [
    { label: "Total Sensors", value: "24", change: "+2", trend: "up" },
    { label: "Active Alerts", value: "3", change: "-1", trend: "down" },
    { label: "Data Points/Hour", value: "1,440", change: "+156", trend: "up" },
    { label: "System Uptime", value: "99.8%", change: "+0.2%", trend: "up" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-success bg-success/10 border-success/20';
      case 'offline': return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'maintenance': return 'text-warning bg-warning/10 border-warning/20';
      default: return 'text-muted-foreground bg-muted/10 border-muted/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-destructive';
      case 'medium': return 'border-l-warning';
      case 'low': return 'border-l-success';
      default: return 'border-l-muted';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      <ParticleSystem />
      <Navigation />
      
      <main className="relative z-10">
        {/* Header Section */}
        <motion.section 
          className="pt-20 pb-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
                  IoT Dashboard{' '}
                  <span className="inline-block animate-pulse">📊</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Real-time monitoring and AI-powered insights for your smart farm
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-success animate-pulse' : 'bg-muted'}`}></div>
                  <span className="text-sm text-muted-foreground">
                    {isLive ? 'Live' : 'Offline'}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentTime.toLocaleTimeString()}
                </div>
                <Button variant="outline" size="sm" className="glass-border">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quick Metrics */}
        <motion.section 
          className="px-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {farmMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{metric.label}</p>
                          <p className="text-2xl font-bold">{metric.value}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {metric.trend === 'up' ? (
                            <TrendingUp className="w-4 h-4 text-success" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-destructive" />
                          )}
                          <span className={`text-sm ${metric.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                            {metric.change}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Main Dashboard */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <Tabs defaultValue="sensors" className="space-y-6">
            <TabsList className="glass-card p-1">
              <TabsTrigger value="sensors">Sensor Data</TabsTrigger>
              <TabsTrigger value="devices">Device Status</TabsTrigger>
              <TabsTrigger value="predictions">AI Predictions</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Sensor Data Tab */}
            <TabsContent value="sensors" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                {sensorData.map((sensor, index) => (
                  <motion.div
                    key={sensor.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="glass-card hover:glass-strong transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className={`p-2 rounded-lg ${sensor.bgColor}`}>
                            <sensor.icon className={`w-5 h-5 ${sensor.color}`} />
                          </div>
                          <Badge 
                            variant={sensor.status === 'normal' || sensor.status === 'optimal' ? 'secondary' : 'destructive'}
                            className="text-xs"
                          >
                            {sensor.status}
                          </Badge>
                        </div>
                        <CardTitle className="text-sm font-medium">{sensor.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-baseline justify-between">
                            <span className="text-2xl font-bold">{sensor.value}</span>
                            <span className="text-sm text-muted-foreground">{sensor.unit}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {sensor.trend === 'up' ? (
                              <TrendingUp className="w-3 h-3 text-success" />
                            ) : (
                              <TrendingDown className="w-3 h-3 text-destructive" />
                            )}
                            <span className={`text-xs ${sensor.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                              {sensor.change}% from yesterday
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Real-time Chart Placeholder */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="w-5 h-5" />
                    <span>Real-time Sensor Trends</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Activity className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-muted-foreground">Live sensor data visualization</p>
                      <p className="text-sm text-muted-foreground mt-1">Charts updating every 30 seconds</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Device Status Tab */}
            <TabsContent value="devices" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {deviceStatus.map((device, index) => (
                  <motion.div
                    key={device.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="glass-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{device.name}</CardTitle>
                          <Badge className={getStatusColor(device.status)}>
                            {device.status}
                          </Badge>
                        </div>
                        <CardDescription className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{device.location}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Battery className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">Battery</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Progress value={device.battery} className="w-16 h-2" />
                              <span className="text-sm font-medium">{device.battery}%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Wifi className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">Signal</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Progress value={device.signal} className="w-16 h-2" />
                              <span className="text-sm font-medium">{device.signal}%</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* AI Predictions Tab */}
            <TabsContent value="predictions" className="space-y-6">
              <div className="space-y-4">
                {aiPredictions.map((prediction, index) => (
                  <motion.div
                    key={prediction.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={`glass-card border-l-4 ${getPriorityColor(prediction.priority)}`}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <prediction.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{prediction.title}</CardTitle>
                              <CardDescription>{prediction.prediction}</CardDescription>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {prediction.confidence}% confident
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-muted-foreground">Recommended action:</span>
                            <span className="text-sm font-medium">{prediction.action}</span>
                          </div>
                          <Button size="sm" variant="outline" className="glass-border">
                            Take Action
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Data Collection Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-muted-foreground">Historical data trends</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Data Accuracy</span>
                        <span className="font-medium">98.7%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Sensor Uptime</span>
                        <span className="font-medium">99.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Alert Response Time</span>
                        <span className="font-medium">&lt; 2 min</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Prediction Accuracy</span>
                        <span className="font-medium">94.1%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Export Options */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Data Export & Reports</CardTitle>
                  <CardDescription>Download your farm data and analytics reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="glass-border">
                      <Download className="w-4 h-4 mr-2" />
                      Export CSV
                    </Button>
                    <Button variant="outline" className="glass-border">
                      <Download className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                    <Button variant="outline" className="glass-border">
                      <Settings className="w-4 h-4 mr-2" />
                      Configure Alerts
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
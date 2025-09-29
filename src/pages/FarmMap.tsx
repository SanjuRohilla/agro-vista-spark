import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ParticleSystem } from '@/components/ParticleSystem';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { 
  MapPin, 
  Layers, 
  Satellite, 
  Filter,
  Info,
  AlertCircle,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Thermometer,
  Droplets,
  Wind,
  Sun
} from 'lucide-react';

const FarmMap = () => {
  const [selectedLayer, setSelectedLayer] = useState('livestock');
  const [riskLevel, setRiskLevel] = useState('all');
  const [zoomLevel, setZoomLevel] = useState([5]);

  const mapLayers = [
    { id: 'livestock', name: 'Livestock Density', icon: Users },
    { id: 'biosecurity', name: 'Biosecurity Zones', icon: AlertCircle },
    { id: 'weather', name: 'Weather Patterns', icon: Sun },
    { id: 'disease', name: 'Disease Hotspots', icon: TrendingUp }
  ];

  const riskZones = [
    {
      id: 1,
      name: "Punjab Agricultural Zone",
      coordinates: { lat: 30.7333, lng: 76.7794 },
      riskLevel: "low",
      livestockCount: "2.1M",
      lastUpdate: "2 hours ago",
      diseases: ["Foot & Mouth", "Newcastle"],
      temperature: 28,
      humidity: 65,
      windSpeed: 12
    },
    {
      id: 2,
      name: "Haryana Dairy Belt",
      coordinates: { lat: 29.0588, lng: 76.0856 },
      riskLevel: "medium",
      livestockCount: "1.8M",
      lastUpdate: "4 hours ago",
      diseases: ["Lumpy Skin", "Bird Flu"],
      temperature: 32,
      humidity: 58,
      windSpeed: 8
    },
    {
      id: 3,
      name: "Rajasthan Pastoral Zone",
      coordinates: { lat: 27.0238, lng: 74.2179 },
      riskLevel: "high",
      livestockCount: "3.2M",
      lastUpdate: "1 hour ago",
      diseases: ["PPR", "Anthrax", "FMD"],
      temperature: 35,
      humidity: 42,
      windSpeed: 15
    },
    {
      id: 4,
      name: "Gujarat Coastal Region",
      coordinates: { lat: 22.2587, lng: 71.1924 },
      riskLevel: "low",
      livestockCount: "2.7M",
      lastUpdate: "3 hours ago",
      diseases: ["Mastitis"],
      temperature: 29,
      humidity: 72,
      windSpeed: 18
    }
  ];

  const sensorData = [
    { id: 1, type: "Temperature", value: 28, unit: "°C", status: "normal", icon: Thermometer },
    { id: 2, type: "Humidity", value: 65, unit: "%", status: "normal", icon: Droplets },
    { id: 3, type: "Wind Speed", value: 12, unit: "km/h", status: "normal", icon: Wind },
    { id: 4, type: "UV Index", value: 7, unit: "", status: "high", icon: Sun }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-success/20 text-success border-success/30';
      case 'medium': return 'bg-warning/20 text-warning border-warning/30';
      case 'high': return 'bg-destructive/20 text-destructive border-destructive/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getStatusIcon = (level: string) => {
    switch (level) {
      case 'low': return CheckCircle;
      case 'medium': return Clock;
      case 'high': return AlertCircle;
      default: return Info;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      <ParticleSystem />
      <Navigation />
      
      <main className="relative z-10">
        {/* Header Section */}
        <motion.section 
          className="pt-20 pb-8 px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Interactive Farm Map{' '}
              <span className="inline-block animate-bounce">🗺️</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore real-time livestock density, biosecurity zones, and disease risk areas across India
            </p>
          </div>
        </motion.section>

        {/* Map Controls */}
        <motion.section 
          className="px-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto">
            <Card className="glass-card p-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Layers className="w-5 h-5 text-primary" />
                  <span className="font-medium">Map Layer:</span>
                  <Select value={selectedLayer} onValueChange={setSelectedLayer}>
                    <SelectTrigger className="w-48 glass-border">
                      <SelectValue placeholder="Select layer" />
                    </SelectTrigger>
                    <SelectContent>
                      {mapLayers.map((layer) => (
                        <SelectItem key={layer.id} value={layer.id}>
                          <div className="flex items-center space-x-2">
                            <layer.icon className="w-4 h-4" />
                            <span>{layer.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-primary" />
                  <span className="font-medium">Risk Level:</span>
                  <Select value={riskLevel} onValueChange={setRiskLevel}>
                    <SelectTrigger className="w-32 glass-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="font-medium">Zoom:</span>
                  <div className="w-24">
                    <Slider
                      value={zoomLevel}
                      onValueChange={setZoomLevel}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>

                <Button variant="outline" className="glass-border">
                  <Satellite className="w-4 h-4 mr-2" />
                  Satellite View
                </Button>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* Main Map and Sidebar */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Map Area */}
            <div className="lg:col-span-3">
              <Card className="glass-card h-[600px] relative overflow-hidden">
                <CardContent className="p-0 h-full">
                  {/* Simplified India Map SVG */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 relative flex items-center justify-center">
                    <svg 
                      viewBox="0 0 800 600" 
                      className="w-full h-full"
                      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
                    >
                      {/* India outline */}
                      <path
                        d="M200 100 L600 120 L580 180 L620 250 L580 320 L520 380 L450 420 L350 450 L280 400 L250 350 L220 300 L180 250 L160 200 Z"
                        fill="hsl(var(--primary) / 0.1)"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        className="transition-all duration-300 hover:fill-primary/20"
                      />
                      
                      {/* Risk zones as circles */}
                      {riskZones.map((zone, index) => {
                        const StatusIcon = getStatusIcon(zone.riskLevel);
                        const x = 200 + (index * 120);
                        const y = 200 + (index % 2 * 100);
                        
                        return (
                          <g key={zone.id}>
                            <circle
                              cx={x}
                              cy={y}
                              r="20"
                              className={`transition-all duration-300 hover:scale-110 cursor-pointer ${
                                zone.riskLevel === 'low' ? 'fill-success/30 stroke-success' :
                                zone.riskLevel === 'medium' ? 'fill-warning/30 stroke-warning' :
                                'fill-destructive/30 stroke-destructive'
                              }`}
                              strokeWidth="2"
                            />
                            <text
                              x={x}
                              y={y + 35}
                              textAnchor="middle"
                              className="fill-foreground text-xs font-medium"
                            >
                              {zone.name.split(' ')[0]}
                            </text>
                          </g>
                        );
                      })}
                    </svg>

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4">
                      <Card className="glass-card p-3">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-success"></div>
                            <span className="text-xs">Low Risk</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-warning"></div>
                            <span className="text-xs">Medium Risk</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-destructive"></div>
                            <span className="text-xs">High Risk</span>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Current Conditions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Info className="w-5 h-5" />
                    <span>Current Conditions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sensorData.map((sensor) => (
                      <div key={sensor.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <sensor.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{sensor.type}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-medium">{sensor.value}{sensor.unit}</span>
                          <Badge 
                            variant={sensor.status === 'normal' ? 'secondary' : 'destructive'}
                            className="ml-2 text-xs"
                          >
                            {sensor.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Risk Zones List */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Risk Zones</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {riskZones.slice(0, 3).map((zone) => {
                      const StatusIcon = getStatusIcon(zone.riskLevel);
                      return (
                        <div key={zone.id} className="p-3 glass-border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-sm">{zone.name}</h4>
                            <Badge className={`text-xs ${getRiskColor(zone.riskLevel)}`}>
                              {zone.riskLevel}
                            </Badge>
                          </div>
                          <div className="text-xs text-muted-foreground space-y-1">
                            <div className="flex justify-between">
                              <span>Livestock:</span>
                              <span>{zone.livestockCount}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Diseases:</span>
                              <span>{zone.diseases.length}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Updated:</span>
                              <span>{zone.lastUpdate}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <motion.section 
          className="py-16 px-4 bg-glass/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Real-time Farm Intelligence
              </h2>
              <p className="text-muted-foreground">
                Live data from thousands of farms across India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">12.5M</div>
                <div className="text-muted-foreground">Total Livestock</div>
              </Card>
              <Card className="glass-card text-center p-6">
                <div className="text-3xl font-bold text-success mb-2">2,847</div>
                <div className="text-muted-foreground">Active Farms</div>
              </Card>
              <Card className="glass-card text-center p-6">
                <div className="text-3xl font-bold text-warning mb-2">156</div>
                <div className="text-muted-foreground">Alert Zones</div>
              </Card>
              <Card className="glass-card text-center p-6">
                <div className="text-3xl font-bold text-accent mb-2">98.2%</div>
                <div className="text-muted-foreground">System Uptime</div>
              </Card>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default FarmMap;
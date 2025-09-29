import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Droplets, Sun, Sprout, IndianRupee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LocationData, EnvironmentalData, CropRecommendation } from '@/pages/CropRecommendation';

interface ResultsDashboardProps {
  location: LocationData;
  environmentalData: EnvironmentalData;
}

// Mock crop data based on Indian agriculture
const generateCropRecommendations = (location: LocationData, envData: EnvironmentalData): CropRecommendation[] => {
  const baseRecommendations: CropRecommendation[] = [
    {
      id: '1',
      name: 'Rice (Paddy)',
      image: '🌾',
      fertilizerNeed: 'Medium',
      sunlightRequirement: 6,
      rainfallRequirement: 1200,
      soilHumidity: 80,
      profitForecast: 45000,
      yield: 35,
      msp: 2040,
      fertilizerType: 'NPK 20:20:0',
      suitability: 85
    },
    {
      id: '2', 
      name: 'Wheat',
      image: '🌾',
      fertilizerNeed: 'Medium',
      sunlightRequirement: 7,
      rainfallRequirement: 600,
      soilHumidity: 50,
      profitForecast: 38000,
      yield: 28,
      msp: 2125,
      fertilizerType: 'Urea + DAP',
      suitability: 78
    },
    {
      id: '3',
      name: 'Sugarcane',
      image: '🎋',
      fertilizerNeed: 'High',
      sunlightRequirement: 8,
      rainfallRequirement: 1500,
      soilHumidity: 70,
      profitForecast: 65000,
      yield: 700,
      msp: 315,
      fertilizerType: 'NPK 15:15:15',
      suitability: 72
    },
    {
      id: '4',
      name: 'Cotton',
      image: '🌸',
      fertilizerNeed: 'Medium',
      sunlightRequirement: 8,
      rainfallRequirement: 800,
      soilHumidity: 40,
      profitForecast: 55000,
      yield: 18,
      msp: 6080,
      fertilizerType: 'NPK 17:17:17',
      suitability: 68
    }
  ];

  // Adjust suitability based on environmental conditions
  return baseRecommendations.map(crop => {
    let adjustedSuitability = crop.suitability;
    
    // Rainfall factor
    const rainfallDiff = Math.abs(crop.rainfallRequirement - envData.rainfall) / crop.rainfallRequirement;
    adjustedSuitability -= rainfallDiff * 20;
    
    // Sunlight factor
    const sunlightDiff = Math.abs(crop.sunlightRequirement - envData.sunlight) / crop.sunlightRequirement;
    adjustedSuitability -= sunlightDiff * 15;
    
    // Irrigation bonus
    if (envData.irrigationAvailable && crop.rainfallRequirement > 1000) {
      adjustedSuitability += 10;
    }
    
    return {
      ...crop,
      suitability: Math.max(0, Math.min(100, adjustedSuitability))
    };
  }).sort((a, b) => b.suitability - a.suitability);
};

const AnimatedCounter: React.FC<{ value: number; prefix?: string; suffix?: string }> = ({ 
  value, 
  prefix = '', 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="font-bold text-lg">
      {prefix}{count.toLocaleString('en-IN')}{suffix}
    </span>
  );
};

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({
  location,
  environmentalData
}) => {
  const [recommendations] = useState(() => generateCropRecommendations(location, environmentalData));

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-heading font-bold text-center mb-2">
            Crop Recommendations for {location.state}
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Based on your soil and climate conditions
          </p>

          {/* Top Crop Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {recommendations.slice(0, 3).map((crop, index) => (
              <motion.div
                key={crop.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative ${index === 0 ? 'md:col-span-3 lg:col-span-1' : ''}`}
              >
                <Card className={`glass-card border-glass-border backdrop-blur-xl h-full ${
                  index === 0 ? 'border-primary/50 shadow-[0_0_30px_rgba(var(--primary),0.3)]' : ''
                }`}>
                  <CardContent className="p-6">
                    {index === 0 && (
                      <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Most Profitable
                      </Badge>
                    )}
                    
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{crop.image}</div>
                      <h3 className="font-heading font-bold text-lg">{crop.name}</h3>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <div className="w-full bg-secondary/20 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${crop.suitability}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">
                          {Math.round(crop.suitability)}% match
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm">
                          <Sprout className="w-4 h-4 text-green-500" />
                          Fertilizer Need
                        </span>
                        <Badge variant={crop.fertilizerNeed === 'Low' ? 'secondary' : 
                                     crop.fertilizerNeed === 'Medium' ? 'default' : 'destructive'}>
                          {crop.fertilizerNeed}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm">
                          <Sun className="w-4 h-4 text-yellow-500" />
                          Sunlight
                        </span>
                        <span className="text-sm font-medium">{crop.sunlightRequirement} hrs</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm">
                          <Droplets className="w-4 h-4 text-blue-500" />
                          Rainfall
                        </span>
                        <span className="text-sm font-medium">{crop.rainfallRequirement}mm</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm">
                          <Droplets className="w-4 h-4 text-cyan-500" />
                          Soil Humidity
                        </span>
                        <span className="text-sm font-medium">{crop.soilHumidity}%</span>
                      </div>

                      <div className="border-t border-glass-border pt-3 mt-4">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2 text-sm font-medium">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            Profit Forecast
                          </span>
                          <div className="text-right">
                            <div className="text-primary font-bold">
                              <AnimatedCounter 
                                value={crop.profitForecast} 
                                prefix="₹" 
                              />
                            </div>
                            <div className="text-xs text-muted-foreground">per acre</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Insights Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-card p-6 rounded-xl border border-glass-border backdrop-blur-xl"
            >
              <h3 className="font-heading font-bold mb-3 text-success">🌾 Farmer Tips</h3>
              <p className="text-sm text-muted-foreground">
                {recommendations[0].name} is highly suitable for {location.state} due to 
                {environmentalData.rainfall > 1000 ? ' adequate rainfall' : ' your irrigation setup'} 
                and favorable soil conditions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="glass-card p-6 rounded-xl border border-glass-border backdrop-blur-xl"
            >
              <h3 className="font-heading font-bold mb-3 text-warning">📈 Market Insight</h3>
              <p className="text-sm text-muted-foreground">
                Current MSP for {recommendations[0].name} is ₹{recommendations[0].msp} per quintal. 
                Government schemes provide additional support for quality produce.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
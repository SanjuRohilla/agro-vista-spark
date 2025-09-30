import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Sun, 
  Cloud, 
  ChevronDown,
  Play
} from 'lucide-react';
import heroVideo from '@/assets/farm-hero-video.mp4';
import aiIcon from '@/assets/ai-icon.png';
import iotIcon from '@/assets/iot-icon.png';
import biosecurityIcon from '@/assets/biosecurity-icon.png';
import { ParticleSystem } from './ParticleSystem';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/30" />
      </div>

      {/* Particle System */}
      <ParticleSystem />

      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Hero Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Smart <span className="text-gradient">Agriculture</span>
              <br />
              for the Future
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Revolutionize your farming with AI-powered insights, IoT monitoring, 
              and intelligent biosecurity management.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground hover:opacity-90 transition-smooth group"
              >
                Explore Dashboard
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-card border-glass-border text-foreground hover:bg-glass-strong"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </motion.div>

            {/* 3D Icons */}
            <motion.div 
              className="flex justify-center lg:justify-start space-x-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                { icon: aiIcon, label: 'AI Insights' },
                { icon: iotIcon, label: 'IoT Sensors' },
                { icon: biosecurityIcon, label: 'Biosecurity' }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="text-center"
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-16 h-16 mx-auto mb-2 animate-float">
                    <img 
                      src={item.icon} 
                      alt={item.label}
                      className="w-full h-full object-contain filter drop-shadow-lg"
                    />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Dashboard Cards */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Weather Card */}
            <Card className="glass-strong p-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Sun className="mr-2 h-5 w-5 text-warning" />
                  Weather Forecast
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Sun, temp: '24°C', condition: 'Sunny' },
                    { icon: Cloud, temp: '21°C', condition: 'Cloudy' },
                    { icon: Sun, temp: '26°C', condition: 'Clear' }
                  ].map((day, index) => (
                    <div key={index} className="text-center">
                      <day.icon className="mx-auto mb-2 h-6 w-6 text-warning" />
                      <div className="text-sm font-medium">{day.temp}</div>
                      <div className="text-xs text-muted-foreground">{day.condition}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Card>

            {/* IoT Sensors Card */}
            <Card className="glass-strong p-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Thermometer className="mr-2 h-5 w-5 text-secondary" />
                  Real-time Sensors
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Thermometer, label: 'Temperature', value: '22.5°C', color: 'text-warning' },
                    { icon: Droplets, label: 'Soil Moisture', value: '68%', color: 'text-secondary' },
                    { icon: Wind, label: 'Humidity', value: '74%', color: 'text-primary' }
                  ].map((sensor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <sensor.icon className={`mr-3 h-4 w-4 ${sensor.color}`} />
                        <span className="text-sm font-medium">{sensor.label}</span>
                      </div>
                      <span className="text-sm font-bold text-foreground">{sensor.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Card>

            {/* Farm Health Score */}
            <Card className="glass-strong p-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-lg font-semibold mb-4">Farm Health Score</h3>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="w-full bg-muted rounded-full h-3 mb-2">
                      <motion.div 
                        className="gradient-primary h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '92%' }}
                        transition={{ delay: 1, duration: 1.5 }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">Excellent condition</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="text-2xl font-bold text-success">92</span>
                    <span className="text-sm text-muted-foreground">/100</span>
                  </div>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-glass-border rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
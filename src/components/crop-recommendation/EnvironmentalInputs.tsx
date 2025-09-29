import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sun, Cloud, Sprout, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { EnvironmentalData, LocationData } from '@/pages/CropRecommendation';

interface EnvironmentalInputsProps {
  data: EnvironmentalData;
  onChange: (data: EnvironmentalData) => void;
  onGetRecommendations: () => void;
  selectedLocation: LocationData;
}

export const EnvironmentalInputs: React.FC<EnvironmentalInputsProps> = ({
  data,
  onChange,
  onGetRecommendations,
  selectedLocation
}) => {
  const handleChange = (key: keyof EnvironmentalData, value: any) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 rounded-3xl backdrop-blur-xl border border-glass-border">
          <h2 className="text-2xl font-heading font-bold text-center mb-8">
            Environmental Conditions for {selectedLocation.state}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Soil Type */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Sprout className="w-4 h-4 text-primary" />
                Soil Type
              </label>
              <Select value={data.soilType} onValueChange={(value) => handleChange('soilType', value)}>
                <SelectTrigger className="glass-card border-glass-border backdrop-blur-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Alluvial">Alluvial</SelectItem>
                  <SelectItem value="Black">Black</SelectItem>
                  <SelectItem value="Red">Red</SelectItem>
                  <SelectItem value="Sandy">Sandy</SelectItem>
                  <SelectItem value="Loamy">Loamy</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Soil Moisture */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium">
                <div className="relative">
                  <Droplets className="w-4 h-4 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 bg-blue-500 rounded-full opacity-30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                Soil Moisture: {data.soilMoisture}%
              </label>
              <div className="px-3">
                <Slider
                  value={[data.soilMoisture]}
                  onValueChange={([value]) => handleChange('soilMoisture', value)}
                  max={100}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>

            {/* Rainfall */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Cloud className="w-4 h-4 text-blue-600" />
                Rainfall: {data.rainfall}mm
              </label>
              <div className="px-3">
                <Slider
                  value={[data.rainfall]}
                  onValueChange={([value]) => handleChange('rainfall', value)}
                  max={2000}
                  min={100}
                  step={10}
                  className="w-full"
                />
              </div>
            </div>

            {/* Sunlight */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium">
                <div className="relative">
                  <Sun className="w-4 h-4 text-yellow-500" />
                  <motion.div
                    className="absolute inset-0 bg-yellow-400 rounded-full opacity-20"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
                Sunlight: {data.sunlight} hrs/day
              </label>
              <div className="px-3">
                <Slider
                  value={[data.sunlight]}
                  onValueChange={([value]) => handleChange('sunlight', value)}
                  max={12}
                  min={3}
                  step={0.5}
                  className="w-full"
                />
              </div>
            </div>

            {/* Irrigation */}
            <div className="flex items-center justify-between glass-card p-4 rounded-xl border border-glass-border backdrop-blur-xl">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Zap className="w-4 h-4 text-primary" />
                Irrigation Available
              </label>
              <Switch
                checked={data.irrigationAvailable}
                onCheckedChange={(checked) => handleChange('irrigationAvailable', checked)}
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              onClick={onGetRecommendations}
              size="lg"
              className="gradient-primary text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-[var(--shadow-glow)] px-8"
            >
              Get Crop Recommendations 🌾
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
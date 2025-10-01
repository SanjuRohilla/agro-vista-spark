import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LocationData } from '@/pages/CropRecommendation';
import indiaMap from '@/assets/india-agricultural-map.png';

interface IndiaMapSectionProps {
  onLocationSelect: (location: LocationData) => void;
  selectedLocation: LocationData | null;
}

// States with map position percentages (x%, y% from top-left based on the agricultural map)
const INDIAN_STATES = [
  { name: 'Andhra Pradesh', coordinates: [15.9129, 79.7400] as [number, number], mapPos: { x: 60, y: 70 } },
  { name: 'Assam', coordinates: [26.2006, 92.9376] as [number, number], mapPos: { x: 75, y: 25 } },
  { name: 'Bihar', coordinates: [25.0961, 85.3131] as [number, number], mapPos: { x: 65, y: 35 } },
  { name: 'Chhattisgarh', coordinates: [21.2787, 81.8661] as [number, number], mapPos: { x: 58, y: 50 } },
  { name: 'Gujarat', coordinates: [22.2587, 71.1924] as [number, number], mapPos: { x: 32, y: 52 } },
  { name: 'Haryana', coordinates: [29.0588, 76.0856] as [number, number], mapPos: { x: 42, y: 28 } },
  { name: 'Himachal Pradesh', coordinates: [31.1048, 77.1734] as [number, number], mapPos: { x: 45, y: 20 } },
  { name: 'Jharkhand', coordinates: [23.6102, 85.2799] as [number, number], mapPos: { x: 65, y: 45 } },
  { name: 'Karnataka', coordinates: [15.3173, 75.7139] as [number, number], mapPos: { x: 48, y: 75 } },
  { name: 'Kerala', coordinates: [10.8505, 76.2711] as [number, number], mapPos: { x: 48, y: 85 } },
  { name: 'Madhya Pradesh', coordinates: [22.9734, 78.6569] as [number, number], mapPos: { x: 50, y: 45 } },
  { name: 'Maharashtra', coordinates: [19.7515, 75.7139] as [number, number], mapPos: { x: 45, y: 60 } },
  { name: 'Manipur', coordinates: [24.6637, 93.9063] as [number, number], mapPos: { x: 80, y: 32 } },
  { name: 'Meghalaya', coordinates: [25.4670, 91.3662] as [number, number], mapPos: { x: 75, y: 30 } },
  { name: 'Mizoram', coordinates: [23.1645, 92.9376] as [number, number], mapPos: { x: 78, y: 38 } },
  { name: 'Nagaland', coordinates: [26.1584, 94.5624] as [number, number], mapPos: { x: 82, y: 28 } },
  { name: 'Odisha', coordinates: [20.9517, 85.0985] as [number, number], mapPos: { x: 68, y: 55 } },
  { name: 'Punjab', coordinates: [31.1471, 75.3412] as [number, number], mapPos: { x: 38, y: 22 } },
  { name: 'Rajasthan', coordinates: [27.0238, 74.2179] as [number, number], mapPos: { x: 35, y: 35 } },
  { name: 'Sikkim', coordinates: [27.5330, 88.5122] as [number, number], mapPos: { x: 72, y: 25 } },
  { name: 'Tamil Nadu', coordinates: [11.1271, 78.6569] as [number, number], mapPos: { x: 52, y: 82 } },
  { name: 'Telangana', coordinates: [18.1124, 79.0193] as [number, number], mapPos: { x: 55, y: 62 } },
  { name: 'Tripura', coordinates: [23.9408, 91.9882] as [number, number], mapPos: { x: 78, y: 35 } },
  { name: 'Uttar Pradesh', coordinates: [26.8467, 80.9462] as [number, number], mapPos: { x: 52, y: 32 } },
  { name: 'Uttarakhand', coordinates: [30.0668, 79.0193] as [number, number], mapPos: { x: 50, y: 22 } },
  { name: 'West Bengal', coordinates: [22.9868, 87.8550] as [number, number], mapPos: { x: 70, y: 42 } },
];

export const IndiaMapSection: React.FC<IndiaMapSectionProps> = ({
  onLocationSelect,
  selectedLocation
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStates, setFilteredStates] = useState<typeof INDIAN_STATES>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.length > 0) {
      const filtered = INDIAN_STATES.filter(state =>
        state.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredStates(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleStateSelect = (state: typeof INDIAN_STATES[0]) => {
    onLocationSelect({
      state: state.name,
      district: 'District Center',
      coordinates: state.coordinates
    });
    setSearchTerm(state.name);
    setShowDropdown(false);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 rounded-3xl backdrop-blur-xl border border-glass-border"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search your state, district, or village..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 glass-card border-glass-border backdrop-blur-xl"
              />
            </div>
            
            {/* Search Dropdown */}
            {showDropdown && filteredStates.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 mt-2 glass-card border border-glass-border rounded-xl backdrop-blur-xl z-50 max-h-60 overflow-y-auto"
              >
                {filteredStates.map((state, index) => (
                  <button
                    key={state.name}
                    onClick={() => handleStateSelect(state)}
                    className="w-full px-4 py-3 text-left hover:bg-glass-strong transition-colors flex items-center gap-2 first:rounded-t-xl last:rounded-b-xl"
                  >
                    <MapPin className="w-4 h-4 text-primary" />
                    {state.name}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Interactive India Map */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-2xl border border-glass-border overflow-hidden">
            {/* Agricultural Map Image */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <motion.img
                src={indiaMap}
                alt="India's Agricultural Landscape"
                className="w-full h-full object-contain"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              
              {selectedLocation && (() => {
                const stateData = INDIAN_STATES.find(s => s.name === selectedLocation.state);
                const position = stateData?.mapPos || { x: 50, y: 50 };
                
                return (
                  <>
                    {/* Pin Marker */}
                    <motion.div
                      initial={{ scale: 0, y: -20 }}
                      animate={{ scale: 1, y: 0 }}
                      className="absolute pointer-events-none"
                      style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        transform: 'translate(-50%, -100%)'
                      }}
                    >
                      <MapPin className="w-8 h-8 text-primary drop-shadow-lg" fill="currentColor" />
                    </motion.div>
                    
                    {/* State Label */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="absolute pointer-events-none"
                      style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        transform: 'translate(-50%, 10px)'
                      }}
                    >
                      <div className="glass-card px-4 py-2 rounded-full border-2 border-primary/50 shadow-lg backdrop-blur-md bg-white/95 dark:bg-black/90">
                        <span className="font-semibold text-sm text-primary whitespace-nowrap">
                          {selectedLocation.state}
                        </span>
                      </div>
                    </motion.div>
                  </>
                );
              })()}
            </div>

            {/* Quick State Buttons */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-2 justify-center">
                {INDIAN_STATES.slice(0, 6).map((state) => (
                  <Button
                    key={state.name}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleStateSelect(state)}
                    className="glass-card border border-glass-border hover:border-primary/30 backdrop-blur-xl text-xs"
                  >
                    {state.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {selectedLocation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center"
            >
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-primary/30">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  Selected: {selectedLocation.state}
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
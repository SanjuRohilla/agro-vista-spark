import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LocationData } from '@/pages/CropRecommendation';

interface IndiaMapSectionProps {
  onLocationSelect: (location: LocationData) => void;
  selectedLocation: LocationData | null;
}

const INDIAN_STATES = [
  { name: 'Andhra Pradesh', coordinates: [15.9129, 79.7400] as [number, number] },
  { name: 'Assam', coordinates: [26.2006, 92.9376] as [number, number] },
  { name: 'Bihar', coordinates: [25.0961, 85.3131] as [number, number] },
  { name: 'Chhattisgarh', coordinates: [21.2787, 81.8661] as [number, number] },
  { name: 'Gujarat', coordinates: [22.2587, 71.1924] as [number, number] },
  { name: 'Haryana', coordinates: [29.0588, 76.0856] as [number, number] },
  { name: 'Himachal Pradesh', coordinates: [31.1048, 77.1734] as [number, number] },
  { name: 'Jharkhand', coordinates: [23.6102, 85.2799] as [number, number] },
  { name: 'Karnataka', coordinates: [15.3173, 75.7139] as [number, number] },
  { name: 'Kerala', coordinates: [10.8505, 76.2711] as [number, number] },
  { name: 'Madhya Pradesh', coordinates: [22.9734, 78.6569] as [number, number] },
  { name: 'Maharashtra', coordinates: [19.7515, 75.7139] as [number, number] },
  { name: 'Manipur', coordinates: [24.6637, 93.9063] as [number, number] },
  { name: 'Meghalaya', coordinates: [25.4670, 91.3662] as [number, number] },
  { name: 'Mizoram', coordinates: [23.1645, 92.9376] as [number, number] },
  { name: 'Nagaland', coordinates: [26.1584, 94.5624] as [number, number] },
  { name: 'Odisha', coordinates: [20.9517, 85.0985] as [number, number] },
  { name: 'Punjab', coordinates: [31.1471, 75.3412] as [number, number] },
  { name: 'Rajasthan', coordinates: [27.0238, 74.2179] as [number, number] },
  { name: 'Sikkim', coordinates: [27.5330, 88.5122] as [number, number] },
  { name: 'Tamil Nadu', coordinates: [11.1271, 78.6569] as [number, number] },
  { name: 'Telangana', coordinates: [18.1124, 79.0193] as [number, number] },
  { name: 'Tripura', coordinates: [23.9408, 91.9882] as [number, number] },
  { name: 'Uttar Pradesh', coordinates: [26.8467, 80.9462] as [number, number] },
  { name: 'Uttarakhand', coordinates: [30.0668, 79.0193] as [number, number] },
  { name: 'West Bengal', coordinates: [22.9868, 87.8550] as [number, number] },
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
          <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-2xl border border-glass-border overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
            
            {/* Accurate India Map SVG */}
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <motion.div
                className="w-full max-w-lg opacity-30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <svg viewBox="0 0 500 600" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                  {/* More accurate India map outline */}
                  <path
                    d="M 220 40 L 240 35 L 260 40 L 280 50 L 300 65 L 310 80 L 318 95 L 320 110 L 318 125 L 315 140 L 310 155 L 305 170 L 298 185 L 290 200 L 285 215 L 280 230 L 275 245 L 270 260 L 268 275 L 265 290 L 263 305 L 260 320 L 258 335 L 255 350 L 252 365 L 248 380 L 243 395 L 238 410 L 232 425 L 225 440 L 218 455 L 210 470 L 200 485 L 188 495 L 175 500 L 160 503 L 145 500 L 132 495 L 120 488 L 110 478 L 102 465 L 98 450 L 95 435 L 93 420 L 92 405 L 90 390 L 88 375 L 85 360 L 82 345 L 78 330 L 73 315 L 68 300 L 65 285 L 63 270 L 62 255 L 60 240 L 58 225 L 55 210 L 52 195 L 50 180 L 48 165 L 47 150 L 47 135 L 48 120 L 50 105 L 55 90 L 60 75 L 68 62 L 78 52 L 90 45 L 105 40 L 120 38 L 135 37 L 150 37 L 165 38 L 180 40 L 195 40 L 210 40 Z M 180 520 L 185 530 L 188 545 L 188 560 L 185 575 L 180 585 L 170 590 L 155 590 L 145 585 L 140 575 L 138 560 L 140 545 L 145 530 L 155 520 L 165 518 Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary/40 drop-shadow-lg"
                  />
                  {/* State markers */}
                  {selectedLocation && (
                    <motion.circle
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      cx="200"
                      cy="250"
                      r="8"
                      fill="hsl(var(--primary))"
                      className="drop-shadow-lg"
                    />
                  )}
                </svg>
              </motion.div>
              
              {selectedLocation && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="glass-card px-4 py-2 rounded-full border border-primary/30">
                    <div className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{selectedLocation.state}</span>
                    </div>
                  </div>
                </motion.div>
              )}
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
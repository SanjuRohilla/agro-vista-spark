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

          {/* Interactive India Map Placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-2xl border border-glass-border overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
            
            {/* India Map SVG Simplified */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                className="w-80 h-80 opacity-20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Simplified India outline */}
                  <path
                    d="M100 80 C120 60, 160 50, 200 60 C240 70, 280 90, 300 120 C310 150, 300 180, 290 220 C280 260, 260 300, 240 320 C200 340, 160 330, 120 310 C90 280, 80 240, 85 200 C90 160, 95 120, 100 80 Z"
                    fill="currentColor"
                    className="text-primary/30"
                  />
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
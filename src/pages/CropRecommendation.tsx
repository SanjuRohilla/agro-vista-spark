import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { IndiaMapSection } from '@/components/crop-recommendation/IndiaMapSection';
import { EnvironmentalInputs } from '@/components/crop-recommendation/EnvironmentalInputs';
import { ResultsDashboard } from '@/components/crop-recommendation/ResultsDashboard';
import { ComparisonTable } from '@/components/crop-recommendation/ComparisonTable';
import { ActionSection } from '@/components/crop-recommendation/ActionSection';
import { ParticleSystem } from '@/components/ParticleSystem';

export interface LocationData {
  state: string;
  district: string;
  coordinates: [number, number];
}

export interface EnvironmentalData {
  soilType: string;
  soilMoisture: number;
  rainfall: number;
  sunlight: number;
  irrigationAvailable: boolean;
}

export interface CropRecommendation {
  id: string;
  name: string;
  image: string;
  fertilizerNeed: 'Low' | 'Medium' | 'High';
  sunlightRequirement: number;
  rainfallRequirement: number;
  soilHumidity: number;
  profitForecast: number;
  yield: number;
  msp: number;
  fertilizerType: string;
  suitability: number;
}

const CropRecommendation = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [environmentalData, setEnvironmentalData] = useState<EnvironmentalData>({
    soilType: 'Alluvial',
    soilMoisture: 30,
    rainfall: 800,
    sunlight: 7,
    irrigationAvailable: false,
  });
  const [showResults, setShowResults] = useState(false);

  const handleLocationSelect = (location: LocationData) => {
    setSelectedLocation(location);
  };

  const handleGetRecommendations = () => {
    if (selectedLocation) {
      setShowResults(true);
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
              Find the Best Crop for Your Region{' '}
              <span className="inline-block animate-bounce">🌱</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Select your area on the map and discover the most profitable crop for your land
            </p>
          </div>
        </motion.section>

        {/* Interactive India Map */}
        <IndiaMapSection 
          onLocationSelect={handleLocationSelect}
          selectedLocation={selectedLocation}
        />

        {/* Environmental Input Section */}
        {selectedLocation && (
          <EnvironmentalInputs
            data={environmentalData}
            onChange={setEnvironmentalData}
            onGetRecommendations={handleGetRecommendations}
            selectedLocation={selectedLocation}
          />
        )}

        {/* Results Dashboard */}
        {showResults && selectedLocation && (
          <>
            <ResultsDashboard 
              location={selectedLocation}
              environmentalData={environmentalData}
            />
            
            <ComparisonTable 
              location={selectedLocation}
              environmentalData={environmentalData}
            />
            
            <ActionSection />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CropRecommendation;
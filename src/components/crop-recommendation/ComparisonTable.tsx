import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpDown, ChevronDown, ChevronRight, IndianRupee, TrendingUp } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LocationData, EnvironmentalData, CropRecommendation } from '@/pages/CropRecommendation';

interface ComparisonTableProps {
  location: LocationData;
  environmentalData: EnvironmentalData;
}

const mockCrops: CropRecommendation[] = [
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
  },
  {
    id: '5',
    name: 'Maize',
    image: '🌽',
    fertilizerNeed: 'Medium',
    sunlightRequirement: 7,
    rainfallRequirement: 700,
    soilHumidity: 60,
    profitForecast: 42000,
    yield: 25,
    msp: 1870,
    fertilizerType: 'NPK 12:32:16',
    suitability: 75
  }
];

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  location,
  environmentalData
}) => {
  const [sortBy, setSortBy] = useState<keyof CropRecommendation>('suitability');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const sortedCrops = [...mockCrops].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return sortOrder === 'asc' 
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });

  const handleSort = (key: keyof CropRecommendation) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('desc');
    }
  };

  const toggleRowExpansion = (cropId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(cropId)) {
      newExpanded.delete(cropId);
    } else {
      newExpanded.add(cropId);
    }
    setExpandedRows(newExpanded);
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
          <h2 className="text-2xl font-heading font-bold text-center mb-8">
            Detailed Crop Comparison
          </h2>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-glass-border hover:bg-glass-strong/50">
                  <TableHead className="w-12"></TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => handleSort('name')}
                      className="flex items-center gap-2 p-0 h-auto font-medium"
                    >
                      Crop
                      <ArrowUpDown className="w-4 h-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => handleSort('fertilizerType')}
                      className="flex items-center gap-2 p-0 h-auto font-medium"
                    >
                      Fertilizer Type
                      <ArrowUpDown className="w-4 h-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => handleSort('fertilizerNeed')}
                      className="flex items-center gap-2 p-0 h-auto font-medium"
                    >
                      Fertilizer Level
                      <ArrowUpDown className="w-4 h-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => handleSort('rainfallRequirement')}
                      className="flex items-center gap-2 p-0 h-auto font-medium"
                    >
                      Rainfall
                      <ArrowUpDown className="w-4 h-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => handleSort('sunlightRequirement')}
                      className="flex items-center gap-2 p-0 h-auto font-medium"
                    >
                      Sunlight
                      <ArrowUpDown className="w-4 h-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => handleSort('yield')}
                      className="flex items-center gap-2 p-0 h-auto font-medium"
                    >
                      Yield
                      <ArrowUpDown className="w-4 h-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      onClick={() => handleSort('profitForecast')}
                      className="flex items-center gap-2 p-0 h-auto font-medium"
                    >
                      Profit (₹)
                      <ArrowUpDown className="w-4 h-4" />
                    </Button>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedCrops.map((crop, index) => (
                  <React.Fragment key={crop.id}>
                    <motion.tr
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-glass-border hover:bg-glass-strong/30 cursor-pointer transition-colors"
                      onClick={() => toggleRowExpansion(crop.id)}
                    >
                      <TableCell>
                        {expandedRows.has(crop.id) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{crop.image}</span>
                          <div>
                            <div className="font-medium">{crop.name}</div>
                            <div className="flex items-center gap-1 mt-1">
                              <div className="w-16 bg-secondary/20 rounded-full h-1.5">
                                <div
                                  className="bg-primary h-1.5 rounded-full transition-all duration-1000"
                                  style={{ width: `${crop.suitability}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {Math.round(crop.suitability)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <code className="text-xs bg-secondary/20 px-2 py-1 rounded">
                          {crop.fertilizerType}
                        </code>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={crop.fertilizerNeed === 'Low' ? 'secondary' : 
                                 crop.fertilizerNeed === 'Medium' ? 'default' : 'destructive'}
                        >
                          {crop.fertilizerNeed}
                        </Badge>
                      </TableCell>
                      <TableCell>{crop.rainfallRequirement}mm</TableCell>
                      <TableCell>{crop.sunlightRequirement} hrs</TableCell>
                      <TableCell>{crop.yield} q/acre</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 font-medium text-primary">
                          <IndianRupee className="w-4 h-4" />
                          {crop.profitForecast.toLocaleString('en-IN')}
                        </div>
                      </TableCell>
                    </motion.tr>
                    
                    {expandedRows.has(crop.id) && (
                      <motion.tr
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-glass-border"
                      >
                        <TableCell colSpan={8}>
                          <div className="p-4 glass-card rounded-lg border border-glass-border backdrop-blur-xl">
                            <div className="grid md:grid-cols-3 gap-4">
                              <div>
                                <h4 className="font-medium mb-2">Government MSP</h4>
                                <div className="flex items-center gap-2">
                                  <IndianRupee className="w-4 h-4 text-primary" />
                                  <span className="font-medium">{crop.msp}/quintal</span>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Soil Humidity Need</h4>
                                <div className="flex items-center gap-2">
                                  <div className="w-full bg-secondary/20 rounded-full h-2">
                                    <div
                                      className="bg-blue-500 h-2 rounded-full"
                                      style={{ width: `${crop.soilHumidity}%` }}
                                    />
                                  </div>
                                  <span className="text-sm">{crop.soilHumidity}%</span>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Suitability Score</h4>
                                <div className="flex items-center gap-2">
                                  <TrendingUp className="w-4 h-4 text-primary" />
                                  <span className="font-medium">{Math.round(crop.suitability)}/100</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                      </motion.tr>
                    )}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
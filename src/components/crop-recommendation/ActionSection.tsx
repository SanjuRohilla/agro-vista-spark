import React from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, Printer, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const ActionSection: React.FC = () => {
  const handleDownloadReport = () => {
    // Mock download functionality
    console.log('Downloading crop recommendation report...');
  };

  const handleShareWhatsApp = () => {
    const message = "Check out my personalized crop recommendations from SmartFarm AI! 🌾";
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  const govSchemes = [
    { name: 'PM-KISAN', link: '#', description: 'Direct income support' },
    { name: 'Crop Insurance', link: '#', description: 'Risk protection scheme' },
    { name: 'MSP Support', link: '#', description: 'Minimum support price' },
    { name: 'Fertilizer Subsidy', link: '#', description: 'Input cost reduction' }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Action Buttons */}
          <div className="glass-card p-8 rounded-3xl backdrop-blur-xl border border-glass-border">
            <h2 className="text-2xl font-heading font-bold text-center mb-8">
              Take Action on Your Recommendations
            </h2>
            
            <div className="grid md:grid-cols-4 gap-4">
              <Button
                onClick={handleDownloadReport}
                variant="outline"
                className="glass-card border-glass-border hover:bg-glass-strong backdrop-blur-xl h-auto p-4 flex flex-col items-center gap-3"
              >
                <Download className="w-6 h-6 text-primary" />
                <div className="text-center">
                  <div className="font-medium">Download Report</div>
                  <div className="text-xs text-muted-foreground">PDF/Excel format</div>
                </div>
              </Button>

              <Button
                onClick={handleShareWhatsApp}
                variant="outline"
                className="glass-card border-glass-border hover:bg-glass-strong backdrop-blur-xl h-auto p-4 flex flex-col items-center gap-3"
              >
                <MessageCircle className="w-6 h-6 text-green-600" />
                <div className="text-center">
                  <div className="font-medium">Share WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Send to family</div>
                </div>
              </Button>

              <Button
                onClick={handlePrint}
                variant="outline"
                className="glass-card border-glass-border hover:bg-glass-strong backdrop-blur-xl h-auto p-4 flex flex-col items-center gap-3"
              >
                <Printer className="w-6 h-6 text-blue-600" />
                <div className="text-center">
                  <div className="font-medium">Print Report</div>
                  <div className="text-xs text-muted-foreground">Offline use</div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="glass-card border-glass-border hover:bg-glass-strong backdrop-blur-xl h-auto p-4 flex flex-col items-center gap-3"
              >
                <Share2 className="w-6 h-6 text-purple-600" />
                <div className="text-center">
                  <div className="font-medium">Share Link</div>
                  <div className="text-xs text-muted-foreground">Copy URL</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Government Schemes */}
          <div className="glass-card p-8 rounded-3xl backdrop-blur-xl border border-glass-border">
            <h3 className="text-xl font-heading font-bold text-center mb-6">
              Government Schemes & Support 🏛️
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {govSchemes.map((scheme, index) => (
                <motion.div
                  key={scheme.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="glass-card border-glass-border backdrop-blur-xl hover:border-primary/30 transition-colors cursor-pointer h-full">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{scheme.name}</h4>
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground">{scheme.description}</p>
                      <div className="mt-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full text-xs h-8"
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="glass-card p-6 rounded-xl border border-glass-border backdrop-blur-xl inline-block">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Smart Tip:</strong> Bookmark this page and check back seasonally for updated recommendations
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
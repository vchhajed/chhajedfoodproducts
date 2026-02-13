'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export default function QualityTimelineSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const timelineSteps: TimelineStep[] = [
    {
      id: 1,
      title: "Raw Material Sourcing",
      description: "Rigorous supplier selection and ingredient verification",
      icon: "TruckIcon",
      details: [
        "Supplier audit and certification verification",
        "Sample testing for quality parameters",
        "Traceability documentation for all ingredients",
        "Organic certification validation where applicable"
      ]
    },
    {
      id: 2,
      title: "Incoming Quality Check",
      description: "Comprehensive testing of all received materials",
      icon: "ClipboardDocumentCheckIcon",
      details: [
        "Physical inspection for damage and contamination",
        "Laboratory testing for chemical composition",
        "Microbiological analysis for safety",
        "Sensory evaluation by trained quality team"
      ]
    },
    {
      id: 3,
      title: "Production Monitoring",
      description: "Real-time quality control during manufacturing",
      icon: "CogIcon",
      details: [
        "Temperature and humidity monitoring",
        "In-process quality checks at critical control points",
        "Equipment calibration and maintenance verification",
        "Hygiene and sanitation protocol compliance"
      ]
    },
    {
      id: 4,
      title: "Laboratory Testing",
      description: "Advanced analytical testing of finished products",
      icon: "BeakerIcon",
      details: [
        "Nutritional composition analysis",
        "Microbiological safety testing",
        "Shelf-life stability studies",
        "Heavy metal and pesticide residue testing"
      ]
    },
    {
      id: 5,
      title: "Packaging Quality",
      description: "Ensuring product integrity and safety",
      icon: "ArchiveBoxIcon",
      details: [
        "Packaging material quality verification",
        "Seal integrity testing",
        "Label accuracy and compliance check",
        "Tamper-evident feature validation"
      ]
    },
    {
      id: 6,
      title: "Final Release",
      description: "Comprehensive approval before market distribution",
      icon: "CheckCircleIcon",
      details: [
        "Complete documentation review",
        "Quality manager approval",
        "Batch release certificate generation",
        "Traceability code assignment for recall capability"
      ]
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Quality Journey: From Farm to Table
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Follow the comprehensive quality control process that ensures every product meets our exacting standards
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="hidden lg:flex justify-between items-center mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 z-0"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${((activeStep - 1) / (timelineSteps.length - 1)) * 100}%` }}
            ></div>
            {timelineSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`relative z-10 flex flex-col items-center space-y-2 transition-all duration-300 ${
                  activeStep === step.id ? 'scale-110' : 'scale-100'
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === step.id
                      ? 'bg-primary text-primary-foreground shadow-warm-lg'
                      : step.id < activeStep
                      ? 'bg-success text-success-foreground'
                      : 'bg-card text-muted-foreground'
                  }`}
                >
                  <Icon name={step.icon as any} size={28} variant={activeStep === step.id ? 'solid' : 'outline'} />
                </div>
                <span className={`font-cta text-xs font-semibold text-center max-w-[100px] ${
                  activeStep === step.id ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          <div className="lg:hidden space-y-4 mb-8">
            {timelineSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${
                  activeStep === step.id
                    ? 'bg-primary text-primary-foreground shadow-warm-md'
                    : 'bg-card text-foreground'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activeStep === step.id ? 'bg-primary-foreground/20' : 'bg-muted'
                }`}>
                  <Icon 
                    name={step.icon as any} 
                    size={24} 
                    variant={activeStep === step.id ? 'solid' : 'outline'}
                    className={activeStep === step.id ? 'text-primary-foreground' : 'text-primary'}
                  />
                </div>
                <div className="text-left">
                  <p className="font-cta text-sm font-semibold">{step.title}</p>
                  <p className={`font-body text-xs ${
                    activeStep === step.id ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-card rounded-2xl shadow-warm-lg p-8 lg:p-12">
            {timelineSteps.map((step) => (
              <div
                key={step.id}
                className={`transition-all duration-500 ${
                  activeStep === step.id ? 'block' : 'hidden'
                }`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={step.icon as any} size={32} variant="solid" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-lg text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {step.details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-background rounded-lg"
                    >
                      <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
                      <p className="font-body text-sm text-foreground">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
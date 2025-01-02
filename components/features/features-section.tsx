"use client";

import { Check } from "lucide-react";

const features = [
  "Advanced AI Voice Assistant",
  "Natural Language Processing",
  "Multi-language Support",
  "Custom Voice Training",
  "Real-time Analytics",
  "API Integration",
  "24/7 Support",
  "Enterprise Security"
];

export function FeaturesSection() {
  return (
    <div className="w-1/2 bg-blue-600 flex items-center justify-center text-white p-12">
      <div className="max-w-md">
        <h2 className="text-3xl font-bold mb-8">
          Transform Your Business with AI Voice Technology
        </h2>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
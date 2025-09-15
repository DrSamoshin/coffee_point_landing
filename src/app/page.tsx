"use client";

import { useEffect } from 'react';
import { ScrollBackground } from '@/components/ScrollBackground';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PricingSection from '@/components/sections/PricingSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  useEffect(() => {
    // Скролл в верх страницы при загрузке/обновлении
    window.scrollTo(0, 0);
  }, []);

  return (
    <ScrollBackground>
      {/* Section 1 - Hero */}
      <HeroSection />

      {/* Section 2 - About */}
      <AboutSection />

      {/* Section 3 - Features */}
      <FeaturesSection />

      {/* Section 4 - Pricing */}
      <PricingSection />

      {/* Section 5 - CTA */}
      <CTASection />
    </ScrollBackground>
  );
}

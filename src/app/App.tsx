
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Hero } from '@/app/components/landing/Hero';
import { MenuBarFeature } from '@/app/components/landing/MenuBarFeature';
import { PrecisionPower } from '@/app/components/landing/PrecisionPower';
import { DeepDive } from '@/app/components/landing/DeepDive';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the main container
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Map scroll progress to background color
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 1],
    ["#f5f5f7", "#bbbbbb", "#333333", "#000000"]
  );

  return (
    <motion.main
      style={{ 
        backgroundColor,
        position: 'relative' // Explicitly set position to satisfy motion requirements
      }}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      ref={containerRef}
    >
      <Hero scrollContainerRef={containerRef} />
      <PrecisionPower />
      <MenuBarFeature />
      <DeepDive />
    </motion.main>
  );
}

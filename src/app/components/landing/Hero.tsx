
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useRef, useState, MouseEvent, RefObject } from 'react';
import { EmailCaptureForm } from '../EmailCaptureForm';
import exampleImage from '../../../assets/be2b154a9e54bff0857390ad7c38305608c33f65.png';

interface HeroProps {
  scrollContainerRef?: RefObject<HTMLElement>;
}

export function Hero({ scrollContainerRef }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [heroSent, setHeroSent] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse Parallax Logic
  const x = useMotionValue(0);
  const yMove = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(yMove);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    yMove.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    yMove.set(0);
  };

  return (
    <section 
      ref={sectionRef} 
      className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden snap-start"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      >
      <motion.div 
        style={{ y, opacity }}
        // CHANGE 1: Added h-full (or max-h-full) so this container respects the screen height
        className="text-center z-10 max-w-4xl mx-auto flex flex-col items-center w-full h-full"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          // CHANGE 2: Added flex-none to ensure the header never shrinks
          className="flex-none text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-8 mt-16 lg:mt-24 px-6 w-full"
        >
          B2.<br/>A spreadsheet for thinking, not reporting.
        </motion.h1>

        <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  style={{
    rotateX,
    rotateY,
    transformStyle: "preserve-3d",
  }}
  className="relative [perspective:1000px] flex-1 min-h-0 w-full overflow-hidden"
>
    <img
      src={exampleImage}
      alt="B2 App Interface"
      className="w-full min-w-[600px] md:min-w-0 h-auto"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none mix-blend-overlay" />
</motion.div>



        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 mb-12 flex flex-col items-center gap-4 px-6 w-full"
        >
          {/* Desktop: direct download */}
          <div className="hidden md:flex flex-col items-center gap-4">
            <a href="https://storage.stach.ltd/releases/B2-latest.dmg" className="bg-[#0071e3] hover:bg-[#0077ED] text-white px-8 py-3 rounded-full font-medium text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20 cursor-pointer inline-block">
              Try for free
            </a>
            <p className="text-gray-800 text-s font-medium tracking-wide">
              Free for 7 days then $6.99 one-time purchase, no subscriptions.
            </p>
          </div>

          {/* Mobile: email capture */}
          <div className="flex md:hidden flex-col items-center gap-3 w-full">
            <AnimatePresence mode="wait">
              {!heroSent ? (
                <motion.div key="hero-cta" exit={{ opacity: 0, y: -10 }} className="flex flex-col items-center gap-3 w-full">
                  <p className="text-gray-600 text-sm font-medium">
                    We'll send you the download link
                  </p>
                  <EmailCaptureForm variant="hero" source="hero_mobile" onSuccess={() => setHeroSent(true)} />
                  <p className="text-gray-500 text-xs">
                    Open the link on your Mac to install B2.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="hero-post"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-3 w-full"
                >
                  <p className="text-gray-600 text-sm font-medium">Link sent! Want updates on B2?</p>
                  <EmailCaptureForm variant="hero" source="hero_mobile_list" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

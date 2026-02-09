"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { Type, Sigma } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";

function FormulasCardContent() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex-1 flex items-center justify-center w-full">
        <div className="w-full max-w-sm bg-[#2c2c2e] rounded-lg shadow-2xl border border-white/10 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
          <div className="flex items-center gap-1 p-3 border-b border-white/10 bg-[#3a3a3c]">
            <div className="text-blue-400 font-mono font-bold">=SUM</div>
            <div className="w-0.5 h-5 bg-blue-500 animate-pulse"></div>
          </div>
          <div className="p-1">
            <div className="px-3 py-2 bg-blue-500/20 rounded text-sm text-white flex justify-between items-center">
              <span>SUM(number1, [number2], ...)</span>
              <span className="text-[10px] uppercase tracking-wider bg-blue-500 px-1.5 rounded text-white font-bold">
                Math
              </span>
            </div>
            <div className="px-3 py-2 text-sm text-white/60 hover:bg-white/5 rounded cursor-pointer">
              SUMIF(range, criteria, [sum_range])
            </div>
            <div className="px-3 py-2 text-sm text-white/60 hover:bg-white/5 rounded cursor-pointer">
              SUMIFS(sum_range, criteria_range1, criteria1, ...)
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <Sigma size={16} className="text-white" />
          </div>
          <h3 className="text-xl font-medium text-white">Rich Formulas</h3>
        </div>
        <p className="text-sm text-white/50">
          All the functions you use all the time. Smart autocomplete tailored
          for speed.
        </p>
      </div>
    </>
  );
}

function TypographyCardContent() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="scale-100 md:scale-150 lg:scale-200 transform origin-center">
          <div className="text-2xl md:text-xs text-white font-regular tracking-tight border border-white px-3.5 py-1.5">
            <span className="inline-block mr-16">£</span>
            12,490
            <span className="text-white/60">.00</span>
          </div>
          <div className="text-2xl md:text-xs text-white font-regular tracking-tight border border-white px-3.5 py-1.5 -mt-0.25 text-left">
            12 Jan 2026
          </div>
          <div className="text-2xl md:text-xs text-white font-regular tracking-tight border border-white px-3.5 py-1.5 -mt-0.25 text-right">
            33.3%
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <Type size={16} className="text-white" />
          </div>
          <h3 className="text-xl font-medium text-white">
            Beautiful Typography
          </h3>
        </div>
        <p className="text-sm text-white/50">
          Opinionated typesetting with support for advanced OpenType features.
        </p>
      </div>
    </>
  );
}

const cardClass =
  "group relative bg-[#1c1c1e] rounded-3xl border border-white/10 overflow-hidden aspect-[5/6] md:aspect-[4/3] flex flex-col justify-between p-8 hover:border-white/20 transition-colors";

const cards = [
  { key: "formulas", Content: FormulasCardContent, delay: 0.2 },
  { key: "typography", Content: TypographyCardContent, delay: 0.1 },
];

export function PrecisionPower() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative snap-start px-6 py-12 md:py-24">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Small footprint.{" "}
            <span className="text-blue-500">Giant capability.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Full formula support and native formatting tools that feel like a
            part of your Mac.
          </p>
        </motion.div>

        {/* Mobile carousel — break out of section px-6 so cards bleed edge-to-edge */}
        <div className="md:hidden -mx-6">
          <Carousel
            opts={{ align: "center", containScroll: false }}
            setApi={setApi}
          >
            <CarouselContent>
              {cards.map(({ key, Content }) => (
                <CarouselItem key={key} className="basis-[85%]">
                  <div className={cardClass}>
                    <Content />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {cards.map((card, i) => (
              <button
                key={card.key}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === selectedIndex
                    ? "w-6 bg-white/60"
                    : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {cards.map(({ key, Content, delay }) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay }}
              className={cardClass}
            >
              <Content />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { motion } from 'motion/react';
import { Type, Sigma } from 'lucide-react';

export function PrecisionPower() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative snap-start px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Small footprint. <span className="text-white/40">Giant capability.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Full formula support and native formatting tools that feel like a part of your Mac.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Typography Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group relative bg-[#1c1c1e] rounded-3xl border border-white/10 overflow-hidden aspect-square md:aspect-[4/3] flex flex-col justify-between p-8 hover:border-white/20 transition-colors"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="relative z-10 flex-1 flex items-center justify-center">
                {/* Typography Visualization */}
                <div className="scale-200 transform origin-center">
                   {/*<div className="font-mono text-xs text-white/30 mb-2 tracking-widest uppercase">Kerning / Ligatures</div>*/}
                   <div className="text-2xl sm:text-3xl text-white font-medium tracking-tight">
                      <span className="inline-block mr-4">£</span>
                      12,490
                      <span className="text-white/40">.00</span>
                   </div>
                   {/* <div className="flex gap-1 mt-2 justify-center opacity-40">
                      <div className="h-1 w-1 rounded-full bg-blue-500"></div>
                      <div className="h-1 w-full max-w-[100px] bg-blue-500/20 rounded-full relative">
                         <div className="absolute left-0 top-0 h-full w-[60%] bg-blue-500 rounded-full"></div>
                      </div>
                   </div> */}
                </div>
             </div>

             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Type size={16} className="text-white" />
                   </div>
                   <h3 className="text-xl font-medium text-white">Beautiful Typography</h3>
                </div>
                <p className="text-sm text-white/50">Pixel-perfect rendering with support for advanced OpenType features.</p>
             </div>
          </motion.div>

          {/* Formulas Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative bg-[#1c1c1e] rounded-3xl border border-white/10 overflow-hidden aspect-square md:aspect-[4/3] flex flex-col justify-between p-8 hover:border-white/20 transition-colors"
          >
             <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="relative z-10 flex-1 flex items-center justify-center w-full">
                {/* Formula Visualization */}
                <div className="w-full max-w-sm bg-[#2c2c2e] rounded-lg shadow-2xl border border-white/10 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                   <div className="flex items-center gap-2 p-3 border-b border-white/10 bg-[#3a3a3c]">
                      <div className="text-blue-400 font-mono font-bold">=SUM</div>
                      <div className="w-0.5 h-5 bg-blue-500 animate-pulse"></div>
                   </div>
                   <div className="p-1">
                      <div className="px-3 py-2 bg-blue-500/20 rounded text-sm text-white flex justify-between items-center">
                         <span>SUM(value1, [value2], ...)</span>
                         <span className="text-[10px] uppercase tracking-wider bg-blue-500 px-1.5 rounded text-white font-bold">Math</span>
                      </div>
                      <div className="px-3 py-2 text-sm text-white/60 hover:bg-white/5 rounded cursor-pointer">
                         SUMIF(range, criteria)
                      </div>
                      <div className="px-3 py-2 text-sm text-white/60 hover:bg-white/5 rounded cursor-pointer">
                         SUMPRODUCT(array1, [array2])
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
                <p className="text-sm text-white/50">300+ functions compatible with Excel. Smart autocomplete tailored for speed.</p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

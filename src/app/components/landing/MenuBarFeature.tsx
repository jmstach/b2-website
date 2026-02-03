
import { motion } from 'motion/react';
import { LayoutGrid, Command, Search } from 'lucide-react';

export function MenuBarFeature() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative snap-start px-6">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Visual Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <div className="relative">
            {/* Menu Bar Mockup */}
            <div className="h-8 bg-black/40 backdrop-blur-md rounded-t-lg border-b border-white/10 flex items-center px-4 gap-4 w-full max-w-md mx-auto md:mx-0">
               <div className="flex gap-4 text-white/90 text-sm font-medium">
                  <span className="cursor-default hover:text-white">B2</span>
                  <span className="cursor-default hover:text-white">File</span>
                  <span className="cursor-default hover:text-white">Edit</span>
                  <span className="cursor-default hover:text-white">Format</span>
               </div>
               <div className="flex-1"></div>
               <div className="flex gap-3 text-white/90">
                  <LayoutGrid size={16} strokeWidth={2} />
                  <span className="text-xs">Mon 9:41 AM</span>
               </div>
            </div>
            
            {/* Dropdown / Popover Mockup */}
            <div className="bg-[#1e1e1e]/90 backdrop-blur-xl border border-white/10 rounded-b-lg rounded-tr-lg shadow-2xl p-2 w-full max-w-md mx-auto md:mx-0 mt-1">
               <div className="space-y-0.5">
                  <div className="flex items-center justify-between px-3 py-2 hover:bg-[#0071e3] rounded-md group cursor-pointer transition-colors">
                     <div className="flex flex-col">
                        <span className="text-sm text-white group-hover:text-white font-medium">Q4 Financials</span>
                        <span className="text-xs text-white/50 group-hover:text-white/80">Last edited 2m ago</span>
                     </div>
                     <span className="text-xs text-white/40 group-hover:text-white/80">Open</span>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 hover:bg-white/5 rounded-md group cursor-pointer transition-colors">
                     <div className="flex flex-col">
                        <span className="text-sm text-white/90 font-medium">Marketing Budget</span>
                        <span className="text-xs text-white/40">Yesterday</span>
                     </div>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 hover:bg-white/5 rounded-md group cursor-pointer transition-colors">
                     <div className="flex flex-col">
                        <span className="text-sm text-white/90 font-medium">Project Tracker final FINAL</span>
                        <span className="text-xs text-white/40">Last week</span>
                     </div>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 hover:bg-white/5 rounded-md group cursor-pointer transition-colors">
                     <div className="flex flex-col">
                        <span className="text-sm text-white/90 font-medium">Project Tracker</span>
                        <span className="text-xs text-white/40">Last week</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="order-1 md:order-2 text-center md:text-left"
        >
          <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-4">
             <div className="w-8 h-8 rounded-lg bg-[#333] flex items-center justify-center shadow-inner border border-white/10">
                <LayoutGrid size={18} className="text-white" />
             </div>
             <span className="text-sm font-medium text-white/60 uppercase tracking-widest">Always Ready</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Always in your <br/>
            Menu Bar.
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-md mx-auto md:mx-0">
            Frictionless entry. B2 lives where you work.
          </p>
          <p className="text-lg text-white/70 leading-relaxed max-w-md mx-auto md:mx-0">
            No more waiting.
          </p>
          <p className="text-lg text-white/70 leading-relaxed max-w-md mx-auto md:mx-0">
            Just type <span className="text-blue-500">⌘⇧B</span> and start.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

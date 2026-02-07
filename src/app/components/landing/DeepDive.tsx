
import { motion } from 'motion/react';
import { Cloud, FileJson, Keyboard, Check, Command } from 'lucide-react';

const specs = [
  {
    icon: Cloud,
    title: "iCloud Sync",
    desc: "Coming soon. Seamlessly syncs across all your Mac devices via CloudKit."
  },
  {
    icon: FileJson,
    title: "Send to...",
    desc: "Need to collaborate or polish? Send it to Excel, Sheets or Numbers."
  },
  {
    icon: Keyboard,
    title: "Keyboard First",
    desc: "Designed to keep your mind and fingers focused. Never touch your mouse if you don't want to."
  }
];

export function DeepDive() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative snap-start px-6 pt-24 pb-12">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-24">
          {specs.map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/5"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white">
                <spec.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{spec.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{spec.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-gradient-to-b from-[#1c1c1e] to-black border border-white/10 rounded-3xl p-12 text-center w-full max-w-2xl relative overflow-hidden"
        >
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
           
           <h2 className="text-4xl font-semibold text-white mb-6 tracking-tight">
             Ready to get to work?
           </h2>
           <p className="text-white/50 mb-8 max-w-md mx-auto">
             Download a spreadsheet for thinking, not reporting. Switch to a cleaner, faster workflow.
           </p>
           
           <div className="flex flex-col items-center gap-4">
              <a href="https://storage.stach.ltd/releases/B2-0.1.0-arm64.dmg" className="bg-white text-black hover:bg-white/90 px-10 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] inline-block">
                Download for Mac
              </a>
              <div className="flex items-center gap-4 text-xs text-white/50 mt-4">
                 <span className="flex items-center gap-1"><Check size={20} /> One-time purchase</span>
                 <span className="flex items-center gap-1"><Check size={20} /> No subscriptions</span>
              </div>
           </div>
        </motion.div>

        <footer className="mt-24 w-full flex flex-col md:flex-row justify-between items-center text-xs text-white/50 border-t border-white/5 pt-8">
           <div>&copy; 2026 Stach LTD. Crafted with care in London.</div>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white/40 transition-colors">Privacy</a>
              <a href="#" className="hover:text-white/40 transition-colors">Terms</a>
              <a href="#" className="hover:text-white/40 transition-colors">Support</a>
           </div>
        </footer>
        {/* Layout Debug Size Indicator 
        <div class="fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-full bg-b2-900 px-3 py-1 font-mono text-xs font-bold text-red-500 outline outline-1 outline-white/30">
          <span class="block sm:hidden">XS</span>
          <span class="hidden sm:block md:hidden">SM</span>
          <span class="hidden md:block lg:hidden">MD</span>
          <span class="hidden lg:block xl:hidden">LG</span>
          <span class="hidden xl:block 2xl:hidden">XL</span>
          <span class="hidden 2xl:block">2XL</span>
        </div>
        */}
      </div>
    </section>
    
  );
}

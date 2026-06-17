/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = '447909390507'; // Real placeholder
  const heroSubtext = "Give it back what it deserves.";
  const heroDescription = "Premadav Hair Growth Oil is a 100% natural, nourishing blend crafted to restore your hair's strength, shine, and scalp vitality—from root to tip. No chemicals. No compromise. Just pure, honest love.";

  const messageText = encodeURIComponent("Hi Premadav! I'd like to order a bottle of the Hair Growth Oil. 🌿");

  return (
    <section className="relative min-h-screen bg-white text-forest pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background organic pattern & floating rosemary vector illustrations */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber/30 filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-forest/20 filter blur-3xl" />
        
        {/* Floating Rosemary SVG Line-Art 1 (Top Right) */}
        <svg className="absolute top-16 right-10 w-48 h-48 text-forest/40 transform rotate-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,95 C45,75 55,45 80,15" />
          <path d="M68,30 C60,33 52,30 46,24 M64,40 C56,43 49,38 42,32" />
          <path d="M59,52 C52,54 45,49 38,43 M55,65 C48,66 42,59 36,53" />
          <path d="M52,78 C46,78 40,71 34,65 C28,59 25,50 25,40" />
        </svg>

        {/* Floating Rosemary SVG Line-Art 2 (Bottom Left) */}
        <svg className="absolute bottom-12 left-8 w-64 h-64 text-forest/30 transform -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M10,85 C25,70 35,50 30,20" />
          <path d="M18,72 C25,65 30,66 36,70 M22,58 C28,51 34,53 40,58" />
          <path d="M26,45 C32,38 38,40 44,45 M28,32 C34,26 42,28 48,32" />
        </svg>

        {/* Subtle grid to mimic premium botanical paper */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d473905_1px,transparent_1px),linear-gradient(to_bottom,#2d473905_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text content (Grid-7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-amber/10 border border-amber/35 text-amber text-[10px] font-bold tracking-widest uppercase mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber" />
              100% Organic & Chemical Free
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-forest leading-tight mb-4"
            >
              Rooted in <br />
              <span className="font-serif-italic text-amber italic">Growth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-xl sm:text-2xl text-amber italic mb-6"
            >
              {heroSubtext}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base text-earth leading-relaxed max-w-xl mb-10"
            >
              {heroDescription}
            </motion.p>

            {/* CTAs with crisp Editorial 4px corners */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto font-sans"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${messageText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-amber hover:bg-amber-light text-cream rounded font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-amber/10 active:scale-98 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-cream" />
                Order via WhatsApp
              </a>
              <a
                href="#order"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-forest/5 text-forest border border-forest/30 rounded font-bold text-xs uppercase tracking-widest transition-all duration-150"
              >
                Place Order Online
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-12 flex flex-wrap items-center gap-6 pt-8 border-t border-forest/10 w-full"
            >
              <div className="flex items-center gap-1">
                <span className="text-amber text-lg font-bold">★★★★★</span>
                <span className="text-xs uppercase tracking-wider text-earth/80 ml-2">Loved by 500+ across Africa</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-forest/15" />
              <div className="flex items-center gap-2 text-amber">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold text-earth/80">Verified Organic Treatment Scalp Care</span>
              </div>
            </motion.div>
          </div>

          {/* Render display photo (Grid-5) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="relative w-full max-w-[360px] aspect-4/5"
            >
              {/* Fine border backing */}
              <div className="absolute -inset-3 rounded border border-amber/20 pointer-events-none" />
              {/* Product render container with premium look */}
              <div className="w-full h-full rounded overflow-hidden bg-brown-900 border border-amber/15 shadow-2xl relative">
                <img
                  src="/src/assets/images/hero_product_1781657205797.jpg"
                  alt="Premadav Hair Growth Oil premium 50ml glass dropper on marble vanity table surrounded by fresh rosemary foliage and lavender buds"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Editorial classic overlay custom badge with 4px rounded corner */}
                <div className="absolute bottom-6 right-6 w-20 h-20 rounded bg-amber text-cream flex flex-col justify-center items-center text-center shadow-lg active:scale-105 transition-transform duration-200 border border-amber-light/30">
                  <span className="text-xl font-bold font-serif leading-none">100%</span>
                  <span className="text-[8px] font-bold tracking-widest uppercase mt-1">Natural</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

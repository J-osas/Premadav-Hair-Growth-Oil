/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRightLeft } from 'lucide-react';

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-sand-light relative border-b border-forest/10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-widest text-amber uppercase mb-3 flex items-center justify-center gap-1.5">
            <ArrowRightLeft className="w-3.5 h-3.5 text-amber" /> REAL HAIR TRANSFORMATIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest leading-tight">
            See the structural <span className="font-serif-italic text-amber italic">shift</span>
          </h2>
          <p className="text-sm text-earth mt-4 leading-relaxed">
            Premadav locks in deep cellular-level hydration, turning fragile, stripped curls into bouncy, define-packed strands in weeks.
          </p>
        </div>

        {/* Visual Frame in clean Editorial box style */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="rounded overflow-hidden border border-forest/10 bg-cream shadow-2xl relative"
          >
            {/* Comparison Image */}
            <div className="aspect-[16/8] sm:aspect-[16/7.5] w-full relative">
              <img
                src="/src/assets/images/hair_comparison_1781657256650.jpg"
                alt="Split screen comparison. Left: dry coarse brittle frizzy coils. Right: hydrated glossy healthy defined juicy curls after applying Premadav hair growth oil"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Sub-label indicators */}
            <div className="grid grid-cols-2 text-center border-t border-forest/10 bg-white py-4 sm:py-6 px-4">
              <div className="border-r border-forest/10 pr-2">
                <span className="text-[10px] font-bold tracking-wider text-muted-brown uppercase block">CONDITION 1</span>
                <span className="font-serif text-base sm:text-lg font-bold text-forest mt-1 block">Dry, Dull & Brittle</span>
              </div>
              <div className="pl-2">
                <span className="text-[10px] font-bold tracking-wider text-amber uppercase block">PREMADAV RITUAL</span>
                <span className="font-serif text-base sm:text-lg font-bold text-forest mt-1 block">Glossy, Healthy & Defined</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

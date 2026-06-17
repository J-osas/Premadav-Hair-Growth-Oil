/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Heart, Flower2 } from 'lucide-react';
import lifestyleMassageImage from '../assets/images/lifestyle_massage_1781657239733.jpg';

export default function Story() {
  return (
    <section id="story" className="py-24 bg-sand-light relative overflow-hidden border-b border-forest/10 font-sans">
      {/* Visual top/bottom subtle dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-forest/10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Brand story text column (Grid-6) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[11px] font-bold tracking-widest text-amber uppercase mb-3 flex items-center gap-1.5">
              <Flower2 className="w-3.5 h-3.5 text-amber" /> OUR HERITAGE STORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest leading-tight mb-6">
              Born from a grandmother's hands.<br />
              <span className="font-serif-italic text-amber italic">Bottled for yours.</span>
            </h2>
            
            <p className="text-sm sm:text-base leading-relaxed text-earth mb-6">
              Long before there were synthetic serums and dense clinical formulas, there were grandmothers. Highly intuitive women who blended local seeds, leaf stems, and oils by touch, massaged them in with utter devotion, and passed down their remedies in soft whispers.
            </p>
            
            <p className="text-sm sm:text-base leading-relaxed text-earth mb-6">
              Premadav carries that ancestral inheritance directly to you. We do not treat hair oiling as nostalgia—but as a living, breathing, ten-minute weekly self-love ritual to reconnect you to what is real, organic, and truly yours.
            </p>

            {/* Custom brand definition block styled on editorial papers */}
            <div className="border-l-2 border-amber pl-6 py-3 my-8 bg-cream/60 rounded-r pr-4">
              <p className="font-serif text-base sm:text-lg text-forest leading-relaxed italic">
                "Prema means love. Dav means a pure offering. In naming this brand Premadav, we promise that every drop stands as a loving devotional gift to your scalp's nourishment."
              </p>
            </div>

            {/* Micro Stats indicators with high-contrast lines */}
            <div className="grid grid-cols-3 gap-6 pt-6 w-full border-t border-forest/10">
              <div>
                <span className="block font-serif text-3xl font-bold text-forest">500+</span>
                <span className="text-[10px] font-bold text-muted-brown uppercase tracking-wider">HAPPY CLIENTS</span>
              </div>
              <div>
                <span className="block font-serif text-3xl font-bold text-forest">100%</span>
                <span className="text-[10px] font-bold text-muted-brown uppercase tracking-wider">BOTANICAL</span>
              </div>
              <div>
                <span className="block font-serif text-3xl font-bold text-forest">50ml</span>
                <span className="text-[10px] font-bold text-muted-brown uppercase tracking-wider">AMBER GLASS</span>
              </div>
            </div>
          </div>

          {/* Lifestyle Illustration Column (Grid-6) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative w-full aspect-4/3 sm:aspect-16/10 rounded overflow-hidden bg-cream border border-forest/10 shadow-xl"
            >
              <img
                src={lifestyleMassageImage}
                alt="Beautiful young African woman with natural coily hair smiling peacefully as she massages Premadav Oil into her roots by a sunny window"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent" />
              
              {/* Overlay tagline indicator with 4px rounded block */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-4 py-2 rounded bg-cream/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-forest shadow-md border border-forest/10">
                <Heart className="w-3.5 h-3.5 text-amber fill-amber" />
                Rooted in Growth. Made with Love.
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

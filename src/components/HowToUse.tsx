/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function HowToUse() {
  const steps = [
    {
      step: '01',
      title: 'Apply to Scalp & Strands',
      description: 'Part your curls into four sections. Shake the bottle, take a few dropper droplets, and dot evenly across your scalp and dry hair shafts.',
    },
    {
      step: '02',
      title: 'Massage for 2-3 Minutes',
      description: 'Use the cushions of your fingertips (not nails) to massage in slow, quiet, circular motions. This stimulates vital microcirculation and follicle absorption.',
    },
    {
      step: '03',
      title: 'Use 2-3 Times Weekly',
      description: 'Leave the oil blend in for at least 30 minutes, or wrap in a warm silk cap overnight before washing. Consistency brings structural density.',
    },
  ];

  return (
    <section id="how-to-use" className="py-24 bg-cream relative border-b border-forest/10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[11px] font-bold tracking-widest text-amber uppercase mb-3 block">
            THE RITUAL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest leading-tight">
            Nourishing your scalp in<br />
            three simple <span className="font-serif-italic text-amber italic">steps</span>
          </h2>
          <p className="text-sm text-earth mt-4 leading-relaxed">
            A quiet space. Ten minutes. Create the optimal mental and physical environment for cellular growth.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-forest/10 z-0" aria-hidden="true" />
          
          {steps.map((st, i) => (
            <motion.div
              key={st.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative z-10 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-forest text-cream flex items-center justify-center font-serif text-xl font-bold border-2 border-cream shadow-md mb-6 hover:scale-105 transition-transform duration-250">
                {st.step}
              </div>
              <h3 className="font-serif text-lg font-bold text-forest mb-3">
                {st.title}
              </h3>
              <p className="text-xs leading-relaxed text-earth max-w-xs">
                {st.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pro Tip Callout in crisp rectangular apothecary styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-amber/5 border border-amber/25 rounded p-6 max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 text-amber mb-2">
            <Sparkles className="w-4 h-4 text-amber" />
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest">Pro Treatment Tip</h4>
          </div>
          <p className="font-serif text-sm text-forest leading-relaxed italic">
            "Warm the amber bottle slightly between your palms before applying, or steam hair briefly with a hot towel—it dilates hair cuticles for deeper botanical penetration."
          </p>
        </motion.div>

      </div>
    </section>
  );
}

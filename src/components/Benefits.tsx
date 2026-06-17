/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Leaf, Award, Star, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  const benefitCards = [
    {
      icon: Leaf,
      title: 'Promotes Healthy Growth',
      description: 'Drenches the scalp in protective botanicals that stimulate circulation and energize dormant roots, laying a strong foundation for rapid, healthy strands.',
    },
    {
      icon: ShieldCheck,
      title: 'Reduces Shedding & Breakage',
      description: 'Binds with keratin proteins in each follicle to seal splits, fortify elasticity, and prevent premature snapping or excessive seasonal shedding.',
    },
    {
      icon: Star,
      title: 'Locks in High Shine & Softness',
      description: 'Creates a weightless defensive layer that seal in lasting moisture, taming frizz while bestowing hair with touchable, velvet elasticity.',
    },
    {
      icon: Award,
      title: 'Optimized for Coils & Curls',
      description: 'Gently structured to coat high-porosity coily surfaces and textured locs, enhancing natural patterns without suffocating hair pores.',
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-cream relative border-b border-forest/5 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-widest text-amber uppercase mb-3 block">
            WHAT IT DOES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest leading-tight">
            How Premadav nurtures<br />
            your hair back to <span className="font-serif-italic text-amber italic">life</span>
          </h2>
          <p className="text-sm text-earth mt-4 leading-relaxed">
            A single multi-tasking elixir designed to replace chemical cocktails. It targets hair health on multiple structural dimensions.
          </p>
        </div>

        {/* Benefits Grid in crisp editorial boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-sand-light/60 p-8 rounded border border-forest/15 hover:border-amber hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded bg-forest/5 text-forest flex items-center justify-center mb-6 border border-forest/10">
                  <Icon className="w-5 h-5 stroke-1.5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest mb-3">
                  {card.title}
                </h3>
                <p className="text-xs leading-relaxed text-earth">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Quote */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="font-serif text-xs text-amber italic tracking-wide">
            ✦ Recommended routine: Apply consistently twice a week aligned with your wash cycles. Keep roots hydrated.
          </p>
        </div>

      </div>
    </section>
  );
}

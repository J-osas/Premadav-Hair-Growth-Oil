/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Droplet } from 'lucide-react';
import ingredientsFlatlayImage from '../assets/images/ingredients_flatlay_1781657222286.jpg';

export default function Ingredients() {
  const listItems = [
    {
      title: 'Extra Virgin Olive Oil',
      description: 'Extracellularly rich in mono-saturated fatty acids and potent antioxidants. It penetrates deep into high-porosity shafts to lock in deep hydration, strengthening structure.',
    },
    {
      title: 'Highly Concentrated Vitamin E Oil',
      description: 'A stellar micro-nourisher that reduces oxidative stress, repairs damaged hair follicles, and promotes microcirculation across the entire scalp barrier.',
    },
    {
      title: 'Our Signature Natural Herbal Blend',
      description: 'A curated bouquet of cold-pressed traditional botanical essences that work synergistically to soothe itching, calm inflammation, and promote structural density.',
    },
  ];

  return (
    <section id="ingredients" className="py-24 bg-white text-forest relative overflow-hidden font-sans border-b border-forest/10">
      {/* Background radial highlight matches amber */}
      <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_bottom_right,var(--color-amber),transparent_45%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Ingredient list column (Grid-6) */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold tracking-widest text-amber uppercase mb-3 block">
              PURE INGREDIENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest leading-tight mb-4">
              What goes inside<br />
              every single <span className="font-serif-italic text-amber italic">drop.</span>
            </h2>
            <p className="text-sm text-earth max-w-xl mb-10 leading-relaxed">
              No chemical dilutes. No cheap mineral lubricants. We believe in complete clinical transparency. Every ingredient is listed with pride.
            </p>

            <div className="flex flex-col gap-8">
              {listItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 0.9, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-amber/15 border border-amber/40 text-amber flex items-center justify-center flex-shrink-0 mt-1">
                    <Droplet className="w-3 h-3 fill-amber" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-forest mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-earth leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Strict chemical-free message with crisp style */}
            <div className="mt-12 p-6 rounded bg-amber/5 border border-amber/25 max-w-xl">
              <p className="text-xs font-bold leading-relaxed text-amber flex items-center gap-2.5 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <span>Strictly formulated without Sulfates, Parabens, Mineral Oils, and Synthetic Fragrances.</span>
              </p>
            </div>
          </div>

          {/* Styled flat lay photo (Grid-5) */}
          <div className="lg:col-span-1" /> {/* Spacer */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[340px] aspect-4/5 rounded overflow-hidden bg-brown-900 border border-amber/10 shadow-2xl"
            >
              <img
                src={ingredientsFlatlayImage}
                alt="Styled ingredients flat lay displaying the amber glass dropper bottle along with fresh therapeutic rosemary leaves, extra virgin olive oil drops, and star anise pods"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

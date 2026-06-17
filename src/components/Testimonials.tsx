/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      id: '1',
      name: 'Amara Tubonemi',
      location: 'Lagos, Nigeria',
      rating: 5,
      quote: "I've tried numerous trending hair serums but nothing truly worked for my sparse edges until I ordered Premadav. After three consistency-led weeks, my roots began filling in with fuzzy new strands. My husband even noticed the sheen!",
      avatarInitials: 'AT',
    },
    {
      id: '2',
      name: 'Chidinma Olanrewaju',
      location: 'Port Harcourt, Nigeria',
      rating: 5,
      quote: "My hair scales are naturally high-porosity and snapped constantly during styling. Premadav completely changed that. My breakage is down to almost nothing now, and my scalp doesn't itch between my protective braiding sessions.",
      avatarInitials: 'CO',
    },
    {
      id: '3',
      name: 'Zainab Mensah',
      location: 'Accra, Ghana',
      rating: 5,
      quote: "The organic herbal scent is genuine therapy on its own. It's so light and weightless. It keeps my natural 4C hair hydrated and soft for days without feeling like grease. Simply obsessed with this product.",
      avatarInitials: 'ZM',
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-sand-light relative border-t border-b border-forest/10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-widest text-amber uppercase mb-3 flex items-center justify-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-amber" /> CUSTOMER LOVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest leading-tight">
            Real families.<br />
            <span className="font-serif-italic text-amber italic">Real results.</span>
          </h2>
          <p className="text-sm text-earth mt-4 leading-relaxed">
            Hear from our wonderful community on how the Premadav weekly hair ritual has transformed their curls.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded border border-forest/10 flex flex-col justify-between hover:shadow-xl hover:border-amber transition-all duration-300"
            >
              <div>
                {/* Stars in Amber */}
                <div className="flex gap-1 mb-5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber text-amber" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-sm leading-relaxed text-forest italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author details with pristine apothecary-styled badge */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-forest/5">
                <div className="w-9 h-9 rounded bg-forest/5 text-forest border border-forest/15 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {rev.avatarInitials}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-forest leading-tight">
                    {rev.name}
                  </h4>
                  <p className="text-[10px] uppercase font-bold text-muted-brown tracking-wider mt-1">
                    {rev.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Mail, PhoneCall, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sand-light text-earth pt-20 pb-10 border-t border-forest/10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-forest/5">
          
          {/* Logo & About Group (Grid-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-serif text-2xl font-bold tracking-tight text-forest mb-2">
              PREMADAV
            </span>
            <p className="font-serif text-xs text-amber italic tracking-wider mb-6">
              Rooted in Growth. Made with Love.
            </p>
            <p className="text-xs leading-relaxed text-earth max-w-sm">
              Premadav Hair Growth Oil represents a loving, 100% natural, nourishing formulation rooted in decades of traditional herbal intelligence to nurture and define natural curls.
            </p>
            <div className="mt-8 flex items-center gap-2.5 px-4 py-2 rounded bg-forest/5 border border-forest/15 text-[10px] font-bold tracking-widest text-amber text-center uppercase">
              <ShieldCheck className="w-4 h-4 text-amber flex-shrink-0" />
              ECO-FRIENDLY RECYCLABLE PACKAGING
            </div>
          </div>

          {/* Quick Links (Grid-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-bold tracking-widest text-forest uppercase mb-6">
              NAVIGATE
            </h4>
            <div className="flex flex-col gap-3 font-semibold text-xs uppercase tracking-wider text-earth">
              <a href="#story" className="hover:text-amber transition-colors">Heritage</a>
              <a href="#benefits" className="hover:text-amber transition-colors">Key Benefits</a>
              <a href="#ingredients" className="hover:text-amber transition-colors">What's Inside</a>
              <a href="#how-to-use" className="hover:text-amber transition-colors">The Ritual</a>
              <a href="#reviews" className="hover:text-amber transition-colors">Customer Reviews</a>
              <a href="#order" className="hover:text-amber transition-colors">Order Bottle</a>
            </div>
          </div>

          {/* Contact Details (Grid-4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <h4 className="text-[11px] font-bold tracking-widest text-forest uppercase mb-6 text-left w-full">
              REACH US
            </h4>
            <div className="flex flex-col gap-4 text-xs font-semibold w-full text-earth">
              <a href="https://wa.me/447909390507" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber transition-colors uppercase tracking-wider">
                <div className="w-8 h-8 rounded bg-forest/5 flex items-center justify-center flex-shrink-0 border border-forest/10">
                  <PhoneCall className="w-3.5 h-3.5 text-amber" />
                </div>
                <span>WhatsApp Care Desk</span>
              </a>
              <a href="mailto:hello@premadav.com" className="flex items-center gap-3 hover:text-amber transition-colors uppercase tracking-wider">
                <div className="w-8 h-8 rounded bg-forest/5 flex items-center justify-center flex-shrink-0 border border-forest/10">
                  <Mail className="w-3.5 h-3.5 text-amber" />
                </div>
                <span>hello@premadav.com</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber transition-colors uppercase tracking-wider">
                <div className="w-8 h-8 rounded bg-forest/5 flex items-center justify-center flex-shrink-0 border border-forest/10">
                  <span className="text-[10px] font-bold text-amber">IG</span>
                </div>
                <span>@premadavoil</span>
              </a>
            </div>

            <div className="mt-8 text-[11px] text-earth/60 leading-relaxed border-t border-forest/5 pt-6 w-full">
              <span className="font-bold text-forest/60 uppercase block mb-1">Precautionary Warning</span>
              For topical external skincare use only. Avoid contact with eyes. Keep in cool dark dry cabinet. Net volume 50ml. Shelf life: best before 24 months.
            </div>
          </div>

        </div>

        {/* Copy block */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-earth/60">
          <p>© {currentYear} Premadav Organics. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-amber fill-amber" /> & rooted in family heritage.
          </p>
        </div>
      </div>
    </footer>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, ChangeEvent, FormEvent, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { OrderData, PackageOption } from '../types';

export default function OrderForm() {
  const whatsappNumber = '23450000000'; // Target WhatsApp line
  
  const packages: PackageOption[] = [
    {
      id: 'pkg-1',
      bottles: 1,
      price: 4500,
      label: 'Starter Care',
      description: '1 bottle (50ml) — Ideal for introducing the ritual to your curls.',
    },
    {
      id: 'pkg-2',
      bottles: 2,
      price: 8500,
      badge: 'Best Value',
      label: 'Duo Treatment Pack',
      description: '2 bottles (50ml x 2) — Save ₦500. Highly recommended for edges restoration.',
    },
    {
      id: 'pkg-3',
      bottles: 3,
      price: 12000,
      badge: 'Family Saver',
      label: 'Generational Growth Pack',
      description: '3 bottles (50ml x 3) — Save ₦1,500. Great for the complete household.',
    },
  ];

  const [selectedPkg, setSelectedPkg] = useState<string>('pkg-2');
  const [formData, setFormData] = useState<Omit<OrderData, 'whatsappOrdered'>>({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    quantity: '2 bottles',
    notes: '',
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const activePkg = packages.find((p) => p.id === selectedPkg);

  const generateWhatsAppURL = () => {
    const qtyText = activePkg ? `${activePkg.bottles} bottle(s) of Premadav Growth Oil` : formData.quantity;
    const priceText = activePkg ? `₦${activePkg.price.toLocaleString()}` : '';
    
    let msg = `Hi Premadav! I'd like to place an order 🌿\n\n`;
    msg += `*Name:* ${formData.fullName || '[Pending]'}\n`;
    msg += `*Phone:* ${formData.phone || '[Pending]'}\n`;
    msg += `*Package:* ${activePkg?.label || '[Pending]'}\n`;
    msg += `*Quantity:* ${qtyText}\n`;
    msg += `*Price Total:* ${priceText}\n`;
    msg += `*Address:* ${formData.address || '[Pending]'}, ${formData.city || '[Pending]'}\n`;
    if (formData.notes) {
      msg += `*Delivery Notes:* ${formData.notes}\n`;
    }
    msg += `\nThank you! Looking forward to starting my ritual.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const handleWhatsAppRedirect = (e: MouseEvent) => {
    if (!formData.fullName || !formData.phone || !formData.address || !formData.city) {
      alert('Please fill out your delivery details first so we can prepare your order on WhatsApp! 🌿');
      e.preventDefault();
      return;
    }
    // Proceed to open WhatsApp in new tab
  };

  const handleOnlineSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    // Reset form fields
    setFormData({
      fullName: '',
      phone: '',
      address: '',
      city: '',
      quantity: '2 bottles',
      notes: '',
    });
  };

  return (
    <section id="order" className="py-24 bg-white text-forest relative overflow-hidden font-sans border-t border-forest/10">
      {/* Background radial highlight & subtle rosemary branch */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,var(--color-amber),transparent_40%)]" />
        
        {/* Floating Rosemary SVG Line-Art 3 */}
        <svg className="absolute bottom-6 right-8 w-44 h-44 text-forest/40 transform rotate-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,95 C45,75 55,45 80,15" />
          <path d="M68,30 C60,33 52,30 46,24 M64,40 C56,43 49,38 42,32" />
          <path d="M59,52 C52,54 45,49 38,43 M55,65 C48,66 42,59 36,53" />
        </svg>

        {/* Subtle grid to mimic premium botanical paper */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d473905_1px,transparent_1px),linear-gradient(to_bottom,#2d473905_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Informative column (Grid-5) */}
          <div className="lg:col-span-12 xl:col-span-5 text-left">
            <span className="text-[11px] font-bold tracking-widest text-amber uppercase mb-3 block">
              RESERVE YOURS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest leading-tight mb-6">
              Begin your growth <span className="font-serif-italic text-amber italic">journey.</span>
            </h2>
            <p className="text-sm text-earth leading-relaxed mb-8">
              Fill out our simple dispatch checkout below. Choose to submit your dispatch information directly to our web processing desk or jump straight to WhatsApp to finish confirming shipment with our care team.
            </p>

            {/* Satisfaction list */}
            <div className="flex flex-col gap-6 pt-6 border-t border-forest/10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-amber/10 text-amber border border-amber/20 flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="w-4 h-4 text-amber" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-forest">Same-Day Lagos Dispatch</h4>
                  <p className="text-xs text-earth leading-relaxed mt-1">
                    Get delivery within 24 hours inside Lagos bounds. Nationwide carrier parcels across Nigeria shipped on Tuesdays and Fridays.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-amber/10 text-amber border border-amber/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-amber" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-forest">Our 14-Day Love Guarantee</h4>
                  <p className="text-xs text-earth leading-relaxed mt-1">
                    If your scalp does not feel significantly softer and healthier within 14 days, contact us and we will issue a complete refund. No hassle.
                  </p>
                </div>
              </div>
            </div>

            {/* Price card representation in crisp style */}
            <div className="mt-10 p-6 bg-amber/5 border border-amber/25 rounded">
              <span className="text-[10px] font-bold text-amber uppercase tracking-widest block">CURRENTLY SELECTED PACKAGE</span>
              <div className="flex justify-between items-baseline mt-2.5">
                <span className="font-serif text-lg font-bold text-forest">
                  {activePkg?.label} ({activePkg?.bottles} Bottle)
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber">
                  ₦{activePkg?.price.toLocaleString()}
                </span>
              </div>
              <p className="text-[11px] text-earth/85 mt-1 leading-normal">
                VAT & Lagos delivery dispatch coverage included. No hidden surcharges.
              </p>
            </div>
          </div>

          {/* Checkout form column (Grid-7) */}
          <div className="lg:col-span-12 xl:col-span-7 w-full">
            <div className="bg-sand-light text-brown-800 p-8 sm:p-10 rounded border border-forest/10 shadow-2xl">
              <h3 className="font-serif text-2xl font-bold text-forest mb-6">
                Delivery Dispatch Fields
              </h3>

              {/* Package selector */}
              <div className="mb-8">
                <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-brown mb-3">
                  1. Select Your Bottle Package
                </label>
                <div className="flex flex-col gap-3">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPkg(pkg.id)}
                      className={`relative p-4 rounded border cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 transition-all ${
                        selectedPkg === pkg.id
                          ? 'border-amber bg-amber/5 shadow-sm scale-101'
                          : 'border-forest/10 hover:border-amber/40 bg-white'
                      }`}
                    >
                      {pkg.badge && (
                        <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 bg-amber text-cream font-bold text-[9px] tracking-widest uppercase rounded">
                          {pkg.badge}
                        </span>
                      )}
                      <div>
                        <span className="font-serif text-base font-bold text-forest block">
                          {pkg.label}
                        </span>
                        <span className="text-xs text-muted-brown mt-0.5 block max-w-sm leading-relaxed">
                          {pkg.description}
                        </span>
                      </div>
                      <span className="font-serif text-lg font-bold text-forest self-end sm:self-auto">
                        ₦{pkg.price.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Input details form */}
              <form onSubmit={handleOnlineSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="fullName" className="text-[11px] font-bold text-muted-brown mb-1.5 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="e.g., Amara Joy"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded border border-forest/15 bg-cream/40 focus:outline-none focus:border-amber focus:bg-white text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-[11px] font-bold text-muted-brown mb-1.5 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g., +234 803..."
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded border border-forest/15 bg-cream/40 focus:outline-none focus:border-amber focus:bg-white text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address" className="text-[11px] font-bold text-muted-brown mb-1.5 uppercase tracking-wider">
                    Detailed Delivery Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    placeholder="Street name, house number, apartment details"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded border border-forest/15 bg-cream/40 focus:outline-none focus:border-amber focus:bg-white text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="city" className="text-[11px] font-bold text-muted-brown mb-1.5 uppercase tracking-wider">
                      State / City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      placeholder="e.g. Ikeja, Lagos"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded border border-forest/15 bg-cream/40 focus:outline-none focus:border-amber focus:bg-white text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="notes" className="text-[11px] font-bold text-muted-brown mb-1.5 uppercase tracking-wider">
                      Instructions (Optional)
                    </label>
                    <input
                      type="text"
                      id="notes"
                      name="notes"
                      placeholder="e.g., leave with gatekeeper"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded border border-forest/15 bg-cream/40 focus:outline-none focus:border-amber focus:bg-white text-sm"
                    />
                  </div>
                </div>

                {/* Submits CTAs block with 4px rounded corner styling */}
                <div className="pt-6 flex flex-col gap-3">
                  <a
                    href={generateWhatsAppURL()}
                    onClick={handleWhatsAppRedirect}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-cream rounded text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-emerald-500/10 active:scale-98 transition-all duration-150 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-cream text-emerald-600" />
                    Complete Order via WhatsApp
                  </a>
                  
                  <div className="flex items-center justify-center gap-2 my-2 py-1">
                    <div className="h-px bg-forest/10 flex-grow" />
                    <span className="text-[10px] text-muted-brown uppercase tracking-widest font-semibold px-2">or checkout online</span>
                    <div className="h-px bg-forest/10 flex-grow" />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-forest hover:bg-forest-light active:scale-98 text-cream rounded text-xs uppercase tracking-widest font-bold cursor-pointer transition-all duration-150 border border-forest/10"
                  >
                    Reserve Dispatch Online
                  </button>
                </div>
              </form>

              {/* Thank you notification */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-6 p-4 rounded bg-emerald-50 border border-emerald-200 text-center text-emerald-800"
                  >
                    <div className="flex items-center justify-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="font-bold text-xs uppercase tracking-wide">Order Submission Confirmed</span>
                    </div>
                    <p className="text-xs text-emerald-700/80">
                      Thank you! Our dispatcher will contact you on your phone line within 12 hours for verification.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-[10px] text-muted-brown text-center mt-5 leading-normal">
                🔒 Your personal dispatch coordinates are stored securely entirely in compliance with privacy regulations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

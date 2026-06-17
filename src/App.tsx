/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Benefits from './components/Benefits';
import Ingredients from './components/Ingredients';
import Comparison from './components/Comparison';
import HowToUse from './components/HowToUse';
import Testimonials from './components/Testimonials';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-cream min-h-screen text-forest antialiased selection:bg-amber/20 selection:text-forest scroll-smooth">
      {/* Structural sections sequence */}
      <Navbar />
      <Hero />
      <Story />
      <Benefits />
      <Ingredients />
      <Comparison />
      <HowToUse />
      <Testimonials />
      <OrderForm />
      <Footer />
    </div>
  );
}

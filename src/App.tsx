import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Menu,
  X,
  ExternalLink,
  Check
} from 'lucide-react';

const SALON = {
  name: 'Irish Tan',
  address: '14390 S Robert Trail #1b, Rosemount, MN 55068',
  mapsUrl: 'https://maps.google.com/?q=14390+S+Robert+Trail+%231b,+Rosemount,+MN+55068',
  phone: '(952) 454-2102',
  phoneTel: 'tel:9524542102',
  hours: [
    { days: 'Monday – Friday', hours: '8:00 AM – 8:00 PM' },
    { days: 'Saturday', hours: '9:00 AM – 6:00 PM' },
    { days: 'Sunday', hours: '10:00 AM – 4:00 PM' },
  ],
};

const TIERS = [
  {
    level: 'Level 1',
    name: 'Essential Color',
    badge: null,
    singlePrice: '$16.99',
    fourPack: '$59.99',
    monthly: '$69.99 / mo',
    features: [
      'Single session plus tax',
      'Builds a natural base tan',
      'Balanced UV for fair/sensitive skin',
      'Gentle body ventilation',
    ],
  },
  {
    level: 'Level 2',
    name: 'Enhanced Bronze',
    badge: 'Most Popular',
    singlePrice: '$18.99',
    fourPack: '$64.99',
    monthly: '$79.99 / mo',
    features: [
      'Single session plus tax',
      'Builds a natural base tan',
      'Deeper, golden bronze color',
      '360° Stand-Up booth access',
      'Streak-free even development',
    ],
  },
  {
    level: 'Level 3',
    name: 'Premium Dark',
    badge: 'Best Value',
    singlePrice: '$22.99',
    fourPack: '$79.99',
    monthly: '$89.99 / mo',
    features: [
      'Single session plus tax',
      'Builds a natural base tan',
      'Deeper, golden bronze color',
      'Darkest, longest-lasting color',
      'Flagship KBL 5600 luxury bed',
      'Premium lamps & air-conditioned cooling',
    ],
  },
];

// Motion animation presets for gentle, modern transitions
const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: '-50px' },
  transition: { staggerChildren: 0.12 },
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f2eb] text-[#000000] font-sans antialiased selection:bg-black selection:text-[#f7f2eb]">
      {/* Top Announcement Bar (Same as original irishtan.com) */}
      <div className="bg-[#f7f2eb] text-[#000000] text-xs py-2.5 px-4 border-b border-[#000000]/15">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{SALON.address}</span>
          </div>
          <div className="flex items-center gap-3 font-semibold">
            <span>Walk-ins welcome</span>
            <span className="opacity-40">·</span>
            <a href={SALON.phoneTel} className="underline hover:opacity-75">
              {SALON.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-30 bg-[#f7f2eb] border-b border-[#000000]/15 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo from original site */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/src/assets/original/sunglasses_logo.jpg"
              alt="Irish Tan logo"
              className="h-12 w-auto object-contain rounded-md"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-2xl font-bold tracking-tight text-[#000000]">
              Irish Tan
            </span>
          </a>

          {/* Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#000000]">
            <a href="#services" className="hover:opacity-70 transition-opacity">
              Our Services
            </a>
            <a href="#pricing" className="hover:opacity-70 transition-opacity">
              Tanning Beds &amp; Prices
            </a>
            <a href="#owners" className="hover:opacity-70 transition-opacity">
              Meet the Owners
            </a>
            <a href="#location" className="hover:opacity-70 transition-opacity">
              Location &amp; Hours
            </a>
          </nav>

          {/* Quick Header Action */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={SALON.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold bg-[#000000] text-[#f7f2eb] rounded-lg hover:bg-stone-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call (952) 454-2102</span>
            </a>
            <a
              href={SALON.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium border border-black/30 bg-transparent text-[#000000] rounded-lg hover:bg-black/5 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Directions</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#000000] rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f7f2eb] border-b border-black/20 px-4 py-4 space-y-3 text-sm font-medium">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:opacity-70"
            >
              Our Services
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:opacity-70"
            >
              Tanning Beds &amp; Prices
            </a>
            <a
              href="#owners"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:opacity-70"
            >
              Meet the Owners
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:opacity-70"
            >
              Location &amp; Hours
            </a>
            <div className="pt-3 border-t border-black/15 flex gap-2">
              <a
                href={SALON.phoneTel}
                className="flex-1 py-2.5 text-center text-xs font-semibold bg-[#000000] text-[#f7f2eb] rounded-lg"
              >
                Call (952) 454-2102
              </a>
              <a
                href={SALON.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 text-center text-xs font-semibold border border-black rounded-lg"
              >
                Directions
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner (Using the exact original banner from irishtan.com) */}
      <section className="relative bg-[#f7f2eb] border-b border-black/10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12 sm:pb-16">
          {/* Real Website Hero Graphic */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden shadow-sm border border-black/15 bg-white mb-8"
          >
            <img
              src="/src/assets/original/hero_banner.png"
              alt="Irish Tan Rosemount"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#000000] mb-4">
              Welcome to Irish Tan
            </h1>
            <p className="text-base sm:text-lg text-black/80 leading-relaxed font-normal mb-8">
              Escape to Irish Tan, Rosemount&apos;s newest haven for a sun-kissed glow! Located at 14390 S Robert Trail, experience a premium tanning experience tailored to your desired radiance.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={SALON.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#000000] hover:bg-stone-800 text-[#f7f2eb] font-semibold rounded-xl text-sm transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (14390 S Robert Trail)</span>
              </a>

              <a
                href={SALON.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-[#000000] text-[#000000] hover:bg-black/5 font-semibold rounded-xl text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call (952) 454-2102</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services (Subtle scroll-triggered fade-in animation) */}
      <section id="services" className="py-14 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          {...fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] mb-2">
            Our Services
          </h2>
          <p className="text-base text-black/70 max-w-xl mx-auto">
            Top-of-the-line equipment and high-quality products for safe, beautiful results.
          </p>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Service 1: Red Light Beds */}
          <motion.div
            variants={fadeIn}
            className="bg-[#f1ece5] rounded-2xl p-6 sm:p-8 text-center border-2 border-black/10 flex flex-col justify-between hover:-translate-y-1 transition-transform"
          >
            <div>
              <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden bg-white p-2 flex items-center justify-center border border-black/10 shadow-xs">
                <img
                  src="/src/assets/original/red_light.webp"
                  alt="Red Light Therapy"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#000000] mb-3">
                Red Light Beds
              </h3>

              <p className="text-sm text-black/80 leading-relaxed mb-6">
                Boost recovery, reduce soreness, and recharge your body with full body red light therapy fast, safe, effective.
              </p>
            </div>

            <a
              href="#pricing"
              className="inline-block py-2.5 px-6 bg-[#000000] text-[#f7f2eb] rounded-xl text-sm font-semibold hover:bg-stone-800 transition-colors"
            >
              View Rates ($24.99)
            </a>
          </motion.div>

          {/* Service 2: Tanning Beds */}
          <motion.div
            variants={fadeIn}
            className="bg-[#f1ece5] rounded-2xl p-6 sm:p-8 text-center border-2 border-black/10 flex flex-col justify-between hover:-translate-y-1 transition-transform"
          >
            <div>
              <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden bg-white p-4 flex items-center justify-center border border-black/10 shadow-xs">
                <img
                  src="/src/assets/original/tanning_bed_icon.png"
                  alt="Tanning Beds"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#000000] mb-3">
                Tanning Beds
              </h3>

              <p className="text-sm text-black/80 leading-relaxed mb-6">
                Skip the beach and get your tan on at home with our top of the line tanning beds. Say goodbye to pale skin!
              </p>
            </div>

            <a
              href="#pricing"
              className="inline-block py-2.5 px-6 bg-[#000000] text-[#f7f2eb] rounded-xl text-sm font-semibold hover:bg-stone-800 transition-colors"
            >
              View Levels 1, 2 &amp; 3
            </a>
          </motion.div>

          {/* Service 3: Lotions */}
          <motion.div
            variants={fadeIn}
            className="bg-[#f1ece5] rounded-2xl p-6 sm:p-8 text-center border-2 border-black/10 flex flex-col justify-between hover:-translate-y-1 transition-transform"
          >
            <div>
              <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden bg-white p-4 flex items-center justify-center border border-black/10 shadow-xs">
                <img
                  src="/src/assets/original/lotion_icon.png"
                  alt="Tanning Lotions"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#000000] mb-3">
                Lotions
              </h3>

              <p className="text-sm text-black/80 leading-relaxed mb-6">
                Glow from head to toe with our nourishing tanning lotion. Get that just back from vacay tan in no time!
              </p>
            </div>

            <a
              href={SALON.phoneTel}
              className="inline-block py-2.5 px-6 bg-[#000000] text-[#f7f2eb] rounded-xl text-sm font-semibold hover:bg-stone-800 transition-colors"
            >
              Stocked at Counter
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Tanning Experiences & Pricing (Subtle scroll-triggered fade-in animation) */}
      <section id="pricing" className="py-14 sm:py-20 bg-[#f1ece5] border-y border-black/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            {...fadeIn}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] mb-2">
              Tanning Experiences
            </h2>
            <p className="text-sm sm:text-base text-black/75">
              (Monthly packages available — No setup fees for monthly packages)
            </p>
          </motion.div>

          {/* Pricing Tiers Grid with subtle stagger fade-in */}
          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12"
          >
            {TIERS.map((tier) => (
              <motion.div
                key={tier.level}
                variants={fadeIn}
                className={`bg-[#f7f2eb] rounded-[28px] p-6 sm:p-8 border-2 border-[#000000] text-center flex flex-col justify-between relative shadow-xs ${
                  tier.badge ? 'ring-2 ring-black' : ''
                }`}
              >
                {/* Optional Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#000000] text-[#f7f2eb] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-sm font-bold text-black/60 uppercase tracking-widest mb-1">
                    🍀 {tier.level}
                  </div>
                  <h3 className="text-2xl font-bold text-[#000000] mb-3">
                    {tier.name}
                  </h3>

                  {/* Price */}
                  <div className="my-5 pb-5 border-b border-black/15">
                    <div className="text-4xl font-extrabold text-[#000000] tabular-nums">
                      {tier.singlePrice}
                    </div>
                    <div className="text-xs text-black/60 font-medium mt-1">
                      single session plus tax
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-left mb-6 text-black/85">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Package rates footer */}
                <div className="pt-4 border-t border-black/15 text-xs text-black/80 space-y-1 text-center">
                  <div>
                    <strong>4-Pack:</strong> {tier.fourPack}
                  </div>
                  <div>
                    <strong>Monthly Unlimited:</strong>{' '}
                    <span className="font-bold text-black">{tier.monthly}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Full Pricing Reference Table */}
          <motion.div
            {...fadeIn}
            className="bg-white rounded-2xl border-2 border-black/15 overflow-hidden shadow-xs"
          >
            <div className="p-4 bg-black text-[#f7f2eb] font-bold text-sm sm:text-base flex items-center justify-between">
              <span>Complete Salon Pricing Summary</span>
              <span className="text-xs font-normal opacity-80">Walk-ins Welcome</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-stone-100 border-b border-black/10 font-bold text-black">
                    <th className="py-3 px-4 sm:px-6">Service / Bed</th>
                    <th className="py-3 px-4 text-center">Single Session</th>
                    <th className="py-3 px-4 text-center">4-Pack</th>
                    <th className="py-3 px-4 sm:px-6 text-right">Monthly Unlimited</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold">
                      🍀 Level 1 (Essential Color)
                    </td>
                    <td className="py-3.5 px-4 text-center tabular-nums">$16.99</td>
                    <td className="py-3.5 px-4 text-center tabular-nums">$59.99</td>
                    <td className="py-3.5 px-4 sm:px-6 text-right font-bold tabular-nums">$69.99 / mo</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold">
                      🍀 Level 2 (Enhanced Bronze / Stand-Up)
                    </td>
                    <td className="py-3.5 px-4 text-center tabular-nums">$18.99</td>
                    <td className="py-3.5 px-4 text-center tabular-nums">$64.99</td>
                    <td className="py-3.5 px-4 sm:px-6 text-right font-bold tabular-nums">$79.99 / mo</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold">
                      🍀 Level 3 (Premium Dark / KBL 5600)
                    </td>
                    <td className="py-3.5 px-4 text-center tabular-nums">$22.99</td>
                    <td className="py-3.5 px-4 text-center tabular-nums">$79.99</td>
                    <td className="py-3.5 px-4 sm:px-6 text-right font-bold tabular-nums">$89.99 / mo</td>
                  </tr>
                  <tr className="bg-red-50/50">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-red-950">
                      Full-Body Red Light Therapy Bed
                    </td>
                    <td className="py-3.5 px-4 text-center tabular-nums text-red-950">$24.99</td>
                    <td className="py-3.5 px-4 text-center tabular-nums text-red-950">$79.99</td>
                    <td className="py-3.5 px-4 sm:px-6 text-right font-bold tabular-nums text-red-950">$139.99 / mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stand-Up & Lay-Down Equipment Descriptions */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeIn}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-black/15 shadow-xs"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#000000] mb-3">
              Our Stand-Up Tanning Booth
            </h3>
            <p className="text-sm text-black/80 leading-relaxed">
              Experience a flawless, even glow in our state-of-the-art stand-up tanning booths. Designed for comfort and efficiency, our vertical units deliver a fast, all-over tan without pressure points — so you can look and feel your best in minutes.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-black/15 shadow-xs"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#000000] mb-3">
              Our Lay-Down Tanning Beds &amp; KBL 5600
            </h3>
            <p className="text-sm text-black/80 leading-relaxed">
              Step into luxury with our KBL 5600 lay-down tanning bed and Ultrasun technology. Designed for maximum comfort and exceptional results, it delivers a deep, even tan while surrounding you with premium features like gentle ventilation, ergonomic acrylic design, and soothing ambient lighting.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Meet the Owners (Subtle scroll-triggered fade-in animation) */}
      <section id="owners" className="py-14 sm:py-20 bg-[#f7f2eb] border-t border-black/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            {...fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] mb-2">
              Meet the Owners
            </h2>
            <p className="text-base text-black/70">
              The local family behind Irish Tan in Rosemount.
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* J.R. */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-black/15 shadow-xs hover:-translate-y-1 transition-transform"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-stone-100 border-2 border-black/10">
                <img
                  src="/src/assets/original/jr.jpg"
                  alt="J.R. – The Builder"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#000000] mb-1">
                J.R.
              </h3>
              <div className="text-sm text-black/60 italic font-medium mb-4">
                The Builder
              </div>

              <p className="text-sm text-black/80 leading-relaxed">
                JR built Irish Tan from the ground up. Every wall, floor, and detail was made with care to create a space that feels solid and welcoming. When he&apos;s not working in the shop, you&apos;ll probably see him around town. Step inside and you&apos;ll feel right at home.
              </p>
            </motion.div>

            {/* Missiee */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-black/15 shadow-xs hover:-translate-y-1 transition-transform"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-stone-100 border-2 border-black/10">
                <img
                  src="/src/assets/original/missiee.jpg"
                  alt="Missiee – The Boss Lady"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#000000] mb-1">
                Missiee
              </h3>
              <div className="text-sm text-black/60 italic font-medium mb-4">
                The Boss Lady
              </div>

              <p className="text-sm text-black/80 leading-relaxed">
                Missiee keeps Irish Tan running smoothly. She handles the day-to-day, keeps the vibe welcoming, and makes sure the best lotions are always in stock. She&apos;s the friendly face you see when you walk in—and the reason the shop feels alive.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location & Hours Section (Subtle scroll-triggered fade-in animation) */}
      <section id="location" className="py-14 sm:py-20 bg-white border-t border-black/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            {/* Location Info */}
            <motion.div
              variants={fadeIn}
              className="bg-[#f7f2eb] rounded-2xl p-6 sm:p-8 border border-black/15"
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] mb-4">
                Location &amp; Contact
              </h2>

              <div className="space-y-4 text-sm text-black/85 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-base text-black">Irish Tan</div>
                    <div>{SALON.address}</div>
                    <div className="text-xs text-black/60 mt-0.5">Rosemount, Minnesota (near Robert Trail)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-black">Phone Number</div>
                    <a href={SALON.phoneTel} className="font-semibold underline">
                      {SALON.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Google Maps Link */}
              <a
                href={SALON.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#000000] hover:bg-stone-800 text-[#f7f2eb] font-semibold rounded-xl text-sm transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-1" />
              </a>
            </motion.div>

            {/* Hours */}
            <motion.div
              variants={fadeIn}
              className="bg-[#f1ece5] rounded-2xl p-6 sm:p-8 border border-black/15"
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000000] mb-4">
                Salon Hours
              </h2>

              <div className="space-y-3 mb-6">
                {SALON.hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-2 border-b border-black/10 last:border-none text-sm"
                  >
                    <span className="font-medium text-black/80">{h.days}</span>
                    <span className="font-bold text-black tabular-nums">{h.hours}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-white rounded-xl border border-black/10 text-xs text-black/80 leading-relaxed mb-6">
                <p className="font-bold text-black mb-1">Walk-ins Always Welcome!</p>
                <p>No appointment is necessary for tanning beds or red light therapy. Come in during regular hours to get started.</p>
              </div>

              <a
                href={SALON.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 border-2 border-black text-black font-bold rounded-xl text-sm hover:bg-black/5 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us: (952) 454-2102</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="bg-[#f7f2eb] border-t border-black/15 py-10 text-xs text-black/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-black">Irish Tan</span>
            <span>·</span>
            <span>{SALON.address}</span>
            <span>·</span>
            <a href={SALON.phoneTel} className="underline font-medium">
              {SALON.phone}
            </a>
          </div>
          <div>
            © {new Date().getFullYear()} Irish Tan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

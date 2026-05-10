/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Cloud, 
  Palmtree, 
  TrendingUp, 
  Globe, 
  Map as MapIcon, 
  User, 
  Heart, 
  Plane, 
  Navigation, 
  Share2, 
  Mail, 
  Phone,
  Home,
  Building2,
  Hotel,
  LandPlot,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

/**
 * ThaiBridge - Luxury Real Estate Portal
 */

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-on-surface/5 ${
          scrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-primary tracking-tight">ThaiBridge</div>
          
          <div className="hidden md:flex space-x-10">
            {['Home', 'Properties', 'Regions', 'About Us', 'Contact'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  item === 'Regions' ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <Globe className="w-5 h-5 text-primary cursor-pointer hover:scale-110 transition-transform" />
            <button className="bg-primary/10 text-primary border border-primary/20 px-6 py-2 rounded-lg text-sm font-bold hover:bg-primary hover:text-background transition-all active:scale-95">
              List Your Property
            </button>
          </div>
        </nav>
      </header>

      {/* Sidebar Navigation (Desktop) */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-[320px] bg-surface-container/40 backdrop-blur-3xl border-r border-on-surface/5 flex-col p-8 z-40 pt-32">
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-1">Region Details</h2>
          <p className="text-sm font-medium text-on-surface-variant uppercase tracking-widest">Explore Thailand</p>
        </div>

        <nav className="flex flex-col space-y-4">
          <NavItem icon={<Cloud size={20} />} label="Weather" active />
          <NavItem icon={<Palmtree size={20} />} label="Lifestyle" />
          <NavItem icon={<TrendingUp size={20} />} label="Investment" />
        </nav>

        <div className="mt-auto group cursor-crosshair">
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-primary/20 shadow-2xl">
            <img 
              alt="Phuket Map Preview" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo7LmE3V-VDPKhMb0ZS6vHVWQ9SvBNyo8svgKMIvqalmr4_CehBztKXmfEo13T255zSSqvNRCyElV2UZJONn-epOA_slyBXfHz-L9-FUpK7DZHn4Yaz1SDiXrEU4e3Xuk5FN_1N8UfbN9tojR-C7Ci31-zOB74M0Pi1-RvlfO6fWrEjz5n3v7zFayuKfQbQ7PEiDAg5h5UUgW27frZlwxUzSwOCfjvFxhpBSW6P8C_dAj33KSFw26euqqIVdREwmZV8cquq_9FcTE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold tracking-tighter">PHUKET LIVE</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="lg:ml-[320px]">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.15 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-IJQyXlNIvA_7zWZWgXblrwwOZNr86A0Dxg4gDnLY19daDmNNW_ktw-lMKq2edHds44rDR2zzBXygO47FpJmJW2pcqEZvfS_3es1Duy_RLfh_hg4Yu-xMJgJytsE5dbKlokkv8yr4_nz_MQto1eHeDCBRmWQ7VKSk5OlQFEwUpbeoS5CjrJyIP_R20HTsk5g7yo0qeYyf53BsIHzjdgL-Zi9YsyYu1nL-D_Iqq4w5B2ej0nl1P7RSFZKGEUE2l5NBQVsKJZZBMRs"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 cinematic-gradient" />
          </div>
          
          <div className="relative z-10 text-center px-margin-mobile">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs font-bold text-secondary-fixed mb-6 block tracking-[0.4em] uppercase"
            >
              The Andaman Crown Jewel
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 leading-[1.1]"
            >
              Phuket Lifestyle
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed font-light"
            >
              Where emerald rainforests meet sapphire seas, Phuket offers more than a home—it's a sanctuary for the world's most discerning travelers.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-on-primary-container px-12 py-5 rounded-lg font-bold text-lg shadow-[0_0_30px_rgba(242,202,80,0.4)] transition-shadow"
            >
              Discover Properties in Phuket
            </motion.button>
          </div>

          <ScrollIndicator />
        </section>

        {/* Weather & Atmosphere */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto" id="weather">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="inline-block p-6 glass-card rounded-2xl">
                <Cloud className="text-secondary-container w-10 h-10 mb-4" />
                <h3 className="text-2xl font-serif font-bold text-on-surface mb-1">Tropical Marine</h3>
                <p className="text-on-surface-variant">28-32°C year-round</p>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                An Atmosphere of Unrivaled Prestige
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed font-light">
                Phuket’s atmosphere is a sophisticated blend of "Luxury Islands, Yachting, and World-class Dining". Whether you are cruising through Phang Nga Bay or enjoying Michelin-starred cuisine in Old Town, the island breathes elegance.
              </p>
              
              <div className="flex space-x-12">
                <Stat value="300+" label="Sunny Days" />
                <Stat value="5" label="World-Class Marinas" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
                <img 
                  className="w-full aspect-[4/5] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpxtMmQ-E8ztmJD3-XfqgS3ItzZDfQI2Ib3PqFjuo3lJy1oCaVmU6kbufR-CtJmZfH5Y55HL6Lr6jh_dGf6YvENl4P-rhPDN44l_TcS_Cp1YofSyLXvmZJqj-yXWurZ7cAizkQUUrpabEfWcibpYvUI2CxOBdoWn9ArSmTe_TnYMs1ghh2nBBldi9JZsKZXYxEl921HT0oJ-i6_vitYe7CUypvh0Kn01URBtzig2U9M0PKOr8xoqAKa7pDZzlmpFiniNdC63-6dRA"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -left-10 p-8 glass-card rounded-2xl max-w-xs hidden lg:block"
              >
                <p className="text-primary italic font-serif text-lg leading-relaxed">
                  "The sailing capital of Asia, offering unparalleled access to hidden archipelagos."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Lifestyle Bento Grid */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto overflow-hidden" id="lifestyle">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
            >
              A Sanctuary for Every Journey
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-on-surface-variant max-w-2xl mx-auto font-light"
            >
              From growing families to those seeking quietude, Phuket provides diverse ecosystems of living.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter h-auto md:h-[600px]">
            <BentoItem 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBOqRzG4MFfpiRTIF-7MI5X6dzvMxUlCcJT-BnwPW5zGw5YlSPKJcuLlw_LK6uE-UYpYWALh_zxjRMw57T30AGPQhbGjzn8K2Jf-7k8MhLBz3GME0kG21ClGET_RBWWTlvxMMAKH7z0aVldkDOgUzNR8fu4veozYzWm91ztu7vnVPAPwH0jE8gy3SHUdtMdxfgTLxX1-aETP2GbFe3ESqdPC9H-iyNvQowQdjbDEGFAD95B1Gq9Hht94l_ZexQyIjHAsUCKkAaUYSQ"
              title="Family Friendly"
              desc="Home to elite international schools and safe, gated communities."
            />
            <BentoItem 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBtCWv41r5N4a8uZEaobxSDzzcIB0BX_ZhgX6Fmb2MseC2uyzAQY35fQaWCmgyUvqSEWDlrkh9sx81LHoYOSFrrs3ejzvEULHwSeN6Ozl4ZLRN95Gzml2IgVn8CyNT4uGrIRx8Lv3iLXzpj8m4b9GO2nNelxcQ8hrsEzNal2NGJNrokj1ZMQevrURHRWQZjWIYgVswjWKXuW_zZyI9UK4-iGYXKRr0U_66OnMpxCDA6CdJB7dzJwhYyFFETx4n9WVJH0N2hfZvJzyg"
              title="Expat Communities"
              desc="Connect with a global network of professionals and entrepreneurs."
            />
            <BentoItem 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCd5bLBr9anQi_75hmjv_6yFwfMYFOWRKXw22U7xP6Quq3hU8Vf3Y9JeuOKHoT84yylOi_iftfIWrtvsAJJ32SVbMsInpUaHD8b8uO39ZSCehr1UO9HTm8vCQdhLHhP6BTQUT1wLGzyo0URqeyKB6g6zpbs_F-4awmPDSC-4SHgcMJiPGAIxOFaJBAivsLng9A8hwQ9jPI5Q1eW4Q2V7e39GdG619dqVXN1jfQdDmjU0OVlHshmWte8hf1JXTwPwNX8uUT8iWDKDgY"
              title="Retirement Haven"
              desc="Pristine wellness retreats and world-class medical facilities."
            />
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-section-gap bg-surface-container-low" id="investment">
          <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <InvestmentCard 
                  icon={<TrendingUp className="text-primary w-8 h-8" />}
                  title="High Capital Appreciation"
                  desc="Land values in premium coastal areas have seen consistent double-digit growth."
                  borderColor="border-primary"
                />
                <InvestmentCard 
                  icon={<Mail className="text-secondary-container w-8 h-8" />} // Changed from 'payments' as it's not in lucide defaults used here
                  title="Strong Rental Yields"
                  desc="Targeted returns of 6-8% annually through managed villa programs."
                  borderColor="border-secondary-container"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 glass-card rounded-3xl space-y-4"
              >
                <h4 className="text-xl font-serif font-bold text-primary">Strategic Growth</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Phuket's infrastructure expansion—including the new airport terminal and light rail projects—solidifies its future as a global hub.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                Investment Potential
              </h2>
              <p className="text-lg text-on-surface-variant font-light leading-relaxed">
                The Andaman coast isn't just a holiday destination; it's a robust financial asset class. With limited coastal land and increasing global demand, Phuket real estate represents a secure, high-yield opportunity for international investors.
              </p>
              <button className="group flex items-center space-x-3 text-secondary-container font-bold text-lg border-2 border-secondary-container/30 px-8 py-4 rounded-xl hover:bg-secondary-container/10 transition-all shadow-glow-secondary">
                <span>Download Investment Guide</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-surface-container-lowest border-t border-on-surface/5 py-24">
          <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
              <div className="space-y-8 col-span-1 md:col-span-2">
                <div className="text-3xl font-serif font-bold text-primary">ThaiBridge</div>
                <p className="text-on-surface-variant max-w-sm leading-relaxed">
                  Your gateway to exclusive Thai real estate and cinematic island living. Discover the most prestigious villas and penthouses across the kingdom.
                </p>
                <div className="flex space-x-6">
                  <SocialLink icon={<Share2 size={20} />} />
                  <SocialLink icon={<Mail size={20} />} />
                  <SocialLink icon={<Phone size={20} />} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h5 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Quick Links</h5>
                  <ul className="space-y-4 text-on-surface-variant text-sm">
                    <li><a href="#" className="hover:text-primary transition-colors">WhatsApp Direct</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h5 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Legal</h5>
                  <ul className="space-y-4 text-on-surface-variant text-sm">
                    <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h5 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Newsletter</h5>
                <p className="text-on-surface-variant text-sm">Receive curated property selections monthly.</p>
                <div className="flex p-1 bg-surface-container rounded-xl border border-on-surface/5">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-transparent border-none focus:ring-0 text-sm px-4 w-full placeholder:text-on-surface-variant/40"
                  />
                  <button className="bg-primary/10 text-primary px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary hover:text-background transition-all">
                    Join
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-24 pt-8 border-t border-on-surface/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-on-surface-variant/40 tracking-widest uppercase">
              <p>© 2024 THAIBRIDGE PROPERTY. A TRUSTED THAI COMPANY.</p>
              <div className="mt-4 md:mt-0 flex space-x-8">
                <span>BANGKOK</span>
                <span>PHUKET</span>
                <span>SAMUI</span>
              </div>
            </div>
          </div>
        </footer>

        {/* Mobile Navigation */}
        <nav className="md:hidden fixed bottom-0 w-full z-50 bg-surface-container/90 backdrop-blur-xl border-t border-primary/20 flex justify-around items-center h-20 px-6 safe-area-inset-bottom shadow-2xl">
          <MobileNavItem icon={<Home size={22} />} label="Villas" />
          <MobileNavItem icon={<Building2 size={22} />} label="Condos" />
          <MobileNavItem icon={<Hotel size={22} />} label="Hotels" />
          <MobileNavItem icon={<LandPlot size={22} />} label="Land" />
        </nav>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a 
      href={`#${label.toLowerCase()}`}
      className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group ${
        active 
          ? 'bg-primary text-on-primary-container shadow-glow-primary' 
          : 'text-on-surface-variant hover:bg-surface-container-high'
      }`}
    >
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-xs font-bold tracking-[0.15em] uppercase">{label}</span>
    </a>
  );
}

function Stat({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex flex-col border-l-2 border-primary/30 pl-6">
      <span className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1 tracking-tighter">{value}</span>
      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{label}</span>
    </div>
  );
}

function BentoItem({ image, title, desc }: { image: string, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover="hover"
      className="relative group overflow-hidden rounded-[32px] glass-card h-[400px] md:h-full cursor-pointer"
    >
      <motion.img 
        variants={{ hover: { scale: 1.1 } }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="absolute inset-0 w-full h-full object-cover"
        src={image}
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent group-hover:via-background/20 transition-all duration-500" />
      <div className="absolute inset-0 p-10 flex flex-col justify-end">
        <motion.h3 
          className="text-3xl font-serif font-bold text-primary mb-3"
          variants={{ hover: { y: -5 } }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-on-surface-variant leading-relaxed text-sm font-light max-w-[80%]"
          variants={{ hover: { y: -5 } }}
        >
          {desc}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          variants={{ hover: { opacity: 1, x: 0 } }}
          className="mt-6 flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest"
        >
          <span>Explore Details</span>
          <ArrowRight size={14} />
        </motion.div>
      </div>
    </motion.div>
  );
}

function InvestmentCard({ icon, title, desc, borderColor }: { icon: React.ReactNode, title: string, desc: string, borderColor: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`p-10 glass-card rounded-3xl border-t-2 ${borderColor} space-y-6 transition-all shadow-xl`}
    >
      <div className="p-3 bg-surface-container rounded-2xl inline-block shadow-inner">{icon}</div>
      <h4 className="text-xl font-serif font-bold text-on-surface">{title}</h4>
      <p className="text-on-surface-variant text-sm leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container border border-on-surface/5 text-primary hover:bg-primary hover:text-background transition-all shadow-glow-primary-sm">
      {icon}
    </a>
  );
}

function MobileNavItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex flex-col items-center justify-center space-y-1 text-on-surface-variant hover:text-primary transition-all active:scale-90">
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </button>
  );
}

function ScrollIndicator() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
    >
      <span className="text-[9px] font-bold text-primary/40 uppercase tracking-[0.4em] [writing-mode:vertical-lr]">Scroll</span>
      <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
    </motion.div>
  );
}


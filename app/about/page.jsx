"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { Heart, Menu, X, ShoppingCart, ChevronDown, Award, Leaf, Target, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const AboutPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in your products. Can you provide more details and availability?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917296937881?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F5EBD9] font-sans text-[#3E2A1D]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F5EBD9] border-b-2 border-[#D4A574] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="/logo.jpeg" alt="3SK Cookies logo" width={32} height={32} />
              <span className="ml-2 text-2xl font-bold text-[#6B4423]">3SK Cookies</span>
              <span>
                <img src={"/om.png"} className='w-10 h-10 ml-4' />
              </span>
            </div>
            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-[#F5EBD9] border-b-2 border-[#D4A574] shadow-sm">
                <nav className="flex flex-col space-y-4 py-4 px-6">
                  <a
                    href="#shop"
                    className="text-lg font-medium hover:text-[#C17A3F] transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Shop
                  </a>

                  <a
                    href="/about"
                    className="text-lg font-medium hover:text-[#C17A3F] transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>
                </nav>
              </div>
            )}


            <nav className="hidden md:flex space-x-8">
              <a href="#shop" className="hover:text-[#C17A3F] transition">Shop</a>
              <a href="/about" className="hover:text-[#C17A3F] transition">About</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="hover:text-[#C17A3F] transition">
                <Heart className="w-5 h-5" />
              </button>
              <button className="relative hover:text-[#C17A3F] transition">
                <ShoppingCart className="w-5 h-5" />
                {0 > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C17A3F] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {/* {cartCount} */}
                  </span>
                )}
              </button>
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-linear-to-b from-[#EFE0C7] to-[#F5EBD9]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#6B4423] mb-6 animate-fade-in-up">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-[#8B7355] max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Tradition Meets Global Excellence
          </p>
          <div className="mt-8 h-1 w-32 bg-[#C17A3F] rounded-full mx-auto"></div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-4 bg-[#F5EBD9]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-[#D4A574] rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square flex items-center justify-center text-9xl">
                  <img src="/logo.jpeg" alt="" />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 text-6xl">✨</div>
              <div className="absolute -bottom-4 -right-4 text-6xl">🎯</div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#6B4423] mb-4">
                The Visionary: Kavya Agarwal
              </h2>
              <p className="text-lg text-[#8B7355] mb-4">
                Welcome to 3SK Cookies. The drive to create truly exceptional cookies begins with our founder, Kavya Agarwal. As the businessman and visionary behind the brand, Kavya's mission is ambitious: to take the wholesome, comforting flavors of Indian baking and establish them as a cherished global tradition.
              </p>
              <p className="text-lg text-[#8B7355] mb-6">
                He leads a dedicated team to ensure every product maintains the integrity of traditional Indian taste while meeting the highest standards of international gourmet quality.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-1 bg-[#C17A3F]"></div>
                <span className="text-[#C17A3F] font-semibold">Founded 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-[#EFE0C7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#6B4423] mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-[#8B7355]">
              To elevate traditional tastes and demonstrate the refined, authentic flavors of Indian cookies on a global stage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="text-6xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold text-[#6B4423] mb-4">
                Global Reach
              </h3>
              <p className="text-[#8B7355]">
                Establish Indian baking traditions as a cherished global experience, bringing authentic tastes to every corner of the world.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="text-6xl mb-6">🎨</div>
              <h3 className="text-2xl font-bold text-[#6B4423] mb-4">
                Authentic Tradition
              </h3>
              <p className="text-[#8B7355]">
                Maintain the integrity of traditional Indian taste while meeting the highest standards of international gourmet quality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="text-6xl mb-6">💎</div>
              <h3 className="text-2xl font-bold text-[#6B4423] mb-4">
                Premium Excellence
              </h3>
              <p className="text-[#8B7355]">
                Deliver truly exceptional cookies that celebrate pure, comforting flavors rooted in Indian tradition with gourmet refinement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-24 px-4 bg-[#F5EBD9]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#6B4423] mb-4">
              Our Collection: Purity Meets Tradition
            </h2>
            <p className="text-xl text-[#8B7355] mb-8">
              We celebrate the pure, comforting flavors rooted in Indian tradition
            </p>
            <div className="h-1 w-32 bg-[#C17A3F] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Oats Cookies",
                emoji: "🌾",
                description: "Wholesome goodness for a healthy start"
              },
              {
                name: "Suji Cookies",
                emoji: "✨",
                description: "The perfect, melt-in-your-mouth texture inspired by classic recipes"
              },
              {
                name: "Coconut Cookies",
                emoji: "🥥",
                description: "Rich, tropical flavor delivering a taste of home"
              },
              {
                name: "Namkeen Cookies",
                emoji: "🧂",
                description: "Our savory delight, offering a unique and authentic Indian snack experience"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
              >
                <div className="text-6xl mb-4">{item.emoji}</div>
                <h3 className="text-2xl font-bold text-[#6B4423] mb-3">
                  {item.name}
                </h3>
                <p className="text-lg text-[#8B7355]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantee Section */}
      <section className="py-24 px-4 bg-linear-to-br from-[#E8D5B7] to-[#EFE0C7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#6B4423] mb-4">
              Our Guarantee: Quality Speaks for Itself
            </h2>
            <p className="text-xl text-[#8B7355]">
              We refuse to compromise on purity and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C17A3F] rounded-full mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#6B4423] mb-4">
                100% Natural & Pure
              </h3>
              <p className="text-[#8B7355]">
                We rely exclusively on the finest, naturally-sourced ingredients, honoring traditional methods in every batch.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C17A3F] rounded-full mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#6B4423] mb-4">
                Zero Preservatives
              </h3>
              <p className="text-[#8B7355]">
                You will find absolutely no preservatives in any of our cookies. Our commitment is to freshness and the pure, unadulterated taste of tradition.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C17A3F] rounded-full mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#6B4423] mb-4">
                Clean Baking
              </h3>
              <p className="text-[#8B7355]">
                Traditional techniques combined with rigorous quality standards ensure every bite delivers authentic, exceptional flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 px-4 bg-[#6B4423] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-7xl mb-8">🌟</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Commitment to You
          </h2>
          <p className="text-xl text-[#E8D5B7] mb-8 leading-relaxed">
            3SK Cookies is Kavya Agarwal's commitment to delivering a truly authentic, high-quality Indian cookie experience. We're making tradition delicious, one global bite at a time.
          </p>
          <p className="text-lg text-[#D4A574]">
            "Where heritage meets excellence, and every cookie tells a story of passion, purity, and tradition."
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-[#F5EBD9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#6B4423] mb-6">
            Taste the Tradition
          </h2>
          <p className="text-xl text-[#8B7355] mb-8">
            Experience the authentic flavors of Indian baking with our premium collection of cookies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#shop" className="bg-[#C17A3F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6B4423] transition-all shadow-lg">
              Explore Our Collection
            </a>
            <button onClick={handleWhatsAppClick} className="border-2 border-[#C17A3F] text-[#C17A3F] px-8 py-4 rounded-full font-semibold hover:bg-[#C17A3F] hover:text-white transition-all">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3E2A1D]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Main Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand & Social */}
            <div>
              <div className="mb-6">
                <p className="text-5xl mb-3">🍪</p>
                <h3 className="text-xl font-semibold text-neutral-200">3SK Cookies</h3>
                <p className="text-sm text-[#B8956A] mt-2">Baked with love</p>
                <p className="text-xs text-[#D4A574]">Since 2023</p>
              </div>

              {/* Social Icons */}
              <div className="mt-8">
                <p className="text-xs font-semibold text-neutral-300 uppercase tracking-widest mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <Link href={"https://www.instagram.com/3sk_cookies"} className="w-10 h-10 rounded-full bg-[#C17A3F] hover:bg-[#D4A574] text-white transition-all duration-300 flex items-center justify-center">
                    <Instagram size={18} />
                  </Link>
                  <Link href="https://www.facebook.com/profile.php?id=61582067559023" className="w-10 h-10 rounded-full bg-[#C17A3F] hover:bg-[#D4A574] text-white transition-all duration-300 flex items-center justify-center">
                    <Facebook size={18} />
                  </Link>
                  <Link href={"https://wa.me/917296937881?text='Hi! I'm interested in your products. Can you provide more details and availability?'"} className="w-10 h-10 rounded-full bg-[#C17A3F] hover:bg-[#D4A574] text-white transition-all duration-300 flex items-center justify-center">
                    <MessageCircle size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Shop */}
            <div>
              <h4 className="text-sm font-semibold text-neutral-200 mb-6 uppercase tracking-widest">Shop</h4>
              <div>
                <ul className="space-y-2 text-[#B8956A]">
                  <Link href={"/product/oats"}><li>Oats Cookies</li></Link>
                  <Link href={"/product/namkeen"}><li>Namkeen Cookies</li></Link>
                  <Link href={"/product/suji"}><li>Suji Cookies</li></Link>
                  <Link href={"/product/coconut"}><li>Coconut Cookies</li></Link>
                </ul>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-neutral-200 mb-6 uppercase tracking-widest">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="text-[#B8956A] hover:text-[#C17A3F] transition-colors text-sm">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-[#D4A574] to-transparent mb-8"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-4 md:mt-0">
            <p>Handcrafted with ❤️ in India</p>
            <p>
              📞 <a href="tel:+917296937881" className="hover:text-[#D4A574]">+91 72969 37881</a>
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;

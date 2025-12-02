"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Menu, X, Heart, Star, Check, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Mock GSAP functionality since we can't import external libraries
const gsap = {
  timeline: () => ({
    to: () => ({ to: () => ({}) }),
    from: () => ({ from: () => ({}) }),
    fromTo: () => ({ fromTo: () => ({}) })
  }),
  to: () => {},
  from: () => {},
  fromTo: () => {}
};

const products = [
  {
    id: "oats",
    name: "Oat Biscuits",
    tagline: "Nutritious snack with high fiber content",
    price: "199/kg",
    category: "Healthy",
    tags: ["Bestseller", "Heart-Healthy", "High Fiber"],
    image: "/products/oats/1.jpeg"
  },
  {
    id: "coconut",
    name: "Coconut Biscuits",
    tagline: "Healthy fats and fiber for sustained energy",
    price: "199/kg",
    category: "Healthy",
    tags: ["Popular", "Energy Boost", "Immunity"],
    image: "/products/coconut/1.jpeg"
  },
  {
    id: "namkeen",
    name: "Namkeen Cookies",
    tagline: "Traditional healthy savory snack with digestive benefits",
    price: "199/kg",
    category: "Savory",
    tags: ["Digestive Health", "No Maida", "Traditional"],
    image: "/products/namkeen/1.jpeg"
  },
  {
    id: "suji",
    name: "Suji Biscuits",
    tagline: "Semolina-based nutrition for sustained energy",
    price: "199/kg",
    category: "Healthy",
    tags: ["Weight Management", "Heart-Healthy", "Nutrient-Rich"],
    image: "/products/suji/1.jpeg"
  }
];

const BiscuitWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);
  const heroRef = useRef(null);
  const processRef = useRef(null);

  useEffect(() => {
    // Simulate GSAP animations with CSS transitions
    const hero = heroRef.current;
    if (hero) {
      hero.style.opacity = '0';
      setTimeout(() => {
        hero.style.transition = 'opacity 1s ease-out';
        hero.style.opacity = '1';
      }, 100);
    }
  }, []);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5EBD9] font-sans text-[#3E2A1D]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F5EBD9] border-b-2 border-[#D4A574] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="/logo.jpeg" alt="3SK Cookies logo" width={32} height={32} />
              <span className="ml-2 text-2xl font-bold text-[#6B4423]">3SK Cookies</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#shop" className="hover:text-[#C17A3F] transition">Shop</a>
              <a href="#oats" className="hover:text-[#C17A3F] transition">Oat Collection</a>
              <a href="#story" className="hover:text-[#C17A3F] transition">Our Story</a>
              <a href="#contact" className="hover:text-[#C17A3F] transition">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="hover:text-[#C17A3F] transition">
                <Heart className="w-5 h-5" />
              </button>
              <button className="relative hover:text-[#C17A3F] transition">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C17A3F] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
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
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-[#EFE0C7] to-[#F5EBD9]">
        {/* Floating Cookies */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { left: '10%', top: '20%', duration: 3.5 },
            { left: '25%', top: '70%', duration: 4.2 },
            { left: '50%', top: '30%', duration: 3.8 },
            { left: '70%', top: '60%', duration: 4.0 },
            { left: '85%', top: '15%', duration: 3.6 },
            { left: '35%', top: '85%', duration: 4.1 },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute text-6xl animate-float"
              style={{
                left: pos.left,
                top: pos.top,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${pos.duration}s`
              }}
            >
              🍪
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-[#6B4423] mb-4 animate-fade-in-up">
              Baked with Joy,
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold text-[#6B4423] mb-6 animate-fade-in-up animation-delay-200">
              Crafted with Care
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-[#8B7355] mb-8 animate-fade-in-up animation-delay-400">
            Discover biscuits that bring warmth to every moment
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up animation-delay-600">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✨</span>
              <span className="text-sm">100% Natural</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔥</span>
              <span className="text-sm">Freshly Baked</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🚫</span>
              <span className="text-sm">No Preservatives</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
            <a href="#shop" className="bg-[#C17A3F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6B4423] transform hover:scale-105 transition-all shadow-lg">
              Explore Our Biscuits
            </a>
            <button className="border-2 border-[#C17A3F] text-[#C17A3F] px-8 py-4 rounded-full font-semibold hover:bg-[#C17A3F] hover:text-white transition-all">
              Learn Our Story →
            </button>
          </div>

          <div className="mt-12 flex justify-center gap-8 text-center animate-fade-in-up animation-delay-1000">
            <div>
              <div className="text-3xl font-bold text-[#C17A3F]">10k+</div>
              <div className="text-sm text-[#8B7355]">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C17A3F]">50+</div>
              <div className="text-sm text-[#8B7355]">Varieties</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C17A3F]">Since 2010</div>
              <div className="text-sm text-[#8B7355]">Baking Excellence</div>
            </div>
          </div>
        </div>

        {/* Mascot */}
        <div className="absolute bottom-10 right-10 text-8xl animate-bounce hidden lg:block">
          👨‍🍳
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#C17A3F]" />
        </div>
      </section>

      {/* Brand Story Interlude */}
      <section className="py-20 px-4 bg-[#EFE0C7]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-[#D4A574] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
              <div className="aspect-square flex items-center justify-center text-9xl">
                🥖
              </div>
            </div>
            <div className="absolute -top-4 -left-4 text-6xl">🌾</div>
            <div className="absolute -bottom-4 -right-4 text-6xl">🌾</div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-[#6B4423] mb-6">
              Every Biscuit Tells a Story
            </h2>
            <p className="text-lg text-[#8B7355] mb-4">
              Since 2010, we&apos;ve been crafting biscuits with passion and precision. Our journey began in a small bakery with a simple belief: that the best biscuits come from the finest ingredients and a whole lot of love.
            </p>
            <p className="text-lg text-[#8B7355] mb-6">
              Today, we continue that tradition, baking each batch with the same care and attention that started it all.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-1 bg-[#C17A3F]"></div>
              <span className="text-[#C17A3F] font-semibold">Founded 2010</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 px-4 bg-[#F5EBD9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-[#6B4423] mb-4">
            Our Baking Journey
          </h2>
          <div className="flex justify-center mb-16">
            <div className="h-1 w-32 bg-[#C17A3F] rounded-full"></div>
          </div>

          <div className="space-y-24">
            {[
              { icon: "🌾", title: "Sourcing Premium Ingredients", desc: "Handpicked oats, pure butter, natural sweeteners" },
              { icon: "🥣", title: "Mixing with Love", desc: "Traditional recipes meet modern precision" },
              { icon: "🔥", title: "Perfect Baking", desc: "Slow-baked at optimal temperatures for golden perfection" },
              { icon: "🔍", title: "Quality Checking", desc: "Every batch inspected for taste, texture, and freshness" },
              { icon: "📦", title: "Fresh Packaging", desc: "Sealed at peak freshness to lock in flavor" },
              { icon: "❤️", title: "Delivered to You", desc: "From our kitchen to your table with care" }
            ].map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C17A3F] rounded-full text-4xl mb-4 transform hover:rotate-12 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#6B4423] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-[#8B7355]">
                    {step.desc}
                  </p>
                </div>
                <div className="flex-1 bg-[#EFE0C7] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-video flex items-center justify-center text-6xl">
                    {step.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oat Advantage Section */}
      <section id="oats" className="py-24 px-4 bg-linear-to-br from-[#E8D5B7] to-[#EFE0C7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#6B4423] mb-4">
              The Oat Advantage
            </h2>
            <p className="text-xl text-[#8B7355]">
              Nature&apos;s Superfood in Every Bite
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "❤️", title: "Heart Health Hero", desc: "Soluble fiber reduces bad cholesterol" },
              { icon: "⚡", title: "Sustained Energy", desc: "Complex carbs provide long-lasting fuel" },
              { icon: "🌱", title: "Digestive Wellness", desc: "High fiber promotes gut health" },
              { icon: "🛡️", title: "Complete Nutrition", desc: "Protein, vitamins, and minerals" },
              { icon: "⚖️", title: "Weight Management", desc: "Fiber promotes natural satiety" },
              { icon: "✨", title: "Skin & Beauty", desc: "Anti-inflammatory properties" }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#6B4423] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#8B7355]">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[#6B4423] mb-6 text-center">
              Nutritional Powerhouse
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "Fiber", value: "5g", percent: 80 },
                { label: "Protein", value: "4g", percent: 60 },
                { label: "Calories", value: "130", percent: 40 },
                { label: "Fat", value: "3g", percent: 30 }
              ].map((nutrient, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-[#6B4423]">{nutrient.label}</span>
                    <span className="text-[#C17A3F]">{nutrient.value}</span>
                  </div>
                  <div className="h-3 bg-[#EFE0C7] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#C17A3F] rounded-full transition-all duration-1000"
                      style={{ width: `${nutrient.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="shop" className="py-24 px-4 bg-[#F5EBD9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#6B4423] mb-4">
              Our Biscuit Collection
            </h2>
            <p className="text-xl text-[#8B7355]">
              Handcrafted varieties for every craving
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Classic", "Oat-Based", "Seasonal"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-[#C17A3F] text-white shadow-lg'
                    : 'bg-white text-[#6B4423] hover:bg-[#EFE0C7]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-[#EFE0C7] p-12 flex items-center justify-center">
                  <div className="text-8xl group-hover:scale-110 transition-transform">
                    <img src={product.image} alt={product.name} className='max-h-[400px]'  />
                  </div>
                  {product.tags.includes("Bestseller") && (
                    <div className="absolute top-4 right-4 bg-[#C17A3F] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Bestseller
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#6B4423] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[#8B7355] mb-4">
                    {product.tagline}
                  </p>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C17A3F] text-[#C17A3F]" />
                    ))}
                    <span className="ml-2 text-sm text-[#8B7355]">(127)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#6B4423]">
                      ${product.price}
                    </span>
                    <Link
                      href={`/product/${product.id}`}
                      className="bg-[#C17A3F] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#6B4423] transition-colors"
                    >
                      View Product
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {product.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-[#EFE0C7] text-[#8B7355] px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-24 px-4 bg-[#6B4423] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-7xl mb-6">📦</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Never Run Out of Your Favorites
          </h2>
          <p className="text-xl mb-8 text-[#E8D5B7]">
            Subscribe and save 15% on every order
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {[
              { icon: "🚚", text: "Free Shipping" },
              { icon: "🔄", text: "Cancel Anytime" },
              { icon: "📅", text: "Flexible Schedule" },
              { icon: "⭐", text: "Exclusive Flavors" }
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-4xl mb-2">{benefit.icon}</div>
                <div className="text-sm">{benefit.text}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C17A3F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#D4A574] transition-colors shadow-lg">
              Start Subscription
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#6B4423] transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3E2A1D] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Newsletter */}
          {/* <div className="text-center mb-12 pb-12 border-b border-[#6B4423]">
            <h3 className="text-2xl font-bold mb-4">Get Fresh Updates & Exclusive Offers</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-[#3E2A1D] focus:outline-none focus:ring-2 focus:ring-[#C17A3F]"
              />
              <button className="bg-[#C17A3F] px-6 py-3 rounded-full font-semibold hover:bg-[#D4A574] transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-[#B8956A] mt-2">10% off first order • Early access to new flavors</p>
          </div> */}

          {/* Footer Columns */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-3xl">🍪</span>
                <span className="ml-2 text-xl font-bold">3SK Biscuits</span>
              </div>
              <p className="text-[#B8956A] mb-4">Baked with love since 2010</p>
              <div className="flex space-x-4">
                <button className="hover:text-[#C17A3F] transition">📷</button>
                <button className="hover:text-[#C17A3F] transition">📘</button>
                <button className="hover:text-[#C17A3F] transition">📌</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-[#B8956A]">
                <li><a href="#" className="hover:text-white transition">All Products</a></li>
                <li><a href="#" className="hover:text-white transition">Bestsellers</a></li>
                <li><a href="#" className="hover:text-white transition">Oat Collection</a></li>
                <li><a href="#" className="hover:text-white transition">Gift Boxes</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-[#B8956A]">
                <li><a href="#" className="hover:text-white transition">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Wholesale</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-[#B8956A]">
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#6B4423] text-center text-[#B8956A]">
            <p>© {new Date().getFullYear()} 3SK Cookies — All rights reserved.</p>
          </div>
        </div>

        {/* Mascot Waving */}
        <div className="fixed bottom-8 right-8 text-6xl animate-wave hidden lg:block">
          👨‍🍳
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
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

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BiscuitWebsite;  

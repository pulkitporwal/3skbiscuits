"use client"
import React, { useState } from 'react';
import { MessageCircle, Heart, Star, ChevronRight, Check, Minus, Plus, Instagram, Facebook } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const ProductPage = () => {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0);
  const [productType, setProductType] = useState(id); // Change this to test different products

  // Product data based on the word documents
  const productsData = {
    oats: {
      name: "Oat cookies",
      price: "₹199/Box of 200 GMs",
      tagline: "Nutritious snack with high fiber content",
      image: "/products/oats/1.jpeg",
      images: ["/products/oats/1.jpeg"],
      shortDesc: "Oat cookies offer benefits like improved heart health, better blood sugar control, and enhanced digestion due to their high fiber content.",

      benefits: [
        {
          title: "Rich in Fiber",
          desc: "Oats contain soluble fiber, particularly beta-glucan, which promotes digestive health and can help relieve constipation."
        },
        {
          title: "Nutrient-dense",
          desc: "They are a good source of complex carbohydrates, protein, and healthy fats, along with vitamins and minerals like iron, magnesium, zinc, calcium, and potassium."
        },
        {
          title: "Supports Gut Health",
          desc: "The fiber in oats feeds beneficial gut bacteria, contributing to a healthier microbiome."
        }
      ],

      healthBenefits: [
        {
          icon: "❤️",
          title: "Heart Health",
          desc: "The soluble fiber in oats can help lower cholesterol levels, while the antioxidants may help lower blood pressure, supporting overall heart health."
        },
        {
          icon: "🩺",
          title: "Blood Sugar Control",
          desc: "Oats have a lower glycemic index than many other grains, and their fiber content helps regulate blood sugar levels, making them a good option for those managing diabetes."
        },
        {
          icon: "⚖️",
          title: "Weight Management",
          desc: "Their high fiber and protein content can help you feel full for longer, which aids in managing weight by reducing overall calorie intake."
        }
      ],

      keyPoints: [
        "Rich in soluble fiber (beta-glucan)",
        "Complex carbohydrates and protein",
        "Vitamins and minerals: iron, magnesium, zinc, calcium, potassium",
        "Lower glycemic index",
        "Powerful antioxidants",
        "Supports healthy microbiome"
      ]
    },

    coconut: {
      name: "Coconut cookies",
      price: "₹199/Box of 200 GMs",
      tagline: "Healthy fats and fiber for sustained energy",
      image: "/products/coconut/1.jpeg",
      images: ["/products/coconut/1.jpeg", "/products/coconut/2.jpeg"],
      shortDesc: "Coconut cookies offer benefits like improved digestion and sustained energy due to their fiber and healthy fat content.",

      benefits: [
        {
          title: "Improved Digestion",
          desc: "Coconuts are a rich source of dietary fiber, which aids in promoting a healthy gut and regular bowel movements, and can help prevent issues like constipation."
        },
        {
          title: "Sustained Energy",
          desc: "The medium-chain triglycerides (MCTs) in coconut oil provide a steady source of energy, making the cookies a good snack for active individuals or as a pre- or post-workout boost."
        },
        {
          title: "Enhanced Immunity",
          desc: "Coconuts contain lipids, such as lauric acid, which possess antimicrobial properties that can help support the immune system."
        }
      ],

      healthBenefits: [
        {
          icon: "🦴",
          title: "Stronger Bones and Teeth",
          desc: "The presence of minerals like manganese, copper, and iron helps in maintaining strong bones and teeth by improving the metabolism of calcium and proteins."
        },
        {
          icon: "✨",
          title: "Antioxidant Properties",
          desc: "Coconuts are rich in phenolic compounds (antioxidants) that help reduce free radicals in the body, potentially lowering the risk of certain cancers and heart disease."
        },
        {
          icon: "🌿",
          title: "Skin Health",
          desc: "The healthy fats in the cookies can help keep skin hydrated, while the antimicrobial and antifungal properties may prevent certain skin issues."
        }
      ],

      keyPoints: [
        "Rich in dietary fiber",
        "Medium-chain triglycerides (MCTs)",
        "Lauric acid for immunity",
        "Blood sugar regulation support",
        "Weight management support",
        "Minerals: manganese, copper, iron"
      ]
    },

    namkeen: {
      name: "Namkeen Cookies",
      price: "₹199/Box of 200 GMs",
      tagline: "Traditional healthy savory snack with digestive benefits",
      image: "/products/namkeen/1.jpeg",
      images: ["/products/namkeen/1.jpeg"],
      shortDesc: "Namkeen cookies can offer benefits such as improved digestion, sustained energy, and a good source of fiber, especially when made with whole grains and beneficial spices.",

      benefits: [
        {
          title: "Improved Digestion",
          desc: "Ingredients like cumin (jeera) and ajwain are known to aid digestion, while the high fiber content in whole wheat flour can also promote gut health."
        },
        {
          title: "Good for the Stomach",
          desc: "Some namkeen cookies are described as being light on the stomach and can help with stomach problems, especially those made with ingredients like sabudana (sago)."
        },
        {
          title: "Natural Ingredients",
          desc: "Made without maida (refined flour), trans fats, cholesterol, and artificial ingredients, focusing on pure, natural components."
        }
      ],

      healthBenefits: [
        {
          icon: "⚡",
          title: "Sustained Energy",
          desc: "Cookies made with whole grains and natural sweeteners like jaggery can provide a steady release of energy throughout the day without causing blood sugar spikes."
        },
        {
          icon: "🌾",
          title: "High in Fiber",
          desc: "When made with whole wheat or oats, namkeen cookies can be a good source of dietary fiber, which is important for a healthy gut and blood sugar regulation."
        },
        {
          icon: "❤️",
          title: "Heart Health",
          desc: "Whole grains and healthy fats can support cardiovascular health by helping to reduce cholesterol levels and support a healthy heart rhythm."
        }
      ],

      keyPoints: [
        "No refined flour (maida)",
        "No trans fats or cholesterol",
        "Beneficial spices: cumin, ajwain",
        "Whole wheat flour",
        "Naturally sweetened with jaggery",
        "Diabetic-friendly options"
      ]
    },

    suji: {
      name: "Suji cookies",
      price: "₹199/Box of 200 GMs",
      tagline: "Semolina-based nutrition for sustained energy",
      image: "/products/suji/1.jpeg",
      images: ["/products/suji/1.jpeg"],
      shortDesc: "Suji cookies offer health benefits primarily because suji itself is rich in nutrients, providing sustained energy, supporting digestive and heart health.",

      benefits: [
        {
          title: "Sustained Energy",
          desc: "Suji is a good source of complex carbohydrates that are digested slowly, providing a steady release of energy and helping you feel full for longer periods."
        },
        {
          title: "Digestive Health",
          desc: "Suji contains dietary fiber, which promotes better digestion, helps prevent constipation, and supports a healthy gut microbiome."
        },
        {
          title: "Rich in Nutrients",
          desc: "Suji is a source of essential vitamins and minerals, including B vitamins (thiamine and folate), iron, magnesium, zinc, and phosphorus."
        }
      ],

      healthBenefits: [
        {
          icon: "⚖️",
          title: "Weight Management",
          desc: "Due to its protein and fiber content, suji increases satiety and reduces hunger pangs, helping to curb overeating and manage calorie intake effectively."
        },
        {
          icon: "❤️",
          title: "Heart Health",
          desc: "Suji is low in fat and has no cholesterol. It contains nutrients like magnesium and potassium, which help regulate blood pressure."
        },
        {
          icon: "🧠",
          title: "Nervous System Support",
          desc: "The phosphorus, zinc, and magnesium in semolina are essential for the maintenance of a healthy nervous system."
        }
      ],

      keyPoints: [
        "Complex carbohydrates",
        "Dietary fiber",
        "B vitamins and minerals",
        "Low in fat, no cholesterol",
        "Magnesium and potassium",
        "Antioxidants: selenium and ferulic acid"
      ]
    }
  };

  const product = productsData[productType];

  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in ${product.name} (${product.price}). Can you provide more details and availability?`;
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
        <img src="/om.png" className="w-10 h-10 ml-4" />
      </div>

      {/* Desktop Menu */}
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
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#C17A3F] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </div>
  </div>

  {/* ⭐ Mobile Dropdown BELOW the header ⭐ */}
  {mobileMenuOpen && (
    <div className="md:hidden bg-[#F5EBD9] border-t border-[#D4A574] shadow-sm">
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
</header>


      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-[#8B7355]">
          <a href="#" className="hover:text-[#C17A3F]">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-[#C17A3F]">Products</a>
          <span>/</span>
          <span className="text-[#6B4423] font-semibold">{product.name}</span>
        </div>
      </div>

      {/* Product Selector */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-3">
          {Object.keys(productsData).map((key) => (
            <button
              key={key}
              onClick={() => setProductType(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${productType === key
                ? 'bg-[#C17A3F] text-white shadow-lg'
                : 'bg-white text-[#6B4423] border-2 border-[#D4A574] hover:border-[#C17A3F]'
                }`}
            >
              {productsData[key].name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="bg-[#EFE0C7] rounded-3xl p-12 mb-6 flex items-center justify-center aspect-square shadow-lg">
              <div className="text-9xl">
                <img src={product.images[selectedImage]} />
              </div>
            </div>

            <div className="flex gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl transition-all ${selectedImage === idx
                    ? 'bg-[#C17A3F] scale-110 shadow-lg'
                    : 'bg-[#EFE0C7] hover:bg-[#D4A574]'
                    }`}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#6B4423] mb-2">
              {product.name}
            </h1>

            <p className="text-xl text-[#8B7355] mb-4">
              {product.tagline}
            </p>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-[#C17A3F]">
                  {product.price}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-[#8B7355] mb-8 leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Key Points */}
            <div className="bg-white rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-[#6B4423] mb-4">Why Choose This</h3>
              <div className="grid grid-cols-1 gap-3">
                {product.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#C17A3F] shrink-0 mt-1" />
                    <span className="text-[#8B7355]">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mb-8">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#20BA58] transform hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Enquire on WhatsApp
              </button>
            </div>

            {/* Quality Badge */}
            <div className="bg-[#EFE0C7] rounded-2xl p-6 text-center">
              <p className="text-sm font-semibold text-[#6B4423] mb-2">
                ✨ Premium Quality Guaranteed
              </p>
              <p className="text-xs text-[#8B7355]">
                Uses premium quality ingredients & maintains hygiene standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional & Health Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-3xl my-12 shadow-lg">
        <h2 className="text-4xl font-bold text-[#6B4423] mb-12 text-center">
          Nutritional & Digestive Benefits
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {product.benefits.map((benefit, idx) => (
            <div key={idx} className="border-2 border-[#EFE0C7] rounded-2xl p-6 hover:border-[#C17A3F] transition-all">
              <h3 className="text-xl font-bold text-[#6B4423] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#8B7355] leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Health Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-[#6B4423] text-center mb-12">
          Health Benefits
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {product.healthBenefits.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-[#6B4423] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#8B7355] leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#6B4423] text-white rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to Quality</h2>
          <div className="space-y-4 text-lg">
            <p>✨ <span className="font-semibold">3SK COOKIES USES PREMIUM QUALITY INGREDIENTS & MAINTAINS HYGIENE</span></p>
            <p>🎯 <span className="font-semibold">OUR QUALITY SPEAKS FOR ITSELF</span></p>
            <p>💪 <span className="font-semibold">BUILT ON YOUR BELIEF, STRENGTHENED BY OUR COMMITMENTS</span></p>
            <p className="text-[#E8D5B7] mt-6">THANKS FOR CHOOSING 3SK COOKIES</p>
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-[#B8956A]">
            <p>© 2024 3SK Cookies. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Handcrafted with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
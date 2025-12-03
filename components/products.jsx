'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import PRODUCTS from '../data/products'; 
import useGsap from '@/lib/gsap';

export default function Products() {
  const root = useRef(null);

  useGsap((gsap) => {
    const cards = root.current?.querySelectorAll('.product-card');
    if (!cards) return;

    gsap.from(cards, {
      scale: 0.98,
      opacity: 0,
      y: 20,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power2.out'
    });

    // hover effect using event delegation
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.card-img'), { y: -8, duration: 0.35, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.card-img'), { y: 0, duration: 0.35, ease: 'power2.out' });
      });
    });
  });

  return (
    <section ref={root} className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-chocolate">Our Flavours</h2>
          <div className="flex gap-3">
            <button className="px-3 py-1 rounded-full bg-cookies-100">All</button>
            <button className="px-3 py-1 rounded-full">Oat</button>
            <button className="px-3 py-1 rounded-full">Chocolate</button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.map(p => (
            <article key={p.id} className="product-card bg-white rounded-2xl p-4 shadow hover:shadow-lg transition">
              <div className="card-img w-full h-44 relative">
                <Image src={p.image} alt={p.name} fill style={{ objectFit: 'contain' }} />
              </div>
              <h3 className="mt-4 font-semibold text-chocolate">{p.name}</h3>
              <p className="mt-2 text-sm text-cookies-700">{p.short}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold">₹{p.price}</span>
                <a className="text-sm px-3 py-1 rounded-md bg-cookies-500 text-white">View</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import PRODUCTS from '../data/products';
import useGsap from '../lib/gsap';

export default function ProductDetail({ id }) {
  const prod = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const root = useRef(null);

  useGsap((gsap) => {
    gsap.from(root.current?.querySelectorAll('.fade-in'), {
      opacity: 0,
      y: 18,
      stagger: 0.08,
      duration: 0.6,
      ease: 'power2.out'
    });
  });

  return (
    <section ref={root} className="py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <div className="relative w-full h-80">
          <Image src={prod.image} alt={prod.name} fill style={{ objectFit: 'contain' }} />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-chocolate fade-in">{prod.name}</h1>
          <p className="mt-3 text-cookies-700 fade-in">{prod.details?.summary}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-cookies-50 p-4 rounded-lg fade-in">
              <h4 className="font-semibold">Key benefits</h4>
              <ul className="mt-2 text-sm">
                {prod.details?.benefits.map((b) => <li key={b}>• {b}</li>)}
              </ul>
            </div>
            <div className="bg-cookies-50 p-4 rounded-lg fade-in">
              <h4 className="font-semibold">Nutrition highlights</h4>
              <ul className="mt-2 text-sm">
                {prod.details?.nutritionHighlights.map((n) => <li key={n}>• {n}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 fade-in">
            <span className="text-2xl font-bold">₹{prod.price}</span>
            <button className="px-5 py-2 bg-cookies-500 text-white rounded-lg">Add to cart</button>
            <button className="px-4 py-2 border rounded-lg">Subscribe & Save</button>
          </div>

          <div className="mt-6 text-xs text-cookies-700 fade-in">
            <strong>Note:</strong> Oats may support heart health, blood sugar control and digestion.
          </div>
        </div>
      </div>
    </section>
  );
}

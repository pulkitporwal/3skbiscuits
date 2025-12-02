'use client';
import useGsap from '@/lib/gsap';
import React, { useRef } from 'react';


const steps = [
  { title: 'Mix & Whisk', desc: 'We combine premium oats, butter & natural sweetener', icon: '🥣' },
  { title: 'Bake to Perfection', desc: 'Small-batch ovens for consistent texture', icon: '🔥' },
  { title: 'Pack with Care', desc: 'Eco-friendly packaging with freshness seal', icon: '📦' },
  { title: 'Delivered Fresh', desc: 'Fast delivery with tracked shipments', icon: '🚚' },
];

export default function Process() {
  const root = useRef(null);

  useGsap((gsap, ScrollTrigger) => {
    const cards = root.current?.querySelectorAll('.step-card');
    if (!cards) return;

    gsap.from(cards, {
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: root.current,
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  return (
    <section ref={root} className="py-20 bg-biscuit-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-chocolate">How we craft our biscuits</h2>
        <p className="mt-2 text-biscuit-700 max-w-2xl mx-auto">Simple process, real ingredients, full of love.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="step-card bg-white p-6 rounded-2xl shadow-md">
              <div className="text-4xl">{s.icon}</div>
              <h3 className="mt-4 font-semibold text-lg text-chocolate">{s.title}</h3>
              <p className="mt-2 text-biscuit-700 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

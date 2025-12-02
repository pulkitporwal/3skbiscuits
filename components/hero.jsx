'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import useGsap from '@/lib/gsap';

export default function Hero({ title = "Freshly Baked Happiness, One Biscuit at a Time!" }) {
  const rootRef = useRef(null);

  useGsap((gsap, ScrollTrigger) => {
    const root = rootRef.current;
    if (!root) return;

    const mascot = root.querySelector('.mascot');
    const cta = root.querySelector('.cta');

    const tl = gsap.timeline();
    tl.from(root.querySelectorAll('.headline, .sub, .cta'), {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power2.out'
    });

    // mascot subtle bounce and floating cookies
    tl.fromTo(mascot, { y: -6 }, { y: 6, repeat: -1, yoyo: true, duration: 1.6, ease: 'sine.inOut' }, 0.2);

    // floating cookie particles
    gsap.utils.toArray('.floating-cookie').forEach((el, i) => {
      gsap.fromTo(el, { y: -10, opacity: 0.8 }, {
        y: 20 + (i % 3) * 5,
        x: (i % 2) ? -8 : 8,
        opacity: 1,
        duration: 4 + i,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.2
      });
    });

  });

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-cream py-24 md:py-36">
      <div className="container mx-auto px-6 md:flex md:items-center md:gap-8">
        <div className="md:w-1/2">
          <h1 className="headline text-4xl md:text-6xl font-extrabold text-chocolate leading-tight">
            {title}
          </h1>
          <p className="sub mt-4 text-lg text-biscuit-700 max-w-xl">
            Small-batch oat biscuits, baked with premium ingredients — taste the crunchy goodness.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a className="cta inline-block px-6 py-3 rounded-lg font-semibold bg-biscuit-500 text-white shadow-lg hover:opacity-95">Shop Flavours</a>
            <button className="text-biscuit-700 underline">Learn more</button>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center items-center">
          {/* Mascot SVG or Image */}
          <div className="mascot w-60 h-60 relative">
            <Image src="/assets/mascot-cookie.png" alt="cookie mascot" fill style={{ objectFit: 'contain' }} />
          </div>

          {/* floating cookie decor (positioned absolutely) */}
          <div className="pointer-events-none">
            <div className="floating-cookie absolute -top-6 right-10 w-12 h-12">
              <Image src="/assets/cookie1.png" alt="" width={48} height={48} />
            </div>
            <div className="floating-cookie absolute top-16 -right-6 w-10 h-10">
              <Image src="/assets/cookie2.png" alt="" width={40} height={40} />
            </div>
            <div className="floating-cookie absolute bottom-6 right-20 w-14 h-14">
              <Image src="/assets/cookie3.png" alt="" width={56} height={56} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

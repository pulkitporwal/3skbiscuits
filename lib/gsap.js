'use client';
import { useEffect } from 'react';

export default function useGsap(initFn) {
  useEffect(() => {
    let ctx = null;
    let gsapModule = null;
    let ScrollTrigger = null;
    let mounted = true;

    (async () => {
      const gsap = await import('gsap/dist/gsap');
      const st = await import('gsap/dist/ScrollTrigger');

      gsapModule = gsap.gsap || gsap.default || gsap;
      ScrollTrigger = st.ScrollTrigger || st.default || st;

      gsapModule.registerPlugin(ScrollTrigger);

      try {
        ctx = gsapModule.context(() => {
          if (mounted && typeof initFn === 'function') {
            initFn(gsapModule, ScrollTrigger);
          }
        });
      } catch (e) {
        if (mounted && typeof initFn === 'function') {
          initFn(gsapModule, ScrollTrigger);
        }
      }
    })();

    return () => {
      mounted = false;

      if (ctx && ctx.revert) {
        ctx.revert();
      }

      try {
        if (ScrollTrigger && ScrollTrigger.getAll) {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        }
      } catch (e) {}
    };
  }, [initFn]);
}

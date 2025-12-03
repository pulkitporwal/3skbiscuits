'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-cookies-700 text-cream py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold text-lg">3SK Cookies</h4>
          <p className="mt-2 text-sm">Small-batch oat cookies with premium ingredients. Built on quality and hygiene.</p>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="text-sm mt-2">hello@3skcookies.example</p>
          <p className="text-sm">+91 99999 99999</p>
        </div>
        <div>
          <h5 className="font-semibold">Newsletter</h5>
          <p className="text-sm mt-2">Get offers & new flavours.</p>
          <form className="mt-3 flex gap-2">
            <input className="rounded-md px-3 py-2 text-cookies-700" placeholder="Your email" />
            <button className="bg-chocolate px-4 py-2 rounded-md text-cream">Join</button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-cookies-500 pt-6 text-center text-sm">
        © {new Date().getFullYear()} 3SK Cookies — All rights reserved.
      </div>
    </footer>
  );
}

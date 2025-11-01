import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/data";

 

export default function Footer() {
 
    return (
    <footer className="bg-slate-900 text-slate-200 mt-20 text-[15px] leading-relaxed">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 border-b border-slate-700">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">Safi Seaside Tours</h2>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            Experience the charm of Nova Scotia with private tours from Halifax. 
            Scenic drives, local stories, and unforgettable coastal views — guided by Asif Safi.
          </p>
          <div className="mt-4 text-sm space-y-1">
            <p>📍 Halifax, Nova Scotia</p>
            <p>📞 +1 (902) 402-7263</p>
            <p>✉️ info@safiseasidetours.ca</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social   */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect with Us</h3>
          <p className="text-sm text-slate-400 mb-4">
            Follow our seaside adventures and updates on social media.
          </p>

          <div className="flex gap-4 text-xl">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              <i className="fab fa-instagram"></i> {/* optional if using fontawesome */}
              🌅
            </a>
            <a
              href="https://wa.me/19024027263"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              💬
            </a>
            <a
              href="mailto:info@safiseasidetours.ca"
              className="hover:text-amber-400 transition-colors"
            >
              📧
            </a>
          </div>

          <div className="mt-6">
            <NavLink
              to="/contact"
              className="inline-block px-4 py-2 bg-amber-500 text-white rounded-md shadow hover:bg-amber-600 transition"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Safi Seaside Tours. All rights reserved.
      </div>
    </footer>
  );
}

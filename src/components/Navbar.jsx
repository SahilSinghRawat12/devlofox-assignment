import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from '../data/data';

 
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const activeClass =
    "text-amber-600 font-semibold border-b-2 border-amber-200";

  return (

    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-amber-400 flex items-center justify-center shadow">
              <span className="text-white font-bold">SS</span>
            </div>
            
            <div>
             <NavLink to="/" className="text-xl font-extrabold text-slate-900">
                         Safi Seaside Tours
            </NavLink>
            <div className="text-sm text-slate-500">Private Tours from Halifax</div>

            
            </div>
          </div>

          {/* nav */}
         <nav className="hidden md:flex items-center gap-8 text-base font-medium">
            {navLinks.map((l) => (
              <NavLink
                key={l.id}
                to={l.path}
                className={({ isActive }) =>
                  `py-2 ${isActive ? activeClass : "text-slate-700 hover:text-amber-600"}`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <a
              href="#book"
              className="ml-4 px-4 py-2 rounded-md bg-amber-500 text-white text-sm shadow"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="p-2 rounded-md hover:bg-slate-100"
            >
              <svg
                className="w-6 h-6 text-slate-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((l) => (
              <NavLink
                key={l.id}
                to={l.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-2 rounded-md ${isActive ? activeClass : "text-slate-700 hover:text-amber-600"}`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="block mt-2 px-3 py-2 rounded-md bg-amber-500 text-white text-center"
            >
              Book Now
            </a>

            <div className="mt-3 text-sm text-slate-500">
              <div>Halifax, Nova Scotia</div>
              <div className="mt-1">+1 (902) 402-7263</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

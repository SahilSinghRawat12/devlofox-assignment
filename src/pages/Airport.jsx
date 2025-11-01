import React from "react";
import { NavLink } from "react-router-dom";
import { transferData } from "../data/data";

export default function AirportTransfers() {
  const { title, desc } = transferData;

  return (
    <div className="bg-sky-50 min-h-screen text-slate-800">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-sky-100 via-white to-amber-50 py-16 px-6 md:px-12 text-center border-b">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 uppercase">
          {title}
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Private airport pick-up and drop-off services with comfortable SUVs
          and professional drivers.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <div className="relative">
          <img
            src="https://www.ruby-services.com/en/images/5-good-reasons-to-use-a-limo-service-for-your-airport-transfers_pd40106w2440h1500rcrop_559.jpg"
            alt="Airport Transfer SUV"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
        </div>

        {/* TEXT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
          <p className="text-slate-600 leading-relaxed text-base">
            We provide reliable, professional, and private airport transfer
            services designed for comfort and peace of mind. Our modern SUVs and
            trained chauffeurs ensure a smooth experience from doorstep to
            terminal. Whether you’re arriving or departing, travel confidently
            knowing that we value punctuality and safety above all.
          </p>

          {/* FEATURES */}
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Private, comfortable SUVs</li>
            <li>Professional, experienced chauffeurs</li>
            <li>On-time pick-up and drop-off</li>
            <li>Luggage assistance included</li>
            <li>24/7 availability for early or late flights</li>
            <li>Fixed, transparent pricing with no hidden costs</li>
          </ul>

          {/* CTA BUTTON */}
          <div className="pt-4">
            <NavLink
              to="/contact"
              className="bg-amber-500 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-amber-600 transition-all shadow"
            >
              Book Airport Transfer
            </NavLink>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why Choose Safi Seaside Transfers?
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            From solo travelers to families and corporate groups, our airport
            transfer services are trusted for professionalism and comfort.
            Whether it’s a business trip or a relaxing vacation, our fleet of
            SUVs ensures you travel in style — safely, on time, and stress-free.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-sky-50 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-semibold text-amber-600 mb-2">
                Premium Comfort
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Spacious interiors, clean vehicles, and smooth rides — every
                transfer feels like a VIP experience.
              </p>
            </div>

            <div className="p-6 bg-sky-50 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-semibold text-amber-600 mb-2">
                Reliable & On Time
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Punctual pick-ups, real-time flight monitoring, and 24/7
                availability ensure you’re always on schedule.
              </p>
            </div>

            <div className="p-6 bg-sky-50 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-semibold text-amber-600 mb-2">
                Local Expertise
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our local chauffeurs know every route, traffic shortcut, and
                hidden gem across Nova Scotia — ensuring efficient travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-amber-400 to-sky-500 py-14 text-center text-white">
        <h2 className="text-3xl font-bold">Reliable Transfers, Anytime</h2>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Whether it’s an early morning departure or a late-night arrival, our
          private transfers ensure a smooth and timely journey. Travel in
          comfort — leave the rest to us.
        </p>
        <NavLink
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-white text-amber-600 font-semibold rounded-md shadow hover:bg-amber-100 transition"
        >
          Reserve Now
        </NavLink>
      </section>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import { toursData } from "../data/data";
 

export default function Home() {
  return (
    <div className="bg-sky-50 text-slate-800">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-sky-100 via-white to-amber-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Discover <span className="text-amber-600">Nova Scotia’s</span> Coastal Beauty
            </h1>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Guided by <strong>Asif Safi</strong> — a multilingual guide with 15+ years of global
              tourism experience — enjoy private and small-group tours from Halifax to the
              most scenic destinations in Nova Scotia.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/tours"
                className="px-6 py-3 rounded-md bg-amber-500 text-white font-semibold shadow hover:bg-amber-600 transition"
              >
                Explore Tours
              </NavLink>
              <NavLink
                to="/contact"
                className="px-6 py-3 rounded-md border border-amber-400 text-amber-600 font-semibold hover:bg-amber-50 transition"
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=1400&q=60"
              alt="Nova Scotia coastline"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900">
          Why Choose Safi Seaside Tours
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-3">🚐</div>
            <h3 className="text-xl font-semibold mb-2">Private & Comfortable</h3>
            <p className="text-slate-600 text-sm">
              Enjoy private tours in clean, air-conditioned SUVs with door-to-door pickup.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-3">🗺️</div>
            <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
            <p className="text-slate-600 text-sm">
              Discover hidden gems, stories, and experiences shared by a local professional guide.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-3">🦞</div>
            <h3 className="text-xl font-semibold mb-2">Authentic Experience</h3>
            <p className="text-slate-600 text-sm">
              Complimentary Nova Scotia Lobster Roll, scenic stops, and time for photos.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED TOURS PREVIEW */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Featured Tours
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toursData.slice(0, 4).map((tour) => (
              <div
                key={tour.id}
                className="bg-sky-50 rounded-2xl shadow hover:shadow-lg overflow-hidden transition"
              >
                <img
                  src={tour.img}
                  alt={tour.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {tour.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{tour.duration}</p>
                  <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                    {tour.desc}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-amber-600 font-semibold">
                      {tour.price}
                    </span>
                    <NavLink
                      to="/contact"
                      className="text-sm text-amber-600 hover:underline"
                    >
                      Book Now →
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-amber-400 to-sky-500 py-14 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready for your unforgettable Nova Scotia journey?
        </h2>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Let Safi Seaside Tours make your coastal adventure seamless, scenic, and memorable.
        </p>
        <NavLink
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-white text-amber-600 font-semibold rounded-md shadow hover:bg-amber-100 transition"
        >
          Book Your Tour
        </NavLink>
      </section>
    </div>
  );
}

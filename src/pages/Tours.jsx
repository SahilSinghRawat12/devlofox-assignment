import React from "react";
import { NavLink } from "react-router-dom";
import { toursData } from "../data/data";

export default function Tours() {
  return (
    <div className="bg-sky-50 min-h-screen text-slate-800">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-sky-100 via-white to-amber-50 py-16 px-6 md:px-12 text-center border-b">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Our <span className="text-amber-600">Tours & Experiences</span>
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Explore Nova Scotia with comfort and confidence. Choose from our curated private tours — 
          each designed to offer scenic routes, local insights, and unforgettable memories.
        </p>
      </section>

      {/* TOURS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {toursData.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={tour.img}
                  alt={tour.title}
                  className="w-full h-60 object-cover"
                />
                <span className="absolute top-4 right-4 bg-amber-500 text-white text-sm font-semibold px-3 py-1 rounded-md shadow">
                  {tour.price}
                </span>
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-slate-900">{tour.title}</h2>
                <p className="text-sm text-slate-500 mt-1">
                  Duration: {tour.duration}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-4 text-slate-600 text-sm leading-relaxed flex-grow">
                  {tour.id === "peggys" && (
                    <>
                      Visit one of Canada's most iconic landmarks — the <b>Peggy's Cove Lighthouse</b>.
                      Experience the rugged granite coastline, local fishing village charm, and 
                      incredible photo opportunities. Includes complimentary Nova Scotia Lobster Roll 
                      and round-trip transportation.
                    </>
                  )}

                  {tour.id === "lunenburg" && (
                    <>
                      Explore <b>Lunenburg</b>, a UNESCO World Heritage Site famous for its colorful 
                      waterfront and maritime heritage. Visit shipyards, historic streets, and 
                      enjoy fresh local seafood. Includes comfortable transport and guided narration.
                    </>
                  )}

                  {tour.id === "combo" && (
                    <>
                      Can't decide between Peggy's Cove and Lunenburg? Enjoy both in one day with our 
                      <b> Combo Tour</b>. Start with the coastal beauty of Peggy's Cove, then head to 
                      Lunenburg for heritage exploration, lunch, and scenic walks. A full-day experience 
                      for travelers who want the best of both worlds.
                    </>
                  )}

                  {tour.id === "custom" && (
                    <>
                      Design your own adventure — choose from cultural landmarks, hidden coastal gems, 
                      photography trips, or relaxing scenic drives. Our <b>Custom Tours</b> let you 
                      personalize the duration, stops, and pace to match your interests and schedule.
                    </>
                  )}
                </p>

                {/* PRICE + BUTTON FOOTER */}
                <div className="mt-6 flex justify-between items-center border-t border-slate-200 pt-4">
                  <span className="text-lg font-bold text-amber-700">
                    {tour.price}
                  </span>
                  <NavLink
                    to="/contact"
                    className="bg-amber-500 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-amber-600 transition-all"
                  >
                    Book Now
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOM TOUR CTA */}
      <section className="bg-gradient-to-r from-amber-400 to-sky-500 py-14 text-center text-white">
        <h2 className="text-3xl font-bold">Need a Tailored Experience?</h2>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Whether you're a solo traveler, couple, or group, we can design a tour that fits your
          preferences. Experience Nova Scotia your way — comfortably and privately.
        </p>
        <NavLink
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-white text-amber-600 font-semibold rounded-md shadow hover:bg-amber-100 transition"
        >
          Request a Custom Tour
        </NavLink>
      </section>
    </div>
  );
}

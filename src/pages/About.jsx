 import React from "react";
 
export default function About() {
  return (
    <div className="bg-white text-slate-800">
      {/* HEADER / HERO */}
      <section className="bg-gradient-to-r from-sky-100 via-white to-amber-50 py-16 px-6 md:px-12 text-center border-b">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          About <span className="text-amber-600">Safi Seaside Tours</span>
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Your trusted partner for private and small-group travel experiences in Nova Scotia.
        </p>
      </section>

      {/* COMPANY STORY */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Who We Are
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            <strong>Safi Seaside Tours</strong> is a Halifax-based private tour operator dedicated to
            showcasing the natural beauty, heritage, and coastal charm of Nova Scotia.  
            Founded and led by <strong>Mr. Asif Safi</strong>, the company brings over 15 years of
            global tourism experience, ensuring each journey is comfortable, insightful, and unforgettable.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We focus on delivering personalized tours that reflect local culture and
            hospitality. Whether it’s the iconic Peggy’s Cove, the historic town of Lunenburg,
            or a customized travel route, we ensure every guest enjoys a safe and meaningful experience.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=60"
            alt="Nova Scotia Coastline"
            className="w-full h-80 object-cover"
          />
        </div>
      </section>

      {/* MISSION AND VALUES */}
      <section className="bg-sky-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to provide travelers with premium, locally guided tours that combine
              comfort, safety, and authentic cultural insights. We aim to promote sustainable tourism
              and contribute positively to the local communities of Nova Scotia.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <ul className="space-y-3 text-slate-600">
              <li>✅ Customer satisfaction through exceptional service</li>
              <li>✅ Honesty, integrity, and professionalism</li>
              <li>✅ Promoting local culture and businesses</li>
              <li>✅ Commitment to safety and comfort</li>
              <li>✅ Sustainable and responsible tourism</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-1">
          <img
            src="https://i.pinimg.com/736x/1d/ec/e2/1dece2c8357bdd7cee3b15036344faf5.jpg"
            alt="Asif Safi, Founder"
            className="rounded-2xl shadow-md object-cover h-80 w-full"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Message from the Founder</h2>
          <p className="text-slate-600 leading-relaxed">
            “At Safi Seaside Tours, our goal is simple — to create memorable experiences that
            connect people with the natural and cultural beauty of Nova Scotia.  
            We take pride in offering personalized services, professional guidance, and the
            warm hospitality that every traveler deserves.”
          </p>
          <p className="mt-4 text-slate-500 font-medium">— Asif Safi, Founder & Tour Guide</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-400 to-sky-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold">
          Experience Nova Scotia the Right Way
        </h2>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Join us for a comfortable, scenic, and personalized journey across Canada’s most
          breathtaking coastal routes.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-white text-amber-600 font-semibold rounded-md shadow hover:bg-amber-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

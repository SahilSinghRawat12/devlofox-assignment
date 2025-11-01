import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Safi Seaside Tours! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-sky-50 min-h-screen text-slate-800">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-sky-100 via-white to-amber-50 py-16 px-6 md:px-12 text-center border-b">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Contact <span className="text-amber-600">Safi Seaside Tours</span>
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Have questions or ready to book? Reach out to us — we’d love to help plan your perfect journey.
        </p>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-start">
        {/* CONTACT INFO */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
          <p className="text-slate-600 leading-relaxed text-base">
            Whether you’re booking a private tour, arranging airport transfers, or simply have questions about our services, our team is always here to assist you.
          </p>

          <div className="space-y-4 text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">📍 Office Address:</span><br />
              Safi Seaside Tours, Halifax, Nova Scotia, Canada
            </p>
            <p>
              <span className="font-semibold text-slate-900">📞 Phone:</span><br />
              +1 (902) 555-0199
            </p>
            <p>
              <span className="font-semibold text-slate-900">📧 Email:</span><br />
              info@safiseasidetours.com
            </p>
          </div>

          <div className="pt-6">
            <img
              src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80"
              alt="Contact Office"
              className="rounded-2xl shadow-md w-full object-cover h-64"
            />
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-slate-100">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-md font-medium hover:bg-amber-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="bg-gradient-to-r from-amber-400 to-sky-500 py-14 text-center text-white">
        <h2 className="text-3xl font-bold">We’d Love to Hear From You!</h2>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Get in touch today to start planning your unforgettable Nova Scotia experience with Safi Seaside Tours.
        </p>
      </section>
    </div>
  );
}

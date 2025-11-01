import React, { useState } from "react";
import { faqData } from "../data/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-sky-50 min-h-screen text-slate-800">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-sky-100 via-white to-amber-50 py-16 px-6 md:px-12 text-center border-b">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Frequently Asked <span className="text-amber-600">Questions</span>
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Here are answers to some of the most common questions from our guests.
        </p>
      </section>

      {/* FAQ LIST */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-20">
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <button
                className="w-full text-left p-5 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.q}
                </span>
                <span className="text-amber-500 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-400 to-sky-500 py-14 text-center text-white">
        <h2 className="text-3xl font-bold">Still Have Questions?</h2>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Our team is always happy to help — feel free to reach out for any queries or tour details.
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

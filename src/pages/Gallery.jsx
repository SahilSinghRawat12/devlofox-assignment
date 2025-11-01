import React, { useState } from "react";
import { galleryImages } from "../data/data";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImg(img);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  return (
    <div className="bg-sky-50 min-h-screen text-slate-800 relative">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-sky-100 via-white to-amber-50 py-16 px-6 md:px-12 text-center border-b">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Our <span className="text-amber-600">Gallery</span>
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Explore stunning moments from our private tours and scenic experiences across Nova Scotia.
        </p>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => handleImageClick(img)}
            >
              <img
                src={img}
                alt={`Tour Image ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE MODAL */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-amber-400"
              onClick={closeModal}
            >
              ✖
            </button>
            <img
              src={selectedImg}
              alt="Selected"
              className="w-full max-h-[85vh] object-contain rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-400 to-sky-500 py-14 text-center text-white">
        <h2 className="text-3xl font-bold">Capture Your Own Memories</h2>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Experience the beauty of Nova Scotia — book a private tour and start your adventure today.
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

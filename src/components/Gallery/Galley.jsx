<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import media from "../../data/media";
import { Helmet } from "react-helmet-async";
import Header from "/src/components/Layout/Header";
import Footer from "/src/components/Layout/Footer";
import BackTop from "../Layout/BackTop";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
=======

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import BackTop from "../Layout/BackTop";
=======
import React, { useState } from "react";
import media from "../../data/media";
>>>>>>> d0d54ba (about page, gallery and 404 redirect)
import { Helmet } from "react-helmet-async";
import Header from "/src/components/Layout/Header";
import Footer from "/src/components/Layout/Footer";
import BackTop from "../Layout/BackTop";
import { motion } from "framer-motion";
>>>>>>> 7f91838 (new layout)

const fadeUp = {
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0 }
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d0d54ba (about page, gallery and 404 redirect)
const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeMedia, setActiveMedia] = useState(null);

  const categories = ["All", ...new Set(media.map((m) => m.category))];
  const filtered = selectedCategory === "All"
    ? media
    : media.filter((m) => m.category === selectedCategory);

<<<<<<< HEAD
  return (
    <main className="text-gray-800">
      <Helmet>
        <title>Galeri | MP. PLAST - Jasa Proses Biji Plastik Termurah</title>
        <meta
          name="description"
          content="Lihat galeri MP. PLAST dalam memproses biji plastik"
        />
        <link
          rel="canonical"
          href="https://jasaprosesbijiplastik.biz.id/gallery"
=======
function Gallery() {
  const images = [
    { src: "/images/gallery1.jpg", alt: "Proses Daur Ulang Plastik" },
    { src: "/images/gallery2.jpg", alt: "Biji Plastik Berkualitas" },
    { src: "/images/gallery3.jpg", alt: "Mesin Pengolahan Plastik" },
    { src: "/images/gallery4.jpg", alt: "Produk Akhir Biji Plastik" }
  ];
=======
>>>>>>> d0d54ba (about page, gallery and 404 redirect)
  return (
    <main className="text-gray-800">
      <Helmet>
        <title>Galeri | MP. PLAST - Jasa Proses Biji Plastik Termurah</title>
        <meta
          name="description"
<<<<<<< HEAD
          content="Daftar harga layanan utama Jasa Proses Biji Plastik. Untuk penawaran khusus, silakan hubungi kami."
>>>>>>> 7f91838 (new layout)
=======
          content="Lihat galeri MP. PLAST dalam memproses biji plastik"
>>>>>>> 03e2837 (Logo and MP.PLAST Fokus)
        />
      </Helmet>

      <Header />
      <BackTop />

      <section className="min-h-screen max-w-5xl mx-auto px-4 md:px-0 mt-8 md:mt-12 space-y-12">
<<<<<<< HEAD
<<<<<<< HEAD
        <motion.header
=======
        <motion.header 
>>>>>>> 7f91838 (new layout)
=======
        <motion.header
>>>>>>> d0d54ba (about page, gallery and 404 redirect)
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
<<<<<<< HEAD
<<<<<<< HEAD
          <h1 className="text-3xl font-bold mb-2 text-blue-800">MP. PLAST</h1>
          <p className="text-gray-700 text-lg">
            Jasa Pengolahan Plastik{" "}
            <span className="font-semibold text-green-600">Termurah</span>,{" "}
            <span className="text-blue-600">Pelayanan Cepat</span>,{" "}
            <span className="text-yellow-600">Kualitas Terjamin</span>
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              ✅ Harga Termurah
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              ✅ Pelayanan Cepat
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
              ✅ Kualitas Terjamin
            </span>
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
              🕒 Buka 24 Jam
            </span>
          </div>
        </motion.header>
        <div className="p-4">
          {/* Filter Buttons */}
          <div className="mb-4 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategory === cat ? "bg-black text-white" : "bg-white"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="relative cursor-pointer group"
                onClick={() => setActiveMedia(item.id - 1)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-48 object-cover rounded shadow"
                  />
                ) : (
                  <div className="relative w-full h-48 overflow-hidden rounded shadow">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Modal */}
          {activeMedia !== null && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur"
              onClick={() => setActiveMedia(null)}
            >
              <div
                className="relative max-w-4xl w-full max-h-full bg-black rounded-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="cursor-pointer absolute top-2 right-2 text-white bg-red-600 rounded-full px-3 py-1 z-10 font-bold"
                  onClick={() => setActiveMedia(null)}
                >
                  <XMarkIcon height="16px" width="16px" />
                </button>
                {/* Prev Button */}
                {activeMedia > 0 && (
                  <button
                    onClick={() => setActiveMedia((prev) => prev - 1)}
                    className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-full z-10"
                  >
                    ‹
                  </button>
                )}

                {/* Next Button */}
                {activeMedia < filtered.length - 1 && (
                  <button
                    onClick={() => setActiveMedia((prev) => prev + 1)}
                    className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-full z-10"
                  >
                    ›
                  </button>
                )}

                {/* Viewer */}
                <div className="max-h-[80vh] flex items-center justify-center">
                  {filtered[activeMedia].type === "image" ? (
                    <img
                      src={filtered[activeMedia].src}
                      alt={filtered[activeMedia].alt}
                      className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg object-contain"
                    />
                  ) : (
                    <video
                      src={filtered[activeMedia].src}
                      className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg object-contain"
                      controls
                      autoPlay
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};
=======
          <h1 className="text-4xl font-extrabold font-playfair">Galeri Proses Kami</h1>
          <p className="text-lg text-gray-700">
            Lihat tahapan utama dalam pengolahan limbah plastik menjadi biji plastik berkualitas di fasilitas kami.
          </p>
        </motion.header>
      </section>
=======
          <h1 className="text-3xl font-bold mb-2 text-blue-800">MP. PLAST</h1>
        <p className="text-gray-700 text-lg">
          Jasa Pengolahan Plastik <span className="font-semibold text-green-600">Termurah</span>, <span className="text-blue-600">Pelayanan Cepat</span>, <span className="text-yellow-600">Kualitas Terjamin</span>
        </p>
>>>>>>> d0d54ba (about page, gallery and 404 redirect)

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">✅ Harga Termurah</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">✅ Pelayanan Cepat</span>
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">✅ Kualitas Terjamin</span>
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">🕒 Buka 24 Jam</span>
        </div>
        </motion.header>
    <div className="p-4">
      {/* Filter Buttons */}
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat ? "bg-black text-white" : "bg-white"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="relative cursor-pointer group"
            onClick={() => setActiveMedia(i)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 object-cover rounded shadow"
              />
            ) : (
              <div className="relative w-full h-48 overflow-hidden rounded shadow">
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeMedia !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActiveMedia(null)}
        >
          <div
            className="relative max-w-5xl w-full px-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            {activeMedia > 0 && (
              <button
                onClick={() => setActiveMedia((prev) => prev - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-300 z-50"
              >
                ‹
              </button>
            )}

            {/* Next Button */}
            {activeMedia < filtered.length - 1 && (
              <button
                onClick={() => setActiveMedia((prev) => prev + 1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-300 z-50"
              >
                ›
              </button>
            )}

            {/* Viewer */}
            <div className="max-h-[80vh] flex items-center justify-center">
              {filtered[activeMedia].type === "image" ? (
                <img
                  src={filtered[activeMedia].src}
                  alt={filtered[activeMedia].alt}
                  className="w-full max-h-[80vh] object-contain rounded"
                />
              ) : (
                <video
                  src={filtered[activeMedia].src}
                  className="w-full max-h-[80vh] object-contain rounded"
                  controls
                  autoPlay
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  </section>
  <Footer />
    </main>
  );
<<<<<<< HEAD
}
>>>>>>> 7f91838 (new layout)
=======
};
>>>>>>> d0d54ba (about page, gallery and 404 redirect)

export default Gallery;

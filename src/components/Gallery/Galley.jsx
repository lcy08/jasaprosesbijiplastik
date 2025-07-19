
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import BackTop from "../Layout/BackTop";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function Gallery() {
  const images = [
    { src: "/images/gallery1.jpg", alt: "Proses Daur Ulang Plastik" },
    { src: "/images/gallery2.jpg", alt: "Biji Plastik Berkualitas" },
    { src: "/images/gallery3.jpg", alt: "Mesin Pengolahan Plastik" },
    { src: "/images/gallery4.jpg", alt: "Produk Akhir Biji Plastik" }
  ];
  return (
    <main className="text-gray-800">
      <Helmet>
        <title>Galeri | Jasa Proses Biji Plastik</title>
        <meta
          name="description"
          content="Daftar harga layanan utama Jasa Proses Biji Plastik. Untuk penawaran khusus, silakan hubungi kami."
        />
      </Helmet>

      <Header />
      <BackTop />

      <section className="min-h-screen max-w-5xl mx-auto px-4 md:px-0 mt-8 md:mt-12 space-y-12">
        <motion.header 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-extrabold font-playfair">Galeri Proses Kami</h1>
          <p className="text-lg text-gray-700">
            Lihat tahapan utama dalam pengolahan limbah plastik menjadi biji plastik berkualitas di fasilitas kami.
          </p>
        </motion.header>
      </section>

      <Footer />
    </main>
  );
}

export default Gallery;

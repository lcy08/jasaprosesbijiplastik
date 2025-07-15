import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import Header from "/src/components/Layout/Header"
import Footer from "/src/components/Layout/Footer"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function Services(){
    const services = [
    {
      title: "Penggilingan & Pencucian Limbah Plastik",
      description:
        "Kami melakukan proses penghancuran limbah plastik menjadi serpihan kecil dan mencucinya agar siap diproses lebih lanjut."
    },
    {
      title: "Pelletizing / Granulasi",
      description:
        "Mengubah plastik daur ulang menjadi biji plastik (pellet) dengan ukuran seragam dan kualitas tinggi."
    },
    {
      title: "Pemisahan Jenis Plastik",
      description:
        "Memanfaatkan teknologi sortir untuk memisahkan jenis plastik (PP, PE, PET, dll.) secara efisien."
    },
    {
      title: "Custom Order",
      description:
        "Layanan pengolahan plastik sesuai permintaan: warna, ukuran, dan spesifikasi komposisi material."
    }
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-0 text-gray-800">
      <Helmet>
        <title>Layanan | Jasa Proses Biji Plastik</title>
        <meta
          name="description"
          content="Lihat layanan lengkap kami dalam pengolahan biji plastik—dari pencucian hingga pelletizing dan layanan custom."
        />
      </Helmet>

      <Header />

      <motion.header
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-extrabold">Layanan Kami</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan pengolahan plastik daur ulang untuk kebutuhan industri—menggabungkan efisiensi, kualitas, dan kepedulian terhadap lingkungan.
        </p>
      </motion.header>

      <motion.section
        className="py-16 grid md:grid-cols-2 gap-8 min-h-screen"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {services.map((s) => (
          <div
            key={s.title}
            className="p-6 bg-white rounded-2xl shadow-md backdrop-blur-md"
          >
            <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
            <p>{s.description}</p>
          </div>
        ))}
      </motion.section>

      <Footer />
    </main>
  );
};
export default Services;

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import BackTop from "../Layout/BackTop";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function Pricing() {
  const pricing = [
    {
      title: "Daur Ulang Plastik Industri",
      price: "Rp 5.000/kg",
      desc: "Proses pengolahan limbah plastik industri menjadi biji plastik siap pakai."
    },
    {
      title: "Pencucian & Pemurnian",
      price: "Rp 2.500/kg",
      desc: "Layanan pencucian dan pemurnian serpihan plastik untuk hasil berkualitas."
    },
    {
      title: "Pengambilan & Pengiriman",
      price: "Hubungi kami",
      desc: "Layanan logistik untuk pengambilan limbah dan pengiriman hasil biji plastik."
    }
  ];

  return (
    <main className="text-gray-800">
      <Helmet>
        <title>Harga Layanan | Jasa Proses Biji Plastik</title>
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
          <h1 className="text-4xl font-extrabold font-playfair">Harga Layanan</h1>
          <p className="text-lg text-gray-700">
            Daftar harga layanan utama kami. Untuk penawaran khusus, silakan <a href="/contact" className="underline text-jungle-green-800 hover:text-jungle-green-900">hubungi kami</a>.
          </p>
        </motion.header>

        <motion.section
          className="py-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ul className="grid gap-8 md:grid-cols-2">
            {pricing.map((item, idx) => (
              <li key={idx} className="p-6 rounded-2xl shadow-md bg-green-50/90 backdrop-blur flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-jungle-green-800">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.desc}</p>
                </div>
                {item.price === "Hubungi kami" ? (
                  <a
                    href="/contact"
                    className="text-xl font-bold text-green-900 underline hover:text-jungle-green-700 transition-colors text-end block"
                  >
                    {item.price}
                  </a>
                ) : (
                  <span className="text-xl font-bold text-green-900 text-end block">{item.price}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.section>
      </section>

      <Footer />
    </main>
  );
}

export default Pricing;

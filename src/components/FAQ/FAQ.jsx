
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import BackTop from "../Layout/BackTop";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function FAQ() {
  const faqs = [
    {
      q: "Apa saja jenis plastik yang dapat diproses?",
      a: "Kami menerima berbagai jenis limbah plastik industri seperti HDPE, LDPE, PP, dan PET."
    },
    {
      q: "Bagaimana cara kerja layanan daur ulang plastik?",
      a: "Limbah plastik dikumpulkan, dicacah, dicuci, dan diproses menjadi biji plastik berkualitas siap pakai."
    },
    {
      q: "Apakah ada minimum jumlah limbah yang bisa diproses?",
      a: "Kami melayani baik dalam jumlah kecil maupun besar, silakan hubungi kami untuk detail lebih lanjut."
    },
    {
      q: "Bagaimana cara mendapatkan penawaran harga?",
      a: "Anda dapat mengunjungi halaman Pricing atau menghubungi kami langsung melalui kontak yang tersedia."
    }
  ];

  return (
    <main className="text-gray-800">
      <Helmet>
        <title>FAQ | Jasa Proses Biji Plastik</title>
        <meta
          name="description"
          content="Pertanyaan yang sering diajukan tentang layanan dan proses Jasa Proses Biji Plastik."
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
          <h1 className="text-4xl font-extrabold font-playfair">FAQ</h1>
          <p className="text-lg text-gray-700">
            Pertanyaan yang sering diajukan tentang layanan dan proses kami.
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
            {faqs.map((faq, idx) => (
              <li key={idx} className="p-6 rounded-2xl shadow-md bg-green-50/90 backdrop-blur">
                <h3 className="font-semibold text-lg mb-2 text-jungle-green-800">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </li>
            ))}
          </ul>
        </motion.section>
      </section>

      <Footer />
    </main>
  );
}

export default FAQ;

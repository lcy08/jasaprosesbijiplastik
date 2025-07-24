
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
      q: "Jenis plastik apa yang dapat diproses oleh MP. PLAST?",
      a: "Kami khusus memproses limbah plastik jenis PP (Polypropylene) dan ABS (Acrylonitrile Butadiene Styrene)."
    },
    {
      q: "Bagaimana proses kerja layanan daur ulang plastik di MP. PLAST?",
      a: "Limbah plastik dikumpulkan, dicacah, dicuci, kemudian dilelehkan menggunakan mesin khusus menjadi biji plastik berkualitas."
    },
    {
      q: "Apakah ada minimum jumlah limbah yang bisa diproses?",
      a: "Kami menerima pemrosesan dalam jumlah kecil maupun besar, dengan kapasitas mesin mencapai 12 ton per hari. Hubungi kami untuk informasi lebih lanjut."
    },
    {
      q: "Bagaimana cara mendapatkan informasi harga?",
      a: 'Silakan hubungi kami langsung melalui <a href="https://wa.me/6281290029538" target="_blank" class="text-jungle-green-400  underline">WhatsApp</a> untuk mendapatkan penawaran harga secara personal.'
    },
    {
      q: "Apakah MP. PLAST menerima limbah plastik rumah tangga?",
      a: "Saat ini kami hanya menerima limbah plastik industri jenis PP dan ABS."
    },
    {
      q: "Apakah hasil daur ulang dapat digunakan kembali untuk produksi?",
      a: "Ya, biji plastik hasil daur ulang kami berkualitas tinggi dan siap digunakan kembali dalam proses produksi."
    },
    {
      q: "Berapa lama waktu proses daur ulang plastik di MP. PLAST?",
      a: "Waktu proses tergantung pada volume limbah dan kondisi material, namun kami berkomitmen untuk proses yang cepat dan efisien."
    },
    {
      q: "Di mana lokasi MP. PLAST dan apakah bisa mengantar limbah langsung?",
      a: "Kami berlokasi di area strategis industri dan menerima pengantaran langsung. Hubungi kami untuk koordinasi pengiriman."
    }
  ];

  return (
    <main className="text-gray-800">
      <Helmet>
        <title>FAQ | MP. PLAST - Jasa Proses Biji Plastik Termurah</title>
        <meta
          name="description"
          content="Pertanyaan yang sering diajukan tentang layanan dan proses Jasa Proses Biji Plastik di MP. PLAST."
        />
        <link rel="canonical" href="https://jasaprosesbijiplastik.biz.id/faq" />
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
          <h1 className="text-4xl font-extrabold">FAQ</h1>
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
                <p className="text-gray-700"><div dangerouslySetInnerHTML={{ __html: faq.a }} /></p>
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

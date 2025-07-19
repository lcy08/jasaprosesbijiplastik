import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clipboard } from "lucide-react";

import Header from "/src/components/Layout/Header"
import Footer from "/src/components/Layout/Footer"
import BackTop from "../Layout/BackTop";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};


function Contact() {
  const [copied, setCopied] = useState(null); // "email" | "phone" | null

  const copy = (label, text) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  const contactInfo = {
    email: "info@jasaprosesbijiplastik.biz.id",
    phone: "+62 811‑2222‑3333",
    address: "Jl. Industri Hijau No. 12, Bekasi, Jawa Barat"
  };

  return (
    <main className="text-gray-800">
      <Helmet>
        <title>Kontak | Jasa Proses Biji Plastik</title>
        <meta
          name="description"
          content="Hubungi kami untuk layanan pengolahan biji plastik—telepon, email, atau kirim pesan lewat formulir kontak."
        />
      </Helmet>

      <Header />
      <BackTop />

      <section className="min-h-screen max-w-5xl mx-auto px-4 md:px-0 my-8 md:my-12 space-y-12">
      {/* Header */}
        <motion.header
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
        >
            <h1 className="text-4xl font-extrabold">Hubungi Kami</h1>
            <p className="text-lg max-w-2xl mx-auto">
            Untuk pertanyaan dan pemesanan, silakan hubungi kami langsung melalui email, telepon, atau WhatsApp.
            </p>
        </motion.header>

        {/* Direct Contact Options */}
        <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-md max-w-3xl mx-auto text-center"
        >
            <h2 className="text-2xl font-semibold mb-6">Hubungi Langsung</h2>
            <div className="space-y-4">
              <a href="mailto:info@mail.com" className="block text-blue-700 hover:underline text-lg font-medium">Email: info@mail.com</a>
              <a href="tel:+6281290029538" className="block text-green-700 hover:underline text-lg font-medium">Telepon: +62 812-9002-9538</a>
              <a href="https://wa.me/6281290029538" target="_blank" rel="noopener noreferrer" className="block text-green-600 hover:underline text-lg font-medium">Chat via WhatsApp</a>
              <p className="text-gray-700">Alamat: Jl. Raya Kosambi Timur. No.36, Kosambi Timur., Kec. Kosambi, Kabupaten Tangerang, Banten 15213</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
              <button
                onClick={() => copy("email", contactInfo.email)}
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline border border-blue-200 rounded px-4 py-2"
              >
                <Clipboard className="w-4 h-4" /> {copied === "email" ? "Email Tersalin!" : "Salin Email"}
              </button>
              <button
                onClick={() => copy("phone", contactInfo.phone)}
                className="inline-flex items-center gap-2 text-sm text-green-600 hover:underline border border-green-200 rounded px-4 py-2"
              >
                <Clipboard className="w-4 h-4" /> {copied === "phone" ? "Telepon Tersalin!" : "Salin Telepon"}
              </button>
            </div>
        </motion.section>

        {/* Map */}
        <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto"
        >
            <h2 className="text-2xl font-semibold mb-4 text-center">Lokasi Kantor</h2>
            <div className="w-full h-72 rounded-2xl overflow-hidden shadow-md">
            <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22442.70936686203!2d106.6897573874047!3d-6.083727925236774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9ecf5831857%3A0x46f03de7e22e0075!2sMP.PLAST%20TANGERANG%20SUPPLIER%20ABS%20(TERIMA%20JASA%20PROSES%20PP%20)!5e0!3m2!1sen!2sid!4v1752535943819!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </motion.section>
      </section>
      <Footer />
    </main>
  );
}
export default Contact

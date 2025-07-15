import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clipboard } from "lucide-react";

import Header from "/src/components/Layout/Header"
import Footer from "/src/components/Layout/Footer"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [copied, setCopied] = useState(null); // "email" | "phone" | null

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Email tidak valid";
    if (!form.message.trim()) newErrors.message = "Pesan wajib diisi";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setStatus("sending");
    // Simulate async send
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

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
    <main className="px-4 md:px-0 text-gray-800 space-y-24">
      <Helmet>
        <title>Kontak | Jasa Proses Biji Plastik</title>
        <meta
          name="description"
          content="Hubungi kami untuk layanan pengolahan biji plastik—telepon, email, atau kirim pesan lewat formulir kontak."
        />
      </Helmet>

      <Header />

      <section className="max-w-5xl mx-auto space-y-12">
      {/* Header */}
        <motion.header
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
        >
            <h1 className="text-4xl font-extrabold font-playfair">Hubungi Kami</h1>
            <p className="text-lg max-w-2xl mx-auto">
            Kami siap membantu Anda. Pilih metode kontak di bawah atau kirim pesan
            langsung melalui formulir.
            </p>
        </motion.header>

        {/* Contact Info Cards */}
        <motion.section
            className="grid md:grid-cols-3 gap-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            {/* Email */}
            <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-center text-center gap-4">
            <Mail className="w-8 h-8" />
            <p>{contactInfo.email}</p>
            <button
                onClick={() => copy("email", contactInfo.email)}
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
            >
                <Clipboard className="w-4 h-4" /> {copied === "email" ? "Tersalin!" : "Salin"}
            </button>
            </div>
            {/* Phone */}
            <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-center text-center gap-4">
            <Phone className="w-8 h-8" />
            <p>{contactInfo.phone}</p>
            <button
                onClick={() => copy("phone", contactInfo.phone)}
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
            >
                <Clipboard className="w-4 h-4" /> {copied === "phone" ? "Tersalin!" : "Salin"}
            </button>
            </div>
            {/* Address */}
            <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-center text-center gap-4">
            <MapPin className="w-8 h-8" />
            <p>{contactInfo.address}</p>
            </div>
        </motion.section>

        {/* Form */}
        <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-md max-w-3xl mx-auto"
        >
            <h2 className="text-2xl font-semibold mb-6 text-center">Formulir Kontak</h2>
            {status === "sent" && (
            <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded mb-6 text-center">
                Pesan Anda telah terkirim. Kami akan segera menghubungi Anda!
            </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
                <label className="block mb-1 font-medium">Nama</label>
                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                placeholder="Nama lengkap"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                placeholder="alamat@email.com"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
                <label className="block mb-1 font-medium">Pesan</label>
                <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                placeholder="Tulis pesan Anda di sini..."
                ></textarea>
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
                {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
            </button>
            </form>
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

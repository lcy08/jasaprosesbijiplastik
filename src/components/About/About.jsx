import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import Header from "/src/components/Layout/Header"
import Footer from "/src/components/Layout/Footer"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function About() {
  const services = [
    {
      title: "Penggilingan & Pencucian Limbah Plastik",
      description:
        "Proses penghancuran dan pencucian plastik pasca-konsumsi agar siap diproses lebih lanjut."
    },
    {
      title: "Pelletizing / Proses Granulasi",
      description:
        "Mengubah serpihan plastik menjadi biji plastik (pellet) seragam yang siap digunakan kembali."
    },
    {
      title: "Pemisahan Jenis Plastik Otomatis",
      description:
        "Teknologi sortir untuk memisahkan jenis plastik (PP, PE, PET, dll.) dengan akurat."
    },
    {
      title: "Custom Order Berdasarkan Kebutuhan Klien",
      description:
        "Sesuai spesifikasi warna, ukuran, maupun komposisi material yang diinginkan."
    }
  ];

  const mission = [
    "Menyediakan layanan terbaik dengan standar industri tinggi",
    "Mendorong daur ulang plastik untuk masa depan yang lebih hijau",
    "Memberikan nilai tambah kepada klien melalui efisiensi proses"
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-0 text-gray-800">
      <Helmet>
        <title>Tentang Kami | Jasa Proses Biji Plastik</title>
        <meta
          name="description"
          content="Pelajari lebih lanjut tentang Jasa Proses Biji Plastik—visi, misi, tim, dan komitmen kami terhadap keberlanjutan."
        />
      </Helmet>

      <Header />

      {/* Intro */}
      <motion.header
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-extrabold">Tentang Kami</h1>
        <p className="text-lg">
          Kami adalah penyedia jasa pengolahan biji plastik ramah lingkungan
          berkualitas tinggi. Berdiri sejak <span className="font-semibold">20XX</span>,
          kami melayani berbagai sektor industri di Indonesia.
        </p>
      </motion.header>

      {/* Services */}
      <motion.section
        id="services"
        className="py-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Layanan Kami</h2>
        <ul className="grid gap-8 md:grid-cols-2">
          {services.map((item) => (
            <li
              key={item.title}
              className="p-6 rounded-2xl shadow-md bg-white/90 backdrop-blur"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Vision & Mission */}
      <motion.section
        id="vision-mission"
        className="py-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Visi &amp; Misi</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-semibold mb-4 text-xl">Visi</h3>
            <p>
              Menjadi mitra terpercaya dalam pengolahan biji plastik yang ramah
              lingkungan dan berkelanjutan di Indonesia.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-xl">Misi</h3>
            <ul className="list-disc list-inside space-y-2">
              {mission.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Sustainability */}
      <motion.section
        id="sustainability"
        className="py-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Komitmen Keberlanjutan</h2>
        <p className="max-w-3xl mx-auto text-center">
          Kami menggunakan proses hemat energi, memaksimalkan daur ulang air,
          dan menerapkan manajemen limbah internal untuk meminimalkan dampak
          lingkungan. Setiap langkah kami bertujuan untuk menciptakan siklus
          plastik yang lebih bertanggung jawab.
        </p>
      </motion.section>

      {/* Team */}
      <motion.section
        id="team"
        className="py-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Tim Kami</h2>
        <p className="max-w-3xl mx-auto text-center">
          Didirikan oleh <span className="font-semibold">[Nama Founder]</span>,
          seorang profesional dengan pengalaman lebih dari 10 tahun di industri
          plastik, tim kami terdiri dari ahli teknik proses, kontrol kualitas,
          dan manajemen limbah.
        </p>
      </motion.section>

      {/* Clients & Partners */}
      <motion.section
        id="clients"
        className="py-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Klien &amp; Mitra</h2>
        <p className="max-w-3xl mx-auto text-center">
          Kami telah dipercaya oleh produsen kemasan, manufaktur otomotif, dan
          berbagai UMKM di seluruh Indonesia.
        </p>
      </motion.section>

      {/* Location */}
      <motion.section
        id="location"
        className="py-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">Lokasi &amp; Jangkauan</h2>
        <p className="max-w-3xl mx-auto text-center">
          Berlokasi di <span className="font-semibold">[Nama Kota]</span>, kami
          melayani klien dari seluruh Indonesia dengan jaringan logistik yang
          efisien.
        </p>
      </motion.section>

      {/* Certifications & Testimonials can be added here as needed */}
      <Footer />
    </main>
  );
}

export default About;
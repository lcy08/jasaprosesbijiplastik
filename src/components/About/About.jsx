import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import Header from "/src/components/Layout/Header"
import Footer from "/src/components/Layout/Footer"
import BackTop from "../Layout/BackTop";

import Us from "./components/Us";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Services from "./components/Services";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function About() {

  return (
    <main className="text-gray-800">
      <Helmet>
        <title>Tentang Kami | Jasa Proses Biji Plastik</title>
        <meta
          name="description"
          content="Pelajari lebih lanjut tentang Jasa Proses Biji Plastik—visi, misi, tim, dan komitmen kami terhadap keberlanjutan."
        />
      </Helmet>

      <Header />
      <BackTop />

      
        <div className="bg-yellow-50 min-h-screen py-12 text-slate-800">
          <Us />

          <Vision />

          <Hero />

          <Services />
          <div className="max-w-4xl mx-auto p-6 text-center">
            <p className="text-gray-600 italic text-xl">
              Kepuasan Anda adalah prioritas kami.
            </p>
          </div>
        </div>
      <Footer />
    </main>
  );
}

export default About;
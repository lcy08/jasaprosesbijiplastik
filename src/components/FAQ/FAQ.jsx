import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

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
    <>
    <Header />

    <section className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-jungle-green-900 text-center font-playfair mb-2">FAQ</h2>
        <p className="text-center text-gray-600 mb-8">Pertanyaan yang sering diajukan tentang layanan dan proses kami.</p>
        <ul className="space-y-6">
          {faqs.map((faq, idx) => (
            <li key={idx} className="bg-green-50 rounded-xl shadow p-5">
              <h3 className="font-semibold text-jungle-green-800 mb-2">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <Footer />
    </>
  );
}

export default FAQ;

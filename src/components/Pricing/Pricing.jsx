import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

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
    <>
    <Header />

    <section className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-jungle-green-900 text-center font-playfair mb-2">Pricing</h2>
        <p className="text-center text-gray-600 mb-8">Daftar harga layanan utama kami. Untuk penawaran khusus, silakan hubungi kami.</p>
        <ul className="space-y-6">
          {pricing.map((item, idx) => (
            <li key={idx} className="bg-green-50 rounded-xl shadow p-5 flex flex-col md:flex-row md:items-center">
              <div className="flex-1">
                <h3 className="font-semibold text-jungle-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-2">{item.desc}</p>
              </div>
              {item.price === "Hubungi kami" ? (
                <a
                  href="/contacts"
                  className="text-xl font-bold text-green-900 md:ml-8 text-end md:text-end w-full md:w-auto underline hover:text-jungle-green-700 transition-colors"
                >
                  {item.price}
                </a>
              ) : (
                <span className="text-xl font-bold text-green-900 md:ml-8 text-end md:text-end w-full md:w-auto">{item.price}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <Footer />
    </>
    
  );
}

export default Pricing;

import plastics from '../assets/plastics.jpg'

function Hero() {
    return (
        <section className="bg-green-100 py-16">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    Kenapa Memilih MP. PLAST?
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Dengan pengalaman bertahun-tahun dalam industri daur ulang plastik, kami tidak hanya menawarkan harga termurah — kami juga menjamin proses yang cepat, hasil berkualitas, dan dukungan penuh kapan saja.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✔</span>
                      <p className="text-gray-700">
                        Layanan <strong>24 jam</strong> untuk kebutuhan mendesak industri Anda.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✔</span>
                      <p className="text-gray-700">
                        Harga <strong>paling kompetitif</strong> di kelasnya, cocok untuk berbagai skala produksi.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✔</span>
                      <p className="text-gray-700">
                        Komitmen kami terhadap <strong>kelestarian lingkungan</strong> melalui daur ulang profesional.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={plastics}
                    alt="Proses kerja MP. PLAST"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">Komitmen Kami, Untuk Anda</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}
export default Hero;
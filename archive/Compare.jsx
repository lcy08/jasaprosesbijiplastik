import Product from '../src/components/Home/components/Compare/Product'

function Compare() {
  return (
    <div className="mt-10 min-h-[50vh] bg-[#fdfbd4] items-center m-auto justify-items-center">
      <h2 className="font-playfair font-bold text-3xl text-center">Siapa Kami?</h2>
      <p className="text-center text-gray-700 mt-2 mb-6 max-w-2xl mx-auto text-base">
        MP. Plast adalah produsen dan supplier biji plastik berkualitas tinggi untuk berbagai kebutuhan industri Anda. Setiap produk kami melalui proses seleksi dan kontrol mutu yang ketat.
      </p>
      <div className="max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 ">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:items-stretch md:gap-8">
          {[{
            title: "PE (Polyethylene)",
            desc: "Biji plastik PE cocok untuk kantong plastik, botol, dan kemasan fleksibel. Tahan kimia dan mudah diproses.",
            features: ["Warna natural/putih bening", "Ukuran seragam", "Tingkat kelembaban rendah", "Cocok untuk ekstrusi & injection molding"]
          }, {
            title: "PP (Polypropylene)",
            desc: "Ideal untuk produk rumah tangga, otomotif, dan tekstil. Kuat, ringan, dan tahan panas.",
            features: ["Warna natural/abu", "Tahan suhu tinggi", "Tidak mudah retak", "Aman untuk food grade (opsional)"]
          }, {
            title: "PS (Polystyrene)",
            desc: "Digunakan untuk peralatan elektronik, mainan, dan kemasan. Permukaan halus dan mudah dicetak.",
            features: ["Warna putih/bening", "Permukaan glossy", "Mudah dibentuk", "Stabilitas dimensi tinggi"]
          }].map((product, idx) => (
            <div key={product.title} className="w-full max-w-sm mx-auto h-full flex">
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Compare;
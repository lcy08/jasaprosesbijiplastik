import Item from "./Services/Item";

function Services() {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Layanan Kami
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  MP. PLAST siap membantu industri Anda dengan layanan terbaik kami.
                </p>
              </div>

              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <Item   title="Daur Ulang Plastik"
                        description="Pengolahan biji plastik dari limbah industri dengan standar tinggi untuk digunakan kembali."
                        icon="M3 10h11M9 21V3m12 4l-6 6 6 6"/>

                <Item  title="Pembelian Limbah Plastik"
                        description="Kami membeli limbah plastik dari berbagai sektor dengan harga bersaing dan proses cepat."
                        icon="M9 21V3m12 4l-6 6 6 6"/>
                <Item  title="Pengiriman 24 Jam"
                        description="Layanan distribusi cepat dan responsif untuk memenuhi kebutuhan produksi Anda, kapan saja
                        "
                        icon="M12 8v4l3 3M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"/>

                <Item  title="Konsultasi Gratis"
                        description="Diskusikan kebutuhan daur ulang Anda dengan tim ahli kami tanpa biaya tambahan."
                        icon="M12 8v4l3 3M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"/>
                <Item  title="Layanan Pelanggan 24/7"
                        description="Tim kami siap membantu Anda kapan saja dengan pertanyaan atau kebutuhan layanan."
                        icon="M12 8v4l3 3M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"/>
                <Item  title="Pengolahan Berbagai Jenis Plastik"
                        description="Kami menerima berbagai jenis limbah plastik seperti HDPE, LDPE, PP, dan PET untuk diolah menjadi biji plastik berkualitas."
                        icon="M12 8v4l3 3M21 12A9   9 0 1 1 3 12a9 9 0 0 1 18 0z"/>
                </div>
            </div>
          </section>
    )
}
export default Services;
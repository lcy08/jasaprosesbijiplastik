function Vision() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-10">Visi & Misi Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Visi */}
                <div className="bg-white shadow-md rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Visi</h3>
                <p className="text-gray-700 leading-relaxed">
                    Menjadi penyedia jasa pengolahan plastik terdepan di Indonesia dengan layanan yang terjangkau, cepat, dan terpercaya.
                </p>
                </div>

                {/* Misi */}
                <div className="bg-white shadow-md rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Misi</h3>
                <ul className="text-gray-700 list-disc list-inside leading-relaxed space-y-1">
                    <li>Memberikan layanan terbaik dengan harga bersaing</li>
                    <li>Menjaga kualitas dan kepuasan pelanggan</li>
                    <li>Menjadi mitra terpercaya dalam industri pengolahan plastik</li>
                    <li>Terus berinovasi dalam proses produksi dan layanan</li>
                </ul>
                </div>

            </div>
            </section>

    )
}
export default Vision;
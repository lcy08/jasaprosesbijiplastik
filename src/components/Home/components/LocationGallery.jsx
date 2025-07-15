function LocationGallery() {
  const locations = [
    {
      id: 1,
      name: "Fasilitas Utama",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      desc: "Fasilitas pengolahan utama kami dengan mesin modern dan area produksi luas."
    },
    {
      id: 2,
      name: "Gudang Penyimpanan",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
      desc: "Gudang penyimpanan hasil biji plastik yang bersih dan terorganisir."
    },
    {
      id: 3,
      name: "Area Penerimaan Limbah",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      desc: "Area penerimaan limbah plastik dari mitra industri dan pelanggan."
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-jungle-green-900 text-center font-playfair mb-2">Lokasi & Galeri Fasilitas</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Lihat beberapa area utama di fasilitas pengolahan kami yang mendukung proses daur ulang plastik secara profesional dan efisien.</p>
        <div className="grid gap-8 md:grid-cols-3">
          {locations.map(loc => (
            <div key={loc.id} className="rounded-xl shadow-lg bg-green-50 hover:shadow-xl transition overflow-hidden flex flex-col">
              <img src={loc.image} alt={loc.name} className="h-48 w-full object-cover" loading="lazy" />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-jungle-green-800 mb-1">{loc.name}</h3>
                <p className="text-gray-700 text-sm flex-1">{loc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocationGallery;

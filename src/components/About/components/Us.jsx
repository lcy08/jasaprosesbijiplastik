function Us() {
    return (
        <section className="relative bg-gradient-to-br from-green-50 to-green-100 shadow-lg rounded-xl p-4 mx-auto overflow-hidden min-h-[100%]">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-200 rounded-full opacity-20 translate-x-12 translate-y-12"></div>
            {/* Additional decorative elements for horizontal space */}
            <div className="absolute top-10 left-20 w-3 h-3 bg-green-300 rounded-full opacity-25"></div>
            <div className="absolute bottom-20 left-16 w-2 h-2 bg-blue-300 rounded-full opacity-30"></div>
            <div className="absolute top-16 right-20 w-3 h-3 bg-yellow-300 rounded-full opacity-25"></div>
            <div className="absolute bottom-16 right-24 w-2 h-2 bg-red-300 rounded-full opacity-30"></div>
            
            {/* Decorative side patterns */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-green-200 to-transparent opacity-30 rounded-full"></div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-blue-200 to-transparent opacity-30 rounded-full"></div>
            
            <div className="relative max-w-6xl mx-auto p-2 sm:p-3 text-center">
                {/* Enhanced Header */}
                <div className="mb-3 sm:mb-4">
                    <p className="text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-1">Solusi Plastik Terpercaya</p>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
                        Tentang MP. PLAST
                    </h1>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
                </div>

                {/* Enhanced Content with Better Structure */}
                <div className="mb-4 sm:mb-6">
                    <p className="max-w-4xl mx-auto text-center text-sm sm:text-base leading-relaxed text-gray-700 mb-3 sm:mb-4 px-2">
                        <strong className="text-green-700">MP. PLAST</strong> adalah penyedia jasa pengolahan dan daur ulang plastik dengan <strong className="text-green-600">harga paling terjangkau</strong> tanpa mengorbankan kualitas.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto text-left px-2">
                        <div className="bg-white bg-opacity-50 p-2.5 sm:p-3 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-1 text-xs sm:text-sm">🎯 Komitmen Kami</h3>
                            <p className="text-xs text-gray-600">Memberikan layanan terbaik, cepat, dan efisien untuk semua kebutuhan plastik Anda.</p>
                        </div>
                        <div className="bg-white bg-opacity-50 p-2.5 sm:p-3 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-1 text-xs sm:text-sm">🏭 Pengalaman</h3>
                            <p className="text-xs text-gray-600">Bertahun-tahun melayani industri dengan berbagai jenis biji plastik berkualitas tinggi.</p>
                        </div>
                        <div className="bg-white bg-opacity-50 p-2.5 sm:p-3 rounded-lg sm:col-span-2 md:col-span-1">
                            <h3 className="font-semibold text-gray-800 mb-1 text-xs sm:text-sm">♻️ Lingkungan</h3>
                            <p className="text-xs text-gray-600">Solusi ramah lingkungan untuk daur ulang plastik yang berkelanjutan.</p>
                        </div>
                    </div>
                </div>

                {/* Enhanced Feature Badges */}
                <div className="mb-4 sm:mb-5">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3">Keunggulan Layanan Kami</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-5xl mx-auto px-2">
                        <div className="bg-gradient-to-br from-green-100 to-green-200 p-2.5 sm:p-3 rounded-xl hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                            <div className="text-base sm:text-lg mb-1 group-hover:scale-110 transition-transform">💰</div>
                            <h4 className="font-semibold text-green-800 text-xs mb-1">Harga Termurah</h4>
                            <p className="text-xs text-green-600">Solusi hemat biaya</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-2.5 sm:p-3 rounded-xl hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                            <div className="text-base sm:text-lg mb-1 group-hover:scale-110 transition-transform">⚡</div>
                            <h4 className="font-semibold text-blue-800 text-xs mb-1">Pelayanan Cepat</h4>
                            <p className="text-xs text-blue-600">Respon kilat</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-2.5 sm:p-3 rounded-xl hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                            <div className="text-base sm:text-lg mb-1 group-hover:scale-110 transition-transform">⭐</div>
                            <h4 className="font-semibold text-yellow-800 text-xs mb-1">Kualitas Terjamin</h4>
                            <p className="text-xs text-yellow-600">Standar terbaik</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-red-100 to-red-200 p-2.5 sm:p-3 rounded-xl hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                            <div className="text-base sm:text-lg mb-1 group-hover:scale-110 transition-transform">🕒</div>
                            <h4 className="font-semibold text-red-800 text-xs mb-1">Buka 24 Jam</h4>
                            <p className="text-xs text-red-600">Siap kapan saja</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 items-center max-w-4xl mx-auto px-2">
                    <div className="hidden lg:block text-right">
                        <div className="bg-white bg-opacity-50 p-2.5 sm:p-3 rounded-lg">
                            <p className="text-xs text-gray-600 font-medium">📱 Konsultasi Gratis</p>
                            <p className="text-xs text-gray-500">Diskusi kebutuhan Anda</p>
                        </div>
                    </div>
                    
                    <div className="bg-white bg-opacity-70 rounded-lg p-3 sm:p-4">
                        <p className="text-gray-700 mb-2 sm:mb-3 text-xs sm:text-sm">Siap untuk solusi plastik terbaik?</p>
                        <a
                            href="https://wa.me/6281290029538"
                            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-4 sm:px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs sm:text-sm"
                        >
                            Hubungi Kami Sekarang
                        </a>
                        <div className="mt-3 flex justify-center gap-3 sm:gap-4 text-xs text-gray-600">
                            <span>💬 WhatsApp</span>
                        </div>
                    </div>
                    
                    <div className="hidden lg:block text-left">
                        <div className="bg-white bg-opacity-50 p-2.5 sm:p-3 rounded-lg">
                            <p className="text-xs text-gray-600 font-medium">🚚 Pengiriman Cepat</p>
                            <p className="text-xs text-gray-500">Ke seluruh Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Us;
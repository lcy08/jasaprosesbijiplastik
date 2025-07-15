<<<<<<< HEAD
import plastics1 from "../assets/Hero/1.jpg";
import plastics2 from "../assets/Hero/2.jpg";
import plastics3 from "../assets/Hero/3.jpg";
import plastics4 from "../assets/Hero/4.jpg";
import plastics5 from "../assets/Hero/5.jpg";
import plastics6 from "../assets/Hero/6.jpg";
import Parallax from "../../Layout/Parallax";
import { useState } from "react";

const plasticImages = [plastics1, plastics2, plastics3, plastics4, plastics5, plastics6];

function Hero(){
    const [loaded, setLoaded] = useState(Array(plasticImages.length).fill(false));

    const handleLoad = index => {
        setLoaded(prev => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
        });
    };
    return (
        <section className="mt-10 bg-gradient-to-r from-green-50 to-green-100 py-16">
            <div className="mx-auto">
            <Parallax>
            <div className="w-full order-2 md:order-1 max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
                
                {/* Text Section */}
                <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl font-extrabold text-green-900 leading-snug">
                    Tingkatkan Kualitas Produksi <br className="hidden md:block" /> Plastik Anda
                </h1>
                <p className="text-gray-700 text-lg">
                    MP. PLAST hadir dengan teknologi modern untuk memproses biji plastik PP — bersih, stabil, dan siap pakai untuk segala kebutuhan industri.
                </p>
                <p className="text-gray-600 text-sm">
                    Dengan kapasitas produksi hingga 12 ton per hari, kami siap memenuhi permintaan Anda dengan kualitas terbaik.
                </p>
                <a
                    href="https://wa.me/6281290029538"
                    className="inline-block bg-green-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-900 transition"
                >
                    Hubungi Kami Sekarang
                </a>
                <p className="text-xs text-gray-500">
                    Buka 24 Jam | Teknologi Mesin Terbaru | Hasil Maksimal, Bersih & Stabil
                </p>
                </div>

                {/* Image Grid Section */}
                <div className="w-full md:w-1/2 order-1 md:order-2  grid grid-cols-3 gap-4">
                {[plastics1, plastics2, plastics3, plastics4, plastics5, plastics6].map((src, i) => (
                    <img
                    key={i}
                    src={src}
                    alt={`Biji Plastik ${i + 1}`}
                    onLoad={() => handleLoad(i)}
                    intial={{ opacity:0, scale: 0.95 }}
                    animate={loaded[i] ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="rounded-xl object-cover aspect-square w-full shadow-sm border border-gray-200 hover:scale-105 transition-transform duration-200"
                    fetchPriority="high"
                    />
                ))}
                </div>
                </div>
            </Parallax>
            </div>
            </section>

=======

function Hero(){
    return (
        <>
            <div className="mt-8 md:mt-12" />
            <section className="flex flex-col-reverse overflow-hidden bg-green-100 sm:grid sm:grid-cols-2 sm:items-center font-playfair">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold text-jungle-green-900 md:text-4xl mb-2">
                        Solusi Pengolahan <span className="bg-green-800 text-green-100 px-2 rounded">Biji Plastik</span> Terpercaya
                    </h1>
                    <p className="text-gray-600 md:mt-4 md:block text-base md:text-lg">
                        Daur ulang plastik industri dengan teknologi modern, hasil berkualitas, dan layanan profesional untuk kebutuhan bisnis Anda.
                    </p>
                    <div className="mt-6 md:mt-10">
                        <a
                          href="/services"
                          className="inline-block rounded-xl bg-green-800 px-10 py-3 text-base font-semibold text-white shadow-lg hover:bg-green-900 hover:scale-105 transition focus:ring-4 focus:ring-green-300 focus:outline-none"
                        >
                          Lihat Layanan
                        </a>
                    </div>
                </div>
            </div>

            <img
                alt="Pabrik pengolahan biji plastik dengan mesin modern"
                src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                loading="lazy"
                fetchpriority="high"
            />
        </section>
        </>
>>>>>>> dde4f7d (Router)
    );
}

export default Hero;
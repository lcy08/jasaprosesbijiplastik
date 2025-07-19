import plastics1 from "../assets/Hero/1.jpg";
import plastics2 from "../assets/Hero/2.jpg";
import plastics3 from "../assets/Hero/3.jpg";
import plastics4 from "../assets/Hero/4.jpg";
import plastics5 from "../assets/Hero/5.jpg";
import plastics6 from "../assets/Hero/6.jpg";
import Parallax from "../../Layout/Parallax";

const plasticImages = [plastics1, plastics2, plastics3, plastics4, plastics5, plastics6];



function Hero(){
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
                    MP. PLAST hadir dengan teknologi modern untuk memproses biji plastik ABS, PP, dan PVC — bersih, stabil, dan siap pakai untuk segala kebutuhan industri.
                </p>
                <p className="text-gray-600 text-sm">
                    Dengan kapasitas produksi hingga 12 ton per hari, kami siap memenuhi permintaan Anda dengan kualitas terbaik.
                </p>
                <a
                    href="/contact"
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
                    className="rounded-xl object-cover aspect-square w-full shadow-sm border border-gray-200 hover:scale-105 transition-transform duration-200"
                    />
                ))}
                </div>
                </div>
            </Parallax>
            </div>
            </section>

    );
}

export default Hero;
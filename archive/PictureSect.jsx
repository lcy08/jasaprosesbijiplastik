import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import PictureDiv from "./PictureSect/PictureDiv.jsx";
import prosesGiling from '../assets/GilingPlastik.mp4'

function PictureSect() {
    const itemRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(undefined);

    const pictures = [
        {
            id: 'img1',
            image: prosesGiling,
            title: 'Proses Penggilingan Plastik',
            desc: 'Limbah plastik ',
            type: 'video/mp4',
        },
        {
            id: 'img2',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
            title: 'Pencucian & Pemurnian',
            desc: 'Serpihan plastik dicuci dan dipisahkan dari kotoran serta material lain agar menghasilkan biji plastik berkualitas.',
            type: 'image/jpeg'
        },
        {
            id: 'img3',
            image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
            title: 'Hasil Biji Plastik',
            desc: 'Biji plastik siap pakai dihasilkan dari proses pelletizing, siap digunakan untuk berbagai kebutuhan industri.',
            type: 'image/jpeg'
        },
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Only update contentHeight after resize or initial mount
        const updateHeight = () => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.offsetHeight);
            }
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, [isMobile, pictures.length]);

    useEffect(() => {
        if (isMobile) return;

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = itemRefs.current.findIndex((ref) => ref === entry.target);
                if (index !== -1) setActiveIndex(index);
            }
            });
        },
        {
            root: null,
            rootMargin: '-20% 0px',
            threshold: 0.9,
        }
        );

        itemRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
        });

        return () => {
        itemRefs.current.forEach((ref) => {
            if (ref) observer.unobserve(ref);
        });
        };
    }, [isMobile]);

  return (
    <section id="gallery" className="relative bg-[#fdfbd4]">
      <div className="bg-green-800 py-5">
        <h2 className="text-center text-3xl font-bold font-playfair text-green-100">
          Galeri Proses Kami
        </h2>
        <p className="text-green-100 text-center mt-2 text-base font-normal max-w-2xl mx-auto">
          Lihat tahapan utama dalam pengolahan limbah plastik menjadi biji plastik berkualitas di fasilitas kami.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 grid md:grid-cols-2 gap-8 relative">
        {/* Sticky image */}
        {!isMobile && (
          <div
            className="sticky md:max-h-[80vh] top-24 self-start h-fit flex flex-col justify-start py-10"
          aria-live="polite">
            <AnimatePresence>
              {pictures[activeIndex].type === 'video/mp4'? (
          <video
            autoPlay
            muted
            playsInline
            loop
            className="rounded-lg w-full max-w-md ring-4 ring-green-200"
          >
            <source src={pictures[activeIndex].image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>):(
              <motion.img
                key={pictures[activeIndex].id}
                src={pictures[activeIndex].image}
                sizes="(max-width: 768px) 100vw, 50vw"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
              )}
            </AnimatePresence>
            
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col gap-16 py-10" ref={contentRef}>
          {pictures.map((picture, index) => (
            
            <motion.div
              key={picture.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`px-4 md:px-12 max-w-7xl mx-auto transition-shadow duration-300${!isMobile && activeIndex === index ? ' ring-2 ring-green-700 bg-amber-50/50 shadow-lg rounded-2xl' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <PictureDiv title={picture.title} desc={picture.desc} image={picture.image} type={picture.type}/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PictureSect;
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import PictureDiv from "./PictureSect/PictureDiv.jsx";

function PictureSect() {
    const itemRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const pictures = [
        {
        id: 'img1',
        image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&h=600&fit=crop',
        title: 'Mountain Adventure',
        desc: 'Experience the breathtaking beauty of mountain landscapes...',
        },
        {
        id: 'img2',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        title: 'Ocean Serenity',
        desc: 'Dive into the calming depths of ocean blue...',
        },
        {
        id: 'img3',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
        title: 'Forest Mysteries',
        desc: 'Enter the enchanting world of dense forests...',
        },
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
            rootMargin: '0px',
            threshold: 0.5,
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
                Galeri
            </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 grid md:grid-cols-2 gap-12 relative">
        {/* Sticky image */}
        {!isMobile && (
          <div className="sticky top-50 self-start h-fit">
            <AnimatePresence mode="wait">
                <motion.img
                    key={pictures[activeIndex].id}
                    src={pictures[activeIndex].image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0}}
                    transition={{ duration: 0.3 }}
                    className="rounded-lg shadow-xl w-full max-w-xl ring-4 ring-green-200"
                    alt={pictures[activeIndex].title}
                    aria-live="polite"
                />
            </AnimatePresence>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col gap-32 py-16">
            {pictures.map((picture, index) => (
            <div
                key={picture.id}
                ref={(el) => (itemRefs.current[index] = el)}
                className="px-4 md:px-12 max-w-7xl mx-auto"
            >
                <PictureDiv title={picture.title} desc={picture.desc} image={picture.image}/>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default PictureSect;
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import one from '../assets/Gallery/1.jpg';
import two from '../assets/Gallery/2.mp4';
import three from '../assets/Gallery/3.jpg';
import four from '../assets/Gallery/4.mp4';

const tickerItems = [
  { id: 1, type: 'image', src: one },
  { id: 2, type: 'video/mp4', src: two },
  { id: 3, type: 'image', src: three },
  { id: 4, type: 'video/mp4', src: four },
];

// Ticker width will auto repeat items for seamless scroll
const TickerGallery = () => {
  const controls = useAnimation();

  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedMedia = tickerItems[selectedIndex];
  const [isMediaOpen, setIsMediaOpen] = useState(false);


  useEffect(() => {
    const animateTicker = async () => {
      while (true) {
        await controls.start({
          x: ["0%", "-50%"],
          transition: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 45,
          },
        });
        controls.set({ x: 0 }); // Reset
      }
    };

    animateTicker();
  }, [controls]);

  const handlePause = () => controls.stop();
  const handleResume = () => controls.start({ x: '-50%', transition: { duration: 15, ease: 'linear' } });

  return (
    <section id="gallery" className="relative bg-[#fdfbd4]">
      <div className="bg-green-800 py-5">
        <h2 className="text-center text-3xl font-bold font-playfair text-green-100">
          Galeri Proses Kami
        </h2>
        <p className="text-green-100 text-center mt-2 text-base font-normal max-w-2xl mx-auto">
          Lihat galeri foto dan video di fasilitas kami.
        </p>
      </div>
    <div className="w-full min-h-[50vh] overflow-hidden whitespace-nowrap py-6 bg-neutral-100">
      <motion.div
        className="flex gap-4 w-max"
        animate={controls}
        initial={{ x: 0 }}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
      >
        {[...tickerItems, 
          ...tickerItems, 
          ...tickerItems, 
          ...tickerItems, 
          ...tickerItems,
          ]
          .map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelectedIndex(idx % tickerItems.length); // fix index
              setIsMediaOpen(true);
            }}
            className="cursor-pointer transition hover:scale-105"
          >
            {item.type === 'video/mp4' ? (
              <video
                src={item.src}
                muted
                playsInline
                autoPlay
                loop
                className="h-[250px] w-auto object-cover rounded-lg"
              />
            ) : (
              <img
                src={item.src}
                alt={`media-${idx}`}
                className="h-[250px] w-auto object-cover rounded-lg"
              />
            )}
          </div>
        ))}
      </motion.div>
      {isMediaOpen && selectedMedia && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-full">

            {/* Close Button */}
            <button
              className="cursor-pointer absolute top-2 right-2 text-white text-xl bg-red-600 rounded-full px-3 py-1 z-10"
              onClick={() => setIsMediaOpen(false)}
            >
              ✕
            </button>

            {/* Previous Button */}
            {selectedIndex > 0 && (
              <button
                className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-full z-10"
                onClick={() => setSelectedIndex(prev => prev - 1)}
              >
                ‹
              </button>
            )}

            {/* Next Button */}
            {selectedIndex < tickerItems.length - 1 && (
              <button
                className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-full z-10"
                onClick={() => setSelectedIndex(prev => prev + 1)}
              >
                ›
              </button>
            )}

            {/* Media Content */}
            {selectedMedia.type === 'video/mp4' ? (
              <video
                src={selectedMedia.src}
                autoPlay
                controls
                className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg object-contain"
              />
            ) : (
              <img
                src={selectedMedia.src}
                alt="Gallery media"
                className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg object-contain"
              />
            )}
          </div>
        </div>
      )}


      <div className="flex justify-center mt-10">
        <Link
          to="/gallery"
          className="px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition-colors duration-300 shadow-md"
        >
          More Photos and Videos
        </Link>
      </div>
    </div>
    </section>
  );
};

export default TickerGallery;

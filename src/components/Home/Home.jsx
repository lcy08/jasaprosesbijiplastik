import Header from '/src/components/Layout/Header';
import Hero from './components/Hero';
<<<<<<< HEAD
<<<<<<< HEAD
import Who from './components/Who';
import TickerGallery from './components/TickerGallery';
import Footer from '/src/components/Layout/Footer';
import BackTop from '../Layout/BackTop'
import { Helmet } from 'react-helmet-async';
import '/src/index.css';
import RevealOnScroll from '../Layout/RevealOnScroll';
=======
import Compare from './components/Compare';
import PictureSect from './components/PictureSect';
import LocationGallery from './components/LocationGallery';
=======
import Who from './components/Who';
import TickerGallery from './components/TickerGallery';
>>>>>>> 7f91838 (new layout)
import Footer from '/src/components/Layout/Footer';
import BackTop from '../Layout/BackTop'
import { Helmet } from 'react-helmet-async';
import '/src/index.css';
<<<<<<< HEAD
>>>>>>> dde4f7d (Router)
=======
import RevealOnScroll from '../Layout/RevealOnScroll';
>>>>>>> 7f91838 (new layout)

function Home() {
  return(
    <>
<<<<<<< HEAD
<<<<<<< HEAD
      <Helmet>
        {/* Title & Description */}
        <title>MP. PLAST - Jasa Proses Biji Plastik Termurah | Pengolahan Plastik Berkualitas</title>
        <meta
          name="description"
          content="MP.PLAST adalah perusahaan yang menyediakan layanan proses biji plastik terbaik dan termurah di Indonesia. Daur ulang dan pengolahan plastik dengan teknologi modern dan hasil berkualitas."
=======
      <Helmet>
        {/* Title & Description */}
        <title>MP. PLAST - Jasa Proses Biji Plastik Termurah | Pengolahan Plastik Berkualitas</title>
        <meta
          name="description"
<<<<<<< HEAD
<<<<<<< HEAD
          content="Kami menyediakan layanan proses biji plastik terbaik di Indonesia. Daur ulang dan pengolahan plastik dengan teknologi modern dan hasil berkualitas."
>>>>>>> 7f91838 (new layout)
=======
          content="Kami menyediakan layanan proses biji plastik terbaik dan termurah di Indonesia. Daur ulang dan pengolahan plastik dengan teknologi modern dan hasil berkualitas."
>>>>>>> d0d54ba (about page, gallery and 404 redirect)
=======
          content="MP.PLAST adalah perusahaan yang menyediakan layanan proses biji plastik terbaik dan termurah di Indonesia. Daur ulang dan pengolahan plastik dengan teknologi modern dan hasil berkualitas."
>>>>>>> 03e2837 (Logo and MP.PLAST Fokus)
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
<<<<<<< HEAD
<<<<<<< HEAD
          content="mp. plast, termurah, proses biji plastik, daur ulang plastik, pengolahan plastik, jasa plastik Indonesia, biji plastik murah, penggilingan plastik, limbah plastik, pabrik plastik"
=======
          content="mp. plast, proses biji plastik, daur ulang plastik, pengolahan plastik, jasa plastik Indonesia, biji plastik murah, penggilingan plastik, limbah plastik, pabrik plastik"
>>>>>>> 7f91838 (new layout)
=======
          content="mp. plast, termurah, proses biji plastik, daur ulang plastik, pengolahan plastik, jasa plastik Indonesia, biji plastik murah, penggilingan plastik, limbah plastik, pabrik plastik"
>>>>>>> d0d54ba (about page, gallery and 404 redirect)
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://jasaprosesbijiplastik.biz.id/" />

        {/* Open Graph for Social Media Preview */}
        <meta property="og:title" content="Jasa Proses Biji Plastik" />
        <meta
          property="og:description"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          content="MP PLAST menyediakan layanan pengolahan dan daur ulang biji plastik terbaik dan termurah. Dapatkan hasil berkualitas dengan teknologi modern."
=======
          content="Layanan pengolahan dan daur ulang biji plastik terbaik. Dapatkan hasil berkualitas dengan teknologi modern."
>>>>>>> 7f91838 (new layout)
=======
          content="Layanan pengolahan dan daur ulang biji plastik terbaik dan termurah. Dapatkan hasil berkualitas dengan teknologi modern."
>>>>>>> d0d54ba (about page, gallery and 404 redirect)
=======
          content="MP PLAST menyediakan layanan pengolahan dan daur ulang biji plastik terbaik dan termurah. Dapatkan hasil berkualitas dengan teknologi modern."
>>>>>>> 03e2837 (Logo and MP.PLAST Fokus)
        />
        <meta property="og:url" content="https://jasaprosesbijiplastik.biz.id/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://jasaprosesbijiplastik.biz.id/assets/1-Bt62zgc6.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jasa Proses Biji Plastik" />
        <meta
          name="twitter:description"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          content="MP. PLAST menyediakan layanan pengolahan dan daur ulang biji plastik berkualitas dan termurah di Indonesia. Proses cepat, hasil unggulan."
=======
          content="Daur ulang biji plastik berkualitas di Indonesia. Proses cepat, hasil unggulan."
>>>>>>> 7f91838 (new layout)
=======
          content="Daur ulang biji plastik berkualitas dan termurah di Indonesia. Proses cepat, hasil unggulan."
>>>>>>> d0d54ba (about page, gallery and 404 redirect)
=======
          content="MP. PLAST menyediakan layanan pengolahan dan daur ulang biji plastik berkualitas dan termurah di Indonesia. Proses cepat, hasil unggulan."
>>>>>>> 03e2837 (Logo and MP.PLAST Fokus)
        />
        <meta name="twitter:image" content="https://jasaprosesbijiplastik.biz.id/assets/1-Bt62zgc6.jpg" />

        {/* Language and Charset */}
        <meta charSet="utf-8" />
        <html lang="id" />
      </Helmet>
<<<<<<< HEAD
      <Header />
      <BackTop />
      <Hero />
      
      <div className="relative flex flex-col md:flex-row items-center md:items-stretch gap-y-10 justify-center md:gap-10 mt-10 mb-10">
        
      <RevealOnScroll delay={0}>
        {/* TikTok Embed Container */}
        <div className="relative mx-5 justify-center items-center h-full text-center md:mb-0 z-10 bg-white/90 dark:bg-black/90 border border-gray-300 dark:border-gray-700 shadow-2xl rounded-2xl w-[80dvw] max-w-md overflow-hidden">
            <blockquote
              className="tiktok-embed w-full h-full flex items-center justify-center"
              cite="https://www.tiktok.com/@mp.plast_21"
              data-unique-id="mp.plast_21"
              data-embed-from="embed_page"
              data-embed-type="creator"
            >
              <section className="p-2 w-full h-full flex items-center justify-center">
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@mp.plast_21?refer=creator_embed"
                  className="text-blue-600 hover:underline"
                >
                  @mp.plast_21
                </a>
              </section>
            </blockquote>
          </div>
          </RevealOnScroll>

          {/* TikTok script */}
          <script async src="https://www.tiktok.com/embed.js"></script>
        <RevealOnScroll delay={0.1}>
          <Who />
        </RevealOnScroll>
        </div>

      <RevealOnScroll delay={0.2}>
        <TickerGallery />
      </RevealOnScroll>
=======
      <Header />
      <BackTop />
      <Hero />
      <Compare />
      <PictureSect />
      <LocationGallery />
>>>>>>> dde4f7d (Router)
=======
      <Header />
      <BackTop />
      <Hero />
      
      <div className="relative grid grid-cols-1 md:flex justify-center md:gap-10 mt-10 mb-10">
        
      <RevealOnScroll delay={0}>
        {/* TikTok Embed Container */}
        <div className="relative mb-10 mx-5 md:mb-0 z-10 bg-white/90 dark:bg-black/90 border border-gray-300 dark:border-gray-700 shadow-2xl rounded-2xl w-[90dvw] max-w-md overflow-hidden">
            <blockquote
              className="tiktok-embed w-full"
              cite="https://www.tiktok.com/@mp.plast_21"
              data-unique-id="mp.plast_21"
              data-embed-from="embed_page"
              data-embed-type="creator"
            >
              <section className="p-2">
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@mp.plast_21?refer=creator_embed"
                  className="text-blue-600 hover:underline"
                >
                  @mp.plast_21
                </a>
              </section>
            </blockquote>
          </div>
          </RevealOnScroll>

          {/* TikTok script */}
          <script async src="https://www.tiktok.com/embed.js"></script>
        <RevealOnScroll delay={0.1}>
          <Who />
        </RevealOnScroll>
        </div>

      <RevealOnScroll delay={0.2}>
        <TickerGallery />
      </RevealOnScroll>
>>>>>>> 7f91838 (new layout)
      <Footer />
    </>
  );
}

export default Home;
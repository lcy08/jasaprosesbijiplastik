import Header from '/src/components/Layout/Header';
import Hero from './components/Hero';
import Who from './components/Who';
import TickerGallery from './components/TickerGallery';
import Footer from '/src/components/Layout/Footer';
import BackTop from '../Layout/BackTop'
import { Helmet } from 'react-helmet-async';
import '/src/index.css';
import RevealOnScroll from '../Layout/RevealOnScroll';

function Home() {
  return(
    <>
      <Helmet>
        {/* Title & Description */}
        <title>Jasa Proses Biji Plastik | Pengolahan Plastik Berkualitas</title>
        <meta
          name="description"
          content="Kami menyediakan layanan proses biji plastik terbaik di Indonesia. Daur ulang dan pengolahan plastik dengan teknologi modern dan hasil berkualitas."
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="mp. plast, proses biji plastik, daur ulang plastik, pengolahan plastik, jasa plastik Indonesia, biji plastik murah, penggilingan plastik, limbah plastik, pabrik plastik"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://jasaprosesbijiplastik.biz.id/" />

        {/* Open Graph for Social Media Preview */}
        <meta property="og:title" content="Jasa Proses Biji Plastik" />
        <meta
          property="og:description"
          content="Layanan pengolahan dan daur ulang biji plastik terbaik. Dapatkan hasil berkualitas dengan teknologi modern."
        />
        <meta property="og:url" content="https://jasaprosesbijiplastik.biz.id/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://jasaprosesbijiplastik.biz.id/assets/1-Bt62zgc6.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jasa Proses Biji Plastik" />
        <meta
          name="twitter:description"
          content="Daur ulang biji plastik berkualitas di Indonesia. Proses cepat, hasil unggulan."
        />
        <meta name="twitter:image" content="https://jasaprosesbijiplastik.biz.id/assets/1-Bt62zgc6.jpg" />

        {/* Language and Charset */}
        <meta charSet="utf-8" />
        <html lang="id" />
      </Helmet>
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
        <RevealOnScroll delay={0.2}>
          <Who />
        </RevealOnScroll>
        </div>

      <RevealOnScroll delay={0.4}>
        <TickerGallery />
      </RevealOnScroll>
      <Footer />
    </>
  );
}

export default Home;
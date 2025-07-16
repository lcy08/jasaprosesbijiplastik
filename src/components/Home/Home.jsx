import Header from '/src/components/Layout/Header';
import Hero from './components/Hero';
import Compare from './components/Compare';
import PictureSect from './components/PictureSect';
import LocationGallery from './components/LocationGallery';
import Footer from '/src/components/Layout/Footer';
import BackTop from '../Layout/BackTop'
import '/src/index.css';

function Home() {
  return(
    <>
      <Header />
      <BackTop />
      <Hero />
      <Compare />
      <PictureSect />
      <LocationGallery />
      <Footer />
    </>
  );
}

export default Home;
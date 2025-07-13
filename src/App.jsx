import Header from './components/Header';
import Hero from './components/Hero';
import Compare from './components/Compare';
import PictureSect from './components/PictureSect';
import Footer from './components/Footer';
import './index.css';

function App() {
  return(
    <>
      <Header />
      <Hero />
      <Compare />
      <PictureSect />
      
      {/* Products section */}
      <section className="min-h-screen bg-[#fdfbd4] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium selection of products designed for your adventures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-48 flex items-center justify-center">
                <span className="text-white text-5xl font-bold">PE</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">PE Package</h3>
                <p className="text-gray-600 mb-4">
                  Premium package with all essential features for beginners
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">105 /pc</span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                    Buy
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-teal-400 to-green-500 h-48 flex items-center justify-center">
                <span className="text-white text-5xl font-bold">PP</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">PP Package</h3>
                <p className="text-gray-600 mb-4">
                  Professional package with advanced features for enthusiasts
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">305 /pc</span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                    Buy
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-48 flex items-center justify-center">
                <span className="text-white text-5xl font-bold">PS</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">PS Package</h3>
                <p className="text-gray-600 mb-4">
                  Premium selection package with all exclusive features
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">100$ /pc</span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}

export default App;
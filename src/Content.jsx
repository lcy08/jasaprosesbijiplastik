import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function Content() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="content">
      <hr className="my-6" />
      <h1>Welcome to Jasa Proses Biji Plastik</h1>
      <p>Your one-stop solution for plastic pellet processing.</p>
      <p>Contact us for more information!</p>
      <hr className="my-6" />
      <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <p className="text-gray-700 mb-2">We specialize in high-quality plastic pellet processing.</p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Custom processing solutions</li>
          <li>Quality assurance</li>
          <li>Fast turnaround times</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-2">For inquiries, please reach out to us:</p>
        <ul className="list-none pl-0 text-gray-600">
          <li>Email: <a href="mailto:lucky.feliyanto@gmail.com" className="text-blue-600 hover:underline"> email us</a></li>
          <li>Phone: <a href="tel:+6281234567890" className="text-blue-600 hover:underline">+62 812-3456-7890</a></li>
          <li>Address: Jl. Contoh No. 123, Jakarta, Indonesia</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6" data-aos="fade-up" data-aos-delay="220">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 mb-2">We are a leading provider of plastic pellet processing services, dedicated to delivering high-quality solutions tailored to our clients' needs.</p>
        <p className="text-gray-700">With years of experience in the industry, we pride ourselves on our commitment to quality, efficiency, and customer satisfaction.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6" data-aos="fade-up" data-aos-delay="240">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <p className="text-gray-700 mb-2">"Jasa Proses Biji Plastik has transformed our production process. Their quality and service are unmatched!"</p>
        <p className="text-gray-700">- Happy Customer</p> 
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6" data-aos="fade-up" data-aos-delay="260">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-700 mb-2">Q: What types of plastic pellets do you process?</p>
        <p className="text-gray-700 mb-2">A: We process a wide range of plastic pellets, including but not limited to polyethylene, polypropylene, and polystyrene.</p>
        <p className="text-gray-700 mb-2">Q: What is your turnaround time for processing?</p>
        <p className="text-gray-700">A: Our standard turnaround time is typically 5-7 business days, depending on the volume and complexity of the order.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6" data-aos="fade-up" data-aos-delay="280">
        <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
        <p className="text-gray-700 mb-2">We are excited to announce the launch of our new processing facility, which will enhance our capacity and efficiency in delivering top-notch plastic pellet processing services.</p>
        <p className="text-gray-700">Stay tuned for more updates and innovations in our services!</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6" data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <p className="text-gray-700 mb-2">Stay connected with us on social media for the latest updates and news:</p>
        <ul className="list-none pl-0 text-gray-600">
          <li><a href="https://www.facebook.com" className="text-blue-600 hover:underline">Facebook</a></li>
          <li><a href="https://www.twitter.com" className="text-blue-600 hover:underline">Twitter</a></li>
          <li><a href="https://www.instagram.com" className="text-blue-600 hover:underline">Instagram</a></li>
        </ul>
      </div>

    </div>
  );

}
export default Content;
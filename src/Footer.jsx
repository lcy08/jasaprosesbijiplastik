function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-200 via-violet-400 to-indigo-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Jasa Proses Biji Plastik. All rights reserved.</p>
        <p>Follow us on 
          <a href="https://www.facebook.com" className="text-blue-900"> Facebook</a>,
          <a href="https://www.twitter.com" className="text-blue-900"> Twitter</a>, and
          <a href="https://www.instagram.com" className="text-blue-900"> Instagram</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
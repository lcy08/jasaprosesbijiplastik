function Footer() {
  return (
    <footer className="bg-background text-white py-4 mx-9 rounded-t-2xl">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Jasa Proses Biji Plastik. All rights reserved.</p>
        <p>Follow us on
          <a href="https://www.facebook.com" className="text-accent"> Facebook</a>,
          <a href="https://www.twitter.com" className="text-accent"> Twitter</a>, and
          <a href="https://www.instagram.com" className="text-accent"> Instagram</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hamburger from './Header/Hamburger';
import NavItem from "./Header/NavItem";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef(null);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen((open) => !open);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) return;
            if (window.scrollY === 0) {
                headerRef.current.classList.remove('opacity-80');
            } else {
                headerRef.current.classList.add('opacity-80');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header ref={headerRef} className="sticky top-3 z-50 transition-opacity duration-300">
            <section className="bg-background mx-3 md:mx-9 p-2 md:py-1 md:px-4 rounded-2xl flex flex-row items-start gap-2 md:gap-6">
                {/* Brand/Logo on the left */}
                <div className="flex-none order-0 md:mr-4">
                  <span className="inline-flex items-center justify-center bg-white/90 rounded-lg p-1 md:p-2 shadow-sm">
                    <img
                      src="https://placehold.co/40x40/222/fff?text=JP"
                      alt="Jasa Proses Biji Plastik Logo"
                      className="h-8 w-8 md:h-10 md:w-10 object-contain"
                    />
                  </span>
                </div>
                <div className=" hidden md:flex-1 md:flex md:items-center md:justify-start">
                  {/* Empty for spacing, keeps nav centered on desktop */}
                </div>
                {/* Hamburger: in-bar on all screens */}
                <div className="flex flex-none order-2 md:order-none ml-auto md:ml-0">
                  <Hamburger toggle={toggleMenu} isMenuOpen={isMenuOpen} />
                </div>
                <nav
                  aria-label="Main navigation"
                  className="w-full md:w-auto"
                >
                  <div
                    className={`items-center justify-start md:justify-center w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out overflow-hidden
                     ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'}`}
                    id="navbar"
                    aria-expanded={isMenuOpen}
                  >
                    <ul className={`divide-y divide-background flex flex-col justify-end md:p-0 mb-3 rounded-lg bg-jungle-green-100 md:bg-transparent border border-blue-200 md:border-0 shadow-md md:shadow-none md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-2 md:mb-0 transition-all duration-700 ${isMenuOpen ? 'translate-y-0' : 'translate-y-[-10px] md:translate-y-0'}`}>
                      <NavItem link="/" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>Home</NavItem>
                      <NavItem link="/about" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/about' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>About</NavItem>
                      <NavItem link="/pricing" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/pricing' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>Pricing</NavItem>
                      <NavItem link="/faq" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/faq' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>FAQ</NavItem>
                      <NavItem link="/contact" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/contact' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>Contact</NavItem>
                    </ul>
                  </div>
                </nav>
            </section>
        </header>
    );
}

export default Header
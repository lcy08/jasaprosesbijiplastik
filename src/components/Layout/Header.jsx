import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hamburger from './Header/Hamburger';
import NavItem from "./Header/NavItem";
import logo from '../../assets/logo.jpg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const lastScrollY = useRef(window.scrollY);
    const headerRef = useRef(null);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen((open) => !open);
    };

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!headerRef.current) return;

            const currentY = window.scrollY;
            // Only apply on mobile (md: < 768px)
            if (window.innerWidth >= 768) {
                setShowHeader(true);
                setIsAtTop(currentY === 0);
                return;
            }

            if (isMenuOpen) return;

            if (currentY > lastScrollY.current && currentY > 40) {
                // Scrolling down
                setShowHeader(false);
            } else {
                // Scrolling up
                setShowHeader(true);
            }
            lastScrollY.current = currentY;
        };
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [isMenuOpen]);

    return (
        <header
            ref={headerRef}
            className={`sticky top-3 z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-[calc(100%+10%)]'} md:translate-y-0 ${isAtTop ? 'opacity-100' : 'opacity-80'}`}
            style={{ willChange: 'transform' }}
        >
            <section className="bg-background mx-3 md:mx-9 p-2 md:py-1 md:px-4 rounded-2xl flex flex-row items-start gap-2 md:gap-6">
                {/* Brand/Logo on the left */}
                <div className="flex-none order-0 md:mr-4">
                  <span className="inline-flex items-center justify-center bg-white/90 rounded-lg p-1 md:p-1.5 shadow-sm">
                    <img
                      src={logo}
                      alt="Jasa Proses Biji Plastik Logo"
                      className="h-8 w-8 md:h-10 md:w-10 object-contain"
                      loading="lazy"
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
                    className={`items-center justify-start md:justify-center md:mr-8 w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out overflow-hidden
                     ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'}`}
                    id="navbar"
                    aria-expanded={isMenuOpen}
                  >
                    <ul className={`divide-y divide-background flex flex-col justify-end md:p-0 mb-3 rounded-lg bg-jungle-green-100 md:bg-transparent border border-blue-200 md:border-0 shadow-md md:shadow-none md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-2 md:mb-0 transition-[max-height,opacity] duration-500 ease-in-out md:translate-y-0`}>
                      <NavItem link="/" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>Home</NavItem>
                      <NavItem link="/about" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/about' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>About</NavItem>
                      <NavItem link="/gallery" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/gallery' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>Gallery</NavItem>
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
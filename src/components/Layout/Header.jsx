import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hamburger from './Header/Hamburger';
import NavItem from "./Header/NavItem";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import logo from '../../assets/logo.png';
=======
import logo from '../../assets/logo.jpg';
>>>>>>> 7f91838 (new layout)
=======
import logo from '../../assets/logo.png';
>>>>>>> 6f69def (logo)

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const lastScrollY = useRef(window.scrollY);
<<<<<<< HEAD
=======

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
>>>>>>> dde4f7d (Router)
=======
>>>>>>> 9c3a46b (back top button)
    const headerRef = useRef(null);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen((open) => !open);
    };

    useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
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
            <section className="bg-background mx-3 md:mx-9 p-2 md:py-1 md:px-4 rounded-2xl flex flex-row items-center gap-2 md:gap-6">
                {/* Brand/Logo on the left */}
                <div className="flex text-start items-center justify-start order-0 md:mr-4">
                    <img
                      src={logo}
                      alt="Jasa Proses Biji Plastik Logo"
                      className="h-12 w-12 object-cover size-30 bg-white/80 rounded-xl"
                      fetchPriority="high"
                    />
                    <p className="font-semibold font-poppins text-2xl md:text-4xl ml-2 md:ml-3 mx-0 text-white">
                      MP. PLAST
                    </p>
                </div>
                <div className=" hidden md:flex-1 md:flex md:items-center md:justify-start">
=======
=======
        let ticking = false;
>>>>>>> 9c3a46b (back top button)
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
<<<<<<< HEAD
                <div className="flex-1 flex items-center justify-center md:justify-start">
>>>>>>> dde4f7d (Router)
=======
                <div className=" hidden md:flex-1 md:flex md:items-center md:justify-start">
>>>>>>> dbc3f0b (del services, add faq and pricing)
                  {/* Empty for spacing, keeps nav centered on desktop */}
                </div>
                {/* Hamburger: in-bar on all screens */}
                <div className="flex flex-none order-2 md:order-none ml-auto md:ml-0">
                  <Hamburger toggle={toggleMenu} isMenuOpen={isMenuOpen} />
                </div>
                <nav
                  aria-label="Main navigation"
<<<<<<< HEAD
<<<<<<< HEAD
                  className="w-full md:w-auto"
                >
                  <div
                    className={`items-center justify-start md:justify-center md:mr-8 w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out overflow-hidden
=======
                  className="flex-1 w-full md:w-auto"
                >
                  <div
                    className={`items-center justify-between md:justify-center w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out overflow-hidden
>>>>>>> dde4f7d (Router)
=======
                  className="w-full md:w-auto"
                >
                  <div
<<<<<<< HEAD
                    className={`items-center justify-start md:justify-center w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out overflow-hidden
>>>>>>> dbc3f0b (del services, add faq and pricing)
=======
                    className={`items-center justify-start md:justify-center md:mr-8 w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out overflow-hidden
>>>>>>> 7ea7f57 (loading lazy)
                     ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'}`}
                    id="navbar"
                    aria-expanded={isMenuOpen}
                  >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    <ul className={`divide-y divide-background flex flex-col justify-end md:p-0 mb-3 rounded-lg bg-jungle-green-100 md:bg-transparent border border-blue-200 md:border-0 shadow-md md:shadow-none md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-2 md:mb-0 transition-[max-height,opacity] duration-500 ease-in-out md:translate-y-0`}>
                      <NavItem link="/" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>Home</NavItem>
                      <NavItem link="/about" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/about' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>About</NavItem>
                      <NavItem link="/gallery" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/gallery' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>Gallery</NavItem>
<<<<<<< HEAD
                      <NavItem link="/faq" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/faq' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>FAQ</NavItem>
=======
                    <ul className={`divide-y divide-background flex flex-col justify-end md:p-0 mt-4 rounded-lg bg-jungle-green-100 md:bg-transparent border border-blue-200 md:border-0 shadow-md md:shadow-none md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 transition-all duration-700 ${isMenuOpen ? 'translate-y-0' : 'translate-y-[-10px] md:translate-y-0'}`}>
                      <NavItem link="/" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>Home</NavItem>
                      <NavItem link="/about" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/about' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>About</NavItem>
                      <NavItem link="/services" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/services' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>Services</NavItem>
>>>>>>> dde4f7d (Router)
=======
                    <ul className={`divide-y divide-background flex flex-col justify-end md:p-0 mb-3 rounded-lg bg-jungle-green-100 md:bg-transparent border border-blue-200 md:border-0 shadow-md md:shadow-none md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-2 md:mb-0 transition-all duration-700 ${isMenuOpen ? 'translate-y-0' : 'translate-y-[-10px] md:translate-y-0'}`}>
=======
                    <ul className={`divide-y divide-background flex flex-col justify-end md:p-0 mb-3 rounded-lg bg-jungle-green-100 md:bg-transparent border border-blue-200 md:border-0 shadow-md md:shadow-none md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-2 md:mb-0 transition-[max-height,opacity] duration-500 ease-in-out md:translate-y-0`}>
>>>>>>> 9c3a46b (back top button)
                      <NavItem link="/" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>Home</NavItem>
                      <NavItem link="/about" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/about' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>About</NavItem>
                      <NavItem link="/pricing" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/pricing' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>Pricing</NavItem>
=======
>>>>>>> 7f91838 (new layout)
                      <NavItem link="/faq" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/faq' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>FAQ</NavItem>
>>>>>>> dbc3f0b (del services, add faq and pricing)
                      <NavItem link="/contact" className={`text-lg rounded-md transition-colors px-3 py-2${location.pathname === '/contact' ? ' text-white md:text-jungle-green-900 bg-jungle-green-400 md:bg-jungle-green-300 font-semibold underline underline-offset-4' : ' text-text md:text-jungle-green-100 hover:bg-jungle-green-100 md:hover:bg-jungle-green-200'}`}>Contact</NavItem>
                    </ul>
                  </div>
                </nav>
            </section>
        </header>
    );
}

export default Header
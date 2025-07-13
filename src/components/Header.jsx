import { useState, useEffect } from 'react';
import Hamburger from './Header/Hamburger';
import NavItem from "./Header/NavItem";

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                document.querySelector('header').classList.remove('opacity-80');
            }
            else if (window.scrollY > 0) document.querySelector('header').classList.add('opacity-80');
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <header className="sticky top-3 z-50">
            <section className=" bg-background m-9 p-3 rounded-2xl">
                <Hamburger toggle={toggleMenu} isMenuOpen={isMenuOpen}/>
                <div className={`items-center justify-between md:justify-center w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out overflow-hidden
                     ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'}`} id="navbar">
                    <ul className={`divide-y divide-background flex flex-col justify-end md:p-0 mt-4 rounded-lg bg-jungle-green-100 md:bg-transparent border border-blue-200 md:border-0 shadow-md md:shadow-none md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 transition-all duration-700 ${isMenuOpen ? 'translate-y-0' : 'translate-y-[-10px] md:translate-y-0'}`}>
                        <NavItem href="/" className="text-lg">Home</NavItem>
                        <NavItem href="/about" className="text-lg">About</NavItem>
                        <NavItem href="/services" className="text-lg">Services</NavItem>
                        <NavItem href="/contact" className="text-lg">Contact</NavItem>
                    </ul>
                </div>
            </section>
        </header>
    );
}

export default Header
import { useState } from 'react';
import NavItem from "./Header/NavItem";

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <header className="sticky top-3 z-10">
            <section className=" bg-background m-9 p-3 rounded-2xl">
                <div className="flex justify-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse transition-transform duration-100">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden
                       hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300
                       transition-all duration-300 transform ${isMenuOpen ? 'rotate-180' : ''}`}
                        aria-controls="navbar"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? (
                        // Close icon (X)
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        ) : (
                        // Hamburger icon
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                        )}
                    </button>
                </div>
                <div className={`items-center justify-between md:justify-center w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out overflow-hidden
                     ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'}`} id="navbar">
                    <ul className={`flex flex-col justify-end md:p-0 mt-4 rounded-lg bg-yellow-100 md:bg-transparent border border-blue-200 md:border-0 shadow-md md:shadow-none md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 transition-all duration-700 ${isMenuOpen ? 'translate-y-0' : 'translate-y-[-10px] md:translate-y-0'}`}>
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
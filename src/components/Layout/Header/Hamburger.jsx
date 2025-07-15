
function Hamburger(props){
    return(
        <div className="flex justify-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse transition-transform duration-100">
            <button
                onClick={props.toggle}
                type="button"
                className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-jungle-green-100
                hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300
                transition-all duration-300 transform ${props.isMenuOpen ? 'rotate-180' : ''}`}
                aria-controls="navbar"
                aria-expanded={props.isMenuOpen}
            >
                <span className="sr-only">Open main menu</span>
                {props.isMenuOpen ? (
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
    )
}
export default Hamburger
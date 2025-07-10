function Header(){
    return(
        <header className="bg-gradient-to-t from-purple-200 via-violet-400 to-indigo-600 text-white text-center pt-6 pb-3">
            <h1 className="text-3xl font-bold">Jasa Proses Biji Plastik</h1>
            <p className="text-lg text-gray-300 mb-3">Spesialis dalam pengolahan biji plastik berkualitas tinggi</p>
            <hr></hr>
            <nav>
                <ul className="flex justify-center space-x-4 mt-1">
                    <li>
                    <a className="text-orange-800 hover:text-orange-300" href="#home">Home</a>
                    </li>
                    <li>
                    <a className="text-orange-800 hover:text-orange-300" href="#about">Tentang</a>
                    </li>
                    <li>
                    <a className="text-orange-800 hover:text-orange-300" href="#services">Services</a>
                    </li>
                    <li>
                    <a className="text-orange-800 hover:text-orange-300" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header
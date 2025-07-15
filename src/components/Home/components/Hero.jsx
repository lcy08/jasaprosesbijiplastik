
function Hero(){
    return (
        <>
            <div className="mt-8 md:mt-12" />
            <section className="flex flex-col-reverse overflow-hidden bg-green-100 sm:grid sm:grid-cols-2 sm:items-center font-playfair">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold text-jungle-green-900 md:text-4xl mb-2">
                        Solusi Pengolahan <span className="bg-green-800 text-green-100 px-2 rounded">Biji Plastik</span> Terpercaya
                    </h1>
                    <p className="text-gray-600 md:mt-4 md:block text-base md:text-lg">
                        Daur ulang plastik industri dengan teknologi modern, hasil berkualitas, dan layanan profesional untuk kebutuhan bisnis Anda.
                    </p>
                    <div className="mt-6 md:mt-10">
                        <a
                          href="/services"
                          className="inline-block rounded-xl bg-green-800 px-10 py-3 text-base font-semibold text-white shadow-lg hover:bg-green-900 hover:scale-105 transition focus:ring-4 focus:ring-green-300 focus:outline-none"
                        >
                          Lihat Layanan
                        </a>
                    </div>
                </div>
            </div>

            <img
                alt="Pabrik pengolahan biji plastik dengan mesin modern"
                src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                loading="lazy"
            />
        </section>
        </>
    );
}

export default Hero;
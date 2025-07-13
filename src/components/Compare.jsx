import Product from './Compare/Product'

function Compare(){
    return(
        <div className="mt-10 min-h-[50vh] bg-[#fdfbd4] items-center m-auto justify-items-center">
            <h2 className="font-playfair font-bold text-3xl">Produk Unggulan Kami</h2>
            <div className="max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 ">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:items-stretch md:gap-8">
                    <div className="w-full max-w-sm mx-auto">
                        <Product    title='PE'
                                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                                price='10$'
                                good={['10 Users',
                                    '2GB of storage',
                                    'Email support']}
                                bad={['Help center access',
                                    'Phone support',
                                    'Community access']}/>
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <Product    title='PP'
                                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                                price='30$'
                                good={['20 users',
                                        '5GB of storage',
                                        'Email support',
                                        'Help center access']}
                                bad={['Phone support', 'Community access']}/>
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <Product    title='PS'
                                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                                price='100$'
                                good={['50 users',
                                        '20GB of storage',
                                        'Email support',
                                        'Help center access',
                                        'Phone support',
                                        'Community access']}
                                bad={[]}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Compare;
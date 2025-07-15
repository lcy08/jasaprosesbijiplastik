

function Product(props) {
    return (
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs h-full flex flex-col">
            <div className="p-6 sm:px-8 bg-amber-50 flex-1 flex flex-col">
                <h2 className="text-lg font-medium text-gray-900">
                    {props.title}
                    <span className="sr-only">Plastic</span>
                </h2>
                <p className="mt-2 text-gray-700 flex-1 min-h-[6rem]">{props.desc}</p>
            </div>
            <div className="p-6 sm:px-8 bg-green-100 flex flex-col justify-end min-h-[160px]">
                <p className="text-lg font-medium text-gray-900 sm:text-xl mb-2">Fitur Utama:</p>
                <ul className="mt-2 space-y-2 sm:mt-4 min-h-[10rem]">
                    {props.features && props.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-green-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Product;
import QualityGood from "./QualityGood.jsx";
import QualityBad from "./QualityBad.jsx"

function Product (props){
    return(
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
            <div className="p-6 sm:px-8 bg-amber-50">
                <h2 className="text-lg font-medium text-gray-900">
                {props.title}
                <span className="sr-only">Plastic</span>
                </h2>

                <p className="mt-2 text-gray-700">{props.desc}</p>

                <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> {props.price} </strong>

                <span className="text-sm font-medium text-gray-700">/pc</span>
                </p>

                <a
                className="mt-4 block rounded-sm border border-green-400 bg-green-300 px-12 py-3 text-center text-sm font-medium text-green-950 hover:bg-transparent hover:text-green-400 focus:ring-3 focus:outline-hidden sm:mt-6"
                href="#"
                >
                Buy
                </a>
            </div>

            <div className="p-6 sm:px-8 bg-jungle-green-100">
                <p className="text-lg font-medium text-gray-900 sm:text-xl">Qualities:</p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                    {props.good.map((quality, index) => (
                        <QualityGood key={index} text={quality}/>
                    ))}
                    {props.bad.map((quality, index) => (
                        <QualityBad key={index} text={quality}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Product;
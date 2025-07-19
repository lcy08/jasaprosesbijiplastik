function Item ({ title, description, icon }) {
  return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
            </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">
            {description}
            </p>
        </div>
  );
}
export default Item;